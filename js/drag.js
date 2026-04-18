// ==========================================
// DERPY BIRDS - Drag, Rotate & Scale (Moveable)
// ==========================================

var moveable = null;

function initDragDrop() {
    var buildZone = document.getElementById('build-zone');

    moveable = new Moveable(buildZone, {
        target: null,
        container: buildZone,
        draggable: true,
        rotatable: true,
        scalable: true,
        keepRatio: true,
        renderDirections: ['nw', 'ne', 'sw', 'se'],
        origin: false,
        throttleDrag: 0,
        throttleRotate: 0,
        throttleScale: 0
    });

    moveable.on('drag', function(e) {
        e.target.style.transform = e.transform;
    });

    moveable.on('rotate', function(e) {
        e.target.style.transform = e.transform;
    });

    moveable.on('scale', function(e) {
        e.target.style.transform = e.transform;
    });

    // Click palette items to spawn pieces
    document.getElementById('parts-list').addEventListener('pointerdown', function(e) {
        var item = e.target.closest('.part-item');
        if (!item || item.classList.contains('used') || STATE.isAnimating) return;
        e.preventDefault();

        var pieceId = item.dataset.pieceId;
        var piece = findPieceById(STATE.currentBird, pieceId);
        if (!piece) return;

        STATE.usedPieceIds.add(pieceId);
        item.classList.add('used');

        var rect = buildZone.getBoundingClientRect();
        var x = rect.width / 2 - piece.width / 2;
        var y = rect.height / 2 - piece.height / 2;

        var placed = createPlacedPiece(piece, x, y);
        placed.dataset.pieceData = JSON.stringify(piece);
        buildZone.appendChild(placed);
        STATE.placedPieces.push(placed);

        selectPiece(placed);
        updateDoneButton();
    });

    // Click in build zone to select/deselect pieces
    buildZone.addEventListener('pointerdown', function(e) {
        if (e.target.closest('.moveable-control-box')) return;

        var piece = e.target.closest('.placed-piece');
        if (piece) {
            e.preventDefault();
            selectPiece(piece);
        } else {
            deselectPiece();
        }
    });

    // Click outside build zone deselects (but not on Moveable controls or palette)
    document.addEventListener('pointerdown', function(e) {
        if (e.target.closest('#build-zone')) return;
        if (e.target.closest('.moveable-control-box')) return;
        if (e.target.closest('#parts-list')) return;
        if (e.target.closest('#btn-flip')) return;
        deselectPiece();
    });

    // Flip button
    document.getElementById('btn-flip').addEventListener('click', function() {
        flipSelected();
    });
}

function selectPiece(piece) {
    STATE.selectedPiece = piece;
    piece.style.zIndex = STATE.nextZ++;
    moveable.target = piece;

    document.getElementById('btn-flip').disabled = false;
}

function deselectPiece() {
    STATE.selectedPiece = null;
    moveable.target = null;
    document.getElementById('btn-flip').disabled = true;
}

function flipSelected() {
    var piece = STATE.selectedPiece;
    if (!piece) return;

    var svg = piece.querySelector('svg');
    if (!svg) return;

    if (svg.dataset.flipped === '1') {
        svg.style.transform = '';
        svg.dataset.flipped = '0';
    } else {
        svg.style.transform = 'scaleX(-1)';
        svg.dataset.flipped = '1';
    }

    moveable.updateRect();
}

function clearConstruction() {
    deselectPiece();
    var buildZone = document.getElementById('build-zone');

    STATE.placedPieces.forEach(function(p) {
        if (p.parentNode) p.parentNode.removeChild(p);
    });
    STATE.placedPieces = [];
    STATE.usedPieceIds.clear();
    STATE.nextZ = 10;

    renderPalette(STATE.currentBird);
    updateDoneButton();
}

function updateDoneButton() {
    var btn = document.getElementById('btn-done');
    btn.disabled = STATE.placedPieces.length === 0;
}
