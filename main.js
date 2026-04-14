/* ============================================
   BestTools - Main JavaScript
   ============================================ */

// Tool Data
const toolsData = [
    {
        id: 1,
        name: "ChatGPT",
        nameEn: "ChatGPT",
        category: "ai",
        categoryAr: "الذكاء الاصطناعي",
        description: "أداة الذكاء الاصطناعي الأكثر تطوراً للمحادثة والنصوص. مساعدك الذكي للكتابة والبرمجة والإجابة على الأسئلة.",
        rating: 4.9,
        reviews: 12450,
        image: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
        icon: "🤖",
        affiliateLink: "https://chat.openai.com",
        price: "مجاني - $20/month",
        featured: true,
        topToday: true
    },
    {
        id: 2,
        name: "Midjourney",
        nameEn: "Midjourney",
        category: "ai",
        categoryAr: "الذكاء الاصطناعي",
        description: "أداة إنشاء الصور بالذكاء الاصطناعي. أنشئ صوراً مذهلة من أوصاف نصية بسيطة.",
        rating: 4.8,
        reviews: 8900,
        image: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Logo_midjourney.svg",
        icon: "🎨",
        affiliateLink: "https://midjourney.com",
        price: "$10/month",
        featured: true,
        topToday: true
    },
    {
        id: 3,
        name: "Canva",
        nameEn: "Canva",
        category: "design",
        categoryAr: "التصميم",
        description: "أداة تصميم سهلة الاستخدام. صمم منشورات سوشيال ميديا وشعارات وعروض تقديمية بدون خبرة.",
        rating: 4.7,
        reviews: 15200,
        icon: "🎨",
        affiliateLink: "https://canva.com",
        price: "مجاني - $13/month",
        featured: true,
        topToday: true
    },
    {
        id: 4,
        name: "Notion",
        nameEn: "Notion",
        category: "productivity",
        categoryAr: "الإنتاجية",
        description: "منصة إدارة المشاريع والملاحظات. اجمع كل أفكارك ومشاريعك في مكان واحد.",
        rating: 4.8,
        reviews: 9800,
        icon: "📝",
        affiliateLink: "https://notion.so",
        price: "مجاني - $10/month",
        featured: true,
        topToday: true
    },
    {
        id: 5,
        name: "Copy.ai",
        nameEn: "Copy.ai",
        category: "ai",
        categoryAr: "الذكاء الاصطناعي",
        description: "أداة كتابة التسويق بالذكاء الاصطناعي. أنشئ إعلانات ومنشورات وسطور قوية بسرعة.",
        rating: 4.5,
        reviews: 5600,
        icon: "✍️",
        affiliateLink: "https://copy.ai",
        price: "مجاني - $49/month",
        featured: false,
        topToday: false
    },
    {
        id: 6,
        name: "Jasper",
        nameEn: "Jasper",
        category: "ai",
        categoryAr: "الذكاء الاصطناعي",
        description: "مساعد الذكاء الاصطناعي للكتابة. أنشئ مقالات ومنشورات تسويقية وطويلة في دقائق.",
        rating: 4.6,
        reviews: 7200,
        icon: "📝",
        affiliateLink: "https://jasper.ai",
        price: "$40/month",
        featured: false,
        topToday: false
    },
    {
        id: 7,
        name: "Figma",
        nameEn: "Figma",
        category: "design",
        categoryAr: "التصميم",
        description: "أداة تصميم واجهة المستخدم التعاونية. صمم تطبيقات ومواقع مع فريقك في الوقت الفعلي.",
        rating: 4.9,
        reviews: 11500,
        icon: "🎯",
        affiliateLink: "https://figma.com",
        price: "مجاني - $15/month",
        featured: true,
        topToday: false
    },
    {
        id: 8,
        name: "Grammarly",
        nameEn: "Grammarly",
        category: "productivity",
        categoryAr: "الإنتاجية",
        description: "مساعد الكتابة الذكية. صحح Grammatical والأخطاء الإملاقية وتحسين أسلوبك.",
        rating: 4.7,
        reviews: 18500,
        icon: "✏️",
        affiliateLink: "https://grammarly.com",
        price: "مجاني - $30/month",
        featured: false,
        topToday: false
    },
    {
        id: 9,
        name: "SurferSEO",
        nameEn: "SurferSEO",
        category: "marketing",
        categoryAr: "التسويق",
        description: "أداة تحسين محركات البحث. حلّل المحتوى واحصل على توصيات لتحسين ترتيبك.",
        rating: 4.6,
        reviews: 4200,
        icon: "📈",
        affiliateLink: "https://surferseo.com",
        price: "$99/month",
        featured: false,
        topToday: false
    },
    {
        id: 10,
        name: "Adobe Firefly",
        nameEn: "Adobe Firefly",
        category: "ai",
        categoryAr: "الذكاء الاصطناعي",
        description: "أداة إنشاء الصور من Adobe. أنشئ صوراً مذهلة بنماذج مختلفة من النصوص.",
        rating: 4.7,
        reviews: 6800,
        icon: "🔥",
        affiliateLink: "https://firefly.adobe.com",
        price: "$4.99/month",
        featured: false,
        topToday: false
    },
    {
        id: 11,
        name: "Claude",
        nameEn: "Claude",
        category: "ai",
        categoryAr: "الذكاء الاصطناعي",
        description: "مساعد الذكاء الاصطناعي الآمن. مساعد ذكي يركز على الأمان والمحادثة الطبيعية.",
        rating: 4.8,
        reviews: 5200,
        icon: "🧠",
        affiliateLink: "https://claude.ai",
        price: "مجاني - $20/month",
        featured: true,
        topToday: false
    },
    {
        id: 12,
        name: "GitHub Copilot",
        nameEn: "GitHub Copilot",
        category: "development",
        categoryAr: "التطوير",
        description: "مساعد البرمجة بالذكاء الاصطناعي. اكتب أكواداً أسرع مع إكمال تلقائي ذكي.",
        rating: 4.8,
        reviews: 8900,
        icon: "💻",
        affiliateLink: "https://github.com/features/copilot",
        price: "$10/month",
        featured: false,
        topToday: false
    }
];

