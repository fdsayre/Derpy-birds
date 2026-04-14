// ==========================================
// Black-billed Magpie - Piece Definitions
// Distinctive: very long iridescent tail, black & white plumage
// ==========================================

BIRDS.magpie = {
    name: 'Black-billed Magpie',
    desc: 'Striking black & white bird with a very long iridescent tail',
    orientations: {
        left: [
            {
                id: 'mg-l-tail', label: 'Tail', layer: 0, width: 180, height: 40,
                elements: [
                    { tag: 'path', attrs: { d: 'M0,20 C20,8 60,4 100,6 C130,3 160,10 178,20 C160,30 130,37 100,34 C60,36 20,32 0,20Z', fill: '#1B2631' }},
                    { tag: 'path', attrs: { d: 'M50,14 C80,10 120,12 155,18 C120,22 80,20 50,14Z', fill: '#2d5f4a', opacity: '0.45' }}
                ]
            },
            {
                id: 'mg-l-feet', label: 'Feet', layer: 0, width: 50, height: 55,
                elements: [
                    { tag: 'path', attrs: { d: 'M10,0 L16,0 L16,28 L24,45 L21,48 L13,34 L5,48 L2,45 L10,28Z', fill: '#3a3a3a' }},
                    { tag: 'path', attrs: { d: 'M30,0 L36,0 L36,28 L44,45 L41,48 L33,34 L25,48 L22,45 L30,28Z', fill: '#3a3a3a' }}
                ]
            },
            {
                id: 'mg-l-body', label: 'Body', layer: 1, width: 130, height: 85,
                elements: [
                    { tag: 'ellipse', attrs: { cx: 65, cy: 43, rx: 60, ry: 38, fill: '#1a1a1a' }}
                ]
            },
            {
                id: 'mg-l-belly', label: 'White Belly', layer: 2, width: 80, height: 55,
                elements: [
                    { tag: 'ellipse', attrs: { cx: 40, cy: 28, rx: 36, ry: 24, fill: '#F0EDE4' }}
                ]
            },
            {
                id: 'mg-l-shoulder', label: 'Shoulder Patch', layer: 2, width: 55, height: 35,
                elements: [
                    { tag: 'ellipse', attrs: { cx: 28, cy: 18, rx: 24, ry: 14, fill: '#F0EDE4' }}
                ]
            },
            {
                id: 'mg-l-wing', label: 'Wing', layer: 3, width: 100, height: 65,
                elements: [
                    { tag: 'path', attrs: { d: 'M5,30 C8,10 30,2 55,5 C78,3 92,12 95,28 C95,42 82,55 60,58 C35,60 12,48 5,30Z', fill: '#1a1a2a' }},
                    { tag: 'path', attrs: { d: 'M35,15 C55,8 78,12 88,22 C75,30 50,28 35,15Z', fill: '#1e4d3d', opacity: '0.4' }}
                ]
            },
            {
                id: 'mg-l-head', label: 'Head', layer: 4, width: 55, height: 55,
                elements: [
                    { tag: 'circle', attrs: { cx: 28, cy: 28, r: 26, fill: '#1a1a1a' }}
                ]
            },
            {
                id: 'mg-l-beak', label: 'Beak', layer: 5, width: 42, height: 18,
                elements: [
                    { tag: 'path', attrs: { d: 'M40,4 L4,8 Q0,9 4,10 L40,14 Q42,9 40,4Z', fill: '#111' }}
                ]
            },
            {
                id: 'mg-l-eye', label: 'Eye', layer: 6, width: 18, height: 18,
                elements: [
                    { tag: 'circle', attrs: { cx: 9, cy: 9, r: 8, fill: 'white' }},
                    { tag: 'circle', attrs: { cx: 8, cy: 8, r: 4, fill: '#111' }}
                ]
            }
        ],
        front: [
            {
                id: 'mg-f-tail', label: 'Tail Tip', layer: 0, width: 50, height: 70,
                elements: [
                    { tag: 'path', attrs: { d: 'M15,0 L35,0 L40,65 L25,58 L10,65Z', fill: '#1B2631' }},
                    { tag: 'path', attrs: { d: 'M20,20 L30,20 L33,55 L25,50 L17,55Z', fill: '#2d5f4a', opacity: '0.4' }}
                ]
            },
            {
                id: 'mg-f-feet', label: 'Feet', layer: 0, width: 70, height: 52,
                elements: [
                    { tag: 'path', attrs: { d: 'M12,0 L18,0 L18,24 L26,40 L23,43 L15,30 L7,43 L4,40 L12,24Z', fill: '#3a3a3a' }},
                    { tag: 'path', attrs: { d: 'M48,0 L54,0 L54,24 L62,40 L59,43 L51,30 L43,43 L40,40 L48,24Z', fill: '#3a3a3a' }}
                ]
            },
            {
                id: 'mg-f-body', label: 'Body', layer: 1, width: 110, height: 95,
                elements: [
                    { tag: 'ellipse', attrs: { cx: 55, cy: 48, rx: 50, ry: 44, fill: '#1a1a1a' }}
                ]
            },
            {
                id: 'mg-f-belly', label: 'White Belly', layer: 2, width: 80, height: 68,
                elements: [
                    { tag: 'ellipse', attrs: { cx: 40, cy: 34, rx: 35, ry: 30, fill: '#F0EDE4' }}
                ]
            },
            {
                id: 'mg-f-lwing', label: 'Left Wing', layer: 3, width: 75, height: 68,
                elements: [
                    { tag: 'path', attrs: { d: 'M70,14 C65,4 40,0 18,8 C4,16 0,32 5,48 C12,58 30,62 48,56 C62,48 72,32 70,14Z', fill: '#1a1a2a' }}
                ]
            },
            {
                id: 'mg-f-rwing', label: 'Right Wing', layer: 3, width: 75, height: 68,
                elements: [
                    { tag: 'path', attrs: { d: 'M5,14 C10,4 35,0 57,8 C71,16 75,32 70,48 C63,58 45,62 27,56 C13,48 3,32 5,14Z', fill: '#1a1a2a' }}
                ]
            },
            {
                id: 'mg-f-head', label: 'Head', layer: 4, width: 55, height: 55,
                elements: [
                    { tag: 'circle', attrs: { cx: 28, cy: 28, r: 26, fill: '#1a1a1a' }}
                ]
            },
            {
                id: 'mg-f-beak', label: 'Beak', layer: 5, width: 22, height: 22,
                elements: [
                    { tag: 'path', attrs: { d: 'M5,2 L17,2 L11,20Z', fill: '#111' }}
                ]
            },
            {
                id: 'mg-f-leye', label: 'Left Eye', layer: 6, width: 16, height: 16,
                elements: [
                    { tag: 'circle', attrs: { cx: 8, cy: 8, r: 7, fill: 'white' }},
                    { tag: 'circle', attrs: { cx: 7, cy: 7, r: 3.5, fill: '#111' }}
                ]
            },
            {
                id: 'mg-f-reye', label: 'Right Eye', layer: 6, width: 16, height: 16,
                elements: [
                    { tag: 'circle', attrs: { cx: 8, cy: 8, r: 7, fill: 'white' }},
                    { tag: 'circle', attrs: { cx: 9, cy: 7, r: 3.5, fill: '#111' }}
                ]
            }
        ]
    }
};
