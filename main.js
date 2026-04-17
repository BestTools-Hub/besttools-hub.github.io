/* ============================================
   BestTools - Main JavaScript
   ============================================ */

// Tool Data - 28 Professional Tools
const toolsData = [
    // === AI Writing Tools ===
    {
        id: 1,
        name: "ChatGPT",
        nameEn: "ChatGPT",
        category: "ai-writing",
        categoryAr: "الكتابة بالذكاء الاصطناعي",
        description: "أداة الذكاء الاصطناعي الأكثر تطوراً للمحادثة والنصوص. مساعدك الذكي للكتابة والبرمجة.",
        longDescription: "ChatGPT هو نموذج ذكاء اصطناعي متقدم طورته OpenAI يستخدم تقنية المحادثة الطبيعية. يمكنه الإجابة على الأسئلة، كتابة المقالات، البرمجة، الترجمة، وأكثر بكثير.",
        pros: ["محادثات طبيعية وسلسة", "دعم أكثر من 50 لغة", "كتابة الأكواد البرمجية", "إنشاء المحتوى النصي", "دمج مع تطبيقات متعددة"],
        cons: ["أحياناً يعطي معلومات غير دقيقة", "معرفة محدودة حتى 2023", "يتطلب اتصال بالإنترنت"],
        rating: 4.9,
        reviews: 12450,
        icon: "🤖",
        logoUrl: "",
        affiliateLink: "https://chat.openai.com",
        price: "مجاني - $20/month",
        featured: true,
        topToday: true,
        developer: "OpenAI",
        launchDate: "نوفمبر 2022",
        users: "+100 مليون",
        website: "chat.openai.com",
        tags: ["AI", "Chatbot", "Writing"],
        alternatives: [3, 11]
    },
    {
        id: 2,
        name: "Claude",
        nameEn: "Claude",
        category: "ai-writing",
        categoryAr: "الكتابة بالذكاء الاصطناعي",
        description: "مساعد الذكاء الاصطناعي الآمن من Anthropic. يركز على الأمان والمحادثة الطبيعية.",
        longDescription: "Claude طورته شركة Anthropic، معروف بأخلاقياته العالية. يتميز بقدرته على فهم السياق العميق وإنتاج نصوص إبداعية عالية الجودة.",
        pros: ["أمان عالي في المحتوى", "فهم سياقي ممتاز", "يدعم الملفات والوثائق", "تحليل النصوص الطويلة"],
        cons: ["لا يدعم البرمجة بشكل كامل", "غير متوفر في كثير من الدول"],
        rating: 4.8,
        reviews: 5200,
        icon: "🧠",
        logoUrl: "",
        affiliateLink: "https://claude.ai",
        price: "مجاني - $20/month",
        featured: true,
        topToday: false,
        developer: "Anthropic",
        launchDate: "مارس 2023",
        users: "+30 مليون",
        website: "claude.ai",
        tags: ["AI", "Chatbot", "Writing"],
        alternatives: [1, 5]
    },
    {
        id: 3,
        name: "Jasper",
        nameEn: "Jasper",
        category: "ai-writing",
        categoryAr: "الكتابة بالذكاء الاصطناعي",
        description: "مساعد الذكاء الاصطناعي للكتابة التسويقية. أنشئ مقالات ومنشورات في دقائق.",
        longDescription: "Jasper مصمم خصيصاً للتسويق. يقدم أكثر من 50 قالباً كتابياً. يدعم أكثر من 25 لغة مع Boss Mode للمحتوى الطويل.",
        pros: ["قوالب متعددة للتسويق", "وضع Boss Mode", "يدعم 25+ لغة", "تكامل مع SEO"],
        cons: ["سعر مرتفع", "يتطلب تعلم القوالب"],
        rating: 4.6,
        reviews: 7200,
        icon: "📝",
        logoUrl: "",
        affiliateLink: "https://jasper.ai",
        price: "$40/month",
        developer: "Jasper AI",
        launchDate: "يناير 2021",
        tags: ["AI", "Writing", "Marketing"],
        alternatives: [5, 1]
    },
    {
        id: 4,
        name: "Copy.ai",
        nameEn: "Copy.ai",
        category: "ai-writing",
        categoryAr: "الكتابة بالذكاء الاصطناعي",
        description: "أداة كتابة التسويق. أنشئ إعلانات ومنشورات بسرعة.",
        longDescription: "Copy.ai تقدم حلولاً سريعة للإعلانات ومنشورات التواصل. واجهة بسيطة ومجانية حتى 2000 كلمة شهرياً.",
        pros: ["واجهة بسيطة", "مجانية حتى 2000 كلمة", "أكثر من 90 أداة"],
        cons: ["جودة أقل من المنافسين", "إعلانات مزعجة"],
        rating: 4.5,
        reviews: 5600,
        icon: "✍️",
        logoUrl: "",
        affiliateLink: "https://copy.ai",
        price: "مجاني - $49/month",
        developer: "Copy AI",
        launchDate: "أبريل 2020",
        tags: ["AI", "Copywriting"],
        alternatives: [3, 6]
    },
    {
        id: 5,
        name: "Writesonic",
        nameEn: "Writesonic",
        category: "ai-writing",
        categoryAr: "الكتابة بالذكاء الاصطناعي",
        description: "منصة كتابة شاملة. أنشئ مقالات وإعلانات باحترافية.",
        longDescription: "Writesonic تتميز بأداة Article Writer للمقالات الكاملة وأداة Photo Generator المدعومة بـ GPT-4.",
        pros: ["Article Writer", "دعم GPT-4", "أدوات SEO", "تكامل WordPress"],
        cons: ["جودة متفاوتة", "واجهة معقدة"],
        rating: 4.4,
        reviews: 3800,
        icon: "🖊️",
        logoUrl: "",
        affiliateLink: "https://writesonic.com",
        price: "مجاني - $19/month",
        developer: "Writesonic",
        launchDate: "مارس 2021",
        tags: ["AI", "Writing", "SEO"],
        alternatives: [3, 6]
    },

    // === AI Image Tools ===
    {
        id: 6,
        name: "Midjourney",
        nameEn: "Midjourney",
        category: "ai-image",
        categoryAr: "الصور بالذكاء الاصطناعي",
        description: "أداة إنشاء الصور بالذكاء الاصطناعي. أنشئ صوراً مذهلة من أوصاف نصية.",
        longDescription: "Midjourney تعمل من خلال Discord. تتميز بجودة فنية استثنائية وإمكانيات إبداعية غير محدودة.",
        pros: ["جودة صور استثنائية", "أنماط فنية متنوعة", "مجتمع نشط"],
        cons: ["يتطلب Discord", "منحنى تعلم كبير"],
        rating: 4.8,
        reviews: 8900,
        icon: "🎨",
        logoUrl: "",
        affiliateLink: "https://midjourney.com",
        price: "$10/month",
        featured: true,
        topToday: true,
        developer: "Midjourney",
        launchDate: "يوليو 2022",
        users: "+20 مليون",
        tags: ["AI", "Image", "Art"],
        alternatives: [7, 10]
    },
    {
        id: 7,
        name: "DALL-E 3",
        nameEn: "DALL-E 3",
        category: "ai-image",
        categoryAr: "الصور بالذكاء الاصطناعي",
        description: "منتج الصور بالذكاء الاصطناعي من OpenAI. أنشئ صوراً مذهلة من النصوص.",
        longDescription: "DALL-E 3 أحدث إصدار من OpenAI. يتميز بفهم أفضل للسياق والدقة. متاح من ChatGPT Plus.",
        pros: ["فهم سياقي ممتاز", "دقة في التفاصيل", "تكامل مع ChatGPT"],
        cons: ["يتطلب اشتراك ChatGPT", "قيود على المحتوى"],
        rating: 4.7,
        reviews: 6800,
        icon: "🖼️",
        logoUrl: "",
        affiliateLink: "https://openai.com/dall-e-3",
        price: "$20/month",
        developer: "OpenAI",
        launchDate: "أكتوبر 2023",
        tags: ["AI", "Image", "OpenAI"],
        alternatives: [6, 10]
    },
    {
        id: 8,
        name: "Adobe Firefly",
        nameEn: "Adobe Firefly",
        category: "ai-image",
        categoryAr: "الصور بالذكاء الاصطناعي",
        description: "أداة إنشاء الصور من Adobe. أنشئ صوراً مذهلة بنماذج مختلفة.",
        longDescription: "Adobe Firefly مع التركيز على الاستخدام التجاري الآمن. يتكامل مع Photoshop.",
        pros: ["آمن للاستخدام التجاري", "تكامل مع Adobe", "إعادة الرسم"],
        cons: ["يتطلب اشتراك Adobe", "بطيء نسبياً"],
        rating: 4.7,
        reviews: 4800,
        icon: "🔥",
        logoUrl: "",
        affiliateLink: "https://firefly.adobe.com",
        price: "$4.99/month",
        developer: "Adobe",
        launchDate: "مارس 2023",
        tags: ["AI", "Image", "Adobe"],
        alternatives: [6, 7]
    },
    {
        id: 9,
        name: "Stable Diffusion",
        nameEn: "Stable Diffusion",
        category: "ai-image",
        categoryAr: "الصور بالذكاء الاصطناعي",
        description: "أداة إنشاء صور مفتوحة المصدر. أنشئ صوراً مجانية على جهازك.",
        longDescription: "Stable Diffusion نموذج مفتوح المصدر يعمل محلياً على جهازك. مجاني تماماً.",
        pros: ["مجانٍ ومفتوح المصدر", "يعمل محلياً", "تحكم كامل"],
        cons: ["يتطلب جهاز قوي", "منحنى تعلم"],
        rating: 4.6,
        reviews: 9200,
        icon: "🎭",
        logoUrl: "",
        affiliateLink: "https://stability.ai",
        price: "مجاني",
        developer: "Stability AI",
        launchDate: "أغسطس 2022",
        tags: ["AI", "Image", "Open Source"],
        alternatives: [6, 7]
    },
    {
        id: 10,
        name: "Leonardo.ai",
        nameEn: "Leonardo.ai",
        category: "ai-image",
        categoryAr: "الصور بالذكاء الاصطناعي",
        description: "منصة إنشاء صور احترافية. أدوات متقدمة لصنع الصور بالذكاء الاصطناعي.",
        longDescription: "Leonardo.ai منصة شاملة تقدم أدوات تحكم متقدمة. تدعم إنشاء الفيديو أيضاً.",
        pros: ["أدوات تحكم متقدمة", "مجانية برصيد", "إنشاء الفيديو"],
        cons: ["رصيد محدود مجاناً"],
        rating: 4.6,
        reviews: 5200,
        icon: "🎪",
        logoUrl: "",
        affiliateLink: "https://leonardo.ai",
        price: "مجاني - $30/month",
        developer: "Leonardo",
        launchDate: "ديسمبر 2022",
        tags: ["AI", "Image", "Video"],
        alternatives: [6, 7]
    },

    // === Design Tools ===
    {
        id: 11,
        name: "Canva",
        nameEn: "Canva",
        category: "design",
        categoryAr: "التصميم",
        description: "أداة تصميم سهلة الاستخدام. صمم منشورات وشعارات بدون خبرة.",
        longDescription: "Canva أداة تصميم سهلة لأي شخص. مكتبة ضخمة من القوالب. مثالية لغير المتخصصين.",
        pros: ["واجهة سهلة جداً", "مكتبة قوالب ضخمة", "مجاني مع ميزات جيدة"],
        rating: 4.7,
        reviews: 15200,
        icon: "🎨",
        logoUrl: "",
        affiliateLink: "https://canva.com",
        price: "مجاني - $13/month",
        featured: true,
        topToday: true,
        developer: "Canva",
        launchDate: "2012",
        users: "+100 مليون",
        tags: ["Design", "Easy"],
        alternatives: [12]
    },
    {
        id: 12,
        name: "Figma",
        nameEn: "Figma",
        category: "design",
        categoryAr: "التصميم",
        description: "أداة تصميم واجهة المستخدم التعاونية. صمم مع فريقك في الوقت الفعلي.",
        longDescription: "Figma أولى للمصممين المحترفين. تعمل في المتصفح وتدعم التعاون الحقيقي.",
        pros: ["تعاون في الوقت الفعلي", "أدوات متقدمة", "Prototyping مدمج"],
        cons: ["يتطلب إنترنت", "غالي للفرق"],
        rating: 4.9,
        reviews: 11500,
        icon: "🎯",
        logoUrl: "",
        affiliateLink: "https://figma.com",
        price: "مجاني - $15/month",
        featured: true,
        topToday: false,
        developer: "Figma",
        launchDate: "2016",
        tags: ["Design", "UI/UX"],
        alternatives: [11]
    },
    {
        id: 13,
        name: "Adobe Photoshop",
        nameEn: "Adobe Photoshop",
        category: "design",
        categoryAr: "التصميم",
        description: "البرنامج الأشهر لتحرير الصور. معيار صناعي لتعديل الصور.",
        longDescription: "Adobe Photoshop المعيار الصناعي لتحرير الصور. أدوات قوية وPlugins كثيرة.",
        pros: ["أدوات قوية جداً", "معايير الصناعة", "دعم كبير"],
        cons: ["سعر مرتفع", "منحنى تعلم كبير"],
        rating: 4.9,
        reviews: 25000,
        icon: "📸",
        logoUrl: "",
        affiliateLink: "https://adobe.com/photoshop",
        price: "$22.99/month",
        developer: "Adobe",
        launchDate: "1990",
        tags: ["Design", "Photo Editing"],
        alternatives: [14]
    },
    {
        id: 14,
        name: "Photopea",
        nameEn: "Photopea",
        category: "design",
        categoryAr: "التصميم",
        description: "بديل مجاني للمتصفح Photoshop. محرر صور يعمل بالكامل في المتصفح.",
        longDescription: "Photopea بديل مجاني وقريب من Photoshop. يدعم صيغ PSD و AI.",
        pros: ["مجانٍ تماماً", "يدعم صيغ Adobe", "بديل قريب من PS"],
        cons: ["أقل من Photoshop", "لا يعمل بدون إنترنت"],
        rating: 4.5,
        reviews: 8500,
        icon: "🖌️",
        logoUrl: "",
        affiliateLink: "https://photopea.com",
        price: "مجاني",
        developer: "Photopea",
        launchDate: "2013",
        tags: ["Design", "Free"],
        alternatives: [13]
    },

    // === Productivity Tools ===
    {
        id: 15,
        name: "Notion",
        nameEn: "Notion",
        category: "productivity",
        categoryAr: "الإنتاجية",
        description: "منصة إدارة المشاريع والملاحظات. اجمع أفكارك في مكان واحد.",
        longDescription: "Notion منصة شاملة تجمع بين الملاحظات والمشاريع وقواعد البيانات. قابلة للتخصيص بالكامل.",
        pros: ["مرونة عالية", "قوالب متعددة", "تكاملات"],
        cons: ["منحنى تعلم", "بطيء أحياناً"],
        rating: 4.8,
        reviews: 9800,
        icon: "📝",
        logoUrl: "",
        affiliateLink: "https://notion.so",
        price: "مجاني - $10/month",
        featured: true,
        topToday: true,
        developer: "Notion Labs",
        launchDate: "2013",
        users: "+30 مليون",
        tags: ["Productivity", "Notes"],
        alternatives: [16, 17]
    },
    {
        id: 16,
        name: "Trello",
        nameEn: "Trello",
        category: "productivity",
        categoryAr: "الإنتاجية",
        description: "أداة إدارة المهام البصرية. نظّم مشاريعك بطريقة بسيطة.",
        longDescription: "Trello تستخدم نظام Kanban. مثالية للفرق الصغيرة والأفراد.",
        pros: ["بسيطة", "نظام Kanban", "مجانية جيدة"],
        rating: 4.6,
        reviews: 12500,
        icon: "📋",
        logoUrl: "",
        affiliateLink: "https://trello.com",
        price: "مجاني - $17.50/month",
        developer: "Atlassian",
        launchDate: "2011",
        users: "+50 مليون",
        tags: ["Productivity", "Kanban"],
        alternatives: [15]
    },
    {
        id: 17,
        name: "Asana",
        nameEn: "Asana",
        category: "productivity",
        categoryAr: "الإنتاجية",
        description: "منصة إدارة العمل الشاملة. نظّم أهدافك وفريقك في مكان واحد.",
        longDescription: "Asana منصة متقدمة للفرق والمؤسسات. تقدم تتبعاً شاملاً مع تقارير مفصلة.",
        pros: ["ميزات متقدمة", "تقارير", "أتمتة workflows"],
        cons: ["سعر مرتفع", "معقد للمبتدئين"],
        rating: 4.5,
        reviews: 8800,
        icon: "✅",
        logoUrl: "",
        affiliateLink: "https://asana.com",
        price: "مجاني - $24.99/month",
        developer: "Asana",
        launchDate: "2008",
        tags: ["Productivity", "Team"],
        alternatives: [15, 16]
    },
    {
        id: 18,
        name: "Todoist",
        nameEn: "Todoist",
        category: "productivity",
        categoryAr: "الإنتاجية",
        description: "مدير المهام الشخصي. نظّم حياتك ومهامك بذكاء.",
        longDescription: "Todoist مدير مهام بسيط وفعال. واجهة نظيفة وميزات مثل المشاريع الفرعية.",
        pros: ["واجهة نظيفة", "مزامنة ممتازة", "تكلفة منخفضة"],
        cons: ["لا يدعم Kanban", "محدود في المجاني"],
        rating: 4.7,
        reviews: 11000,
        icon: "☑️",
        logoUrl: "",
        affiliateLink: "https://todoist.com",
        price: "مجاني - $5/month",
        developer: "Doist",
        launchDate: "2007",
        users: "+25 مليون",
        tags: ["Productivity", "Tasks"],
        alternatives: [15]
    },

    // === Developer Tools ===
    {
        id: 19,
        name: "GitHub Copilot",
        nameEn: "GitHub Copilot",
        category: "development",
        categoryAr: "التطوير",
        description: "مساعد البرمجة بالذكاء الاصطناعي. اكتب أكواداً أسرع مع إكمال تلقائي.",
        longDescription: "GitHub Copilot من Microsoft و OpenAI. يقترح أكواداً كاملة بناءً على السياق.",
        pros: ["اقتراحات ذكية", "يدعم many لغات", "يدعم IDEs"],
        cons: ["يتطلب اشتراك", "مشاكل الترخيص"],
        rating: 4.8,
        reviews: 8900,
        icon: "💻",
        logoUrl: "",
        affiliateLink: "https://github.com/features/copilot",
        price: "$10/month",
        developer: "Microsoft",
        launchDate: "يونيو 2021",
        users: "+2 مليون",
        tags: ["Development", "AI"],
        alternatives: [20]
    },
    {
        id: 20,
        name: "Cursor",
        nameEn: "Cursor",
        category: "development",
        categoryAr: "التطوير",
        description: "محرر كود مدعوم بالذكاء الاصطناعي. IDE جديد يعتمد على AI.",
        longDescription: "Cursor مبني على VS Code مع تكامل عميق للذكاء الاصطناعي. محادثة مدمجة وإكمال ذكي.",
        pros: ["تكامل AI متقدم", "محادثة مدمجة", "مجاني للمستخدمين"],
        cons: ["جديد نسبياً", "موارد عالية"],
        rating: 4.7,
        reviews: 4200,
        icon: "📑",
        logoUrl: "",
        affiliateLink: "https://cursor.sh",
        price: "مجاني - $20/month",
        developer: "Anysphere",
        launchDate: "2023",
        tags: ["Development", "IDE"],
        alternatives: [19]
    },
    {
        id: 21,
        name: "Replit AI",
        nameEn: "Replit AI",
        category: "development",
        categoryAr: "التطوير",
        description: "بيئة تطوير سحابية مدعومة بالذكاء الاصطناعي.",
        longDescription: "Replit بيئة تطوير سحابية. تدعم أكثر من 50 لغة والتعاون في الوقت الفعلي.",
        pros: ["لا يتطلب إعداد", "Support multiple languages", "Hosting مدمج"],
        cons: ["أداء محدود", "خصوصية"],
        rating: 4.5,
        reviews: 6500,
        icon: "⚡",
        logoUrl: "",
        affiliateLink: "https://replit.com",
        price: "مجاني - $20/month",
        developer: "Replit",
        launchDate: "2018",
        users: "+20 مليون",
        tags: ["Development", "Cloud IDE"],
        alternatives: [19, 20]
    },

    // === Marketing & SEO Tools ===
    {
        id: 22,
        name: "Grammarly",
        nameEn: "Grammarly",
        category: "marketing",
        categoryAr: "التسويق",
        description: "مساعد الكتابة الذكية. صحح الأخطاء الإملائية والنحوية.",
        longDescription: "Grammarly يكتشف الأخطاء ويقترح تحسينات على الأسلوب والنبرة. متاح كإضافة للمتصفح.",
        pros: ["دقة عالية", "فحص شامل", "مجانية جيدة"],
        rating: 4.7,
        reviews: 18500,
        icon: "✏️",
        logoUrl: "",
        affiliateLink: "https://grammarly.com",
        price: "مجاني - $30/month",
        developer: "Grammarly",
        launchDate: "2009",
        users: "+50 مليون",
        tags: ["Writing", "Marketing"],
        alternatives: [1]
    },
    {
        id: 23,
        name: "SurferSEO",
        nameEn: "SurferSEO",
        category: "marketing",
        categoryAr: "التسويق",
        description: "أداة تحسين محركات البحث. حلّل المحتوى واحصل على توصيات.",
        longDescription: "SurferSEO تحلل المحتوى وتقدم توصيات مفصلة لتحسين الترتيب. تشمل كاتب SEO.",
        pros: ["تحليل شامل", "كاتب SEO مدمج", "تنافس البيانات"],
        cons: ["سعر مرتفع", "منحنى تعلم"],
        rating: 4.6,
        reviews: 4200,
        icon: "📈",
        logoUrl: "",
        affiliateLink: "https://surferseo.com",
        price: "$99/month",
        developer: "Surfer",
        launchDate: "2017",
        tags: ["SEO", "Marketing"],
        alternatives: [24, 25]
    },
    {
        id: 24,
        name: "Ahrefs",
        nameEn: "Ahrefs",
        category: "marketing",
        categoryAr: "التسويق",
        description: "أداة شاملة للـ SEO. أدوات بحث عن الكلمات المفتاحية.",
        longDescription: "Ahrefs من أقوى أدوات SEO. تقدم البحث عن الكلمات، تحليل الروابط، Site Audit.",
        pros: ["قاعدة بيانات ضخمة", "تحليل المنافسين", "Site Audit"],
        cons: ["سعر مرتفع جداً", "لا يدعم العربية"],
        rating: 4.8,
        reviews: 9500,
        icon: "🔍",
        logoUrl: "",
        affiliateLink: "https://ahrefs.com",
        price: "$99/month",
        developer: "Ahrefs",
        launchDate: "2010",
        users: "+7 ملايين",
        tags: ["SEO", "Research"],
        alternatives: [23, 25]
    },
    {
        id: 25,
        name: "SEMrush",
        nameEn: "SEMrush",
        category: "marketing",
        categoryAr: "التسويق",
        description: "منصة تسويق شاملة. SEO، PPC، Social Media، والمزيد.",
        longDescription: "SEMrush منصة تسويق رقمي شاملة. تجمع بين أدوات SEO وPPC وSocial Media.",
        pros: ["منصة شاملة", "تقارير متقدمة", "Brand Monitoring"],
        cons: ["سعر مرتفع", "واجهة مزدحمة"],
        rating: 4.7,
        reviews: 10500,
        icon: "📊",
        logoUrl: "",
        affiliateLink: "https://semrush.com",
        price: "$119.95/month",
        developer: "SEMrush",
        launchDate: "2008",
        users: "+10 ملايين",
        tags: ["SEO", "Marketing", "PPC"],
        alternatives: [23, 24]
    },

    // === Video Tools ===
    {
        id: 26,
        name: "Runway",
        nameEn: "Runway",
        category: "ai-video",
        categoryAr: "الفيديو بالذكاء الاصطناعي",
        description: "أدوات فيديو مدعومة بالذكاء الاصطناعي. أنشئ وحرر الفيديو.",
        longDescription: "Runway منصة متقدمة لتحرير الفيديو بالذكاء الاصطناعي. تقنية Gen-2 لإنشاء فيديو من نص.",
        pros: ["إنشاء فيديو من نص", "أدوات متقدمة", "تجربة مجانية"],
        cons: ["جودة متفاوتة", "منحنى تعلم"],
        rating: 4.5,
        reviews: 3200,
        icon: "🎬",
        logoUrl: "",
        affiliateLink: "https://runwayml.com",
        price: "مجاني - $35/month",
        developer: "Runway",
        launchDate: "2018",
        users: "+3 ملايين",
        tags: ["AI", "Video", "Editing"],
        alternatives: [27, 28]
    },
    {
        id: 27,
        name: "Synthesia",
        nameEn: "Synthesia",
        category: "ai-video",
        categoryAr: "الفيديو بالذكاء الاصطناعي",
        description: "أنشئ فيديوهات احترافية بالذكاء الاصطناعي. مضيفون رقميون بلغات متعددة.",
        longDescription: "Synthesia منصة لإنشاء فيديو بالذكاء الاصطناعي. مضيفون رقميون يتحدثون أكثر من 120 لغة.",
        pros: ["120+ لغة", "مضيفون رقميون", "سهل الاستخدام"],
        cons: ["غالي", "مضيفون محدودون"],
        rating: 4.6,
        reviews: 4800,
        icon: "🎥",
        logoUrl: "",
        affiliateLink: "https://synthesia.io",
        price: "$30/month",
        developer: "Synthesia",
        launchDate: "2017",
        users: "+1 مليون",
        tags: ["AI", "Video", "Avatars"],
        alternatives: [26, 28]
    },
    {
        id: 28,
        name: "Descript",
        nameEn: "Descript",
        category: "ai-video",
        categoryAr: "الفيديو بالذكاء الاصطناعي",
        description: "محرر فيديو بسيط بالذكاء الاصطناعي. أنشئ وحرر Podcast والفيديو.",
        longDescription: "Descript محرر فيديو يعتمد على النص. Overdub لتعديل الصوت. Transcription مجاني.",
        pros: ["تحرير بالنص", "Overdub مذهل", "Transcription مجاني"],
        cons: ["غير كامل للمحررين المحترفين"],
        rating: 4.6,
        reviews: 5800,
        icon: "🎙️",
        logoUrl: "",
        affiliateLink: "https://descript.com",
        price: "مجاني - $24/month",
        developer: "Descript",
        launchDate: "2019",
        users: "+2 مليون",
        tags: ["Video", "Podcast", "Editing"],
        alternatives: [26, 27]
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
    initToolDetailPage();
    initForms();
    initTouchOptimizations();
    initLazyLoading();
    initKeyboardNavigation();
    initScrollProgress();
    initToastNotifications();
    initShareButtons();
    initCopyFeedback();
    injectSchemaMarkup();
});

