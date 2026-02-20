// ===================================
// Particle Animation System
// ===================================
class ParticleSystem {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.particleCount = 80;
        this.mouse = { x: null, y: null, radius: 150 };

        this.init();
        this.animate();
        this.setupEventListeners();
    }

    init() {
        this.resizeCanvas();
        this.createParticles();
    }

    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createParticles() {
        this.particles = [];
        for (let i = 0; i < this.particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                radius: Math.random() * 2 + 1,
                color: this.getRandomColor()
            });
        }
    }

    getRandomColor() {
        const colors = [
            'rgba(139, 92, 246, 0.6)',  // Electric Violet
            'rgba(6, 182, 212, 0.6)',   // Cyber Teal
            'rgba(249, 115, 22, 0.6)'   // Sunset Coral
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    setupEventListeners() {
        window.addEventListener('resize', () => {
            this.resizeCanvas();
            this.createParticles();
        });

        window.addEventListener('mousemove', (e) => {
            this.mouse.x = e.x;
            this.mouse.y = e.y;
        });

        window.addEventListener('mouseout', () => {
            this.mouse.x = null;
            this.mouse.y = null;
        });
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.particles.forEach((particle, i) => {
            // Update position
            particle.x += particle.vx;
            particle.y += particle.vy;

            // Bounce off edges
            if (particle.x < 0 || particle.x > this.canvas.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > this.canvas.height) particle.vy *= -1;

            // Mouse interaction
            if (this.mouse.x !== null && this.mouse.y !== null) {
                const dx = this.mouse.x - particle.x;
                const dy = this.mouse.y - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < this.mouse.radius) {
                    const force = (this.mouse.radius - distance) / this.mouse.radius;
                    const angle = Math.atan2(dy, dx);
                    particle.vx -= Math.cos(angle) * force * 0.2;
                    particle.vy -= Math.sin(angle) * force * 0.2;
                }
            }

            // Draw particle
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = particle.color;
            this.ctx.fill();

            // Connect particles
            for (let j = i + 1; j < this.particles.length; j++) {
                const dx = this.particles[j].x - particle.x;
                const dy = this.particles[j].y - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 100) {
                    this.ctx.beginPath();
                    this.ctx.strokeStyle = `rgba(139, 92, 246, ${0.2 * (1 - distance / 100)})`;
                    this.ctx.lineWidth = 1;
                    this.ctx.moveTo(particle.x, particle.y);
                    this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
                    this.ctx.stroke();
                }
            }
        });

        requestAnimationFrame(() => this.animate());
    }
}

// ===================================
// Scroll Reveal Animation
// ===================================
class ScrollReveal {
    constructor() {
        this.elements = document.querySelectorAll('.reveal-on-scroll');
        this.observer = new IntersectionObserver(
            (entries) => this.handleIntersection(entries),
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        this.init();
    }

    init() {
        this.elements.forEach(element => {
            this.observer.observe(element);
        });
    }

    handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                this.observer.unobserve(entry.target);
            }
        });
    }
}

// ===================================
// Skill Meter Animation
// ===================================
class SkillMeterAnimation {
    constructor() {
        this.skillMeters = document.querySelectorAll('.skill-bar-container');
        this.observer = new IntersectionObserver(
            (entries) => this.handleIntersection(entries),
            { threshold: 0.2 }
        );

        this.init();
    }

    init() {
        this.skillMeters.forEach(meter => {
            this.observer.observe(meter);
        });
    }

    handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                this.animateSkill(entry.target);
                this.observer.unobserve(entry.target);
            }
        });
    }

    animateSkill(container) {
        const progress = container.getAttribute('data-progress');
        const fill = container.querySelector('.skill-fill');

        setTimeout(() => {
            fill.style.width = `${progress}%`;
        }, 100);
    }
}

