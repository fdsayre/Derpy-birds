// ==========================================
// DERPY BIRDS - Fly-to-Tree Animation
// ==========================================

function flyToTree(callback) {
    if (STATE.placedPieces.length === 0 || STATE.isAnimating) return;

    STATE.isAnimating = true;
    var buildZone = document.getElementById('build-zone');
    var buildRect = buildZone.getBoundingClientRect();

    // Find an available perch spot
    var perch = null;
    for (var i = 0; i < PERCH_SPOTS.length; i++) {
        if (!PERCH_SPOTS[i].taken) {
            perch = PERCH_SPOTS[i];
            perch.taken = true;
            break;
        }
    }
    if (!perch) {
        // All spots taken, reuse first
        perch = PERCH_SPOTS[0];
    }

    // Calculate bounding box of all placed pieces
    var minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    STATE.placedPieces.forEach(function(p) {
        var x = parseFloat(p.style.left);
        var y = parseFloat(p.style.top);
        var w = p.offsetWidth;
        var h = p.offsetHeight;
        if (x < minX) minX = x;
        if (y < minY) minY = y;
        if (x + w > maxX) maxX = x + w;
        if (y + h > maxY) maxY = y + h;
    });

    var groupW = maxX - minX;
    var groupH = maxY - minY;

    // Create a flying container with all pieces
    var flyer = document.createElement('div');
    flyer.className = 'flying-group';
    flyer.style.width = groupW + 'px';
    flyer.style.height = groupH + 'px';

    // Move pieces into flyer, adjusting positions
    STATE.placedPieces.forEach(function(p) {
        var x = parseFloat(p.style.left) - minX;
        var y = parseFloat(p.style.top) - minY;
        p.style.left = x + 'px';
        p.style.top = y + 'px';
        p.classList.remove('dragging');
        flyer.appendChild(p);
    });

    document.body.appendChild(flyer);

    // Starting position (construction area coordinates to page coordinates)
    var startX = buildRect.left + minX;
    var startY = buildRect.top + minY;
    flyer.style.left = startX + 'px';
    flyer.style.top = startY + 'px';

    // Target position (scene coordinates)
    var sceneSvg = document.getElementById('scene-svg');
    var sceneRect = sceneSvg.getBoundingClientRect();
    var scaleX = sceneRect.width / 1200;
    var scaleY = sceneRect.height / 400;
    var targetX = sceneRect.left + perch.x * scaleX - groupW * 0.2;
    var targetY = sceneRect.top + perch.y * scaleY - groupH * 0.2;

    // Animate
    var duration = 1500;
    var startTime = null;
    var finalScale = 0.35;

    function animate(timestamp) {
        if (!startTime) startTime = timestamp;
        var elapsed = timestamp - startTime;
        var t = Math.min(elapsed / duration, 1);

        // Ease out cubic
        var ease = 1 - Math.pow(1 - t, 3);

        // Position interpolation
        var curX = startX + (targetX - startX) * ease;
        var curY = startY + (targetY - startY) * ease;

        // Scale interpolation
        var scale = 1 + (finalScale - 1) * ease;

        // Wobble for "flapping" effect
        var wobble = Math.sin(t * Math.PI * 6) * (1 - t) * 8;

        flyer.style.left = curX + 'px';
        flyer.style.top = curY + 'px';
        flyer.style.transform = 'scale(' + scale + ') rotate(' + wobble + 'deg)';

        if (t < 1) {
            requestAnimationFrame(animate);
        } else {
            // Animation complete - add bird to scene as perched
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

    // Create a foreignObject to embed the HTML pieces in SVG
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

    // Clone pieces from flyer
    var pieces = flyer.querySelectorAll('.placed-piece');
    pieces.forEach(function(p) {
        var clone = p.cloneNode(true);
        clone.classList.remove('dragging', 'selected');
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