// Touch and Mobile Optimizations
function initTouchOptimizations() {
    // Disable 300ms delay on mobile
    document.addEventListener('touchstart', function() {}, {passive: true});

    // Prevent zoom on double tap
    let lastTouchEnd = 0;
    document.addEventListener('touchend', function (event) {
        const now = Date.now();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, {passive: false});

    // Improve scrolling on iOS
    document.body.addEventListener('touchmove', function() {}, {passive: true});

    // Better tap targets
    const clickableElements = document.querySelectorAll('.btn, .tool-card, .category-card, .nav-link');
    clickableElements.forEach(el => {
        el.style.minHeight = '44px';
        el.style.minWidth = '44px';
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Lazy Loading Images
function initLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    observer.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px 0px',
            threshold: 0.01
        });

        document.querySelectorAll('img[loading="lazy"]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// Keyboard Navigation Support
function initKeyboardNavigation() {
    // Skip to content on tab
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-nav');
        }
    });

    document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-nav');
    });

    // Escape to close mobile menu
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const navLinks = document.getElementById('navLinks');
            if (navLinks && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        }
    });
}

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
        heroSearchBtn.addEventListener('click', () => performSearch(heroSearchInput?.value || ''));
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
    let visibleCount = 12;

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
                t.nameEn.toLowerCase().includes(currentSearch) ||
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
            visibleCount = 12;
            renderTools();
        });
    });

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentSearch = e.target.value.toLowerCase();
            visibleCount = 12;
            renderTools();
        });
    }

    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            visibleCount += 12;
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

