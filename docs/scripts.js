gsap.registerPlugin(ScrollTrigger);

// --- 1. Initialization: Smooth Scrolling (Lenis) ---
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

// --- 2. Custom Cursor ---
const cursor = document.getElementById('custom-cursor');
let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

gsap.to({}, {
    duration: 0.016,
    repeat: -1,
    onRepeat: () => {
        cursorX += (mouseX - cursorX) * 0.15;
        cursorY += (mouseY - cursorY) * 0.15;
        gsap.set(cursor, {
            x: cursorX,
            y: cursorY
        });
    }
});

// --- 3. HUD: FPS Counter ---
const fpsDisplay = document.getElementById('fps-counter');
let lastTime = performance.now();
let frames = 0;

function updateFPS() {
    const now = performance.now();
    frames++;
    if (now > lastTime + 1000) {
        const fps = Math.round((frames * 1000) / (now - lastTime));
        fpsDisplay.innerText = fps.toFixed(1);
        lastTime = now;
        frames = 0;
    }
    requestAnimationFrame(updateFPS);
}
updateFPS();

// --- 4. Horizontal Scroll Gallery ---
const horizontalSection = document.querySelector('.horizontal-scroll-container');
const horizontalContent = document.querySelector('.horizontal-scroll-content');

if (horizontalSection && horizontalContent) {
    const getScrollAmount = () => {
        let contentWidth = horizontalContent.offsetWidth;
        return -(contentWidth - window.innerWidth + (window.innerWidth * 0.1)); // 10vw padding
    };

    gsap.to(horizontalContent, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
            trigger: "#masterpieces",
            start: "top 20%",
            end: () => `+=${horizontalContent.offsetWidth}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
        }
    });
}

// --- 5. Video Scrubbing Logic ---
const scrubVideo = document.getElementById('scrub-video');
const scrubSection = document.querySelector('.scrub-section');

if (scrubVideo && scrubSection) {
    // Ensure video metadata is loaded before setting up ScrollTrigger
    scrubVideo.addEventListener('loadedmetadata', () => {
        const duration = scrubVideo.duration;
        
        gsap.to(scrubVideo, {
            currentTime: duration,
            ease: "none",
            scrollTrigger: {
                trigger: scrubSection,
                start: "top top",
                end: "bottom bottom",
                scrub: 0.5,
                pin: true,
            }
        });
    });

    // Text animations synced with video scrub
    const tlText = gsap.timeline({
        scrollTrigger: {
            trigger: scrubSection,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
        }
    });

    tlText.to("#scrub-text-1", { opacity: 1, y: 0, duration: 1 })
          .to("#scrub-text-1", { opacity: 0, y: -50, duration: 1 }, "+=1")
          .to("#scrub-text-2", { opacity: 1, y: 0, duration: 1 })
          .to("#scrub-text-2", { opacity: 0, y: -50, duration: 1 }, "+=1");
}

// --- 6. Text Entrance Animations ---
const revealElements = document.querySelectorAll('.reveal-up');
revealElements.forEach((el) => {
    gsap.from(el, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none none"
        }
    });
});

// --- 7. Gallery Card Hover Effect (3D Tilt) ---
const cards = document.querySelectorAll('.gallery-card');
cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        gsap.to(card, {
            rotationX: rotateX,
            rotationY: rotateY,
            scale: 1.02,
            duration: 0.5,
            ease: "power2.out"
        });
    });
    
    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            duration: 0.5,
            ease: "power2.out"
        });
    });
});

console.log("Photomosaic Engine: Visuals Synchronized.");
