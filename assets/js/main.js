// ============================================
// Loading Screen
// ============================================
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loader').classList.add('done');
        initHeroAnimations();
    }, 1200);
});

// ============================================
// Custom Cursor
// ============================================
(() => {
    const cursor = document.getElementById('cursor');
    const follower = document.getElementById('cursor-follower');
    if (!cursor || !follower) return;

    let cx = 0, cy = 0;
    let fx = 0, fy = 0;
    let mouseX = 0, mouseY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateCursor() {
        cx += (mouseX - cx) * 0.2;
        cy += (mouseY - cy) * 0.2;
        fx += (mouseX - fx) * 0.08;
        fy += (mouseY - fy) * 0.08;

        cursor.style.left = cx + 'px';
        cursor.style.top = cy + 'px';
        follower.style.left = fx + 'px';
        follower.style.top = fy + 'px';

        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Hover states
    const interactives = document.querySelectorAll('a, button, .btn, .tilt-card, .marquee-item');
    interactives.forEach((el) => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('hover');
            follower.classList.add('hover');
        });
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
            follower.classList.remove('hover');
        });
    });
})();

// ============================================
// Magnetic Elements
// ============================================
(() => {
    const magnetics = document.querySelectorAll('.magnetic');

    magnetics.forEach((el) => {
        const strength = parseFloat(el.dataset.strength) || 15;

        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            el.style.transform = `translate(${x / strength * 2}px, ${y / strength * 2}px)`;
        });

        el.addEventListener('mouseleave', () => {
            el.style.transform = 'translate(0, 0)';
            el.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
            setTimeout(() => { el.style.transition = ''; }, 400);
        });
    });
})();

// ============================================
// Hero Animations
// ============================================
function initHeroAnimations() {
    // Reveal text
    document.querySelectorAll('.hero .reveal-text').forEach((el, i) => {
        setTimeout(() => el.classList.add('visible'), 200 + i * 150);
    });

    // Character animation
    document.querySelectorAll('.hero-name .char').forEach((char, i) => {
        setTimeout(() => char.classList.add('visible'), 300 + i * 60);
    });

    // Fade ups in hero
    document.querySelectorAll('.hero .fade-up').forEach((el, i) => {
        setTimeout(() => el.classList.add('visible'), 800 + i * 150);
    });
}

// ============================================
// Scroll-triggered Animations
// ============================================
const fadeObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    },
    { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
);

// Only observe elements NOT in hero (hero is handled separately)
document.querySelectorAll('.section .fade-up, .footer.fade-up').forEach((el) => {
    fadeObserver.observe(el);
});

// Reveal text in sections
document.querySelectorAll('.section .reveal-text').forEach((el) => {
    fadeObserver.observe(el);
});

// ============================================
// Stat Counter Animation
// ============================================
const statObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.dataset.count);
                const prefix = el.dataset.prefix || '';
                const suffix = el.dataset.suffix || '';
                let current = 0;
                const increment = target / 40;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    el.textContent = prefix + Math.floor(current) + suffix;
                }, 30);
                statObserver.unobserve(el);
            }
        });
    },
    { threshold: 0.5 }
);

document.querySelectorAll('.stat-number').forEach((el) => statObserver.observe(el));

// ============================================
// 3D Tilt Cards
// ============================================
(() => {
    const cards = document.querySelectorAll('.tilt-card');

    cards.forEach((card) => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;

            card.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) scale3d(1.02, 1.02, 1.02)`;

            // Update glow position for exp cards
            const glow = card.querySelector('.exp-card-glow');
            if (glow) {
                glow.style.setProperty('--mouse-x', (e.clientX - rect.left) + 'px');
                glow.style.setProperty('--mouse-y', (e.clientY - rect.top) + 'px');
            }
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(800px) rotateY(0) rotateX(0) scale3d(1, 1, 1)';
            card.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
            setTimeout(() => { card.style.transition = ''; }, 500);
        });
    });
})();

// ============================================
// Side Nav Active State
// ============================================
(() => {
    const sections = document.querySelectorAll('section[id]');
    const dots = document.querySelectorAll('.side-dot');

    const sectionObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    dots.forEach((d) => d.classList.remove('active'));
                    const activeDot = document.querySelector(`.side-dot[data-section="${entry.target.id}"]`);
                    if (activeDot) activeDot.classList.add('active');
                }
            });
        },
        { threshold: 0.3, rootMargin: '-10% 0px -60% 0px' }
    );

    sections.forEach((s) => sectionObserver.observe(s));
})();

// ============================================
// Nav Scroll Effect
// ============================================
(() => {
    const nav = document.getElementById('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
})();

// ============================================
// Smooth Scroll
// ============================================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href === '#') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
