// ==========================================
// American Crow - Piece Definitions
// Distinctive: all black, stocky, stout beak
// ==========================================

BIRDS.crow = {
    name: 'American Crow',
    desc: 'Clever all-black bird with a stout beak and loud caw',
    orientations: {
        left: [
            {
                id: 'cr-l-tail', label: 'Tail', layer: 0, width: 100, height: 35,
                elements: [
                    { tag: 'path', attrs: { d: 'M0,17 C14,6 35,2 55,5 C75,3 92,10 98,17 C92,24 75,31 55,29 C35,32 14,28 0,17Z', fill: '#1a1a1a' }}
                ]
            },
            {
                id: 'cr-l-feet', label: 'Feet', layer: 0, width: 50, height: 55,
                elements: [
                    { tag: 'path', attrs: { d: 'M10,0 L16,0 L16,28 L24,45 L21,48 L13,34 L5,48 L2,45 L10,28Z', fill: '#222' }},
                    { tag: 'path', attrs: { d: 'M30,0 L36,0 L36,28 L44,45 L41,48 L33,34 L25,48 L22,45 L30,28Z', fill: '#222' }}
                ]
            },
            {
                id: 'cr-l-body', label: 'Body', layer: 1, width: 125, height: 85,
                elements: [
                    { tag: 'ellipse', attrs: { cx: 62, cy: 43, rx: 58, ry: 38, fill: '#1a1a1a' }}
                ]
            },
            {
                id: 'cr-l-wing', label: 'Wing', layer: 3, width: 100, height: 65,
                elements: [
                    { tag: 'path', attrs: { d: 'M5,30 C8,12 28,3 52,5 C76,3 92,14 95,28 C95,42 80,54 58,58 C32,60 10,46 5,30Z', fill: '#111' }},
                    { tag: 'path', attrs: { d: 'M30,18 C50,12 75,16 88,24', fill: 'none', stroke: '#2a2a2a', 'stroke-width': '2' }},
                    { tag: 'path', attrs: { d: 'M25,28 C48,22 72,26 86,32', fill: 'none', stroke: '#2a2a2a', 'stroke-width': '2' }}
                ]
            },
            {
                id: 'cr-l-head', label: 'Head', layer: 4, width: 55, height: 55,
                elements: [
                    { tag: 'circle', attrs: { cx: 28, cy: 28, r: 26, fill: '#1a1a1a' }}
                ]
            },
            {
                id: 'cr-l-beak', label: 'Beak', layer: 5, width: 40, height: 20,
                elements: [
                    { tag: 'path', attrs: { d: 'M38,4 L4,9 Q0,10 4,11 L38,16 Q40,10 38,4Z', fill: '#111' }},
                    { tag: 'path', attrs: { d: 'M38,10 L6,10', fill: 'none', stroke: '#333', 'stroke-width': '1' }}
                ]
            },
            {
                id: 'cr-l-eye', label: 'Eye', layer: 6, width: 14, height: 14,
                elements: [
                    { tag: 'circle', attrs: { cx: 7, cy: 7, r: 6, fill: '#222' }},
                    { tag: 'circle', attrs: { cx: 6, cy: 6, r: 2.5, fill: '#111' }}
                ]
            }
        ],
        front: [
            {
                id: 'cr-f-tail', label: 'Tail Tip', layer: 0, width: 48, height: 60,
                elements: [
                    { tag: 'path', attrs: { d: 'M14,0 L34,0 L40,56 L24,48 L8,56Z', fill: '#1a1a1a' }}
                ]
            },
            {
                id: 'cr-f-feet', label: 'Feet', layer: 0, width: 68, height: 52,
                elements: [
                    { tag: 'path', attrs: { d: 'M11,0 L17,0 L17,24 L25,40 L22,43 L14,30 L6,43 L3,40 L11,24Z', fill: '#222' }},
                    { tag: 'path', attrs: { d: 'M46,0 L52,0 L52,24 L60,40 L57,43 L49,30 L41,43 L38,40 L46,24Z', fill: '#222' }}
                ]
            },
            {
                id: 'cr-f-body', label: 'Body', layer: 1, width: 112, height: 92,
                elements: [
                    { tag: 'ellipse', attrs: { cx: 56, cy: 46, rx: 50, ry: 42, fill: '#1a1a1a' }}
                ]
            },
            {
                id: 'cr-f-lwing', label: 'Left Wing', layer: 3, width: 72, height: 68,
                elements: [
                    { tag: 'path', attrs: { d: 'M67,14 C62,4 40,0 18,8 C4,16 0,32 5,48 C12,58 30,62 48,56 C62,48 70,30 67,14Z', fill: '#111' }}
                ]
            },
            {
                id: 'cr-f-rwing', label: 'Right Wing', layer: 3, width: 72, height: 68,
                elements: [
                    { tag: 'path', attrs: { d: 'M5,14 C10,4 32,0 54,8 C68,16 72,32 67,48 C60,58 42,62 24,56 C10,48 2,30 5,14Z', fill: '#111' }}
                ]
            },
            {
                id: 'cr-f-head', label: 'Head', layer: 4, width: 55, height: 55,
                elements: [
                    { tag: 'circle', attrs: { cx: 28, cy: 28, r: 26, fill: '#1a1a1a' }}
                ]
            },
            {
                id: 'cr-f-beak', label: 'Beak', layer: 5, width: 22, height: 22,
                elements: [
                    { tag: 'path', attrs: { d: 'M5,2 L17,2 L11,20Z', fill: '#111' }}
                ]
            },
            {
                id: 'cr-f-leye', label: 'Left Eye', layer: 6, width: 14, height: 14,
                elements: [
                    { tag: 'circle', attrs: { cx: 7, cy: 7, r: 6, fill: '#222' }},
                    { tag: 'circle', attrs: { cx: 6, cy: 7, r: 2.5, fill: '#111' }}
                ]
            },
            {
                id: 'cr-f-reye', label: 'Right Eye', layer: 6, width: 14, height: 14,
                elements: [
                    { tag: 'circle', attrs: { cx: 7, cy: 7, r: 6, fill: '#222' }},
                    { tag: 'circle', attrs: { cx: 8, cy: 7, r: 2.5, fill: '#111' }}
                ]
            }
        ]
    }
};