// ===================================
// Certificate Gallery
// ===================================
class CertificateGallery {
    constructor() {
        this.certificates = [
            {
                title: 'Python Essentials',
                organization: 'Cisco Networking Academy',
                date: '2024',
                filename: 'cisco_python_essentials.pdf',
                icon: 'fa-python'
            },
            {
                title: 'Code Arena Competition',
                organization: 'Coding Competition',
                date: '2025',
                filename: 'code_arena_certificate.pdf',
                icon: 'fa-trophy'
            },
            {
                title: 'Cybersecurity Essentials',
                organization: 'Cisco Networking Academy',
                date: '2024',
                filename: 'cybersecurity_essentials_certificate.pdf',
                icon: 'fa-shield-alt'
            },
            {
                title: 'Introduction to Cybersecurity',
                organization: 'Cisco Networking Academy',
                date: '2024',
                filename: 'introduction_to_cybersecurity.pdf',
                icon: 'fa-lock'
            },
            {
                title: 'IoT Architectural Engineering',
                organization: 'Cisco Networking Academy',
                date: '2024',
                filename: 'iot_architectural_engineering.pdf',
                icon: 'fa-network-wired'
            },
            {
                title: 'SQL Database Management',
                organization: 'Digital Marketing',
                date: '2024',
                filename: 'ddm_sql.pdf',
                icon: 'fa-database'
            },
            {
                title: 'Datathon 2025',
                organization: 'Data Science Competition',
                date: '2025',
                filename: 'datathon2025.pdf',
                icon: 'fa-chart-line'
            },
            {
                title: 'Introduction to Modern AI',
                organization: 'AI Learning Platform',
                date: '2024',
                filename: 'intro_to_modern_ai.pdf',
                icon: 'fa-brain'
            },
            {
                title: 'AICTE Certification',
                organization: 'AICTE',
                date: '2024',
                filename: 'khushi_rakesh_roongta_aicte.pdf',
                icon: 'fa-graduation-cap'
            },
            {
                title: 'Wadhwani Foundation Program',
                organization: 'Wadhwani Foundation',
                date: '2024',
                filename: 'khushi_roongta_wadhwani_certificate.pdf',
                icon: 'fa-handshake'
            },
            {
                title: 'Wadhwani Entrepreneurship',
                organization: 'Wadhwani Foundation',
                date: '2024',
                filename: 'wadhwani_certificates.pdf',
                icon: 'fa-lightbulb'
            },
            {
                title: 'NullClass Certification',
                organization: 'NullClass',
                date: '2024',
                filename: 'nullclass.pdf',
                icon: 'fa-code'
            },
            {
                title: 'Prompt Wars Competition',
                organization: 'AI Prompt Engineering',
                date: '2025',
                filename: 'prompt_wars.pdf',
                icon: 'fa-robot'
            },
        ];

        this.render();
        this.setupScrollButtons();
    }

    render() {
        const grid = document.getElementById('certificatesGrid');

        this.certificates.forEach((cert, index) => {
            const card = document.createElement('div');
            card.className = 'certificate-card'; // Removed reveal-on-scroll to ensure visibility

            card.innerHTML = `
                <div class="certificate-card-inner">
                    <div class="certificate-front">
                        <div class="cert-icon-container">
                            <i class="fas ${cert.icon} cert-icon"></i>
                            <h4 class="cert-front-title">${cert.title}</h4>
                            <p class="cert-front-org">${cert.organization}</p>
                            <p class="cert-front-date">${cert.date}</p>
                            <div class="cert-click-hint">
                                <i class="fas fa-hand-pointer"></i> Click to view certificate
                            </div>
                        </div>
                    </div>
                    <div class="certificate-back">
                        <h3>${cert.title}</h3>
                        <p class="cert-org"><i class="fas fa-building"></i> ${cert.organization}</p>
                        <p class="cert-date"><i class="fas fa-calendar"></i> ${cert.date}</p>
                        <p class="cert-id"><i class="fas fa-file-pdf"></i> Click to View Full Certificate</p>
                    </div>
                </div>
            `;

            // Add click event to open PDF in new tab
            card.addEventListener('click', () => {
                window.open(`${cert.filename}`, '_blank');
            });

            grid.appendChild(card);
        });
    }

    setupScrollButtons() {
        const grid = document.getElementById('certificatesGrid');
        const prevBtn = document.getElementById('scrollLeftBtn');
        const nextBtn = document.getElementById('scrollRightBtn');
        const scrollAmount = 300 + 32; // Card width + gap

        if (prevBtn && nextBtn) {
            prevBtn.addEventListener('click', () => {
                grid.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            });

            nextBtn.addEventListener('click', () => {
                grid.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            });
        }
    }
}