// DOM Elements
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initNavbar();
    initScrollAnimations();
    initSearch();
    initToolsPage();
    initHomePage();
    initTop10Page();
    initForms();
});

// Theme Toggle
function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
        });
    }
}

function updateThemeIcon(theme) {
    const themeIcon = document.querySelector('.theme-icon');
    if (themeIcon) {
        themeIcon.textContent = theme === 'dark' ? '🌙' : '☀️';
    }
}

// Navbar
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });
    }
}

// Scroll Animations
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

// Search Functionality
function initSearch() {
    const heroSearchInput = document.getElementById('heroSearch');
    const heroSearchBtn = document.getElementById('heroSearchBtn');

    if (heroSearchBtn) {
        heroSearchBtn.addEventListener('click', () => performSearch(heroSearchInput.value));
    }
    if (heroSearchInput) {
        heroSearchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') performSearch(heroSearchInput.value);
        });
    }
}

function performSearch(query) {
    if (query.trim()) {
        window.location.href = `tools.html?search=${encodeURIComponent(query)}`;
    }
}

// Home Page
function initHomePage() {
    const featuredContainer = document.getElementById('featuredTools');
    const topToolsContainer = document.getElementById('topTools');

    if (featuredContainer) {
        const featuredTools = toolsData.filter(t => t.featured).slice(0, 6);
        featuredContainer.innerHTML = featuredTools.map(tool => createToolCard(tool)).join('');
    }

    if (topToolsContainer) {
        const topTools = toolsData.filter(t => t.topToday).slice(0, 4);
        topToolsContainer.innerHTML = topTools.map(tool => createToolCard(tool)).join('');
    }
}

