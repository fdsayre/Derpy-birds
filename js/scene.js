// ==========================================
// DERPY BIRDS - Scene (Trees & Background)
// ==========================================

const TREES = [
    {
        x: 100, groundY: 355,
        trunk: { w: 22, h: 75 },
        foliage: [
            { dx: 0, dy: -40, rx: 48, ry: 42 },
            { dx: -20, dy: -65, rx: 38, ry: 34 },
            { dx: 22, dy: -60, rx: 40, ry: 36 }
        ],
        perch: { x: 100, y: 280 }
    },
    {
        x: 330, groundY: 360,
        trunk: { w: 28, h: 90 },
        foliage: [
            { dx: 0, dy: -50, rx: 55, ry: 48 },
            { dx: -25, dy: -75, rx: 42, ry: 38 },
            { dx: 28, dy: -72, rx: 44, ry: 40 },
            { dx: 0, dy: -92, rx: 35, ry: 30 }
        ],
        perch: { x: 355, y: 260 }
    },
    {
        x: 580, groundY: 358,
        trunk: { w: 20, h: 70 },
        foliage: [
            { dx: 0, dy: -38, rx: 44, ry: 40 },
            { dx: -18, dy: -58, rx: 35, ry: 32 },
            { dx: 20, dy: -55, rx: 36, ry: 33 }
        ],
        perch: { x: 600, y: 285 }
    },
    {
        x: 820, groundY: 355,
        trunk: { w: 26, h: 85 },
        foliage: [
            { dx: 0, dy: -45, rx: 52, ry: 46 },
            { dx: -22, dy: -70, rx: 40, ry: 36 },
            { dx: 24, dy: -68, rx: 42, ry: 38 },
            { dx: 2, dy: -88, rx: 32, ry: 28 }
        ],
        perch: { x: 845, y: 268 }
    },
    {
        x: 1060, groundY: 360,
        trunk: { w: 24, h: 80 },
        foliage: [
            { dx: 0, dy: -42, rx: 50, ry: 44 },
            { dx: -20, dy: -65, rx: 38, ry: 35 },
            { dx: 22, dy: -62, rx: 40, ry: 36 }
        ],
        perch: { x: 1060, y: 278 }
    }
];

// Foliage greens for variety
var GREENS = ['#2E7D32', '#388E3C', '#43A047', '#2E8B57', '#3CB371', '#228B22'];

function renderScene() {
    var svg = document.getElementById('scene-svg');
    svg.innerHTML = '';

    // Sky gradient
    var defs = svgEl('defs', {});
    var grad = svgEl('linearGradient', { id: 'sky-grad', x1: 0, y1: 0, x2: 0, y2: 1 });
    grad.appendChild(svgEl('stop', { offset: '0%', 'stop-color': '#87CEEB' }));
    grad.appendChild(svgEl('stop', { offset: '70%', 'stop-color': '#B0E0E6' }));
    grad.appendChild(svgEl('stop', { offset: '100%', 'stop-color': '#90C695' }));
    defs.appendChild(grad);
    svg.appendChild(defs);

    // Sky
    svg.appendChild(svgEl('rect', { width: 1200, height: 400, fill: 'url(#sky-grad)' }));

    // Clouds (construction paper style)
    var clouds = [[180, 55], [500, 40], [850, 65], [1100, 45]];
    clouds.forEach(function(c) {
        var g = svgEl('g', { filter: 'url(#tree-edge)' });
        g.appendChild(svgEl('ellipse', { cx: c[0], cy: c[1], rx: 50, ry: 18, fill: '#fff', opacity: 0.85 }));
        g.appendChild(svgEl('ellipse', { cx: c[0] - 30, cy: c[1] + 3, rx: 35, ry: 14, fill: '#fff', opacity: 0.8 }));
        g.appendChild(svgEl('ellipse', { cx: c[0] + 35, cy: c[1] + 2, rx: 38, ry: 15, fill: '#fff', opacity: 0.8 }));
        svg.appendChild(g);
    });

    // Ground
    svg.appendChild(svgEl('rect', { x: 0, y: 350, width: 1200, height: 50, fill: '#558B2F', filter: 'url(#tree-edge)' }));
    svg.appendChild(svgEl('rect', { x: 0, y: 370, width: 1200, height: 30, fill: '#33691E' }));

    // Trees
    PERCH_SPOTS.length = 0;
    TREES.forEach(function(tree, ti) {
        var g = svgEl('g', { filter: 'url(#tree-edge)' });

        // Trunk
        var tx = tree.x - tree.trunk.w / 2;
        var ty = tree.groundY - tree.trunk.h;
        g.appendChild(svgEl('rect', {
            x: tx, y: ty, width: tree.trunk.w, height: tree.trunk.h,
            fill: '#6D4C2F', rx: 3
        }));
        // Trunk detail
        g.appendChild(svgEl('rect', {
            x: tx + tree.trunk.w * 0.35, y: ty + 5,
            width: tree.trunk.w * 0.3, height: tree.trunk.h - 10,
            fill: '#5D3F25', rx: 2
        }));

        // Foliage
        tree.foliage.forEach(function(f, fi) {
            g.appendChild(svgEl('ellipse', {
                cx: tree.x + (f.dx || 0),
                cy: ty + (f.dy || 0),
                rx: f.rx, ry: f.ry,
                fill: GREENS[(ti * 3 + fi) % GREENS.length]
            }));
        });

        svg.appendChild(g);

        // Register perch spot
        PERCH_SPOTS.push({ x: tree.perch.x, y: tree.perch.y, taken: false });
    });
}
