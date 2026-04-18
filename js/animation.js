// ==========================================
// DERPY BIRDS - Fly-to-Tree Animation
// ==========================================

function flyToTree(callback) {
    if (STATE.placedPieces.length === 0 || STATE.isAnimating) return;

    STATE.isAnimating = true;
    var buildZone = document.getElementById('build-zone');
    var buildRect = buildZone.getBoundingClientRect();

    var perch = null;
    for (var i = 0; i < PERCH_SPOTS.length; i++) {
        if (!PERCH_SPOTS[i].taken) {
            perch = PERCH_SPOTS[i];
            perch.taken = true;
            break;
        }
    }
    if (!perch) {
        perch = PERCH_SPOTS[0];
    }

    // Use getBoundingClientRect since Moveable manages transforms
    var minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    STATE.placedPieces.forEach(function(p) {
        var r = p.getBoundingClientRect();
        var x = r.left - buildRect.left;
        var y = r.top - buildRect.top;
        if (x < minX) minX = x;
        if (y < minY) minY = y;
        if (x + r.width > maxX) maxX = x + r.width;
        if (y + r.height > maxY) maxY = y + r.height;
    });

    var groupW = maxX - minX;
    var groupH = maxY - minY;

    var flyer = document.createElement('div');
    flyer.className = 'flying-group';
    flyer.style.width = groupW + 'px';
    flyer.style.height = groupH + 'px';

    // Clone pieces into flyer preserving their visual transforms
    STATE.placedPieces.forEach(function(p) {
        var r = p.getBoundingClientRect();
        var clone = p.cloneNode(true);
        clone.style.position = 'absolute';
        clone.style.left = (r.left - buildRect.left - minX) + 'px';
        clone.style.top = (r.top - buildRect.top - minY) + 'px';
        clone.style.width = r.width + 'px';
        clone.style.height = r.height + 'px';
        clone.style.transform = '';
        flyer.appendChild(clone);
    });

    // Remove originals from build zone
    STATE.placedPieces.forEach(function(p) {
        if (p.parentNode) p.parentNode.removeChild(p);
    });

    document.body.appendChild(flyer);

    var startX = buildRect.left + minX;
    var startY = buildRect.top + minY;
    flyer.style.left = startX + 'px';
    flyer.style.top = startY + 'px';

    var sceneSvg = document.getElementById('scene-svg');
    var sceneRect = sceneSvg.getBoundingClientRect();
    var scaleX = sceneRect.width / 1200;
    var scaleY = sceneRect.height / 400;
    var targetX = sceneRect.left + perch.x * scaleX - groupW * 0.2;
    var targetY = sceneRect.top + perch.y * scaleY - groupH * 0.2;

    var duration = 1500;
    var startTime = null;
    var finalScale = 0.35;

    function animate(timestamp) {
        if (!startTime) startTime = timestamp;
        var elapsed = timestamp - startTime;
        var t = Math.min(elapsed / duration, 1);

        var ease = 1 - Math.pow(1 - t, 3);

        var curX = startX + (targetX - startX) * ease;
        var curY = startY + (targetY - startY) * ease;
        var scale = 1 + (finalScale - 1) * ease;
        var wobble = Math.sin(t * Math.PI * 6) * (1 - t) * 8;

        flyer.style.left = curX + 'px';
        flyer.style.top = curY + 'px';
        flyer.style.transform = 'scale(' + scale + ') rotate(' + wobble + 'deg)';

        if (t < 1) {
            requestAnimationFrame(animate);
        } else {
            addPerchedBird(perch, flyer, groupW, groupH);
            flyer.remove();
            STATE.isAnimating = false;
            if (callback) callback();
        }
    }

    requestAnimationFrame(animate);
}

function addPerchedBird(perch, flyer, groupW, groupH) {
    var sceneSvg = document.getElementById('scene-svg');
    var scale = 0.35;

    var fo = svgEl('foreignObject', {
        x: perch.x - groupW * scale / 2,
        y: perch.y - groupH * scale / 2,
        width: groupW * scale + 10,
        height: groupH * scale + 10
    });
    fo.classList.add('perched-bird');

    var container = document.createElement('div');
    container.style.position = 'relative';
    container.style.width = groupW + 'px';
    container.style.height = groupH + 'px';
    container.style.transform = 'scale(' + scale + ')';
    container.style.transformOrigin = 'top left';

    var pieces = flyer.querySelectorAll('.placed-piece');
    pieces.forEach(function(p) {
        var clone = p.cloneNode(true);
        clone.style.cursor = 'default';
        container.appendChild(clone);
    });

    fo.appendChild(container);
    sceneSvg.appendChild(fo);

    COMPLETED_BIRDS.push({
        perch: perch,
        element: fo,
        birdId: STATE.currentBird
    });
}