// Tool Detail Page
function initToolDetailPage() {
    const toolDetailPage = document.querySelector('.tool-detail-page');
    if (!toolDetailPage) return;

    const urlParams = new URLSearchParams(window.location.search);
    const toolId = parseInt(urlParams.get('id')) || 1;
    
    const tool = toolsData.find(t => t.id === toolId);
    
    if (!tool) {
        loadToolDetails(toolsData[0]);
        return;
    }

    loadToolDetails(tool);
}

function loadToolDetails(tool) {
    document.title = `${tool.name} - مراجعة شاملة | BestTools`;
    
    const breadcrumbCurrent = document.querySelector('.breadcrumb .current');
    if (breadcrumbCurrent) {
        breadcrumbCurrent.textContent = tool.name;
    }

    const toolLogo = document.querySelector('.tool-logo');
    if (toolLogo) {
        toolLogo.innerHTML = `<span style="font-size: 4rem;">${tool.icon}</span>`;
    }

    const categoryTag = document.querySelector('.tool-category-tag');
    if (categoryTag) {
        categoryTag.textContent = tool.categoryAr;
    }

    const toolTitle = document.querySelector('.tool-title');
    if (toolTitle) toolTitle.textContent = tool.name;

    const toolDesc = document.querySelector('.tool-short-desc');
    if (toolDesc) toolDesc.textContent = tool.description;

    const ratingValue = document.querySelector('.tool-rating .rating-value');
    if (ratingValue) ratingValue.textContent = tool.rating;

    const ratingCount = document.querySelector('.tool-rating .rating-count');
    if (ratingCount) ratingCount.textContent = `(${formatNumber(tool.reviews)} تقييم)`;

    // Update CTA button
    const ctaBtn = document.querySelector('.tool-cta');
    if (ctaBtn) {
        ctaBtn.href = tool.affiliateLink;
    }

    // Update long description
    const aboutSection = document.querySelector('.content-section h2');
    if (aboutSection && aboutSection.textContent === 'حول الأداة') {
        const aboutContent = aboutSection.nextElementSibling;
        if (aboutContent) {
            aboutContent.innerHTML = `<p>${tool.longDescription}</p>`;
        }
    }

    // Update pros
    const prosList = document.querySelector('.features-list');
    if (prosList) {
        prosList.innerHTML = tool.pros.map(pro => `<li>✅ ${pro}</li>`).join('');
    }

    // Update cons
    const consList = document.querySelector('.cons-list');
    if (consList) {
        consList.innerHTML = tool.cons.map(con => `<li>❌ ${con}</li>`).join('');
    }

    // Update quick info
    const quickInfoList = document.querySelector('.quick-info');
    if (quickInfoList) {
        quickInfoList.innerHTML = `
            <li><span class="label">المطور</span><span class="value">${tool.developer || 'N/A'}</span></li>
            <li><span class="label">تاريخ الإطلاق</span><span class="value">${tool.launchDate || 'N/A'}</span></li>
            <li><span class="label">المستخدمون</span><span class="value">${tool.users || 'N/A'}</span></li>
            <li><span class="label">السعر</span><span class="value">${tool.price}</span></li>
        `;
    }

    // Update tags
    const tagsList = document.querySelector('.tags-list');
    if (tagsList) {
        tagsList.innerHTML = tool.tags.map(tag => `<span class="tag">#${tag}</span>`).join('');
    }

    // Load related tools
    const relatedContainer = document.getElementById('relatedTools');
    if (relatedContainer) {
        const relatedTools = toolsData
            .filter(t => t.id !== tool.id && t.category === tool.category)
            .slice(0, 3);
        
        if (relatedTools.length === 0) {
            relatedTools = toolsData.filter(t => t.id !== tool.id).slice(0, 3);
        }
        
        relatedContainer.innerHTML = relatedTools.map(t => createToolCard(t)).join('');
    }
}

