// ==========================================
// DERPY BIRDS - Main Game Logic & Init
// ==========================================

// Track which birds have been completed at least once
var completedBirds = new Set();

function selectBird(birdId) {
    if (STATE.isAnimating) return;

    // If pieces are placed, warn/clear
    if (STATE.placedPieces.length > 0) {
        clearConstruction();
    }

    STATE.currentBird = birdId;
    STATE.usedPieceIds.clear();

    // Update bird selector buttons
    document.querySelectorAll('.bird-btn').forEach(function(btn) {
        btn.classList.toggle('active', btn.dataset.birdId === birdId);
    });

    renderPalette(birdId, STATE.currentOrientation);
    updateDoneButton();
}

function setOrientation(orient) {
    if (STATE.isAnimating) return;

    STATE.currentOrientation = orient;

    // If pieces are placed, clear them for new orientation
    if (STATE.placedPieces.length > 0) {
        clearConstruction();
    }

    STATE.usedPieceIds.clear();

    // Update orientation buttons
    document.querySelectorAll('.orient-btn').forEach(function(btn) {
        btn.classList.toggle('active', btn.dataset.orient === orient);
    });

    renderPalette(STATE.currentBird, orient);
}

function handleDone() {
    if (STATE.placedPieces.length === 0 || STATE.isAnimating) return;

    var birdId = STATE.currentBird;
    var birdName = BIRDS[birdId] ? BIRDS[birdId].name : 'Bird';

    flyToTree(function() {
        // Mark bird as completed
        completedBirds.add(birdId);
        var btn = document.querySelector('.bird-btn[data-bird-id="' + birdId + '"]');
        if (btn) btn.classList.add('completed');

        // Reset construction state
        STATE.placedPieces = [];
        STATE.usedPieceIds.clear();
        STATE.nextZ = 10;

        renderPalette(STATE.currentBird, STATE.currentOrientation);
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
    // Render scene (sky, trees)
    renderScene();

    // Create bird selection buttons
    createBirdButtons();

    // Set up orientation controls
    document.querySelectorAll('.orient-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
            setOrientation(btn.dataset.orient);
        });
    });

    // Set up control buttons
    document.getElementById('btn-clear').addEventListener('click', function() {
        if (!STATE.isAnimating) clearConstruction();
    });

    document.getElementById('btn-done').addEventListener('click', handleDone);

    // Initialize drag & drop
    initDragDrop();

    // Show initial palette message
    renderPalette(null, 'left');

    // Handle window resize for scene
    window.addEventListener('resize', function() {
        // Scene SVG auto-scales via viewBox
    });
}

// Start the game
document.addEventListener('DOMContentLoaded', init);
