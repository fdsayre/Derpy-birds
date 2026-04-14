// ==========================================
// Steller's Jay - Piece Definitions
// Distinctive: deep blue body, black crested head
// ==========================================

BIRDS.jay = {
    name: "Steller's Jay",
    desc: 'Bold blue jay with a dramatic black crest',
    orientations: {
        left: [
            {
                id: 'sj-l-tail', label: 'Tail', layer: 0, width: 120, height: 38,
                elements: [
                    { tag: 'path', attrs: { d: 'M0,19 C15,6 40,2 70,5 C95,4 112,12 118,19 C112,26 95,34 70,33 C40,36 15,32 0,19Z', fill: '#1a5276' }},
                    { tag: 'rect', attrs: { x: 30, y: 10, width: 4, height: 18, fill: '#0d2f4a', opacity: '0.5', rx: 1 }},
                    { tag: 'rect', attrs: { x: 52, y: 8, width: 4, height: 22, fill: '#0d2f4a', opacity: '0.5', rx: 1 }},
                    { tag: 'rect', attrs: { x: 74, y: 7, width: 4, height: 24, fill: '#0d2f4a', opacity: '0.5', rx: 1 }},
                    { tag: 'rect', attrs: { x: 94, y: 9, width: 4, height: 20, fill: '#0d2f4a', opacity: '0.5', rx: 1 }}
                ]
            },
            {
                id: 'sj-l-feet', label: 'Feet', layer: 0, width: 48, height: 52,
                elements: [
                    { tag: 'path', attrs: { d: 'M8,0 L14,0 L14,26 L22,42 L19,45 L11,32 L3,45 L0,42 L8,26Z', fill: '#3a3a3a' }},
                    { tag: 'path', attrs: { d: 'M28,0 L34,0 L34,26 L42,42 L39,45 L31,32 L23,45 L20,42 L28,26Z', fill: '#3a3a3a' }}
                ]
            },
            {
                id: 'sj-l-body', label: 'Body', layer: 1, width: 115, height: 80,
                elements: [
                    { tag: 'ellipse', attrs: { cx: 58, cy: 40, rx: 52, ry: 36, fill: '#2471a3' }}
                ]
            },
            {
                id: 'sj-l-wing', label: 'Wing', layer: 3, width: 95, height: 62,
                elements: [
                    { tag: 'path', attrs: { d: 'M5,28 C8,10 28,2 50,4 C72,2 88,12 90,25 C90,38 78,50 55,54 C30,56 10,44 5,28Z', fill: '#1a5276' }},
                    { tag: 'rect', attrs: { x: 25, y: 14, width: 3, height: 30, fill: '#0d2f4a', opacity: '0.4', rx: 1 }},
                    { tag: 'rect', attrs: { x: 45, y: 10, width: 3, height: 35, fill: '#0d2f4a', opacity: '0.4', rx: 1 }},
                    { tag: 'rect', attrs: { x: 65, y: 12, width: 3, height: 30, fill: '#0d2f4a', opacity: '0.4', rx: 1 }}
                ]
            },
            {
                id: 'sj-l-head', label: 'Head & Crest', layer: 4, width: 58, height: 78,
                elements: [
                    { tag: 'circle', attrs: { cx: 29, cy: 48, r: 26, fill: '#1a1a2a' }},
                    { tag: 'path', attrs: { d: 'M22,26 L29,0 L36,26Z', fill: '#1a1a2a' }}
                ]
            },
            {
                id: 'sj-l-beak', label: 'Beak', layer: 5, width: 38, height: 18,
                elements: [
                    { tag: 'path', attrs: { d: 'M36,4 L4,8 Q0,9 4,10 L36,14 Q38,9 36,4Z', fill: '#111' }}
                ]
            },
            {
                id: 'sj-l-eye', label: 'Eye', layer: 6, width: 14, height: 14,
                elements: [
                    { tag: 'circle', attrs: { cx: 7, cy: 7, r: 6, fill: '#2c2c2c' }},
                    { tag: 'circle', attrs: { cx: 6, cy: 6, r: 2.5, fill: '#111' }}
                ]
            }
        ],
        front: [
            {
                id: 'sj-f-tail', label: 'Tail Tip', layer: 0, width: 45, height: 60,
                elements: [
                    { tag: 'path', attrs: { d: 'M12,0 L33,0 L38,55 L22,48 L7,55Z', fill: '#1a5276' }}
                ]
            },
            {
                id: 'sj-f-feet', label: 'Feet', layer: 0, width: 65, height: 50,
                elements: [
                    { tag: 'path', attrs: { d: 'M10,0 L16,0 L16,22 L24,38 L21,41 L13,28 L5,41 L2,38 L10,22Z', fill: '#3a3a3a' }},
                    { tag: 'path', attrs: { d: 'M44,0 L50,0 L50,22 L58,38 L55,41 L47,28 L39,41 L36,38 L44,22Z', fill: '#3a3a3a' }}
                ]
            },
            {
                id: 'sj-f-body', label: 'Body', layer: 1, width: 105, height: 90,
                elements: [
                    { tag: 'ellipse', attrs: { cx: 52, cy: 45, rx: 48, ry: 42, fill: '#2471a3' }}
                ]
            },
            {
                id: 'sj-f-lwing', label: 'Left Wing', layer: 3, width: 70, height: 65,
                elements: [
                    { tag: 'path', attrs: { d: 'M65,12 C60,4 38,0 15,8 C2,15 0,32 5,48 C10,58 28,62 45,55 C60,48 68,30 65,12Z', fill: '#1a5276' }}
                ]
            },
            {
                id: 'sj-f-rwing', label: 'Right Wing', layer: 3, width: 70, height: 65,
                elements: [
                    { tag: 'path', attrs: { d: 'M5,12 C10,4 32,0 55,8 C68,15 70,32 65,48 C60,58 42,62 25,55 C10,48 2,30 5,12Z', fill: '#1a5276' }}
                ]
            },
            {
                id: 'sj-f-head', label: 'Head & Crest', layer: 4, width: 58, height: 78,
                elements: [
                    { tag: 'circle', attrs: { cx: 29, cy: 48, r: 26, fill: '#1a1a2a' }},
                    { tag: 'path', attrs: { d: 'M22,26 L29,0 L36,26Z', fill: '#1a1a2a' }}
                ]
            },
            {
                id: 'sj-f-beak', label: 'Beak', layer: 5, width: 20, height: 20,
                elements: [
                    { tag: 'path', attrs: { d: 'M4,2 L16,2 L10,18Z', fill: '#111' }}
                ]
            },
            {
                id: 'sj-f-leye', label: 'Left Eye', layer: 6, width: 14, height: 14,
                elements: [
                    { tag: 'circle', attrs: { cx: 7, cy: 7, r: 6, fill: '#2c2c2c' }},
                    { tag: 'circle', attrs: { cx: 6, cy: 7, r: 2.5, fill: '#111' }}
                ]
            },
            {
                id: 'sj-f-reye', label: 'Right Eye', layer: 6, width: 14, height: 14,
                elements: [
                    { tag: 'circle', attrs: { cx: 7, cy: 7, r: 6, fill: '#2c2c2c' }},
                    { tag: 'circle', attrs: { cx: 8, cy: 7, r: 2.5, fill: '#111' }}
                ]
            }
        ]
    }
};