// ===================================
// Project Preview Modal
// ===================================
function openPreview(url) {
    const modal = document.getElementById('previewModal');
    const iframe = document.getElementById('previewFrame');

    iframe.src = url;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closePreview() {
    const modal = document.getElementById('previewModal');
    const iframe = document.getElementById('previewFrame');

    modal.classList.remove('active');
    iframe.src = '';
    document.body.style.overflow = 'auto';
}

// Close modal on background click
document.addEventListener('click', (e) => {
    const modal = document.getElementById('previewModal');
    if (e.target === modal) {
        closePreview();
    }
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closePreview();
    }
});

// ===================================
// LeetCode Stats Integration
// ===================================
class LeetCodeStats {
    constructor() {
        this.username = 'KRoongta';
        this.apiUrl = `https://leetcode-stats.tashif.codes/${this.username}`;
        this.container = document.getElementById('leetcodeStats');

        this.init();
    }

    async init() {
        if (!this.container) return;

        try {
            const data = await this.fetchStats();
            if (data && data.status === 'success') {
                this.renderStats(data);
            } else {
                this.renderError();
            }
        } catch (error) {
            console.error('LeetCode API Error:', error);
            this.renderError();
        }
    }

    async fetchStats() {
        // Using a public proxy for LeetCode stats
        const response = await fetch(this.apiUrl);
        return await response.json();
    }

    calculateStreak(calendar) {
        if (!calendar) return 0;

        const timestamps = Object.keys(calendar).map(t => parseInt(t)).sort((a, b) => b - a);
        if (timestamps.length === 0) return 0;

        let streak = 0;
        const now = new Date();
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime() / 1000;
        const yesterday = today - 86400;

        // Check if last submission was today or yesterday
        const lastSubmission = timestamps[0];
        // Timestamps in API are start of day (UTC)? Usually. 
        // Let's approximate. If last submission is within last 48 hours.
        // Actually, let's just count consecutive days backwards from the latest timestamp in the calendar

        // Simple logic: convert all timestamps to date strings YYYY-MM-DD and check continuity
        const dates = new Set(timestamps.map(t => {
            const d = new Date(t * 1000);
            return d.toISOString().split('T')[0];
        }));

        const oneDay = 24 * 60 * 60 * 1000;
        let currentDate = new Date();
        let dateStr = currentDate.toISOString().split('T')[0];

        // Use local time adjustment if needed, but UTC is safer for LeetCode

        // If today is not in list, check yesterday. If yesterday is not in list, streak is 0.
        if (!dates.has(dateStr)) {
            currentDate.setTime(currentDate.getTime() - oneDay);
            dateStr = currentDate.toISOString().split('T')[0];
            if (!dates.has(dateStr)) {
                return 0;
            }
        }

        // Count backwards
        while (dates.has(dateStr)) {
            streak++;
            currentDate.setTime(currentDate.getTime() - oneDay);
            dateStr = currentDate.toISOString().split('T')[0];
        }

        return streak;
    }

