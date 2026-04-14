// ==========================================
// Mountain Chickadee - Piece Definitions
// Distinctive: small, round, black cap, white eyebrow stripe
// ==========================================

BIRDS.chickadee = {
    name: 'Mountain Chickadee',
    desc: 'Tiny acrobat with a black cap and bold white eyebrow',
    orientations: {
        left: [
            {
                id: 'mc-l-tail', label: 'Tail', layer: 0, width: 65, height: 25,
                elements: [
                    { tag: 'path', attrs: { d: 'M0,12 C10,4 25,2 42,4 C55,5 62,10 63,12 C62,14 55,19 42,20 C25,22 10,20 0,12Z', fill: '#808B96' }}
                ]
            },
            {
                id: 'mc-l-feet', label: 'Feet', layer: 0, width: 38, height: 42,
                elements: [
                    { tag: 'path', attrs: { d: 'M6,0 L11,0 L11,20 L17,34 L14,36 L8,25 L2,36 L0,34 L6,20Z', fill: '#555' }},
                    { tag: 'path', attrs: { d: 'M22,0 L27,0 L27,20 L33,34 L30,36 L24,25 L18,36 L16,34 L22,20Z', fill: '#555' }}
                ]
            },
            {
                id: 'mc-l-body', label: 'Body', layer: 1, width: 85, height: 68,
                elements: [
                    { tag: 'ellipse', attrs: { cx: 42, cy: 34, rx: 38, ry: 30, fill: '#AAB7B8' }}
                ]
            },
            {
                id: 'mc-l-belly', label: 'Buff Belly', layer: 2, width: 60, height: 45,
                elements: [
                    { tag: 'ellipse', attrs: { cx: 30, cy: 23, rx: 27, ry: 20, fill: '#F5DEB3' }}
                ]
            },
            {
                id: 'mc-l-wing', label: 'Wing', layer: 3, width: 68, height: 48,
                elements: [
                    { tag: 'path', attrs: { d: 'M4,22 C6,8 22,2 38,3 C54,2 64,10 66,20 C66,32 56,42 38,44 C20,45 6,36 4,22Z', fill: '#7F8C8D' }}
                ]
            },
            {
                id: 'mc-l-head', label: 'Head', layer: 4, width: 48, height: 48,
                elements: [
                    { tag: 'circle', attrs: { cx: 24, cy: 24, r: 22, fill: '#E8E8E0' }},
                    { tag: 'path', attrs: { d: 'M4,20 C8,8 16,2 24,2 C32,2 40,8 44,20 C38,16 31,14 24,14 C17,14 10,16 4,20Z', fill: '#1a1a1a' }}
                ]
            },
            {
                id: 'mc-l-brow', label: 'White Eyebrow', layer: 5, width: 30, height: 8,
                elements: [
                    { tag: 'path', attrs: { d: 'M0,6 C4,1 12,0 22,1 C27,2 30,4 30,6 C24,4 16,3 8,4 C3,5 0,6 0,6Z', fill: '#F5F5F0' }}
                ]
            },
            {
                id: 'mc-l-beak', label: 'Beak', layer: 5, width: 22, height: 12,
                elements: [
                    { tag: 'path', attrs: { d: 'M20,3 L3,5 Q0,6 3,7 L20,9 Q22,6 20,3Z', fill: '#1a1a1a' }}
                ]
            },
            {
                id: 'mc-l-eye', label: 'Eye', layer: 6, width: 10, height: 10,
                elements: [
                    { tag: 'circle', attrs: { cx: 5, cy: 5, r: 4, fill: '#1a1a1a' }}
                ]
            }
        ],
        front: [
            {
                id: 'mc-f-tail', label: 'Tail Tip', layer: 0, width: 35, height: 45,
                elements: [
                    { tag: 'path', attrs: { d: 'M10,0 L25,0 L30,42 L17,36 L5,42Z', fill: '#808B96' }}
                ]
            },
            {
                id: 'mc-f-feet', label: 'Feet', layer: 0, width: 50, height: 40,
                elements: [
                    { tag: 'path', attrs: { d: 'M8,0 L13,0 L13,18 L19,32 L16,34 L10,24 L4,34 L2,32 L8,18Z', fill: '#555' }},
                    { tag: 'path', attrs: { d: 'M34,0 L39,0 L39,18 L45,32 L42,34 L36,24 L30,34 L28,32 L34,18Z', fill: '#555' }}
                ]
            },
            {
                id: 'mc-f-body', label: 'Body', layer: 1, width: 78, height: 72,
                elements: [
                    { tag: 'ellipse', attrs: { cx: 39, cy: 36, rx: 35, ry: 32, fill: '#AAB7B8' }}
                ]
            },
            {
                id: 'mc-f-belly', label: 'Buff Belly', layer: 2, width: 58, height: 52,
                elements: [
                    { tag: 'ellipse', attrs: { cx: 29, cy: 26, rx: 25, ry: 23, fill: '#F5DEB3' }}
                ]
            },
            {
                id: 'mc-f-lwing', label: 'Left Wing', layer: 3, width: 55, height: 52,
                elements: [
                    { tag: 'path', attrs: { d: 'M50,10 C46,3 30,0 12,6 C2,12 0,26 4,38 C8,46 22,50 36,44 C48,38 52,24 50,10Z', fill: '#7F8C8D' }}
                ]
            },
            {
                id: 'mc-f-rwing', label: 'Right Wing', layer: 3, width: 55, height: 52,
                elements: [
                    { tag: 'path', attrs: { d: 'M5,10 C9,3 25,0 43,6 C53,12 55,26 51,38 C47,46 33,50 19,44 C7,38 3,24 5,10Z', fill: '#7F8C8D' }}
                ]
            },
            {
                id: 'mc-f-head', label: 'Head', layer: 4, width: 48, height: 48,
                elements: [
                    { tag: 'circle', attrs: { cx: 24, cy: 24, r: 22, fill: '#E8E8E0' }},
                    { tag: 'path', attrs: { d: 'M4,20 C8,8 16,2 24,2 C32,2 40,8 44,20 C38,16 31,14 24,14 C17,14 10,16 4,20Z', fill: '#1a1a1a' }}
                ]
            },
            {
                id: 'mc-f-beak', label: 'Beak', layer: 5, width: 14, height: 14,
                elements: [
                    { tag: 'path', attrs: { d: 'M3,1 L11,1 L7,12Z', fill: '#1a1a1a' }}
                ]
            },
            {
                id: 'mc-f-leye', label: 'Left Eye', layer: 6, width: 10, height: 10,
                elements: [
                    { tag: 'circle', attrs: { cx: 5, cy: 5, r: 4, fill: '#1a1a1a' }}
                ]
            },
            {
                id: 'mc-f-reye', label: 'Right Eye', layer: 6, width: 10, height: 10,
                elements: [
                    { tag: 'circle', attrs: { cx: 5, cy: 5, r: 4, fill: '#1a1a1a' }}
                ]
            }
        ]
    }
};
