/* ============================================
   BestTools - Main JavaScript
   ============================================ */

// Tool Data - 25+ Tools with Complete Information
const toolsData = [
    // === AI Writing Tools ===
    {
        id: 1,
        name: "ChatGPT",
        nameEn: "ChatGPT",
        category: "ai-writing",
        categoryAr: "الكتابة بالذكاء الاصطناعي",
        description: "أداة الذكاء الاصطناعي الأكثر تطوراً للمحادثة والنصوص. مساعدك الذكي للكتابة والبرمجة والإجابة على الأسئلة.",
        longDescription: "ChatGPT هو نموذج ذكاء اصطناعي متقدم طورته OpenAI يستخدم تقنية المحادثة الطبيعية للتفاعل مع المستخدمين. يمكنه الإجابة على الأسئلة، كتابة المقالات، البرمجة، الترجمة، وأكثر بكثير. منذ إطلاقه في نوفمبر 2022، أصبح الأداة الأكثر استخداماً في العالم مع أكثر من 100 مليون مستخدم.",
        pros: ["محادثات طبيعية وسلسة", "دعم أكثر من 50 لغة", "كتابة الأكواد البرمجية", "إنشاء المحتوى النصي", "دمج مع تطبيقات متعددة", "واجهة سهلة الاستخدام"],
        cons: ["أحياناً يعطي معلومات غير دقيقة", "معرفة محدودة حتى 2023", "يتطلب اتصال بالإنترنت", "النسخة المجانية محدودة"],
        rating: 4.9,
        reviews: 12450,
        icon: "🤖",
        affiliateLink: "https://chat.openai.com",
        price: "مجاني - $20/month",
        featured: true,
        topToday: true,
        developer: "OpenAI",
        launchDate: "نوفمبر 2022",
        users: "+100 مليون",
        website: "chat.openai.com",
        tags: ["AI", "Chatbot", "Writing", "Coding", "Productivity"],
        alternatives: [3, 11, 5]
    },
    {
        id: 2,
        name: "Claude",
        nameEn: "Claude",
        category: "ai-writing",
        categoryAr: "الكتابة بالذكاء الاصطناعي",
        description: "مساعد الذكاء الاصطناعي الآمن من Anthropic. مساعد ذكي يركز على الأمان والمحادثة الطبيعية.",
        longDescription: "Claude هو مساعد ذكاء اصطناعي طورته شركة Anthropic، معروف بأخلاقياته العالية في التعامل مع المحتوى. يتميز بقدرته على فهم السياق العميق وإنتاج نصوص إبداعية عالية الجودة. يدعم التعامل مع الملفات والوثائق الكبيرة.",
        pros: ["أمان عالي في المحتوى", "فهم سياقي ممتاز", "يدعم الملفات والوثائق", "كتابة إبداعية ممتازة", "تفاعل طبيعي جداً", "تحليل النصوص الطويلة"],
        cons: ["لا يدعم البرمجة بشكل كامل", "مجانية محدودة", "غير متوفر في كثير من الدول"],
        rating: 4.8,
        reviews: 5200,
        icon: "🧠",
        affiliateLink: "https://claude.ai",
        price: "مجاني - $20/month",
        featured: true,
        topToday: false,
        developer: "Anthropic",
        launchDate: "مارس 2023",
        users: "+30 مليون",
        website: "claude.ai",
        tags: ["AI", "Chatbot", "Writing", "Safe"],
        alternatives: [1, 5, 6]
    },
    {
        id: 3,
        name: "Jasper",
        nameEn: "Jasper",
        category: "ai-writing",
        categoryAr: "الكتابة بالذكاء الاصطناعي",
        description: "مساعد الذكاء الاصطناعي للكتابة التسويقية. أنشئ مقالات ومنشورات تسويقية وطويلة في دقائق.",
        longDescription: "Jasper هو مساعد كتابة بالذكاء الاصطناعي مصمم خصيصاً للتسويق والمحتوى. يقدم أكثر من 50 قالباً كتابياً يساعدك في إنشاء محتوى تسويقي احترافي بسرعة. يدعم أكثر من 25 لغة ويتميز بميزة Boss Mode للكتابة الطويلة.",
        pros: ["قوالب متعددة للتسويق", "يدعم 25+ لغة", "وضع Boss Mode للمحتوى الطويل", "تكامل مع Grammerly", "دعم SEO", "أدوات صياغة العناوين"],
        cons: ["سعر مرتفع", "يتطلب تعلم القوالب", "جودة متفاوتة حسب الموضوع"],
        rating: 4.6,
        reviews: 7200,
        icon: "📝",
        affiliateLink: "https://jasper.ai",
        price: "$40/month",
        featured: false,
        topToday: false,
        developer: "Jasper AI",
        launchDate: "يناير 2021",
        users: "+100 ألف",
        website: "jasper.ai",
        tags: ["AI", "Writing", "Marketing", "Content"],
        alternatives: [5, 1, 6]
    },
    {
        id: 4,
        name: "Copy.ai",
        nameEn: "Copy.ai",
        category: "ai-writing",
        categoryAr: "الكتابة بالذكاء الاصطناعي",
        description: "أداة كتابة التسويق بالذكاء الاصطناعي. أنشئ إعلانات ومنشورات وسطور قوية بسرعة.",
        longDescription: "Copy.ai هي أداة كتابة تسويقية مدعومة بالذكاء الاصطناعي. تقدم حلولاً سريعة للإعلانات ومنشورات التواصل الاجتماعي وصفحات المنتج. تتميز بواجهة بسيطة ومجانية حتى 2000 كلمة شهرياً.",
        pros: ["واجهة بسيطة وسهلة", "مجانية حتى 2000 كلمة", "أدوات تسويقية متعددة", "أكثر من 90 أداة", "دعم اللغات المختلفة"],
        cons: ["جودة أقل من المنافسين", "제한 في الأطوال", "إعلانات مزعجة"],
        rating: 4.5,
        reviews: 5600,
        icon: "✍️",
        affiliateLink: "https://copy.ai",
        price: "مجاني - $49/month",
        featured: false,
        topToday: false,
        developer: "Copy AI",
        launchDate: "أبريل 2020",
        users: "+2 مليون",
        website: "copy.ai",
        tags: ["AI", "Copywriting", "Marketing"],
        alternatives: [3, 6, 1]
    },
    {
        id: 5,
        name: "Writesonic",
        nameEn: "Writesonic",
        category: "ai-writing",
        categoryAr: "الكتابة بالذكاء الاصطناعي",
        description: "منصة كتابة شاملة بالذكاء الاصطناعي. أنشئ مقالات، منشورات، وإعلانات باحترافية.",
        longDescription: "Writesonic هي منصة كتابة شاملة بالذكاء الاصطناعي. تتميز بأداة Article Writer التي تنشئ مقالات كاملة من عناوين فقط، وأداة Photo Generator المدعومة بـ GPT-4. تدعم أكثر من 24 لغة وتتكامل مع WordPress.",
        pros: ["Article Writer للمقالات", "دعم GPT-4", "تكامل مع WordPress", "أدوات SEO مدمجة", "أكثر من 100 أداة"],
        cons: ["تحد في جودة المقالات", "سرعة معالجة بطيئة", "واجهة معقدة"],
        rating: 4.4,
        reviews: 3800,
        icon: "🖊️",
        affiliateLink: "https://writesonic.com",
        price: "مجاني - $19/month",
        featured: false,
        topToday: false,
        developer: "Writesonic",
        launchDate: "مارس 2021",
        users: "+50 ألف",
        website: "writesonic.com",
        tags: ["AI", "Writing", "SEO", "Content"],
        alternatives: [3, 6, 1]
    },

    // === AI Image Tools ===
    {
        id: 6,
        name: "Midjourney",
        nameEn: "Midjourney",
        category: "ai-image",
        categoryAr: "الصور بالذكاء الاصطناعي",
        description: "أداة إنشاء الصور بالذكاء الاصطناعي. أنشئ صوراً مذهلة من أوصاف نصية بسيطة.",
        longDescription: "Midjourney هي أداة إنشاء صور مدعومة بالذكاء الاصطناعي تعمل من خلال Discord. تتميز بجودة صور فنية استثنائية وإمكانيات إبداعية غير محدودة. تدعم أنماط متعددة من الواقع إلى الخيال.",
        pros: ["جودة صور استثنائية", "أنماط فنية متنوعة", "دقة عالية", "مجتمع نشط", "تحديثات مستمرة"],
        cons: ["يتطلب Discord", "منحنى تعلم كبير", "تكلفة شهرية"],
        rating: 4.8,
        reviews: 8900,
        icon: "🎨",
        affiliateLink: "https://midjourney.com",
        price: "$10/month",
        featured: true,
        topToday: true,
        developer: "Midjourney",
        launchDate: "يوليو 2022",
        users: "+20 مليون",
        website: "midjourney.com",
        tags: ["AI", "Art", "Image Generation", "Design"],
        alternatives: [7, 10, 8]
    },
    {
        id: 7,
        name: "DALL-E 3",
        nameEn: "DALL-E 3",
        category: "ai-image",
        categoryAr: "الصور بالذكاء الاصطناعي",
        description: "منتج الصور بالذكاء الاصطناعي من OpenAI. أنشئ صوراً مذهلة من النصوص.",
        longDescription: "DALL-E 3 هو أحدث إصدار من نظام إنشاء الصور من OpenAI. يتميز بفهم أفضل للسياق والدقة في تفاصيل الصور. متاح الآن مباشرة من ChatGPT Plus للمشتركين.",
        pros: ["فهم سياقي ممتاز", "دقة في التفاصيل", "تكامل مع ChatGPT", "تحكم في النتيجة", "جودة عالية"],
        cons: ["يتطلب اشتراك ChatGPT", "قيود على المحتوى", "محدودية في الاستخدام التجاري"],
        rating: 4.7,
        reviews: 6800,
        icon: "🖼️",
        affiliateLink: "https://openai.com/dall-e-3",
        price: "$20/month (ChatGPT Plus)",
        featured: true,
        topToday: false,
        developer: "OpenAI",
        launchDate: "أكتوبر 2023",
        users: "+15 مليون",
        website: "openai.com/dall-e-3",
        tags: ["AI", "Image", "Generation", "OpenAI"],
        alternatives: [6, 10, 8]
    },
    {
        id: 8,
        name: "Adobe Firefly",
        nameEn: "Adobe Firefly",
        category: "ai-image",
        categoryAr: "الصور بالذكاء الاصطناعي",
        description: "أداة إنشاء الصور من Adobe. أنشئ صوراً مذهلة بنماذج مختلفة من النصوص.",
        longDescription: "Adobe Firefly هو نموذج إنشاء الصور من Adobe مع التركيز على الاستخدام التجاري الآمن. يتميز بقدرات متقدمة في التوسيع وإعادة الرسم، ويتكامل مع برنامج Photoshop.",
        pros: ["آمن للاستخدام التجاري", "تكامل مع Adobe", "إعادة الرسم والتوسيع", "جودة احترافية", "تحكم متقدم"],
        cons: ["محدودية في الأنماط", "يتطلب اشتراك Adobe", "بطيء نسبياً"],
        rating: 4.7,
        reviews: 4800,
        icon: "🔥",
        affiliateLink: "https://firefly.adobe.com",
        price: "$4.99/month",
        featured: false,
        topToday: false,
        developer: "Adobe",
        launchDate: "مارس 2023",
        users: "+10 مليون",
        website: "firefly.adobe.com",
        tags: ["AI", "Image", "Adobe", "Design"],
        alternatives: [6, 7, 10]
    },
    {
        id: 9,
        name: "Stable Diffusion",
        nameEn: "Stable Diffusion",
        category: "ai-image",
        categoryAr: "الصور بالذكاء الاصطناعي",
        description: "أداة إنشاء صور مفتوحة المصدر. أنشئ صوراً مجانية على جهازك الشخصي.",
        longDescription: "Stable Diffusion هو نموذج مفتوح المصدر لإنشاء الصور يعمل محلياً على جهازك. يتميز بأنه مجاني تماماً ويوفر تحكماً كاملاً في العملية. يمكن تثبيته محلياً أو استخدام خدمات سحابية.",
        pros: ["مجانٍ ومفتوح المصدر", "يعمل محلياً", "تحكم كامل", "مجتمع كبير", "تكاملات متعددة"],
        cons: ["يتطلب جهاز قوي", "منحنى تعلم", "جودة متفاوتة"],
        rating: 4.6,
        reviews: 9200,
        icon: "🎭",
        affiliateLink: "https://stability.ai",
        price: "مجاني (محلياً)",
        featured: false,
        topToday: false,
        developer: "Stability AI",
        launchDate: "أغسطس 2022",
        users: "+25 مليون",
        website: "stability.ai",
        tags: ["AI", "Image", "Open Source", "Free"],
        alternatives: [6, 7, 10]
    },
    {
        id: 10,
        name: "Leonardo.ai",
        nameEn: "Leonardo.ai",
        category: "ai-image",
        categoryAr: "الصور بالذكاء الاصطناعي",
        description: "منصة إنشاء صور احترافية. أدوات متقدمة لصنع وتحسين الصور بالذكاء الاصطناعي.",
        longDescription: "Leonardo.ai هي منصة شاملة لإنشاء الصور بالذكاء الاصطناعي. تقدم أدوات متقدمة للتحكم في النمط والمحتوى، مع واجهة مستخدم سهلة الاستخدام. تدعم إنشاء الفيديو أيضاً.",
        pros: ["أدوات تحكم متقدمة", "مجانية تتضمن رصيد", "إنشاء الفيديو", "قوالب جاهزة", "مجتمع نشط"],
        cons: ["رصيد محدود مجاناً", "رسوم لاحقة", "تعلم الأدوات"],
        rating: 4.6,
        reviews: 5200,
        icon: "🎪",
        affiliateLink: "https://leonardo.ai",
        price: "مجاني - $30/month",
        featured: false,
        topToday: false,
        developer: "Leonardo",
        launchDate: "ديسمبر 2022",
        users: "+8 ملايين",
        website: "leonardo.ai",
        tags: ["AI", "Image", "Video", "Creative"],
        alternatives: [6, 7, 9]
    },

    // === Design Tools ===
    {
        id: 11,
        name: "Canva",
        nameEn: "Canva",
        category: "design",
        categoryAr: "التصميم",
        description: "أداة تصميم سهلة الاستخدام. صمم منشورات سوشيال ميديا وشعارات وعروض تقديمية بدون خبرة.",
        longDescription: "Canva هي أداة تصميم سهلة الاستخدام تتيح لأي شخص إنشاء تصاميم احترافية. تقدم مكتبة ضخمة من القوالب والتصاميم الجاهزة. مثالية لغير المتخصصين في التصميم.",
        pros: ["واجهة سهلة جداً", "مكتبة ضخمة من القوالب", "مجاني مع ميزات جيدة", "تصدير متعدد الصيغ", "عمل جماعي"],
        cons: ["ميزات محدودة في المجاني", "أداة أساسية للاحتراف", "بطيئة مع تصاميم كبيرة"],
        rating: 4.7,
        reviews: 15200,
        icon: "🎨",
        affiliateLink: "https://canva.com",
        price: "مجاني - $13/month",
        featured: true,
        topToday: true,
        developer: "Canva",
        launchDate: "2012",
        users: "+100 مليون",
        website: "canva.com",
        tags: ["Design", "Social Media", "Presentation", "Easy"],
        alternatives: [12, 8]
    },
    {
        id: 12,
        name: "Figma",
        nameEn: "Figma",
        category: "design",
        categoryAr: "التصميم",
        description: "أداة تصميم واجهة المستخدم التعاونية. صمم تطبيقات ومواقع مع فريقك في الوقت الفعلي.",
        longDescription: "Figma هي أداة تصميم واجهات المستخدم الأولى للمصممين المحترفين. تعمل بالكامل في المتصفح وتدعم التعاون الحقيقي بين أعضاء الفريق. مثالية لتصميم التطبيقات والمواقع.",
        pros: ["تعاون في الوقت الفعلي", "يعمل في المتصفح", "أدوات تصميم متقدمة", "Prototyping مدمج", "مجتمع كبير"],
        cons: ["يتطلب اتصال بالإنترنت", "منحنى تعلم", "غالي لل فرق"],
        rating: 4.9,
        reviews: 11500,
        icon: "🎯",
        affiliateLink: "https://figma.com",
        price: "مجاني - $15/month",
        featured: true,
        topToday: false,
        developer: "Figma",
        launchDate: "2016",
        users: "+4 ملايين",
        website: "figma.com",
        tags: ["Design", "UI/UX", "Collaboration", "Prototyping"],
        alternatives: [11, 13]
    },
    {
        id: 13,
        name: "Adobe Photoshop",
        nameEn: "Adobe Photoshop",
        category: "design",
        categoryAr: "التصميم",
        description: "البرنامج الأشهر لتحرير الصور. معيار صناعي لتعديل الصور والجرافيك.",
        longDescription: "Adobe Photoshop هو المعيار الصناعي لتحرير الصور والجرافيك. يقدم أدوات قوية لتعديل الصور، إنشاء التصاميم، والطباعة._supported by a huge community of plugins.",
        pros: ["أدوات قوية جداً", "معايير الصناعة", "دعم كبير", "تكامل مع Adobe", "شعبية واسعة"],
        cons: ["سعر مرتفع جداً", "منحنى تعلم كبير", "يتطلب جهاز قوي"],
        rating: 4.9,
        reviews: 25000,
        icon: "📸",
        affiliateLink: "https://adobe.com/photoshop",
        price: "$22.99/month",
        featured: false,
        topToday: false,
        developer: "Adobe",
        launchDate: "1990",
        users: "+50 مليون",
        website: "adobe.com/photoshop",
        tags: ["Design", "Photo Editing", "Graphics", "Professional"],
        alternatives: [11, 14]
    },
    {
        id: 14,
        name: "Photopea",
        nameEn: "Photopea",
        category: "design",
        categoryAr: "التصميم",
        description: "بديل مجاني للمتصفح Photoshope. محرر صور احترافي يعمل بالكامل في المتصفح.",
        longDescription: "Photopea هو محرر صور مجاني يعمل بالكامل في المتصفح. يدعم صيغ PSD و AI و Sketch ويقدم أدوات مشابهة لـ Photoshop. مثالي لمن يريد Photoshop مجاناً.",
        pros: ["مجانٍ تماماً", "يعمل في المتصفح", "يدعم صيغ Adobe", "بديل قريب من PS", "لا يتطلب تثبيت"],
        cons: ["أقل من Photoshop", "بطيء مع ملفات كبيرة", "لا يعمل بدون إنترنت"],
        rating: 4.5,
        reviews: 8500,
        icon: "🖌️",
        affiliateLink: "https://photopea.com",
        price: "مجاني",
        featured: false,
        topToday: false,
        developer: "Photopea",
        launchDate: "2013",
        users: "+5 ملايين",
        website: "photopea.com",
        tags: ["Design", "Photo Editing", "Free", "Browser"],
        alternatives: [13, 11]
    },

    // === Productivity Tools ===
    {
        id: 15,
        name: "Notion",
        nameEn: "Notion",
        category: "productivity",
        categoryAr: "الإنتاجية",
        description: "منصة إدارة المشاريع والملاحظات. اجمع كل أفكارك ومشاريعك في مكان واحد.",
        longDescription: "Notion هي منصة شاملة لإدارة العمل والحياة. تجمع بين الملاحظات والمشاريع وقواعد البيانات والويكي والمزيد. قابلة للتخصيص بالكامل لتناسب احتياجاتك.",
        pros: ["مرونة عالية", "قوالب متعددة", "عمل جماعي", "تطبيقات متعددة", "تكاملات"],
        cons: ["منحنى تعلم", "بطيء أحياناً", "غير مجاني للفرق"],
        rating: 4.8,
        reviews: 9800,
        icon: "📝",
        affiliateLink: "https://notion.so",
        price: "مجاني - $10/month",
        featured: true,
        topToday: true,
        developer: "Notion Labs",
        launchDate: "2013",
        users: "+30 مليون",
        website: "notion.so",
        tags: ["Productivity", "Notes", "Project", "All-in-one"],
        alternatives: [16, 17, 18]
    },
    {
        id: 16,
        name: "Trello",
        nameEn: "Trello",
        category: "productivity",
        categoryAr: "الإنتاجية",
        description: "أداة إدارة المهام البصرية. نظّم مشاريعك بطريقة بسيطة ومؤثرة.",
        longDescription: "Trello هي أداة إدارة مشاريع بسيطة وفعالة تستخدم نظام Kanban. مثالية للفرق الصغيرة والأفراد الذين يريدون تنظيم المهام بصرياً.",
        pros: ["بسيطة وسهلة", "نظام Kanban", "مجانية جيدة", "تطبيقات متعددة", "Power-Ups"],
        cons: ["محدودة للمشاريع الكبيرة", "لا توجد ميزات متقدمة", "إعلانات في المجاني"],
        rating: 4.6,
        reviews: 12500,
        icon: "📋",
        affiliateLink: "https://trello.com",
        price: "مجاني - $17.50/month",
        featured: false,
        topToday: false,
        developer: "Atlassian",
        launchDate: "2011",
        users: "+50 مليون",
        website: "trello.com",
        tags: ["Productivity", "Project Management", "Kanban"],
        alternatives: [15, 17]
    },
    {
        id: 17,
        name: "Asana",
        nameEn: "Asana",
        category: "productivity",
        categoryAr: "الإنتاجية",
        description: "منصة إدارة العمل الشاملة. نظّم أهدافك ومهامك وفريقك في مكان واحد.",
        longDescription: "Asana هي منصة متقدمة لإدارة العمل للفرق والمؤسسات. تقدم تتبعاً شاملاً للمشاريع والأهداف مع تقارير مفصلة.",
        pros: ["ميزات متقدمة", "تقارير وتحليلات", "أتمتة workflows", "تكاملات كثيرة", "دعم كبير"],
        cons: ["سعر مرتفع", "معقد للمبتدئين", "إعدادات معقدة"],
        rating: 4.5,
        reviews: 8800,
        icon: "✅",
        affiliateLink: "https://asana.com",
        price: "مجاني - $24.99/month",
        featured: false,
        topToday: false,
        developer: "Asana",
        launchDate: "2008",
        users: "+20 مليون",
        website: "asana.com",
        tags: ["Productivity", "Project Management", "Team"],
        alternatives: [15, 16, 18]
    },
    {
        id: 18,
        name: "Todoist",
        nameEn: "Todoist",
        category: "productivity",
        categoryAr: "الإنتاجية",
        description: "مدير المهام الشخصي. نظّم حياتك ومهامك بذكاء.",
        longDescription: "Todoist هو مدير مهام بسيط وفعال للتنفيذ الفردي والفرق. يتميز بواجهة نظيفة وميزات قوية مثل المشاريع الفرعية والعلامات والتذكيرات.",
        pros: ["واجهة نظيفة", "ميزات قوية", "تطبيقات متعددة", "تكلفة منخفضة", "مزامنة ممتازة"],
        cons: ["غير مناسب للفرق الكبيرة", "ميزات محدودة في المجاني", "لا يدعم Kanban"],
        rating: 4.7,
        reviews: 11000,
        icon: "☑️",
        affiliateLink: "https://todoist.com",
        price: "مجاني - $5/month",
        featured: false,
        topToday: false,
        developer: "Doist",
        launchDate: "2007",
        users: "+25 مليون",
        website: "todoist.com",
        tags: ["Productivity", "Task Manager", "Personal"],
        alternatives: [15, 16]
    },

    // === Developer Tools ===
    {
        id: 19,
        name: "GitHub Copilot",
        nameEn: "GitHub Copilot",
        category: "development",
        categoryAr: "التطوير",
        description: "مساعد البرمجة بالذكاء الاصطناعي. اكتب أكواداً أسرع مع إكمال تلقائي ذكي.",
        longDescription: "GitHub Copilot هو مساعد برمجة بالذكاء الاصطناعي من Microsoft و OpenAI. يقترح أكواداً كاملة بناءً على السياق والتعليقات. يدعم أكثر من لغة برمجة.",
        pros: ["اقتراحات ذكية", "يدعم many لغات", "يتعلم من الكود", "أكواد متكررة", "دعم IDEs"],
        cons: ["يتطلب اشتراك", "اقتراحات غير دقيقة", "مشاكل الترخيص"],
        rating: 4.8,
        reviews: 8900,
        icon: "💻",
        affiliateLink: "https://github.com/features/copilot",
        price: "$10/month",
        featured: false,
        topToday: false,
        developer: "Microsoft",
        launchDate: "يونيو 2021",
        users: "+2 مليون",
        website: "github.com/features/copilot",
        tags: ["Development", "AI", "Coding", "Productivity"],
        alternatives: [20, 21]
    },
    {
        id: 20,
        name: "Cursor",
        nameEn: "Cursor",
        category: "development",
        categoryAr: "التطوير",
        description: "محرر كود مدعوم بالذكاء الاصطناعي. IDE جديد يعتمد على AI للمطورين.",
        longDescription: "Cursor هو IDE جديد مبني على VS Code مع تكامل عميق للذكاء الاصطناعي. يقدم ميزات مثل محادثة AI داخل المحرر، إكمال ذكي، وإعادة البناء التلقائي.",
        pros: ["تكامل AI متقدم", "يعمل على VS Code", "محادثة مدمجة", "إصلاح الأخطاء", "مجاني للمستخدمين"],
        cons: ["جديد نسبياً", "بعض الميزات تجريبية", "موارد عالية"],
        rating: 4.7,
        reviews: 4200,
        icon: "📑",
        affiliateLink: "https://cursor.sh",
        price: "مجاني - $20/month",
        featured: false,
        topToday: false,
        developer: "Anysphere",
        launchDate: "2023",
        users: "+500 ألف",
        website: "cursor.sh",
        tags: ["Development", "IDE", "AI", "VS Code"],
        alternatives: [19, 21]
    },
    {
        id: 21,
        name: "Replit AI",
        nameEn: "Replit AI",
        category: "development",
        categoryAr: "التطوير",
        description: "بيئة تطوير سحابية مدعومة بالذكاء الاصطناعي. اكتب، شغّل، ومشاركة الكود.",
        longDescription: "Replit هي بيئة تطوير سحابية مع ميزات AI مدمجة. تدعم أكثر من 50 لغة وتتيح التعاون في الوقت الفعلي. مثالي للمبتدئين والتعلم.",
        pros: ["لا يتطلب إعداد", "支持多个语言", "Collaboration", "Hosting مدمج", "AI مدمج"],
        cons: ["أداء محدود", "مجانية محدودة", "الخصوصية"],
        rating: 4.5,
        reviews: 6500,
        icon: "⚡",
        affiliateLink: "https://replit.com",
        price: "مجاني - $20/month",
        featured: false,
        topToday: false,
        developer: "Replit",
        launchDate: "2018",
        users: "+20 مليون",
        website: "replit.com",
        tags: ["Development", "Cloud IDE", "AI", "Learning"],
        alternatives: [19, 20]
    },

    // === Marketing & SEO Tools ===
    {
        id: 22,
        name: "Grammarly",
        nameEn: "Grammarly",
        category: "marketing",
        categoryAr: "التسويق",
        description: "مساعد الكتابة الذكية. صحح الأخطاء الإملاقية والنحوية وتحسين أسلوبك.",
        longDescription: "Grammarly هو مساعد كتابة مدعوم بالذكاء الاصطناعي. يكتشف الأخطاء الإملاقية والنحوية ويقترح تحسينات على الأسلوب والنبرة. متاح كإضافة للمتصفح وتطبيق.",
        pros: ["دقة عالية", "فحص شامل", "تطبيقات متعددة", "اقتراحات ذكية", "مجانية جيدة"],
        cons: ["اشتراك للميزات المتقدمة", "خصوصية البيانات", "أحياناً اقتراحات خاطئة"],
        rating: 4.7,
        reviews: 18500,
        icon: "✏️",
        affiliateLink: "https://grammarly.com",
        price: "مجاني - $30/month",
        featured: false,
        topToday: false,
        developer: "Grammarly",
        launchDate: "2009",
        users: "+50 مليون",
        website: "grammarly.com",
        tags: ["Writing", "Grammar", "Marketing", "Productivity"],
        alternatives: [1, 15]
    },
    {
        id: 23,
        name: "SurferSEO",
        nameEn: "SurferSEO",
        category: "marketing",
        categoryAr: "التسويق",
        description: "أداة تحسين محركات البحث. حلّل المحتوى واحصل على توصيات لتحسين ترتيبك.",
        longDescription: "SurferSEO هي أداة شاملة لـ SEO_content. تحلل المحتوى الخاص بك وتقدم توصيات مفصلة لتحسين الترتيب في محركات البحث. تشمل أداة كاتب المحتوى المدعوم بـ AI.",
        pros: ["تحليل شامل", "اقتراحات عملية", "كاتب SEO مدمج", "تنافس البيانات", "أدوات بحث"],
        cons: ["سعر مرتفع", "منحنى تعلم", "غير مناسب للمبتدئين"],
        rating: 4.6,
        reviews: 4200,
        icon: "📈",
        affiliateLink: "https://surferseo.com",
        price: "$99/month",
        featured: false,
        topToday: false,
        developer: "Surfer",
        launchDate: "2017",
        users: "+100 ألف",
        website: "surferseo.com",
        tags: ["SEO", "Marketing", "Content", "Analytics"],
        alternatives: [24, 25]
    },
    {
        id: 24,
        name: "Ahrefs",
        nameEn: "Ahrefs",
        category: "marketing",
        categoryAr: "التسويق",
        description: "أداة شاملة للـ SEO. أدوات بحث عن الكلمات المفتاحية وتحليل المنافسين.",
        longDescription: "Ahrefs هي أداة SEO شاملة تقدم حلولاً للبحث عن الكلمات المفتاحية، تحليل الروابط الخلفية، ومراقبة المنافسين. تُعتبر من أقوى أدوات SEO في السوق.",
        pros: ["قاعدة بيانات ضخمة", "أدوات متقدمة", "تحليل المنافسين", "Site Audit", "أكاديمي كبير"],
        cons: ["سعر مرتفع جداً", "منحنى تعلم", "لا يدعم العربية"],
        rating: 4.8,
        reviews: 9500,
        icon: "🔍",
        affiliateLink: "https://ahrefs.com",
        price: "$99/month",
        featured: false,
        topToday: false,
        developer: "Ahrefs",
        launchDate: "2010",
        users: "+7 ملايين",
        website: "ahrefs.com",
        tags: ["SEO", "Marketing", "Backlinks", "Research"],
        alternatives: [23, 25]
    },
    {
        id: 25,
        name: "SEMrush",
        nameEn: "SEMrush",
        category: "marketing",
        categoryAr: "التسويق",
        description: "منصة تسويق شاملة. SEO، PPC، Social Media، والمزيد.",
        longDescription: "SEMrush هي منصة تسويق رقمي شاملة تجمع بين أدوات SEO، PPC، Social Media، والمحتوى. تقدم رؤية شاملة لأدائك التسويقي.",
        pros: ["منصة شاملة", "أدوات متعددة", "تقارير متقدمة", "Brand Monitoring", "POSitions tracking"],
        cons: ["سعر مرتفع جداً", "معقد للمبتدئين", "واجهة مزدحمة"],
        rating: 4.7,
        reviews: 10500,
        icon: "📊",
        affiliateLink: "https://semrush.com",
        price: "$119.95/month",
        featured: false,
        topToday: false,
        developer: "SEMrush",
        launchDate: "2008",
        users: "+10 ملايين",
        website: "semrush.com",
        tags: ["SEO", "Marketing", "PPC", "All-in-one"],
        alternatives: [23, 24]
    },

    // === Video Tools ===
    {
        id: 26,
        name: "Runway",
        nameEn: "Runway",
        category: "ai-video",
        categoryAr: "الفيديو بالذكاء الاصطناعي",
        description: "أدوات فيديو مدعومة بالذكاء الاصطناعي. أنشئ وحرر الفيديو بالتقنيات الحديثة.",
        longDescription: "Runway هي منصة متقدمة لتحرير الفيديو بالذكاء الاصطناعي. تقدم أدوات لتوليد الفيديو، إزالة الخلفية،翻译، والمزيد. تقنية Gen-2 تتيح إنشاء فيديو من النص.",
        pros: ["إنشاء فيديو من نص", "أدوات متقدمة", "تجربة مجانية", "مستمر التطوير", "دعم المجتمع"],
        cons: ["جودة متفاوتة", "مجانية محدودة", "منحنى تعلم"],
        rating: 4.5,
        reviews: 3200,
        icon: "🎬",
        affiliateLink: "https://runwayml.com",
        price: "مجاني - $35/month",
        featured: false,
        topToday: false,
        developer: "Runway",
        launchDate: "2018",
        users: "+3 ملايين",
        website: "runwayml.com",
        tags: ["AI", "Video", "Editing", "Generation"],
        alternatives: [27, 28]
    },
    {
        id: 27,
        name: "Synthesia",
        nameEn: "Synthesia",
        category: "ai-video",
        categoryAr: "الفيديو بالذكاء الاصطناعي",
        description: "أنشئ فيديوهات احترافية بالذكاء الاصطناعي. مضيفون رقميون يتحدثون لغات متعددة.",
        longDescription: "Synthesia هي منصة لإنشاء فيديو بالذكاء الاصطناعي. تتيح إنشاء فيديوهات مع مضيفين رقميين يتحدثون أكثر من 120 لغة. مثالية للتدريب والتسويق.",
        pros: ["120+ لغة", "مضيفون رقميون", "سهل الاستخدام", "تطبيقات مؤسسية", "تجربة مجانية"],
        cons: ["غالي", "مضيفون محدودون", "قيود إبداعية"],
        rating: 4.6,
        reviews: 4800,
        icon: "🎥",
        affiliateLink: "https://synthesia.io",
        price: "$30/month",
        featured: false,
        topToday: false,
        developer: "Synthesia",
        launchDate: "2017",
        users: "+1 مليون",
        website: "synthesia.io",
        tags: ["AI", "Video", "Avatars", "Training"],
        alternatives: [26, 28]
    },
    {
        id: 28,
        name: "Descript",
        nameEn: "Descript",
        category: "ai-video",
        categoryAr: "الفيديو بالذكاء الاصطناعي",
        description: "محرر فيديو بسيط بالذكاء الاصطناعي. أنشئ وحرر Podcast والفيديو بسهولة.",
        longDescription: "Descript هو محرر فيديو وبودكاست جديد يعتمد على النص. يمكنك تحرير الفيديو بالنص كما لو كنت تحرر مستند. يشمل Overdub لتعديل الصوت AI.",
        pros: ["تحرير بالنص", "Overdub مذهل", "Transcription مجاني", "Simple interface", "Podcast tools"],
        cons: ["غير كامل للمحررين", "مشكلة الترحيل", "محدود للفيديو"],
        rating: 4.6,
        reviews: 5800,
        icon: "🎙️",
        affiliateLink: "https://descript.com",
        price: "مجاني - $24/month",
        featured: false,
        topToday: false,
        developer: "Descript",
        launchDate: "2019",
        users: "+2 مليون",
        website: "descript.com",
        tags: ["Video", "Podcast", "Editing", "Transcription"],
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

    // Get tool ID from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const toolId = parseInt(urlParams.get('id')) || 1;
    
    const tool = toolsData.find(t => t.id === toolId);
    
    if (!tool) {
        // Default to first tool if not found
        loadToolDetails(toolsData[0]);
        return;
    }

    loadToolDetails(tool);
}

function loadToolDetails(tool) {
    // Update page title and meta
    document.title = `${tool.name} - مراجعة شاملة | BestTools`;
    
    // Update breadcrumb
    const breadcrumbCurrent = document.querySelector('.breadcrumb .current');
    if (breadcrumbCurrent) {
        breadcrumbCurrent.textContent = tool.name;
    }

    // Update tool logo
    const toolLogo = document.querySelector('.tool-logo');
    if (toolLogo) {
        toolLogo.innerHTML = `<span style="font-size: 4rem;">${tool.icon}</span>`;
    }

    // Update category tag
    const categoryTag = document.querySelector('.tool-category-tag');
    if (categoryTag) {
        categoryTag.textContent = tool.categoryAr;
    }

    // Update tool info
    const toolTitle = document.querySelector('.tool-title');
    if (toolTitle) toolTitle.textContent = tool.name;

    const toolDesc = document.querySelector('.tool-short-desc');
    if (toolDesc) toolDesc.textContent = tool.description;

    // Update rating
    const ratingValue = document.querySelector('.tool-rating .rating-value');
    if (ratingValue) ratingValue.textContent = tool.rating;

    const ratingCount = document.querySelector('.tool-rating .rating-count');
    if (ratingCount) ratingCount.textContent = `(${formatNumber(tool.reviews)} تقييم)`;

    // Update pricing
    const pricingSection = document.querySelector('.tool-pricing');
    if (pricingSection) {
        if (tool.price.includes('مجاني')) {
            pricingSection.innerHTML = `<span class="price-free">${tool.price.split(' - ')[0]}</span>`;
        } else {
            pricingSection.innerHTML = `<span class="price-pro">${tool.price}</span>`;
        }
    }

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
    const developerValue = document.querySelector('.quick-info .label + .value');
    const developerRow = document.querySelector('.quick-info li:first-child');
    if (developerRow) {
        developerRow.innerHTML = `<span class="label">المطور</span><span class="value">${tool.developer}</span>`;
    }

    // Add more quick info
    const quickInfoList = document.querySelector('.quick-info');
    if (quickInfoList) {
        quickInfoList.innerHTML = `
            <li><span class="label">المطور</span><span class="value">${tool.developer}</span></li>
            <li><span class="label">تاريخ الإطلاق</span><span class="value">${tool.launchDate}</span></li>
            <li><span class="label">المستخدمون</span><span class="value">${tool.users}</span></li>
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
            .filter(t => t.id !== tool.id && (t.category === tool.category || (tool.alternatives && tool.alternatives.includes(t.id))))
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

// Export functions for global access
window.goToTool = goToTool;
window.formatNumber = formatNumber;
window.toolsData = toolsData;