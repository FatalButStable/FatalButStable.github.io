// ============================================
// Global mouse state
// ============================================
let mouseX = -100, mouseY = -100;
let smoothMouseX = -100, smoothMouseY = -100;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// ============================================
// Loading Screen
// ============================================
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loader').classList.add('done');
        setTimeout(initHeroAnimations, 200);
    }, 1200);
});

// ============================================
// Custom Cursor + Sparkle Trail
// ============================================
(() => {
    const cursor = document.getElementById('cursor');
    const follower = document.getElementById('cursor-follower');
    if (!cursor || !follower) return;

    let cx = 0, cy = 0;
    let fx = 0, fy = 0;

    // Sparkle trail
    const sparkleContainer = document.createElement('div');
    sparkleContainer.className = 'sparkle-container';
    document.body.appendChild(sparkleContainer);

    let sparkleThrottle = 0;
    const sparkleChars = ['✦', '✧', '⋆', '✵', '⊹', '✶'];

    function createSparkle(x, y) {
        const sparkle = document.createElement('span');
        sparkle.className = 'sparkle';
        sparkle.textContent = sparkleChars[Math.floor(Math.random() * sparkleChars.length)];
        sparkle.style.left = x + 'px';
        sparkle.style.top = y + 'px';
        sparkle.style.setProperty('--dx', (Math.random() - 0.5) * 60 + 'px');
        sparkle.style.setProperty('--dy', (Math.random() - 0.5) * 60 - 20 + 'px');
        sparkle.style.fontSize = (Math.random() * 10 + 6) + 'px';
        sparkle.style.color = ['#8b5cf6', '#06b6d4', '#f472b6', '#a78bfa', '#22d3ee'][
            Math.floor(Math.random() * 5)
        ];
        sparkleContainer.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 800);
    }

    function animateCursor() {
        cx += (mouseX - cx) * 0.2;
        cy += (mouseY - cy) * 0.2;
        fx += (mouseX - fx) * 0.08;
        fy += (mouseY - fy) * 0.08;

        cursor.style.left = cx + 'px';
        cursor.style.top = cy + 'px';
        follower.style.left = fx + 'px';
        follower.style.top = fy + 'px';

        // Spawn sparkles based on mouse speed
        const speed = Math.sqrt((mouseX - cx) ** 2 + (mouseY - cy) ** 2);
        sparkleThrottle++;
        if (speed > 3 && sparkleThrottle % 3 === 0) {
            createSparkle(cx + (Math.random() - 0.5) * 20, cy + (Math.random() - 0.5) * 20);
        }

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
// Text Scramble Effect
// ============================================
class TextScramble {
    constructor(el) {
        this.el = el;
        this.chars = '!<>-_\\/[]{}—=+*^?#________';
        this.frame = 0;
        this.queue = [];
        this.resolve = null;
    }

    setText(newText) {
        const oldText = this.el.innerText;
        const length = Math.max(oldText.length, newText.length);
        this.queue = [];
        for (let i = 0; i < length; i++) {
            const from = oldText[i] || '';
            const to = newText[i] || '';
            const start = Math.floor(Math.random() * 20);
            const end = start + Math.floor(Math.random() * 20) + 10;
            this.queue.push({ from, to, start, end });
        }
        this.frame = 0;
        this.update();
        return new Promise((resolve) => { this.resolve = resolve; });
    }

    update() {
        let output = '';
        let complete = 0;
        for (let i = 0; i < this.queue.length; i++) {
            let { from, to, start, end, char } = this.queue[i];
            if (this.frame >= end) {
                complete++;
                output += to;
            } else if (this.frame >= start) {
                if (!char || Math.random() < 0.28) {
                    char = this.chars[Math.floor(Math.random() * this.chars.length)];
                    this.queue[i].char = char;
                }
                output += `<span class="scramble-char">${char}</span>`;
            } else {
                output += from;
            }
        }
        this.el.innerHTML = output;
        if (complete === this.queue.length) {
            if (this.resolve) this.resolve();
        } else {
            this.frame++;
            requestAnimationFrame(() => this.update());
        }
    }
}

// ============================================
// Hero Animations
// ============================================
function initHeroAnimations() {
    // Reveal text
    document.querySelectorAll('.hero .reveal-text').forEach((el, i) => {
        setTimeout(() => el.classList.add('visible'), 200 + i * 150);
    });

    // Character animation for name
    document.querySelectorAll('.hero-name .char').forEach((char, i) => {
        setTimeout(() => char.classList.add('visible'), 300 + i * 60);
    });

    // Fade ups in hero
    document.querySelectorAll('.hero .fade-up').forEach((el, i) => {
        setTimeout(() => el.classList.add('visible'), 800 + i * 150);
    });

    // Text scramble on tagline after it reveals
    setTimeout(() => {
        const taglineInner = document.querySelector('.hero-tagline .reveal-inner');
        if (taglineInner) {
            const scrambler = new TextScramble(taglineInner);
            scrambler.setText('I make systems disappear.');
        }
    }, 1200);

    // Scramble on hover for section titles
    document.querySelectorAll('.gradient-text').forEach((el) => {
        const original = el.textContent;
        const scrambler = new TextScramble(el);
        let isAnimating = false;
        el.parentElement.addEventListener('mouseenter', () => {
            if (!isAnimating) {
                isAnimating = true;
                scrambler.setText(original).then(() => { isAnimating = false; });
            }
        });
    });
}

// ============================================
// Mouse Parallax — 3D depth on hero
// ============================================
(() => {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    const layers = [
        { el: '.hero-greeting', depth: 0.02 },
        { el: '.hero-name', depth: 0.03 },
        { el: '.hero-tagline', depth: 0.015 },
        { el: '.hero-description', depth: 0.01 },
        { el: '.hero-actions', depth: 0.008 },
        { el: '.hero-image-wrapper', depth: 0.04 },
        { el: '.blob-1', depth: 0.06 },
        { el: '.blob-2', depth: 0.05 },
        { el: '.blob-3', depth: 0.04 },
    ];

    const resolvedLayers = layers.map((l) => ({
        el: document.querySelector(l.el),
        depth: l.depth
    })).filter((l) => l.el);

    function updateParallax() {
        smoothMouseX += (mouseX - smoothMouseX) * 0.05;
        smoothMouseY += (mouseY - smoothMouseY) * 0.05;

        const cx = window.innerWidth / 2;
        const cy = window.innerHeight / 2;
        const dx = smoothMouseX - cx;
        const dy = smoothMouseY - cy;

        resolvedLayers.forEach(({ el, depth }) => {
            const x = dx * depth;
            const y = dy * depth;
            el.style.transform = el.style.transform
                ? el.style.transform.replace(/translate3d\([^)]+\)/, `translate3d(${x}px, ${y}px, 0)`)
                : `translate3d(${x}px, ${y}px, 0)`;
        });

        requestAnimationFrame(updateParallax);
    }

    // Only parallax when hero is visible
    const heroObserver = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) updateParallax();
        },
        { threshold: 0.1 }
    );
    heroObserver.observe(hero);
})();

