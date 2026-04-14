// ==========================================
// DERPY BIRDS - Drag & Drop System
// ==========================================

var dragState = {
    active: false,
    element: null,
    startX: 0,
    startY: 0,
    offsetX: 0,
    offsetY: 0,
    source: null  // 'palette' or 'placed'
};

function initDragDrop() {
    var buildZone = document.getElementById('build-zone');

    // Palette drag start
    document.getElementById('parts-list').addEventListener('pointerdown', function(e) {
        var item = e.target.closest('.part-item');
        if (!item || item.classList.contains('used') || STATE.isAnimating) return;

        e.preventDefault();
        var pieceId = item.dataset.pieceId;
        var pieces = getPiecesForOrientation(STATE.currentBird, STATE.currentOrientation);
        var piece = pieces.find(function(p) { return p.id === pieceId; });
        if (!piece) return;

        // Mark as used in palette
        STATE.usedPieceIds.add(pieceId);
        item.classList.add('used');

        // Create placed piece in construction area
        var rect = buildZone.getBoundingClientRect();
        var x = e.clientX - rect.left - piece.width / 2;
        var y = e.clientY - rect.top - piece.height / 2;

        var placed = createPlacedPiece(piece, x, y);
        placed.dataset.pieceData = JSON.stringify(piece);
        buildZone.appendChild(placed);
        STATE.placedPieces.push(placed);

        // Start dragging immediately
        startDrag(placed, e, 'palette');
        updateDoneButton();
    });

    // Placed piece drag start
    buildZone.addEventListener('pointerdown', function(e) {
        var placed = e.target.closest('.placed-piece');
        if (!placed || STATE.isAnimating) return;
        e.preventDefault();

        // Bring to front on click
        placed.style.zIndex = STATE.nextZ++;
        startDrag(placed, e, 'placed');
    });

    // Drag move
    document.addEventListener('pointermove', function(e) {
        if (!dragState.active) return;
        e.preventDefault();

        var rect = buildZone.getBoundingClientRect();
        var x = e.clientX - rect.left - dragState.offsetX;
        var y = e.clientY - rect.top - dragState.offsetY;

        // Constrain to build zone (loosely)
        x = Math.max(-50, Math.min(rect.width - 20, x));
        y = Math.max(-30, Math.min(rect.height - 20, y));

        dragState.element.style.left = x + 'px';
        dragState.element.style.top = y + 'px';
    });

    // Drag end
    document.addEventListener('pointerup', function(e) {
        if (!dragState.active) return;
        endDrag();
    });

    // Prevent context menu during drag
    document.addEventListener('contextmenu', function(e) {
        if (dragState.active) e.preventDefault();
    });
}

function startDrag(element, event, source) {
    dragState.active = true;
    dragState.element = element;
    dragState.source = source;

    var rect = element.getBoundingClientRect();
    var buildRect = document.getElementById('build-zone').getBoundingClientRect();

    dragState.offsetX = event.clientX - rect.left;
    dragState.offsetY = event.clientY - rect.top;

    element.classList.add('dragging');
    element.setPointerCapture(event.pointerId);
    STATE.isDragging = true;
}

function endDrag() {
    if (!dragState.active) return;

    dragState.element.classList.remove('dragging');
    dragState.active = false;
    dragState.element = null;
    STATE.isDragging = false;
}

function clearConstruction() {
    var buildZone = document.getElementById('build-zone');

    // Remove all placed pieces
    STATE.placedPieces.forEach(function(p) {
        if (p.parentNode) p.parentNode.removeChild(p);
    });
    STATE.placedPieces = [];
    STATE.usedPieceIds.clear();
    STATE.nextZ = 10;

    // Re-render palette to un-gray items
    renderPalette(STATE.currentBird, STATE.currentOrientation);
    updateDoneButton();
}

function updateDoneButton() {
    var btn = document.getElementById('btn-done');
    btn.disabled = STATE.placedPieces.length === 0;
}
