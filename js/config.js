// ==========================================
// DERPY BIRDS - Configuration & Constants
// ==========================================

const SVG_NS = 'http://www.w3.org/2000/svg';

// Global bird registry - each bird file adds to this
const BIRDS = {};

// Tree perch positions (filled by scene.js)
const PERCH_SPOTS = [];

// Completed birds in the scene
const COMPLETED_BIRDS = [];

// Game state
const STATE = {
    currentBird: null,
    currentOrientation: 'left',
    placedPieces: [],       // pieces in construction area
    usedPieceIds: new Set(), // track which palette pieces are used
    nextZ: 10,              // z-index counter for layering
    isDragging: false,
    isAnimating: false
};

// Helper: create SVG element with attributes
function svgEl(tag, attrs) {
    const el = document.createElementNS(SVG_NS, tag);
    for (const [k, v] of Object.entries(attrs)) {
        el.setAttribute(k, String(v));
    }
    return el;
}

// Helper: show a toast message
function showToast(msg, duration) {
    duration = duration || 1500;
    const t = document.createElement('div');
    t.className = 'toast';
    t.textContent = msg;
    document.body.appendChild(t);
    requestAnimationFrame(function() {
        t.classList.add('show');
    });
    setTimeout(function() {
        t.classList.remove('show');
        setTimeout(function() { t.remove(); }, 300);
    }, duration);
}