// ============================================
// Scroll-reactive Aurora
// ============================================
(() => {
    const blobs = document.querySelectorAll('.aurora-blob');
    const colors = [
        ['#8b5cf6', '#6d28d9', '#a78bfa'],  // top
        ['#06b6d4', '#0891b2', '#22d3ee'],  // mid
        ['#f472b6', '#ec4899', '#f9a8d4'],  // bottom
    ];

    function updateAurora() {
        const scrollY = window.scrollY;
        const maxScroll = document.body.scrollHeight - window.innerHeight;
        const progress = maxScroll > 0 ? scrollY / maxScroll : 0;

        blobs.forEach((blob, i) => {
            // Shift hue based on scroll
            const colorIndex = Math.floor((progress * 2 + i) % 3);
            blob.style.background = colors[colorIndex][i % 3];

            // Move blobs based on scroll
            const offsetX = Math.sin(progress * Math.PI * 2 + i * 2) * 100;
            const offsetY = Math.cos(progress * Math.PI * 2 + i * 1.5) * 80;
            blob.style.marginLeft = offsetX + 'px';
            blob.style.marginTop = offsetY + 'px';

            // Scale
            const scale = 0.8 + Math.sin(progress * Math.PI + i) * 0.3;
            blob.style.transform = `scale(${scale})`;
        });

        requestAnimationFrame(updateAurora);
    }
    updateAurora();
})();

// ============================================
// Button Particle Explosions
// ============================================
(() => {
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = rect.left + rect.width / 2;
            const y = rect.top + rect.height / 2;

            for (let i = 0; i < 20; i++) {
                const particle = document.createElement('span');
                particle.className = 'btn-particle';
                const angle = (Math.PI * 2 * i) / 20 + (Math.random() - 0.5) * 0.5;
                const velocity = 60 + Math.random() * 80;
                const dx = Math.cos(angle) * velocity;
                const dy = Math.sin(angle) * velocity;
                particle.style.left = x + 'px';
                particle.style.top = y + 'px';
                particle.style.setProperty('--dx', dx + 'px');
                particle.style.setProperty('--dy', dy + 'px');
                particle.style.background = ['#8b5cf6', '#06b6d4', '#f472b6', '#a78bfa'][
                    Math.floor(Math.random() * 4)
                ];
                document.body.appendChild(particle);
                setTimeout(() => particle.remove(), 700);
            }
        });
    });
})();