// Create Tool Card
function createToolCard(tool) {
    const stars = '⭐'.repeat(Math.floor(tool.rating));
    const logoHtml = tool.logoUrl 
        ? `<img src="${tool.logoUrl}" alt="${tool.name}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
           <span class="tool-card-icon" style="display:none;">${tool.icon}</span>`
        : `<span class="tool-card-icon">${tool.icon}</span>`;
    
    return `
        <div class="tool-card" onclick="goToTool(${tool.id})">
            <div class="tool-card-image">
                ${logoHtml}
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

// Navigate to tool detail with ID
function goToTool(toolId) {
    window.location.href = `tool-detail.html?id=${toolId}`;
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

// ============================================
// Scroll Progress Bar
// ============================================
function initScrollProgress() {
    const progressBar = document.getElementById('scrollProgress');
    if (!progressBar) return;

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / scrollHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    }, { passive: true });
}

// ============================================
// Toast Notifications
// ============================================
function initToastNotifications() {
    // Create container
    const container = document.createElement('div');
    container.className = 'toast-container';
    container.id = 'toastContainer';
    document.body.appendChild(container);
}

function showToast(message, type = 'info', duration = 3000) {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    const icons = {
        success: '✓',
        error: '✗',
        info: 'ℹ'
    };
    
    toast.innerHTML = `
        <span class="toast-icon">${icons[type] || icons.info}</span>
        <span class="toast-message">${message}</span>
        <button class="toast-close" onclick="this.parentElement.remove()">×</button>
    `;
    
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, duration);
}

// ============================================
// Share Buttons
// ============================================
function initShareButtons() {
    // Add share buttons to tool cards on home page
    const toolCards = document.querySelectorAll('.tool-card');
    toolCards.forEach(card => {
        const shareContainer = document.createElement('div');
        shareContainer.className = 'share-buttons';
        shareContainer.innerHTML = `
            <button class="share-btn whatsapp" onclick="shareWhatsApp('${card.querySelector('.tool-card-title')?.textContent || ''}')" title="شارك على واتساب">
                واتساب
            </button>
            <button class="share-btn facebook" onclick="shareFacebook('${window.location.href}')" title="شارك على فيسبوك">
                فيسبوك
            </button>
            <button class="share-btn twitter" onclick="shareTwitter('${window.location.href}')" title="شارك على تويتر">
                تويتر
            </button>
            <button class="share-btn telegram" onclick="shareTelegram('${window.location.href}')" title="شارك على تيليجرام">
                تيليجرام
            </button>
        `;
        card.appendChild(shareContainer);
    });
}

function shareWhatsApp(text) {
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(text + ' - ' + window.location.href)}`;
    window.open(url, '_blank');
}

