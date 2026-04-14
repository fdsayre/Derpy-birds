// ==========================================
// American Robin - Piece Definitions
// Distinctive: orange-red breast, dark gray back, yellow beak
// ==========================================

BIRDS.robin = {
    name: 'American Robin',
    desc: 'Familiar songbird with a warm orange breast and cheerful song',
    orientations: {
        left: [
            {
                id: 'ar-l-tail', label: 'Tail', layer: 0, width: 95, height: 32,
                elements: [
                    { tag: 'path', attrs: { d: 'M0,16 C12,5 30,2 50,4 C70,3 88,10 93,16 C88,22 70,29 50,28 C30,30 12,27 0,16Z', fill: '#2C3E50' }}
                ]
            },
            {
                id: 'ar-l-feet', label: 'Feet', layer: 0, width: 48, height: 52,
                elements: [
                    { tag: 'path', attrs: { d: 'M8,0 L14,0 L14,26 L22,42 L19,45 L11,32 L3,45 L0,42 L8,26Z', fill: '#3a3a3a' }},
                    { tag: 'path', attrs: { d: 'M28,0 L34,0 L34,26 L42,42 L39,45 L31,32 L23,45 L20,42 L28,26Z', fill: '#3a3a3a' }}
                ]
            },
            {
                id: 'ar-l-body', label: 'Body', layer: 1, width: 115, height: 80,
                elements: [
                    { tag: 'ellipse', attrs: { cx: 58, cy: 40, rx: 52, ry: 36, fill: '#4A4A48' }}
                ]
            },
            {
                id: 'ar-l-breast', label: 'Orange Breast', layer: 2, width: 78, height: 60,
                elements: [
                    { tag: 'ellipse', attrs: { cx: 39, cy: 30, rx: 35, ry: 27, fill: '#E67E22' }}
                ]
            },
            {
                id: 'ar-l-wing', label: 'Wing', layer: 3, width: 90, height: 58,
                elements: [
                    { tag: 'path', attrs: { d: 'M4,26 C7,10 25,2 45,4 C65,2 82,10 86,22 C88,36 76,48 55,52 C30,54 8,42 4,26Z', fill: '#3D3D3B' }}
                ]
            },
            {
                id: 'ar-l-head', label: 'Head', layer: 4, width: 52, height: 52,
                elements: [
                    { tag: 'circle', attrs: { cx: 26, cy: 26, r: 24, fill: '#2C2C2A' }}
                ]
            },
            {
                id: 'ar-l-beak', label: 'Beak', layer: 5, width: 36, height: 16,
                elements: [
                    { tag: 'path', attrs: { d: 'M34,3 L4,7 Q0,8 4,9 L34,13 Q36,8 34,3Z', fill: '#F1C40F' }}
                ]
            },
            {
                id: 'ar-l-eye', label: 'Eye', layer: 6, width: 16, height: 16,
                elements: [
                    { tag: 'circle', attrs: { cx: 8, cy: 8, r: 7, fill: 'white' }},
                    { tag: 'circle', attrs: { cx: 7, cy: 7, r: 3, fill: '#111' }}
                ]
            }
        ],
        front: [
            {
                id: 'ar-f-tail', label: 'Tail Tip', layer: 0, width: 48, height: 58,
                elements: [
                    { tag: 'path', attrs: { d: 'M14,0 L34,0 L40,55 L24,48 L8,55Z', fill: '#2C3E50' }}
                ]
            },
            {
                id: 'ar-f-feet', label: 'Feet', layer: 0, width: 65, height: 50,
                elements: [
                    { tag: 'path', attrs: { d: 'M10,0 L16,0 L16,22 L24,38 L21,41 L13,28 L5,41 L2,38 L10,22Z', fill: '#3a3a3a' }},
                    { tag: 'path', attrs: { d: 'M44,0 L50,0 L50,22 L58,38 L55,41 L47,28 L39,41 L36,38 L44,22Z', fill: '#3a3a3a' }}
                ]
            },
            {
                id: 'ar-f-body', label: 'Body', layer: 1, width: 108, height: 88,
                elements: [
                    { tag: 'ellipse', attrs: { cx: 54, cy: 44, rx: 48, ry: 40, fill: '#4A4A48' }}
                ]
            },
            {
                id: 'ar-f-breast', label: 'Orange Breast', layer: 2, width: 82, height: 68,
                elements: [
                    { tag: 'ellipse', attrs: { cx: 41, cy: 34, rx: 36, ry: 30, fill: '#E67E22' }}
                ]
            },
            {
                id: 'ar-f-lwing', label: 'Left Wing', layer: 3, width: 68, height: 62,
                elements: [
                    { tag: 'path', attrs: { d: 'M62,12 C58,4 38,0 16,7 C3,14 0,30 5,44 C10,54 26,58 42,52 C56,44 65,28 62,12Z', fill: '#3D3D3B' }}
                ]
            },
            {
                id: 'ar-f-rwing', label: 'Right Wing', layer: 3, width: 68, height: 62,
                elements: [
                    { tag: 'path', attrs: { d: 'M6,12 C10,4 30,0 52,7 C65,14 68,30 63,44 C58,54 42,58 26,52 C12,44 3,28 6,12Z', fill: '#3D3D3B' }}
                ]
            },
            {
                id: 'ar-f-head', label: 'Head', layer: 4, width: 52, height: 52,
                elements: [
                    { tag: 'circle', attrs: { cx: 26, cy: 26, r: 24, fill: '#2C2C2A' }}
                ]
            },
            {
                id: 'ar-f-beak', label: 'Beak', layer: 5, width: 20, height: 20,
                elements: [
                    { tag: 'path', attrs: { d: 'M4,2 L16,2 L10,18Z', fill: '#F1C40F' }}
                ]
            },
            {
                id: 'ar-f-leye', label: 'Left Eye', layer: 6, width: 16, height: 16,
                elements: [
                    { tag: 'circle', attrs: { cx: 8, cy: 8, r: 7, fill: 'white' }},
                    { tag: 'circle', attrs: { cx: 7, cy: 7, r: 3, fill: '#111' }}
                ]
            },
            {
                id: 'ar-f-reye', label: 'Right Eye', layer: 6, width: 16, height: 16,
                elements: [
                    { tag: 'circle', attrs: { cx: 8, cy: 8, r: 7, fill: 'white' }},
                    { tag: 'circle', attrs: { cx: 9, cy: 7, r: 3, fill: '#111' }}
                ]
            }
        ]
    }
};