// ============================================
// Spotlight / Cursor Glow
// ============================================
(() => {
    const spotlight = document.createElement('div');
    spotlight.className = 'spotlight';
    document.body.appendChild(spotlight);

    function updateSpotlight() {
        spotlight.style.left = mouseX + 'px';
        spotlight.style.top = mouseY + 'px';
        requestAnimationFrame(updateSpotlight);
    }
    updateSpotlight();
})();

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

document.querySelectorAll('.section .fade-up, .footer.fade-up').forEach((el) => {
    fadeObserver.observe(el);
});

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

            card.style.transform = `perspective(800px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) scale3d(1.03, 1.03, 1.03)`;

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
// Nav Scroll Effect + Logo Swap
// ============================================
(() => {
    const nav = document.getElementById('nav');
    const logoText = document.querySelector('.logo-text');
    let isExpanded = false;
    let swapping = false;

    function swapTo(text) {
        if (swapping) return;
        swapping = true;
        logoText.classList.add('swapping');
        setTimeout(() => {
            logoText.textContent = text;
            logoText.classList.remove('swapping');
            setTimeout(() => { swapping = false; }, 250);
        }, 250);
    }

    window.addEventListener('scroll', () => {
        const trigger = window.innerHeight * 0.5;

        if (window.scrollY > trigger) {
            nav.classList.add('scrolled');
            if (!isExpanded) {
                swapTo('Manas');
                isExpanded = true;
            }
        } else {
            nav.classList.remove('scrolled');
            if (isExpanded) {
                swapTo('✦');
                isExpanded = false;
            }
        }
    });
})();

// ============================================
// GitHub Contribution Graph
// ============================================
(() => {
    const container = document.getElementById('github-graph');
    const totalEl = document.getElementById('github-total');
    if (!container) return;

    fetch('https://github-contributions-api.jogruber.de/v4/blame-the-agent?y=last')
        .then((r) => r.json())
        .then((data) => {
            // Animate total count
            const total = data.total?.lastYear || 0;
            let count = 0;
            const inc = total / 50;
            const timer = setInterval(() => {
                count += inc;
                if (count >= total) { count = total; clearInterval(timer); }
                totalEl.textContent = Math.floor(count).toLocaleString();
            }, 25);

            // Build grid
            const contributions = data.contributions || [];
            const grid = document.createElement('div');
            grid.className = 'gh-grid';

            // Group by weeks
            let week = document.createElement('div');
            week.className = 'gh-week';

            // Pad first week
            const firstDay = new Date(contributions[0]?.date).getDay();
            for (let i = 0; i < firstDay; i++) {
                const empty = document.createElement('div');
                empty.className = 'gh-cell';
                empty.style.visibility = 'hidden';
                week.appendChild(empty);
            }

            contributions.forEach((day, i) => {
                const cell = document.createElement('div');
                cell.className = 'gh-cell';
                cell.setAttribute('data-level', day.level);

                // Tooltip
                const tooltip = document.createElement('span');
                tooltip.className = 'gh-tooltip';
                const date = new Date(day.date);
                const formatted = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
                tooltip.textContent = day.count === 0
                    ? `No contributions on ${formatted}`
                    : `${day.count} contribution${day.count > 1 ? 's' : ''} on ${formatted}`;
                cell.appendChild(tooltip);

                week.appendChild(cell);

                const dayOfWeek = new Date(day.date).getDay();
                if (dayOfWeek === 6) {
                    grid.appendChild(week);
                    week = document.createElement('div');
                    week.className = 'gh-week';
                }
            });

            // Append remaining
            if (week.children.length > 0) grid.appendChild(week);

            container.innerHTML = '';
            container.appendChild(grid);
        })
        .catch(() => {
            container.innerHTML = '<div class="github-loading">Failed to load contributions</div>';
        });
})();

// ============================================
// Footer: Last Updated + Visit Counter
// ============================================
(() => {
    // Last updated from GitHub API
    const updatedEl = document.getElementById('last-updated');
    if (updatedEl) {
        fetch('https://api.github.com/repos/FatalButStable/FatalButStable.github.io/commits?per_page=1')
            .then((r) => r.json())
            .then((commits) => {
                if (commits[0]) {
                    const date = new Date(commits[0].commit.committer.date);
                    updatedEl.textContent = 'Updated ' + date.toLocaleDateString('en-US', {
                        month: 'short', day: 'numeric', year: 'numeric'
                    });
                }
            })
            .catch(() => {});
    }

    // Visit counter via counterapi v1
    const countEl = document.getElementById('visit-count');
    if (countEl) {
        fetch('https://api.counterapi.dev/v1/manas-wtf/portfolio/up')
            .then((r) => r.json())
            .then((data) => {
                if (data.count) {
                    countEl.textContent = data.count.toLocaleString() + ' visits';
                }
            })
            .catch(() => {});
    }
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
