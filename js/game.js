// ==========================================
// DERPY BIRDS - Main Game Logic & Init
// ==========================================

var completedBirds = new Set();

function selectBird(birdId) {
    if (STATE.isAnimating) return;

    STATE.currentBird = birdId;
    STATE.usedPieceIds.clear();

    document.querySelectorAll('.bird-btn').forEach(function(btn) {
        btn.classList.toggle('active', btn.dataset.birdId === birdId);
    });

    renderPalette(birdId);
    updateDoneButton();
}

function handleDone() {
    if (STATE.placedPieces.length === 0 || STATE.isAnimating) return;

    var birdId = STATE.currentBird;
    var birdName = BIRDS[birdId] ? BIRDS[birdId].name : 'Bird';

    deselectPiece();

    flyToTree(function() {
        completedBirds.add(birdId);
        var btn = document.querySelector('.bird-btn[data-bird-id="' + birdId + '"]');
        if (btn) btn.classList.add('completed');

        STATE.placedPieces = [];
        STATE.usedPieceIds.clear();
        STATE.nextZ = 10;

        renderPalette(STATE.currentBird);
        updateDoneButton();

        showToast(birdName + ' flies to the trees!');
    });
}

function createBirdButtons() {
    var selector = document.getElementById('bird-selector');
    var birdIds = Object.keys(BIRDS);

    birdIds.forEach(function(id) {
        var bird = BIRDS[id];
        var btn = document.createElement('button');
        btn.className = 'bird-btn';
        btn.dataset.birdId = id;
        btn.textContent = bird.name;
        btn.title = bird.desc;
        btn.addEventListener('click', function() {
            selectBird(id);
        });
        selector.appendChild(btn);
    });
}

function init() {
    renderScene();
    createBirdButtons();

    document.getElementById('btn-clear').addEventListener('click', function() {
        if (!STATE.isAnimating) clearConstruction();
    });

    document.getElementById('btn-done').addEventListener('click', handleDone);

    initDragDrop();
    renderPalette(null);
}

document.addEventListener('DOMContentLoaded', init);
