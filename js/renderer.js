// ==========================================
// DERPY BIRDS - SVG Piece Renderer
// ==========================================

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

function createPaletteItem(piece, birdId) {
    var item = document.createElement('div');
    item.className = 'part-item';
    item.dataset.pieceId = piece.id;
    item.dataset.birdId = birdId;

    var preview = document.createElement('div');
    preview.className = 'part-preview';
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

function getAllPieces(birdId) {
    var bird = BIRDS[birdId];
    if (!bird) return [];

    var all = [];
    var orientations = bird.orientations;
    for (var orient in orientations) {
        if (orientations.hasOwnProperty(orient)) {
            orientations[orient].forEach(function(p) {
                all.push(p);
            });
        }
    }
    return all;
}

function renderPalette(birdId) {
    var partsList = document.getElementById('parts-list');
    partsList.innerHTML = '';

    if (!birdId || !BIRDS[birdId]) {
        document.getElementById('palette-title').textContent = 'Choose a Bird!';
        return;
    }

    var bird = BIRDS[birdId];
    document.getElementById('palette-title').textContent = bird.name;

    var orientations = bird.orientations;
    var orientKeys = Object.keys(orientations);

    orientKeys.forEach(function(orient) {
        var heading = document.createElement('div');
        heading.className = 'part-section-heading';
        heading.textContent = orient === 'left' ? 'Side View' : 'Front View';
        partsList.appendChild(heading);

        orientations[orient].forEach(function(piece) {
            var item = createPaletteItem(piece, birdId);
            if (STATE.usedPieceIds.has(piece.id)) {
                item.classList.add('used');
            }
            partsList.appendChild(item);
        });
    });
}

function findPieceById(birdId, pieceId) {
    var pieces = getAllPieces(birdId);
    return pieces.find(function(p) { return p.id === pieceId; }) || null;
}

function createPlacedPiece(piece, x, y) {
    var div = document.createElement('div');
    div.className = 'placed-piece';
    div.dataset.pieceId = piece.id;
    div.dataset.layer = piece.layer;
    div.style.position = 'absolute';
    div.style.left = x + 'px';
    div.style.top = y + 'px';
    div.style.zIndex = STATE.nextZ++;

    var svg = createPieceSVG(piece, 1);
    div.appendChild(svg);

    return div;
}