// Tools Page
function initToolsPage() {
    const toolsContainer = document.getElementById('allTools');
    const categoryTabs = document.querySelectorAll('.category-tab');
    const searchInput = document.getElementById('toolsSearch');
    const toolsCountText = document.getElementById('toolsCountText');
    const loadMoreBtn = document.getElementById('loadMoreBtn');

    if (!toolsContainer) return;

    let currentCategory = 'all';
    let currentSearch = '';
    let visibleCount = 9;

    // Get URL params
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category');
    const searchParam = urlParams.get('search');

    if (categoryParam) {
        currentCategory = categoryParam;
        categoryTabs.forEach(tab => {
            if (tab.dataset.category === categoryParam) {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        });
    }

    if (searchParam && searchInput) {
        currentSearch = searchParam.toLowerCase();
        searchInput.value = searchParam;
    }

    function renderTools() {
        let filtered = toolsData;

        if (currentCategory !== 'all') {
            filtered = filtered.filter(t => t.category === currentCategory);
        }

        if (currentSearch) {
            filtered = filtered.filter(t => 
                t.name.toLowerCase().includes(currentSearch) ||
                t.description.toLowerCase().includes(currentSearch) ||
                t.categoryAr.includes(currentSearch)
            );
        }

        const visibleTools = filtered.slice(0, visibleCount);
        toolsContainer.innerHTML = visibleTools.map(tool => createToolCard(tool)).join('');

        if (toolsCountText) {
            toolsCountText.textContent = `عرض ${visibleTools.length} من ${filtered.length} أداة`;
        }

        if (loadMoreBtn) {
            loadMoreBtn.style.display = visibleCount >= filtered.length ? 'none' : 'inline-flex';
        }
    }

    categoryTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            categoryTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentCategory = tab.dataset.category;
            visibleCount = 9;
            renderTools();
        });
    });

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentSearch = e.target.value.toLowerCase();
            visibleCount = 9;
            renderTools();
        });
    }

    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            visibleCount += 6;
            renderTools();
        });
    }

    renderTools();
}

// Top 10 Page
function initTop10Page() {
    const top10Container = document.getElementById('top10List');
    if (!top10Container) return;

    const topTools = [...toolsData]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 10);

    top10Container.innerHTML = topTools.map((tool, index) => {
        const rankClass = index === 0 ? 'gold' : index === 1 ? 'silver' : index === 2 ? 'bronze' : '';
        return `
            <div class="top10-item ${rankClass}" onclick="goToTool(${tool.id})">
                <div class="top10-rank">${index + 1}</div>
                <div class="top10-logo">${tool.icon}</div>
                <div class="top10-info">
                    <h3>${tool.name}</h3>
                    <p>${tool.description.substring(0, 100)}...</p>
                </div>
                <div class="top10-meta">
                    <div class="top10-rating">
                        <span class="stars">⭐⭐⭐⭐⭐</span>
                        <span class="rating-value">${tool.rating}</span>
                    </div>
                    <a href="${tool.affiliateLink}" target="_blank" class="btn btn-primary top10-cta" onclick="event.stopPropagation()">
                        جرب الآن
                    </a>
                </div>
            </div>
        `;
    }).join('');
}

// Create Tool Card
function createToolCard(tool) {
    const stars = '⭐'.repeat(Math.floor(tool.rating));
    return `
        <div class="tool-card" onclick="goToTool(${tool.id})">
            <div class="tool-card-image">
                <span class="tool-card-icon">${tool.icon}</span>
            </div>
            <div class="tool-card-content">
                <span class="tool-card-category">${tool.categoryAr}</span>
                <h3 class="tool-card-title">${tool.name}</h3>
                <p class="tool-card-desc">${tool.description}</p>
                <div class="tool-card-footer">
                    <div class="tool-card-rating">
                        <span class="stars">${stars}</span>
                        <span class="rating-value">${tool.rating}</span>
                        <span class="rating-count">(${formatNumber(tool.reviews)})</span>
                    </div>
                    <a href="${tool.affiliateLink}" target="_blank" class="tool-card-btn" onclick="event.stopPropagation()">
                        جرب الآن
                    </a>
                </div>
            </div>
        </div>
    `;
}

// Navigate to tool detail
function goToTool(toolId) {
    // For static site, we'll link to the detail page
    window.location.href = 'tool-detail.html';
}

// Format numbers
function formatNumber(num) {
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num;
}

// Forms
function initForms() {
    const contactForm = document.getElementById('contactForm');
    const newsletterForm = document.getElementById('newsletterForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('شكراً لك! تم إرسال رسالتك بنجاح.');
            contactForm.reset();
        });
    }

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('شكراً لك! تم اشتراكك في النشرة البريدية.');
            newsletterForm.reset();
        });
    }
}

// Export for Related Tools
function getRelatedTools(currentToolId, limit = 3) {
    const currentTool = toolsData.find(t => t.id === currentToolId);
    if (!currentTool) return [];

    return toolsData
        .filter(t => t.id !== currentToolId && t.category === currentTool.category)
        .slice(0, limit);
}

// Load related tools on detail page
document.addEventListener('DOMContentLoaded', () => {
    const relatedContainer = document.getElementById('relatedTools');
    if (relatedContainer) {
        const relatedTools = getRelatedTools(1, 3); // Default to tool ID 1
        relatedContainer.innerHTML = relatedTools.map(tool => createToolCard(tool)).join('');
    }
});