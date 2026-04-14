// ==========================================
// Western Meadowlark - Piece Definitions
// Distinctive: bright yellow breast with black V marking
// ==========================================

BIRDS.meadowlark = {
    name: 'Western Meadowlark',
    desc: 'Bright yellow songbird with a bold black V on its chest',
    orientations: {
        left: [
            {
                id: 'wm-l-tail', label: 'Tail', layer: 0, width: 85, height: 30,
                elements: [
                    { tag: 'path', attrs: { d: 'M0,15 C10,5 25,2 45,4 C65,3 78,10 83,15 C78,20 65,27 45,26 C25,28 10,25 0,15Z', fill: '#8B7355' }}
                ]
            },
            {
                id: 'wm-l-feet', label: 'Feet', layer: 0, width: 45, height: 50,
                elements: [
                    { tag: 'path', attrs: { d: 'M8,0 L13,0 L13,24 L20,40 L17,42 L10,30 L3,42 L1,40 L8,24Z', fill: '#C19A6B' }},
                    { tag: 'path', attrs: { d: 'M26,0 L31,0 L31,24 L38,40 L35,42 L28,30 L21,42 L19,40 L26,24Z', fill: '#C19A6B' }}
                ]
            },
            {
                id: 'wm-l-body', label: 'Body', layer: 1, width: 112, height: 78,
                elements: [
                    { tag: 'ellipse', attrs: { cx: 56, cy: 39, rx: 50, ry: 35, fill: '#A0855B' }},
                    { tag: 'rect', attrs: { x: 22, y: 24, width: 30, height: 3, fill: '#6B5335', rx: 1 }},
                    { tag: 'rect', attrs: { x: 26, y: 34, width: 30, height: 3, fill: '#6B5335', rx: 1 }},
                    { tag: 'rect', attrs: { x: 24, y: 44, width: 30, height: 3, fill: '#6B5335', rx: 1 }}
                ]
            },
            {
                id: 'wm-l-breast', label: 'Yellow Breast', layer: 2, width: 72, height: 55,
                elements: [
                    { tag: 'ellipse', attrs: { cx: 36, cy: 28, rx: 32, ry: 24, fill: '#F4D03F' }}
                ]
            },
            {
                id: 'wm-l-vmark', label: 'Black V', layer: 3, width: 45, height: 28,
                elements: [
                    { tag: 'path', attrs: { d: 'M0,0 L6,0 L22,24 L38,0 L44,0 L25,28 L19,28Z', fill: '#1a1a1a' }}
                ]
            },
            {
                id: 'wm-l-wing', label: 'Wing', layer: 3, width: 88, height: 55,
                elements: [
                    { tag: 'path', attrs: { d: 'M4,25 C7,10 25,2 45,4 C62,2 80,10 84,22 C85,34 74,46 55,50 C30,52 8,40 4,25Z', fill: '#8B7355' }},
                    { tag: 'rect', attrs: { x: 20, y: 12, width: 3, height: 28, fill: '#6B5335', opacity: '0.5', rx: 1 }},
                    { tag: 'rect', attrs: { x: 40, y: 9, width: 3, height: 32, fill: '#6B5335', opacity: '0.5', rx: 1 }},
                    { tag: 'rect', attrs: { x: 60, y: 11, width: 3, height: 28, fill: '#6B5335', opacity: '0.5', rx: 1 }}
                ]
            },
            {
                id: 'wm-l-head', label: 'Head', layer: 4, width: 50, height: 50,
                elements: [
                    { tag: 'circle', attrs: { cx: 25, cy: 25, r: 23, fill: '#A0855B' }},
                    { tag: 'path', attrs: { d: 'M5,22 C10,12 18,8 25,8 C32,8 40,12 45,22 C38,18 32,16 25,16 C18,16 12,18 5,22Z', fill: '#F4D03F', opacity: '0.7' }}
                ]
            },
            {
                id: 'wm-l-beak', label: 'Beak', layer: 5, width: 42, height: 15,
                elements: [
                    { tag: 'path', attrs: { d: 'M40,3 L3,7 Q0,7.5 3,8 L40,12 Q42,7.5 40,3Z', fill: '#5D4E37' }}
                ]
            },
            {
                id: 'wm-l-eye', label: 'Eye', layer: 6, width: 12, height: 12,
                elements: [
                    { tag: 'circle', attrs: { cx: 6, cy: 6, r: 5, fill: '#1a1a1a' }},
                    { tag: 'line', attrs: { x1: 0, y1: 6, x2: 12, y2: 6, stroke: '#F5F0E1', 'stroke-width': '1.5' }}
                ]
            }
        ],
        front: [
            {
                id: 'wm-f-tail', label: 'Tail Tip', layer: 0, width: 45, height: 55,
                elements: [
                    { tag: 'path', attrs: { d: 'M12,0 L33,0 L38,52 L22,45 L7,52Z', fill: '#8B7355' }}
                ]
            },
            {
                id: 'wm-f-feet', label: 'Feet', layer: 0, width: 60, height: 48,
                elements: [
                    { tag: 'path', attrs: { d: 'M9,0 L14,0 L14,20 L21,36 L18,38 L11,26 L4,38 L2,36 L9,20Z', fill: '#C19A6B' }},
                    { tag: 'path', attrs: { d: 'M40,0 L45,0 L45,20 L52,36 L49,38 L42,26 L35,38 L33,36 L40,20Z', fill: '#C19A6B' }}
                ]
            },
            {
                id: 'wm-f-body', label: 'Body', layer: 1, width: 105, height: 82,
                elements: [
                    { tag: 'ellipse', attrs: { cx: 52, cy: 41, rx: 47, ry: 38, fill: '#A0855B' }}
                ]
            },
            {
                id: 'wm-f-breast', label: 'Yellow Breast', layer: 2, width: 78, height: 62,
                elements: [
                    { tag: 'ellipse', attrs: { cx: 39, cy: 31, rx: 34, ry: 28, fill: '#F4D03F' }}
                ]
            },
            {
                id: 'wm-f-vmark', label: 'Black V', layer: 3, width: 50, height: 30,
                elements: [
                    { tag: 'path', attrs: { d: 'M0,0 L7,0 L25,26 L43,0 L50,0 L28,30 L22,30Z', fill: '#1a1a1a' }}
                ]
            },
            {
                id: 'wm-f-lwing', label: 'Left Wing', layer: 3, width: 65, height: 58,
                elements: [
                    { tag: 'path', attrs: { d: 'M60,10 C56,3 36,0 15,7 C3,14 0,28 4,42 C9,52 25,56 40,50 C54,42 63,26 60,10Z', fill: '#8B7355' }}
                ]
            },
            {
                id: 'wm-f-rwing', label: 'Right Wing', layer: 3, width: 65, height: 58,
                elements: [
                    { tag: 'path', attrs: { d: 'M5,10 C9,3 29,0 50,7 C62,14 65,28 61,42 C56,52 40,56 25,50 C11,42 2,26 5,10Z', fill: '#8B7355' }}
                ]
            },
            {
                id: 'wm-f-head', label: 'Head', layer: 4, width: 50, height: 50,
                elements: [
                    { tag: 'circle', attrs: { cx: 25, cy: 25, r: 23, fill: '#A0855B' }},
                    { tag: 'path', attrs: { d: 'M5,22 C10,12 18,8 25,8 C32,8 40,12 45,22 C38,18 32,16 25,16 C18,16 12,18 5,22Z', fill: '#F4D03F', opacity: '0.7' }}
                ]
            },
            {
                id: 'wm-f-beak', label: 'Beak', layer: 5, width: 18, height: 18,
                elements: [
                    { tag: 'path', attrs: { d: 'M4,2 L14,2 L9,16Z', fill: '#5D4E37' }}
                ]
            },
            {
                id: 'wm-f-leye', label: 'Left Eye', layer: 6, width: 12, height: 12,
                elements: [
                    { tag: 'circle', attrs: { cx: 6, cy: 6, r: 5, fill: '#1a1a1a' }}
                ]
            },
            {
                id: 'wm-f-reye', label: 'Right Eye', layer: 6, width: 12, height: 12,
                elements: [
                    { tag: 'circle', attrs: { cx: 6, cy: 6, r: 5, fill: '#1a1a1a' }}
                ]
            }
        ]
    }
};
