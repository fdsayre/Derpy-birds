// ==========================================
// DERPY BIRDS - SVG Piece Renderer
// ==========================================

// Create an SVG element from a piece definition
function createPieceSVG(piece, scale) {
    scale = scale || 1;
    var svg = svgEl('svg', {
        viewBox: '0 0 ' + piece.width + ' ' + piece.height,
        width: Math.round(piece.width * scale),
        height: Math.round(piece.height * scale),
        overflow: 'visible'
    });

    piece.elements.forEach(function(el) {
        var node = svgEl(el.tag, el.attrs);
        svg.appendChild(node);
    });

    return svg;
}

// Create a palette item for a piece
function createPaletteItem(piece, birdId) {
    var item = document.createElement('div');
    item.className = 'part-item';
    item.dataset.pieceId = piece.id;
    item.dataset.birdId = birdId;

    var preview = document.createElement('div');
    preview.className = 'part-preview';
    // Scale to fit preview
    var maxDim = Math.max(piece.width, piece.height);
    var previewScale = Math.min(50 / maxDim, 1);
    preview.appendChild(createPieceSVG(piece, previewScale));

    var label = document.createElement('span');
    label.className = 'part-label';
    label.textContent = piece.label;

    item.appendChild(preview);
    item.appendChild(label);

    return item;
}

// Render the palette for a given bird and orientation
function renderPalette(birdId, orientation) {
    var partsList = document.getElementById('parts-list');
    partsList.innerHTML = '';

    if (!birdId || !BIRDS[birdId]) {
        document.getElementById('palette-title').textContent = 'Choose a Bird!';
        return;
    }

    var bird = BIRDS[birdId];
    document.getElementById('palette-title').textContent = bird.name;

    var pieces = getPiecesForOrientation(birdId, orientation);
    if (!pieces) return;

    pieces.forEach(function(piece) {
        var item = createPaletteItem(piece, birdId);
        if (STATE.usedPieceIds.has(piece.id)) {
            item.classList.add('used');
        }
        partsList.appendChild(item);
    });
}

// Get pieces for a given orientation (right = flipped left)
function getPiecesForOrientation(birdId, orientation) {
    var bird = BIRDS[birdId];
    if (!bird) return null;

    if (orientation === 'right') {
        // Mirror left pieces
        var leftPieces = bird.orientations.left;
        return leftPieces.map(function(p) {
            return Object.assign({}, p, { flipped: true });
        });
    }

    return bird.orientations[orientation] || bird.orientations.left;
}

// Create a placed piece element in the construction area
function createPlacedPiece(piece, x, y) {
    var div = document.createElement('div');
    div.className = 'placed-piece';
    div.dataset.pieceId = piece.id;
    div.dataset.layer = piece.layer;
    div.style.left = x + 'px';
    div.style.top = y + 'px';
    div.style.zIndex = STATE.nextZ++;

    var svg = createPieceSVG(piece, 1);
    if (piece.flipped) {
        svg.style.transform = 'scaleX(-1)';
    }
    div.appendChild(svg);

    return div;
}