    renderStats(data) {
        const { totalSolved, easySolved, mediumSolved, hardSolved, totalQuestions, totalEasy: easyTotal, totalMedium: mediumTotal, totalHard: hardTotal, acceptanceRate, submissionCalendar } = data;

        const streak = this.calculateStreak(submissionCalendar);
        const streakDisplay = streak > 0 ?
            `<div class="streak-badge" title="Current Streak"><i class="fas fa-fire text-orange-500 animate-pulse"></i> <span class="text-white font-bold ml-1">${streak} Day Streak</span></div>` :
            `<div class="streak-badge opacity-50" title="Start a streak!"><i class="fas fa-fire text-gray-500"></i> <span class="text-gray-400 ml-1">No Active Streak</span></div>`;

        this.container.innerHTML = `
            <div class="flex flex-col items-center justify-center p-4 border-r border-gray-700 border-opacity-30">
                <div class="stat-circle-wrapper mb-4">
                    <svg viewBox="0 0 100 100" class="w-full h-full">
                        <circle class="stat-circle-bg" cx="50" cy="50" r="45"></circle>
                        <circle class="stat-circle-progress" cx="50" cy="50" r="45"
                            stroke-dasharray="283" stroke-dashoffset="${283 - (283 * totalSolved / 2000)}" 
                            style="stroke: var(--electric-violet)"></circle> 
                    </svg>
                    <div class="absolute inset-0 flex flex-col items-center justify-center">
                        <span class="total-solved-count">${totalSolved}</span>
                        <span class="text-sm text-gray-400">Solved</span>
                    </div>
                </div>
                
                <div class="flex gap-4 mt-2">
                    ${streakDisplay}
                </div>
                <div class="mt-2 text-sm text-gray-400">
                    Acceptance Rate: <span class="text-cyber-teal font-bold">${acceptanceRate}%</span>
                </div>
            </div>

            <div class="flex flex-col justify-center gap-6 p-4">
                <!-- Easy -->
                <div>
                    <div class="flex justify-between text-sm mb-1">
                        <span class="text-gray-300">Easy</span>
                        <span class="diff-easy font-bold">${easySolved} <span class="text-gray-500 font-normal">/ ${easyTotal}</span></span>
                    </div>
                    <div class="difficulty-bar">
                        <div class="difficulty-fill bg-easy" style="width: ${(easySolved / easyTotal) * 100}%"></div>
                    </div>
                </div>

                <!-- Medium -->
                <div>
                    <div class="flex justify-between text-sm mb-1">
                        <span class="text-gray-300">Medium</span>
                        <span class="diff-medium font-bold">${mediumSolved} <span class="text-gray-500 font-normal">/ ${mediumTotal}</span></span>
                    </div>
                    <div class="difficulty-bar">
                        <div class="difficulty-fill bg-medium" style="width: ${(mediumSolved / mediumTotal) * 100}%"></div>
                    </div>
                </div>

                <!-- Hard -->
                <div>
                    <div class="flex justify-between text-sm mb-1">
                        <span class="text-gray-300">Hard</span>
                        <span class="diff-hard font-bold">${hardSolved} <span class="text-gray-500 font-normal">/ ${hardTotal}</span></span>
                    </div>
                    <div class="difficulty-bar">
                        <div class="difficulty-fill bg-hard" style="width: ${(hardSolved / hardTotal) * 100}%"></div>
                    </div>
                </div>
            </div>
        `;
    }

    renderError() {
        this.container.innerHTML = `
            <div class="col-span-full text-center py-8">
                <i class="fas fa-exclamation-circle text-2xl text-sunset-coral mb-3"></i>
                <p class="text-gray-400">Could not pull live stats at the moment.</p>
                <a href="https://leetcode.com/u/KRoongta/" target="_blank" class="text-electric-violet hover:underline mt-2 inline-block">
                    Check my LeetCode Profile
                </a>
            </div>
        `;
    }
}

// ===================================
// Email Copy Functionality
// ===================================
class EmailCopy {
    constructor() {
        this.emailButton = document.getElementById('emailButton');
        this.email = 'khushiroongta0801@gmail.com';

        this.init();
    }

    init() {
        if (this.emailButton) {
            this.emailButton.addEventListener('click', (e) => {
                if (e.target.closest('.email-icon')) {
                    this.handleGmailRedirect();
                } else {
                    this.copyEmail();
                }
            });
        }

        const socialEmail = document.querySelector('.social-icon.email');
        if (socialEmail) {
            socialEmail.addEventListener('click', (e) => {
                e.preventDefault();
                this.handleGmailRedirect();
            });
        }
    }

