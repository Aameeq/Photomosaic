gsap.registerPlugin(ScrollTrigger);

// --- Initialization ---
const lenis = new Lenis();
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

const flashlight = document.getElementById('flashlight-mask');
const cursor = document.getElementById('custom-cursor');
const dot = cursor.querySelector('.cursor-dot');
const cloud = document.getElementById('tile-cloud');
const video = document.getElementById('zoom-video');

// --- Cursor & Flashlight Tracking ---
document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    
    // Update Mask
    flashlight.style.setProperty('--cursor-x', `${x}px`);
    flashlight.style.setProperty('--cursor-y', `${y}px`);
    
    // Update Custom Cursor
    gsap.to(dot, { x, y, duration: 0.1 });
});

// --- Tile Cloud Generation ---
const sampleImages = [
    'assets/mosaics/mosaic (1).jpg',
    'assets/mosaics/mosaic (2).jpg',
    'assets/mosaics/mosaic (3).jpg',
    'assets/mosaics/mosaic.jpg',
    'assets/samples/mosaic_high_fidelity.jpg'
];

function createTileCloud() {
    for (let i = 0; i < 60; i++) {
        const tile = document.createElement('img');
        tile.src = sampleImages[Math.floor(Math.random() * sampleImages.length)];
        tile.className = 'tile';
        
        // Random Position & Rotation
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const r = (Math.random() - 0.5) * 40;
        
        gsap.set(tile, {
            left: `${x}%`,
            top: `${y}%`,
            rotation: r,
            scale: 0.5 + Math.random() * 0.5
        });
        
        cloud.appendChild(tile);
        
        // Appear with stagger
        gsap.to(tile, {
            opacity: 0.15,
            duration: 1.5,
            delay: Math.random() * 2,
            ease: "power2.inOut"
        });
    }
}

createTileCloud();

// --- Interactive Tile Hover (The "Awakening") ---
document.addEventListener('mousemove', (e) => {
    const tiles = document.querySelectorAll('.tile');
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    tiles.forEach(tile => {
        const rect = tile.getBoundingClientRect();
        const tileX = rect.left + rect.width / 2;
        const tileY = rect.top + rect.height / 2;
        
        const dist = Math.hypot(mouseX - tileX, mouseY - tileY);
        
        if (dist < 200) {
            tile.classList.add('active');
            gsap.to(tile, {
                scale: 1.2,
                rotation: 0,
                duration: 0.4,
                overwrite: 'auto'
            });
        } else {
            tile.classList.remove('active');
            gsap.to(tile, {
                scale: 0.8,
                duration: 0.8,
                overwrite: 'auto'
            });
        }
    });
});

// --- Video Scrubbing Logic ---
video.addEventListener('loadedmetadata', () => {
    const scrollTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: "#video-scrub-section",
            start: "top top",
            end: "bottom bottom",
            scrub: 1, // Smoothing
            pin: true,
            onUpdate: (self) => {
                // Update HUD based on scroll
                if (self.progress > 0.1) {
                    document.getElementById('hud-status').innerText = "CALIBRATING CHROMATIC MAPPING...";
                }
                if (self.progress > 0.5) {
                    document.getElementById('hud-status').innerText = "RENDERING 4K TILES...";
                }
                if (self.progress > 0.9) {
                    document.getElementById('hud-status').innerText = "FINALIZING MASTERPIECE.";
                }
            }
        }
    });

    scrollTimeline.to(video, {
        currentTime: video.duration || 0,
        ease: "none"
    });
});

// --- Content Reveals ---
gsap.utils.toArray(".reveal-text").forEach(text => {
    gsap.from(text, {
        scrollTrigger: {
            trigger: text,
            start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });
});

// --- Hero Text Animation ---
gsap.from(".hero-text > *", {
    y: 30,
    opacity: 0,
    stagger: 0.2,
    duration: 1.2,
    ease: "power4.out",
    delay: 0.5
});