function shareFacebook(url) {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
}

function shareTwitter(url) {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`, '_blank');
}

function shareTelegram(url) {
    window.open(`https://t.me/share/url?url=${encodeURIComponent(url)}`, '_blank');
}

// ============================================
// Copy Feedback
// ============================================
function initCopyFeedback() {
    // Copy link feedback for affiliate buttons
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('tool-card-btn') || e.target.classList.contains('tool-cta')) {
            showToast('جاري فتح الأداة...', 'success', 2000);
        }
    });
}

// ============================================
// JSON-LD Schema Markup
// ============================================
function injectSchemaMarkup() {
    const currentTool = toolsData[0]; // Default for homepage
    
    const schema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "BestTools",
        "url": "https://besttools-hub.github.io",
        "description": "منصة تعرض أفضل الأدوات الرقمية والمواقع المفيدة",
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https://besttools-hub.github.io/tools.html?search={search_term_string}",
            "query-input": "required name=search_term_string"
        }
    };
    
    // Add tool schema if on detail page
    if (window.location.pathname.includes('tool-detail.html')) {
        schema["@type"] = "Product";
        schema.name = currentTool.name;
        schema.description = currentTool.longDescription;
        schema.rating = {
            "@type": "AggregateRating",
            "ratingValue": currentTool.rating,
            "reviewCount": currentTool.reviews
        };
        schema.offers = {
            "@type": "Offer",
            "price": currentTool.price,
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock"
        };
    }
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
}

// ============================================
// Export functions
// ============================================
window.goToTool = goToTool;
window.formatNumber = formatNumber;
window.toolsData = toolsData;
window.showToast = showToast;
window.shareWhatsApp = shareWhatsApp;
window.shareFacebook = shareFacebook;
window.shareTwitter = shareTwitter;
window.shareTelegram = shareTelegram;