    handleGmailRedirect() {
        this.copyEmail();
        const subject = "Portfolio Inquiry";
        const body = "Hi Khushi,";
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${this.email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        setTimeout(() => {
            window.open(gmailUrl, '_blank');
        }, 100);
    }

    async copyEmail() {
        try {
            await navigator.clipboard.writeText(this.email);
            this.showToast('Email copied to clipboard!');
        } catch (err) {
            // Fallback for older browsers
            this.fallbackCopy();
        }
    }

    fallbackCopy() {
        const textArea = document.createElement('textarea');
        textArea.value = this.email;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        document.body.appendChild(textArea);
        textArea.select();

        try {
            document.execCommand('copy');
            this.showToast('Email copied to clipboard!');
        } catch (err) {
            this.showToast('Failed to copy email');
        }

        document.body.removeChild(textArea);
    }

    showToast(message) {
        const toast = document.getElementById('toast');
        const toastMessage = document.getElementById('toastMessage');

        toastMessage.textContent = message;
        toast.classList.add('show');

        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }
}

// ===================================
// Navbar Controller
// ===================================
class NavbarController {
    constructor() {
        this.navbar = document.getElementById('navbar');
        this.hamburger = document.getElementById('hamburger');
        this.mobileMenu = document.getElementById('mobileMenu');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.mobileLinks = document.querySelectorAll('.mobile-link');
        this.sections = document.querySelectorAll('section[id]');
        this.navbarHeight = this.navbar ? this.navbar.offsetHeight : 70;

        this.init();
    }

    init() {
        // Scroll: add .scrolled class + run scroll-spy
        window.addEventListener('scroll', () => {
            this.onScroll();
        }, { passive: true });

        // Hamburger toggle
        if (this.hamburger) {
            this.hamburger.addEventListener('click', () => {
                this.toggleMobileMenu();
            });
        }

        // Close mobile menu when a link is clicked
        this.mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.closeMobileMenu();
            });
        });

        // Initial spy call
        this.onScroll();
    }

    onScroll() {
        const scrollY = window.scrollY;

        // Toggle background when scrolled past 50px
        if (this.navbar) {
            this.navbar.classList.toggle('scrolled', scrollY > 50);
        }

        // Scroll-spy: find current section
        let currentSection = '';
        this.sections.forEach(section => {
            const sectionTop = section.offsetTop - this.navbarHeight - 20;
            if (scrollY >= sectionTop) {
                currentSection = section.getAttribute('id');
            }
        });

        // Update desktop links
        this.navLinks.forEach(link => {
            link.classList.toggle('active', link.dataset.section === currentSection);
        });

        // Update mobile links
        this.mobileLinks.forEach(link => {
            link.classList.toggle('active', link.dataset.section === currentSection);
        });
    }

    toggleMobileMenu() {
        const isOpen = this.mobileMenu.classList.toggle('open');
        this.hamburger.classList.toggle('open', isOpen);
    }

    closeMobileMenu() {
        this.mobileMenu.classList.remove('open');
        this.hamburger.classList.remove('open');
    }
}

// ===================================
// Smooth Scroll (navbar-offset aware)
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navbar = document.getElementById('navbar');
            const offset = navbar ? navbar.offsetHeight : 0;
            const top = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    });
});

// ===================================
// Initialize Everything
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize particle system
    const canvas = document.getElementById('particleCanvas');
    if (canvas) {
        new ParticleSystem(canvas);
    }

    // Initialize scroll reveal
    new ScrollReveal();

    // Initialize skill meter animations
    new SkillMeterAnimation();

    // Initialize certificate gallery
    new CertificateGallery();

    // Initialize LeetCode Stats
    new LeetCodeStats();

    // Initialize navbar
    new NavbarController();

    // Initialize email copy
    new EmailCopy();

    console.log('🚀 Portfolio initialized successfully!');
});

// ===================================
// Performance Optimization
// ===================================
// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img.lazy').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===================================
// Image Preview Modal
// ===================================
function openImageModal(src) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('fullImage');

    modal.style.display = "flex";
    modalImg.src = src;

    // Disable scroll
    document.body.style.overflow = 'hidden';
}

function closeImageModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = "none";

    // Enable scroll
    document.body.style.overflow = 'auto';
}

// Close image modal on background click
document.addEventListener('click', (e) => {
    const modal = document.getElementById('imageModal');
    if (e.target === modal) {
        closeImageModal();
    }
});

// Close image modal on Escape key
document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('imageModal');
    if (e.key === 'Escape' && modal && modal.style.display === 'flex') {
        closeImageModal();
    }
});
