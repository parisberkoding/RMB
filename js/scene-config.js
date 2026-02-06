// =============================================================================
// GEOTHERMAL AR - SCENE CONFIGURATION (SIMPLE & MOBILE-FIRST)
// =============================================================================
// Konfigurasi sederhana yang fokus pada AR mobile yang benar-benar work
// - Model FLAT di marker (rotation 0,0,0 atau minimal rotation)
// - Scale kecil agar fit
// - Camera tidak perlu complex positioning
// =============================================================================

window.SCENE_CONFIG = [
    // =========================================================================
    // SCENE 1: INTRO - Full Plant View (Depan)
    // =========================================================================
    {
        id: 1,
        title: "Selamat Datang",
        subtitle: "Pembangkit Listrik Tenaga Panas Bumi",
        
        description: "Selamat datang di Geothermal AR! Mari kita eksplorasi bagaimana energi panas bumi diubah menjadi listrik ramah lingkungan.",
        
        components: [
            {
                name: "full-geothermal-plant",
                path: "assets/FullVersion.glb",
                position: { x: 0, y: 0, z: 0 },
                rotation: { x: 0, y: 0, z: 0 },  // FLAT - tampak depan
                scale: { x: 0.12, y: 0.12, z: 0.12 },
                animation: null
            }
        ]
    },
    
    // =========================================================================
    // SCENE 2: Production Well (Kiri) - Y: -90
    // =========================================================================
    {
        id: 2,
        title: "Production Well",
        subtitle: "Sumur Produksi Uap Panas",
        
        description: "Production Well di sisi kiri mengebor hingga 2-3 km ke dalam bumi untuk mengambil uap panas bersuhu 150-350°C. Uap ini naik ke permukaan untuk menggerakkan turbin.",
        
        components: [
            {
                name: "full-geothermal-plant",
                path: "assets/FullVersion.glb",
                position: { x: 0, y: 0, z: 0 },
                rotation: { x: 0, y: -90, z: 0 },  // Putar kiri 90 derajat
                scale: { x: 0.12, y: 0.12, z: 0.12 },
                animation: null
            }
        ]
    },
    
    // =========================================================================
    // SCENE 3: Turbine & Generator (dengan animasi)
    // =========================================================================
    {
        id: 3,
        title: "Turbin & Generator",
        subtitle: "Konversi Energi Panas ke Listrik",
        
        description: "Uap panas menggerakkan turbin dengan kecepatan tinggi. Turbin terhubung dengan generator yang mengubah energi kinetik menjadi energi listrik hingga 100 MW!",
        
        components: [
            {
                name: "full-geothermal-plant",
                path: "assets/FullVersion.glb",
                position: { x: 0, y: 0, z: 0 },
                rotation: { x: 0, y: 0, z: 0 },
                scale: { x: 0.12, y: 0.12, z: 0.12 },
                animation: null
            },
            {
                name: "turbine-fan-animated",
                path: "assets/Turbine_Fan.glb",
                position: { x: 0, y: 0.15, z: 0 },
                rotation: { x: 0, y: 0, z: 0 },
                scale: { x: 0.12, y: 0.12, z: 0.12 },
                animation: {
                    type: "rotation",
                    axis: "y",
                    speed: 2.0
                }
            }
        ]
    },
    
    // =========================================================================
    // SCENE 4: Injection Well (Kanan) - Y: 90
    // =========================================================================
    {
        id: 4,
        title: "Injection Well",
        subtitle: "Sumur Injeksi Air Kembali",
        
        description: "Injection Well di sisi kanan mengembalikan air ke reservoir bumi. Sistem tertutup ini menjaga tekanan reservoir dan memastikan energi panas bumi tetap berkelanjutan.",
        
        components: [
            {
                name: "full-geothermal-plant",
                path: "assets/FullVersion.glb",
                position: { x: 0, y: 0, z: 0 },
                rotation: { x: 0, y: 90, z: 0 },  // Putar kanan 90 derajat
                scale: { x: 0.12, y: 0.12, z: 0.12 },
                animation: null
            }
        ]
    },
    
    // =========================================================================
    // SCENE 5: Cooling Tower (Belakang) - Y: 180
    // =========================================================================
    {
        id: 5,
        title: "Cooling Tower",
        subtitle: "Sistem Pendingin Uap",
        
        description: "Cooling tower mendinginkan uap panas setelah melewati turbin. Uap dikondensasi menjadi air untuk dikembalikan ke reservoir melalui injection well.",
        
        components: [
            {
                name: "full-geothermal-plant",
                path: "assets/FullVersion.glb",
                position: { x: 0, y: 0, z: 0 },
                rotation: { x: 0, y: 180, z: 0 },  // Putar 180 - tampak belakang
                scale: { x: 0.12, y: 0.12, z: 0.12 },
                animation: null
            }
        ]
    },
    
    // =========================================================================
    // SCENE 6: Earth Layers (Lapisan Bumi)
    // =========================================================================
    {
        id: 6,
        title: "Lapisan Bumi",
        subtitle: "Sumber Panas dari Perut Bumi",
        
        description: "Di kedalaman 2-3 km terdapat reservoir panas bumi dengan suhu mencapai 350°C. Panas ini berasal dari inti bumi yang suhunya mencapai 5000°C!",
        
        components: [
            {
                name: "full-geothermal-plant",
                path: "assets/FullVersion.glb",
                position: { x: 0, y: 0, z: 0 },
                rotation: { x: 0, y: 45, z: 0 },  // Diagonal untuk lihat earth layers
                scale: { x: 0.12, y: 0.12, z: 0.12 },
                animation: null
            }
        ]
    },
    
    // =========================================================================
    // SCENE 7: Full Cycle - Overview dengan Animasi
    // =========================================================================
    {
        id: 7,
        title: "Siklus Lengkap",
        subtitle: "Energi Bersih & Berkelanjutan",
        
        description: "Pembangkit panas bumi adalah energi terbarukan yang bersih, tersedia 24/7, dan tidak bergantung cuaca. Indonesia memiliki 40% potensi panas bumi dunia!",
        
        components: [
            {
                name: "full-geothermal-plant",
                path: "assets/FullVersion.glb",
                position: { x: 0, y: 0, z: 0 },
                rotation: { x: 0, y: 0, z: 0 },
                scale: { x: 0.12, y: 0.12, z: 0.12 },
                animation: null
            },
            {
                name: "turbine-fan-animated",
                path: "assets/Turbine_Fan.glb",
                position: { x: 0, y: 0.15, z: 0 },
                rotation: { x: 0, y: 0, z: 0 },
                scale: { x: 0.12, y: 0.12, z: 0.12 },
                animation: {
                    type: "rotation",
                    axis: "y",
                    speed: 1.5
                }
            }
        ]
    }
];

// =============================================================================
// HELPERS
// =============================================================================

window.getSceneById = function(id) {
    return window.SCENE_CONFIG.find(scene => scene.id === id) || null;
};

window.getTotalScenes = function() {
    return window.SCENE_CONFIG.length;
};

console.log('✅ Scene config loaded:', window.SCENE_CONFIG.length, 'scenes');