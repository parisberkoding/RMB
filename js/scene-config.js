// =============================================================================
// GEOTHERMAL AR - SCENE CONFIGURATION
// =============================================================================
// This file defines all scenes in the AR experience.
// Each scene contains:
// - Unique ID and metadata (title, subtitle)
// - Audio narration path
// - 3D model components with transforms and animations
// - Camera positioning for optimal viewing
// =============================================================================

window.SCENE_CONFIG = [
    // =========================================================================
    // SCENE 1: INTRO / WELCOME
    // =========================================================================
    {
        id: 1,
        title: "Welcome",
        subtitle: "Energi Bersih dari Perut Bumi",
        audio: "assets/audio/intro.mp3",
        
        // Scene description for info card
        description: "Selamat datang di Geothermal AR! Energi panas bumi adalah sumber energi terbarukan yang dihasilkan dari panas alami bumi. Mari kita jelajahi bagaimana energi ini dimanfaatkan untuk menghasilkan listrik ramah lingkungan.",
        
        components: [
            {
                name: "full-geothermal-plant",
                path: "assets/FullVersion.glb",
                position: { x: 0, y: 0.5, z: 0 },
                rotation: { x: -90, y: 0, z: 0 },
                scale: { x: 0.3, y: 0.3, z: 0.3 },
                animation: null
            }
        ],
        
        camera: {
            position: { x: 0, y: 1.5, z: 5 },
            duration: 2000
        }
    },
    
    // =========================================================================
    // SCENE 2: EARTH LAYER (Focus camera ke bagian bumi)
    // =========================================================================
    {
        id: 2,
        title: "Lapisan Bumi",
        subtitle: "Dapur Panas di Perut Bumi",
        audio: "assets/audio/earth_layer.mp3",
        
        description: "Di kedalaman bumi terdapat lapisan-lapisan dengan suhu sangat tinggi. Kerak bumi, mantel, dan inti bumi menghasilkan panas luar biasa. Suhu inti bumi mencapai 5000°C - lebih panas dari permukaan matahari!",
        
        components: [
            {
                name: "full-geothermal-plant",
                path: "assets/FullVersion.glb",
                position: { x: 0, y: 0.5, z: 0 },
                rotation: { x: -90, y: 0, z: 0 },
                scale: { x: 0.3, y: 0.3, z: 0.3 },
                animation: null
            }
        ],
        
        camera: {
            position: { x: 0, y: -1, z: 3 },  // Focus ke bawah (earth layers)
            duration: 2000
        }
    },
    
    // =========================================================================
    // SCENE 3: TURBINE WITH ANIMATION
    // =========================================================================
    {
        id: 3,
        title: "Turbin Pembangkit",
        subtitle: "Mengubah Uap Menjadi Listrik",
        audio: "assets/audio/turbine.mp3",
        
        description: "Uap panas bumi bertekanan tinggi menggerakkan bilah turbin dengan kecepatan tinggi. Putaran turbin menggerakkan generator yang mengubah energi kinetik menjadi energi listrik. Satu turbin dapat menghasilkan hingga 100 megawatt listrik!",
        
        components: [
            // Base model (static)
            {
                name: "full-geothermal-plant",
                path: "assets/FullVersion.glb",
                position: { x: 0, y: 0.5, z: 0 },
                rotation: { x: -90, y: 0, z: 0 },
                scale: { x: 0.3, y: 0.3, z: 0.3 },
                animation: null
            },
            // Animated turbine fan (overlay di posisi yang sama)
            {
                name: "turbine-fan-animated",
                path: "assets/Turbine_Fan.glb",
                position: { x: 0, y: 0.8, z: 0 },
                rotation: { x: -90, y: 0, z: 0 },
                scale: { x: 0.3, y: 0.3, z: 0.3 },
                
                animation: {
                    type: "rotation",
                    axis: "y",
                    speed: 2.0
                }
            }
        ],
        
        camera: {
            position: { x: 0, y: 0, z: 2.5 },  // Close-up ke turbine
            duration: 2000
        }
    },
    
    // =========================================================================
    // SCENE 4: COOLING TOWER
    // =========================================================================
    {
        id: 4,
        title: "Menara Pendingin",
        subtitle: "Sistem Pendingin & Kondensasi",
        audio: "assets/audio/cooling_tower.mp3",
        
        description: "Setelah melewati turbin, uap panas perlu didinginkan agar dapat digunakan kembali. Cooling tower menggunakan udara alami untuk mengondensasi uap menjadi air. Sistem ini memastikan tidak ada limbah dan menciptakan siklus tertutup yang ramah lingkungan.",
        
        components: [
            {
                name: "full-geothermal-plant",
                path: "assets/FullVersion.glb",
                position: { x: 0, y: 0.5, z: 0 },
                rotation: { x: -90, y: 0, z: 0 },
                scale: { x: 0.3, y: 0.3, z: 0.3 },
                animation: null
            }
        ],
        
        camera: {
            position: { x: 2, y: 1, z: 4 },  // Focus ke cooling tower
            duration: 2000
        }
    },
    
    // =========================================================================
    // SCENE 5: OUTRO - FULL VIEW
    // =========================================================================
    {
        id: 5,
        title: "Masa Depan Hijau",
        subtitle: "Energi Berkelanjutan untuk Generasi Mendatang",
        audio: "assets/audio/outro.mp3",
        
        description: "Pembangkit listrik tenaga panas bumi adalah solusi energi bersih masa depan. Tanpa emisi karbon, tersedia 24/7, dan tidak bergantung cuaca. Indonesia memiliki 40% potensi panas bumi dunia - saatnya memanfaatkan energi dari perut bumi untuk masa depan berkelanjutan!",
        
        components: [
            {
                name: "full-geothermal-plant",
                path: "assets/FullVersion.glb",
                position: { x: 0, y: 0.5, z: 0 },
                rotation: { x: -90, y: 0, z: 0 },
                scale: { x: 0.2, y: 0.2, z: 0.2 },
                animation: null
            },
            {
                name: "turbine-fan-animated",
                path: "assets/Turbine_Fan.glb",
                position: { x: 0, y: 0.8, z: 0 },
                rotation: { x: -90, y: 0, z: 0 },
                scale: { x: 0.2, y: 0.2, z: 0.2 },
                animation: {
                    type: "rotation",
                    axis: "y",
                    speed: 2.0
                }
            }
        ],
        
        camera: {
            position: { x: 0, y: 2, z: 6 },  // Wide shot
            duration: 3000
        }
    }
];

// =============================================================================
// CONFIGURATION HELPERS
// =============================================================================

/**
 * Get scene by ID
 * @param {number} id - Scene ID
 * @returns {object|null} Scene configuration object
 */
window.getSceneById = function(id) {
    return window.SCENE_CONFIG.find(scene => scene.id === id) || null;
};

/**
 * Get total number of scenes
 * @returns {number} Total scene count
 */
window.getTotalScenes = function() {
    return window.SCENE_CONFIG.length;
};

/**
 * Validate scene configuration
 * Checks if all required fields are present
 * @returns {boolean} True if configuration is valid
 */
window.validateSceneConfig = function() {
    const requiredFields = ['id', 'title', 'subtitle', 'audio', 'components', 'camera'];
    
    for (let i = 0; i < window.SCENE_CONFIG.length; i++) {
        const scene = window.SCENE_CONFIG[i];
        
        for (const field of requiredFields) {
            if (!scene.hasOwnProperty(field)) {
                console.error(`❌ Scene ${i + 1} missing required field: ${field}`);
                return false;
            }
        }
    }
    
    console.log('✅ Scene configuration is valid');
    return true;
};

// Auto-validate on load (development only)
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    window.validateSceneConfig();
}