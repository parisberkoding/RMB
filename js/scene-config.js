// =============================================================================
// GEOTHERMAL AR - SCENE CONFIGURATION (REFACTORED)
// =============================================================================
// Optimized for proper AR display on Hiro marker
// - Scale adjusted to fit marker perfectly
// - Rotation fixed so mantle stays at bottom
// - Y-axis rotation for horizontal view changes
// - Proper bird's eye view angles
// =============================================================================

window.SCENE_CONFIG = [
    // =========================================================================
    // SCENE 1: INTRO / WELCOME - 2.5D Bird's Eye View
    // =========================================================================
    {
        id: 1,
        title: "Welcome",
        subtitle: "Energi Bersih dari Perut Bumi",
        
        description: "Selamat datang di Geothermal AR! Energi panas bumi adalah sumber energi terbarukan yang dihasilkan dari panas alami bumi. Mari kita jelajahi bagaimana energi ini dimanfaatkan untuk menghasilkan listrik ramah lingkungan.",
        
        components: [
            {
                name: "full-geothermal-plant",
                path: "assets/FullVersion.glb",
                position: { x: 0, y: 0, z: 0 },
                rotation: { x: 0, y: 0, z: 0 },  // Flat on marker, rotasi Y untuk horizontal
                scale: { x: 0.15, y: 0.15, z: 0.15 },  // Lebih kecil agar fit
                animation: null
            }
        ],
        
        camera: {
            position: { x: 0, y: 1.5, z: 3 },  // Bird's eye dari atas
            duration: 2000
        }
    },
    
    // =========================================================================
    // SCENE 2: INJECTION WELL (Sisi Kanan - Rotasi Y: 90)
    // =========================================================================
    {
        id: 2,
        title: "Injection Well",
        subtitle: "Pengembalian Air ke Reservoir",
        
        description: "Injection Well terletak di sisi kanan sistem. Air yang telah digunakan dikembalikan ke reservoir panas bumi melalui sumur injeksi. Proses ini menjaga keseimbangan tekanan dan memastikan sumber panas bumi tetap berkelanjutan.",
        
        components: [
            {
                name: "full-geothermal-plant",
                path: "assets/FullVersion.glb",
                position: { x: 0, y: 0, z: 0 },
                rotation: { x: 0, y: 90, z: 0 },  // Rotasi Y 90° untuk sisi kanan
                scale: { x: 0.15, y: 0.15, z: 0.15 },
                animation: null
            }
        ],
        
        camera: {
            position: { x: 1.5, y: 0.8, z: 2 },  // View dari kanan
            duration: 2000
        }
    },
    
    // =========================================================================
    // SCENE 3: PRODUCTION WELL (Sisi Kiri - Rotasi Y: -90 atau 270)
    // =========================================================================
    {
        id: 3,
        title: "Production Well",
        subtitle: "Pengambilan Uap Panas Bumi",
        
        description: "Production Well terletak di sisi kiri sistem. Di kedalaman bumi terdapat reservoir panas dengan suhu 150-350°C. Uap panas bertekanan tinggi naik melalui sumur produksi untuk menggerakkan turbin pembangkit listrik.",
        
        components: [
            {
                name: "full-geothermal-plant",
                path: "assets/FullVersion.glb",
                position: { x: 0, y: 0, z: 0 },
                rotation: { x: 0, y: -90, z: 0 },  // Rotasi Y -90° untuk sisi kiri
                scale: { x: 0.15, y: 0.15, z: 0.15 },
                animation: null
            }
        ],
        
        camera: {
            position: { x: -1.5, y: 0.8, z: 2 },  // View dari kiri
            duration: 2000
        }
    },
    
    // =========================================================================
    // SCENE 4: EARTH LAYERS (Mantle di Bawah - Rotasi Y: 180)
    // =========================================================================
    {
        id: 4,
        title: "Lapisan Bumi",
        subtitle: "Dapur Panas di Perut Bumi",
        
        description: "Di kedalaman bumi terdapat lapisan-lapisan dengan suhu sangat tinggi. Kerak bumi, mantel, dan inti bumi menghasilkan panas luar biasa. Suhu inti bumi mencapai 5000°C - lebih panas dari permukaan matahari!",
        
        components: [
            {
                name: "full-geothermal-plant",
                path: "assets/FullVersion.glb",
                position: { x: 0, y: 0, z: 0 },
                rotation: { x: 0, y: 180, z: 0 },  // Rotasi Y 180° untuk lihat mantle
                scale: { x: 0.15, y: 0.15, z: 0.15 },
                animation: null
            }
        ],
        
        camera: {
            position: { x: 0, y: 0.5, z: 2.5 },  // Close-up ke earth layers
            duration: 2000
        }
    },
    
    // =========================================================================
    // SCENE 5: TURBINE WITH ANIMATION - Bird's Eye View
    // =========================================================================
    {
        id: 5,
        title: "Turbin Pembangkit",
        subtitle: "Mengubah Uap Menjadi Listrik",
        
        description: "Uap panas bumi bertekanan tinggi menggerakkan bilah turbin dengan kecepatan tinggi. Putaran turbin menggerakkan generator yang mengubah energi kinetik menjadi energi listrik. Satu turbin dapat menghasilkan hingga 100 megawatt listrik!",
        
        components: [
            // Base model (static)
            {
                name: "full-geothermal-plant",
                path: "assets/FullVersion.glb",
                position: { x: 0, y: 0, z: 0 },
                rotation: { x: 0, y: 45, z: 0 },  // Rotasi Y 45° untuk diagonal view
                scale: { x: 0.15, y: 0.15, z: 0.15 },
                animation: null
            },
            // Animated turbine fan
            {
                name: "turbine-fan-animated",
                path: "assets/Turbine_Fan.glb",
                position: { x: 0, y: 0.2, z: 0 },  // Slightly above base
                rotation: { x: 0, y: 45, z: 0 },
                scale: { x: 0.15, y: 0.15, z: 0.15 },
                
                animation: {
                    type: "rotation",
                    axis: "y",
                    speed: 2.0
                }
            }
        ],
        
        camera: {
            position: { x: 0, y: 1.5, z: 2.5 },  // 2.5D angle untuk lihat turbin
            duration: 2000
        }
    },
    
    // =========================================================================
    // SCENE 6: COOLING TOWER - Bird's Eye View
    // =========================================================================
    {
        id: 6,
        title: "Menara Pendingin",
        subtitle: "Sistem Pendingin & Kondensasi",
        
        description: "Setelah melewati turbin, uap panas perlu didinginkan agar dapat digunakan kembali. Cooling tower menggunakan udara alami untuk mengondensasi uap menjadi air. Sistem ini memastikan tidak ada limbah dan menciptakan siklus tertutup yang ramah lingkungan.",
        
        components: [
            {
                name: "full-geothermal-plant",
                path: "assets/FullVersion.glb",
                position: { x: 0, y: 0, z: 0 },
                rotation: { x: 0, y: -45, z: 0 },  // Rotasi Y -45° untuk angle cooling tower
                scale: { x: 0.15, y: 0.15, z: 0.15 },
                animation: null
            }
        ],
        
        camera: {
            position: { x: 1, y: 1.2, z: 2.5 },  // 2.5D angle ke cooling tower
            duration: 2000
        }
    },
    
    // =========================================================================
    // SCENE 7: OUTRO - FULL CYCLE dengan Rotasi Slow
    // =========================================================================
    {
        id: 7,
        title: "Masa Depan Hijau",
        subtitle: "Energi Berkelanjutan untuk Generasi Mendatang",
        
        description: "Pembangkit listrik tenaga panas bumi adalah solusi energi bersih masa depan. Tanpa emisi karbon, tersedia 24/7, dan tidak bergantung cuaca. Indonesia memiliki 40% potensi panas bumi dunia - saatnya memanfaatkan energi dari perut bumi untuk masa depan berkelanjutan!",
        
        components: [
            {
                name: "full-geothermal-plant",
                path: "assets/FullVersion.glb",
                position: { x: 0, y: 0, z: 0 },
                rotation: { x: 0, y: 0, z: 0 },  // Back to front view
                scale: { x: 0.15, y: 0.15, z: 0.15 },
                animation: null
            },
            {
                name: "turbine-fan-animated",
                path: "assets/Turbine_Fan.glb",
                position: { x: 0, y: 0.2, z: 0 },
                rotation: { x: 0, y: 0, z: 0 },
                scale: { x: 0.15, y: 0.15, z: 0.15 },
                animation: {
                    type: "rotation",
                    axis: "y",
                    speed: 1.5  // Slower rotation for finale
                }
            }
        ],
        
        camera: {
            position: { x: 0, y: 2, z: 4 },  // Wide bird's eye shot
            duration: 3000
        }
    }
];

// =============================================================================
// CONFIGURATION HELPERS
// =============================================================================

/**
 * Get scene by ID
 */
window.getSceneById = function(id) {
    return window.SCENE_CONFIG.find(scene => scene.id === id) || null;
};

/**
 * Get total number of scenes
 */
window.getTotalScenes = function() {
    return window.SCENE_CONFIG.length;
};

/**
 * Validate scene configuration
 */
window.validateSceneConfig = function() {
    const requiredFields = ['id', 'title', 'subtitle', 'components', 'camera'];
    
    for (let i = 0; i < window.SCENE_CONFIG.length; i++) {
        const scene = window.SCENE_CONFIG[i];
        
        for (const field of requiredFields) {
            if (field === 'audio') continue; // Audio is optional
            if (!scene.hasOwnProperty(field)) {
                console.error(`❌ Scene ${i + 1} missing required field: ${field}`);
                return false;
            }
        }
    }
    
    console.log('✅ Scene configuration is valid');
    return true;
};

// Auto-validate on load
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    window.validateSceneConfig();
}