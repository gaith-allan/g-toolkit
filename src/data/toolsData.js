export const toolsData = [
    // =================================================================================================
    // 100 أدوات البرمجة (Programming)
    // =================================================================================================
    {
        id: 1,
        name: "Visual Studio Code (VS Code)",
        description: "محرر أكواد خفيف وقوي من مايكروسوفت، يدعم آلاف الإضافات.",
        category: "البرمجة",
        type: "محرر أكواد",
        link: "https://code.visualstudio.com/",
        features: ["دعم لغات متعددة", "تكامل مع Git", "طرفية مدمجة", "IntelliSense"]
    },
    {
        id: 2,
        name: "PyCharm",
        description: "بيئة تطوير متكاملة (IDE) متخصصة للغة Python.",
        category: "البرمجة",
        type: "بيئة تطوير متكاملة",
        link: "https://www.jetbrains.com/pycharm/",
        features: ["تصحيح أخطاء متقدم", "تكامل مع Django/Flask", "تحليل الكود الذكي"]
    },
    {
        id: 3,
        name: "IntelliJ IDEA",
        description: "بيئة تطوير متكاملة قوية للغة Java و Kotlin، تدعم العديد من اللغات الأخرى.",
        category: "البرمجة",
        type: "بيئة تطوير متكاملة",
        link: "https://www.jetbrains.com/idea/",
        features: ["إعادة هيكلة الكود", "أدوات اختبار مدمجة", "دعم Spring"]
    },
    {
        id: 4,
        name: "Sublime Text",
        description: "محرر أكواد سريع ومرن، معروف بأدائه العالي وميزة التحرير المتعدد.",
        category: "البرمجة",
        type: "محرر أكواد",
        link: "https://www.sublimetext.com/",
        features: ["سرعة فائقة", "تحرير متعدد", "واجهة مستخدم قابلة للتخصيص"]
    },
    {
        id: 5,
        name: "Git",
        description: "نظام تحكم في الإصدارات موزع، ضروري لتتبع التغييرات والتعاون.",
        category: "البرمجة",
        type: "نظام تحكم في الإصدارات",
        link: "https://git-scm.com/",
        features: ["تتبع التغييرات", "الدمج (Merging)", "العمل على فروع (Branching)"]
    },
    {
        id: 6,
        name: "GitHub",
        description: "منصة استضافة لمشاريع Git، توفر أدوات للتعاون وإدارة المشاريع.",
        category: "البرمجة",
        type: "منصة استضافة كود",
        link: "https://github.com/",
        features: ["مراجعة الكود", "تتبع المشاكل (Issues)", "GitHub Actions"]
    },
    {
        id: 7,
        name: "GitLab",
        description: "منصة DevOps متكاملة توفر إدارة المشاريع، التحكم في الإصدارات، و CI/CD.",
        category: "البرمجة",
        type: "منصة DevOps",
        link: "https://gitlab.com/",
        features: ["CI/CD مدمج", "إدارة الحاويات", "أدوات أمان"]
    },
    {
        id: 8,
        name: "Docker",
        description: "منصة للحاويات تسمح بتغليف التطبيقات واعتمادياتها لضمان عملها في أي بيئة.",
        category: "البرمجة",
        type: "منصة حاويات",
        link: "https://www.docker.com/",
        features: ["عزل البيئات", "تطوير موحد", "Docker Compose"]
    },
    {
        id: 9,
        name: "Kubernetes (K8s)",
        description: "نظام مفتوح المصدر لأتمتة نشر وإدارة وتوسيع نطاق التطبيقات المحتواة.",
        category: "البرمجة",
        type: "منصة أوركسترا الحاويات",
        link: "https://kubernetes.io/",
        features: ["توسيع تلقائي", "إدارة الموارد", "تحمل الأخطاء"]
    },
    {
        id: 10,
        name: "Postman",
        description: "أداة لاختبار وتوثيق واجهات برمجة التطبيقات (APIs).",
        category: "البرمجة",
        type: "اختبار API",
        link: "https://www.postman.com/",
        features: ["مجموعات طلبات", "توثيق آلي", "اختبارات آلية"]
    },
    {
        id: 11,
        name: "Jupyter Notebook",
        description: "بيئة حوسبة تفاعلية تسمح بدمج الكود، النص، والمعادلات في مستند واحد.",
        category: "البرمجة",
        type: "بيئة حوسبة تفاعلية",
        link: "https://jupyter.org/",
        features: ["دعم Python و R", "تحليل بيانات", "مشاركة سهلة"]
    },
    {
        id: 12,
        name: "Selenium",
        description: "إطار عمل لأتمتة المتصفحات، يستخدم لاختبار تطبيقات الويب.",
        category: "البرمجة",
        type: "أتمتة المتصفح",
        link: "https://www.selenium.dev/",
        features: ["اختبار وظيفي", "دعم لغات متعددة", "تشغيل على متصفحات مختلفة"]
    },
    {
        id: 13,
        name: "VS Code Live Share",
        description: "إضافة لـ VS Code تسمح بالتعاون في الوقت الفعلي على نفس الكود.",
        category: "البرمجة",
        type: "أداة تعاون",
        link: "https://visualstudio.microsoft.com/services/live-share/",
        features: ["تحرير مشترك", "تصحيح أخطاء مشترك", "جلسات طرفية"]
    },
    {
        id: 14,
        name: "ESLint",
        description: "أداة تحليل كود ثابتة للغة JavaScript، تساعد في فرض معايير الكود.",
        category: "البرمجة",
        type: "أداة تحليل كود",
        link: "https://eslint.org/",
        features: ["قواعد قابلة للتخصيص", "تصحيح تلقائي", "اكتشاف الأخطاء"]
    },
    {
        id: 15,
        name: "Prettier",
        description: "منسق كود رأي (Opinionated Code Formatter) يدعم العديد من اللغات.",
        category: "البرمجة",
        type: "منسق كود",
        link: "https://prettier.io/",
        features: ["تنسيق تلقائي", "يدعم HTML/CSS/JS", "تكامل مع المحررات"]
    },
    {
        id: 16,
        name: "Terraform",
        description: "أداة للبنية التحتية ككود (IaC) تسمح بإدارة الموارد السحابية.",
        category: "البرمجة",
        type: "البنية التحتية ككود",
        link: "https://www.terraform.io/",
        features: ["دعم سحابي متعدد", "تخطيط التنفيذ", "لغة HCL"]
    },
    {
        id: 17,
        name: "Ansible",
        description: "أداة أتمتة وإدارة تكوين بسيطة وقوية، لا تتطلب عملاء على الخوادم.",
        category: "البرمجة",
        type: "إدارة التكوين",
        link: "https://www.ansible.com/",
        features: ["بدون عميل (Agentless)", "لغة YAML", "إدارة التطبيقات"]
    },
    {
        id: 18,
        name: "Wireshark",
        description: "محلل بروتوكولات شبكة مفتوح المصدر، يستخدم لتصحيح أخطاء الشبكات.",
        category: "البرمجة",
        type: "أداة شبكات",
        link: "https://www.wireshark.org/",
        features: ["التقاط حزم البيانات", "تصفية متقدمة", "تحليل عميق"]
    },
    {
        id: 19,
        name: "DBeaver",
        description: "عميل قاعدة بيانات عالمي يدعم جميع قواعد البيانات الرئيسية (SQL, NoSQL).",
        category: "البرمجة",
        type: "عميل قاعدة بيانات",
        link: "https://dbeaver.io/",
        features: ["محرر SQL", "عارض بيانات", "دعم سحابي"]
    },
    {
        id: 20,
        name: "Ngrok",
        description: "أداة تسمح بتعريض خادم محلي على الإنترنت عبر نفق آمن.",
        category: "البرمجة",
        type: "أداة شبكات",
        link: "https://ngrok.com/",
        features: ["تعريض الخوادم المحلية", "اختبار الـ Webhooks", "تشفير SSL"]
    },
    // ... (80 more Programming tools)
    {
        id: 100,
        name: "WebAssembly (Wasm)",
        description: "تنسيق تعليمات ثنائي يسمح بتشغيل لغات غير JavaScript في المتصفح بأداء قريب من الأصلي.",
        category: "البرمجة",
        type: "تكنولوجيا ويب",
        link: "https://webassembly.org/",
        features: ["أداء عالي", "دعم لغات C++/Rust", "أمان متصفح"]
    },

    // =================================================================================================
    // 100 أدوات الأمن السيبراني (Cybersecurity)
    // =================================================================================================
    {
        id: 101,
        name: "Kali Linux",
        description: "توزيعة لينكس مبنية على دبيان، مصممة خصيصاً لاختبار الاختراق والتدقيق الأمني.",
        category: "الأمن السيبراني",
        type: "نظام تشغيل",
        link: "https://www.kali.org/",
        features: ["أكثر من 600 أداة اختبار اختراق", "دعم واسع للأجهزة", "وضع الطب الشرعي"]
    },
    {
        id: 102,
        name: "Metasploit Framework",
        description: "أداة مفتوحة المصدر لتطوير وتنفيذ واختبار الثغرات الأمنية.",
        category: "الأمن السيبراني",
        type: "اختبار اختراق",
        link: "https://www.metasploit.com/",
        features: ["قاعدة بيانات ثغرات ضخمة", "وحدات استغلال جاهزة", "أتمتة الاختبار"]
    },
    {
        id: 103,
        name: "Nmap (Network Mapper)",
        description: "أداة مفتوحة المصدر لاكتشاف الشبكات والتدقيق الأمني.",
        category: "الأمن السيبراني",
        type: "اكتشاف شبكات",
        link: "https://nmap.org/",
        features: ["مسح المنافذ", "اكتشاف الخدمات", "فحص نظام التشغيل"]
    },
    {
        id: 104,
        name: "Burp Suite Professional",
        description: "النسخة الاحترافية من منصة Burp Suite، توفر أدوات متقدمة لاختبار أمان الويب.",
        category: "الأمن السيبراني",
        type: "اختبار اختراق الويب",
        link: "https://portswigger.net/burp",
        features: ["ماسح ثغرات آلي", "أدوات تعاون", "تحليل متقدم"]
    },
    {
        id: 105,
        name: "Aircrack-ng",
        description: "مجموعة أدوات لتقييم أمان شبكات Wi-Fi.",
        category: "الأمن السيبراني",
        type: "أمن الشبكات اللاسلكية",
        link: "https://www.aircrack-ng.org/",
        features: ["التقاط الحزم", "حقن الحزم", "كسر كلمات المرور"]
    },
    {
        id: 106,
        name: "Hydra",
        description: "أداة لاختراق كلمات المرور عبر هجمات القوة الغاشمة (Brute-Force) على خدمات متعددة.",
        category: "الأمن السيبراني",
        type: "كسر كلمات المرور",
        link: "https://github.com/vanhauser-thc/thc-hydra",
        features: ["دعم بروتوكولات متعددة", "سرعة عالية", "مرونة في الإعداد"]
    },
    {
        id: 107,
        name: "Snort",
        description: "نظام مفتوح المصدر لاكتشاف التسلل (IDS) ومنع التسلل (IPS) للشبكات.",
        category: "الأمن السيبراني",
        type: "IDS/IPS",
        link: "https://www.snort.org/",
        features: ["تحليل حركة المرور", "قواعد قابلة للتخصيص", "اكتشاف الهجمات"]
    },
    {
        id: 108,
        name: "Volatility Framework",
        description: "أداة مفتوحة المصدر لاستخراج الأدلة الرقمية من ذاكرة الوصول العشوائي (RAM).",
        category: "الأمن السيبراني",
        type: "التحليل الجنائي الرقمي",
        link: "https://www.volatilityfoundation.org/",
        features: ["تحليل الذاكرة", "استخراج العمليات", "دعم أنظمة متعددة"]
    },
    {
        id: 109,
        name: "OWASP ZAP (Zed Attack Proxy)",
        description: "أداة مجانية ومفتوحة المصدر لاكتشاف الثغرات الأمنية في تطبيقات الويب.",
        category: "الأمن السيبراني",
        type: "اختبار اختراق الويب",
        link: "https://www.zaproxy.org/",
        features: ["ماسح آلي", "فحص يدوي", "مجتمع نشط"]
    },
    {
        id: 110,
        name: "Maltego",
        description: "أداة لجمع المعلومات (OSINT) وتصور العلاقات بين الكيانات المختلفة.",
        category: "الأمن السيبراني",
        type: "جمع المعلومات (OSINT)",
        link: "https://www.maltego.com/",
        features: ["تصور البيانات", "تحويلات متعددة", "تحليل العلاقات"]
    },
    // ... (90 more Cybersecurity tools)
    {
        id: 200,
        name: "YARA",
        description: "أداة تستخدم لتحديد وتصنيف عينات البرامج الضارة (Malware).",
        category: "الأمن السيبراني",
        type: "تحليل البرامج الضارة",
        link: "https://virustotal.github.io/yara/",
        features: ["قواعد قابلة للتخصيص", "سرعة في الفحص", "تكامل مع أنظمة أخرى"]
    },

    // =================================================================================================
    // 100 أدوات تطوير الألعاب (Game Development)
    // =================================================================================================
    {
        id: 201,
        name: "Unity",
        description: "محرك ألعاب رائد يستخدم لإنشاء ألعاب ثنائية وثلاثية الأبعاد، يدعم منصات متعددة.",
        category: "تطوير الألعاب",
        type: "محرك ألعاب",
        link: "https://unity.com/",
        features: ["دعم C#", "منصات متعددة", "متجر أصول ضخم"]
    },
    {
        id: 202,
        name: "Unreal Engine",
        description: "محرك ألعاب متقدم يوفر رسومات واقعية وأدوات قوية، يستخدم لإنشاء ألعاب AAA.",
        category: "تطوير الألعاب",
        type: "محرك ألعاب",
        link: "https://www.unrealengine.com/",
        features: ["رسومات عالية الجودة", "لغة Blueprints البصرية", "كود مصدر مفتوح"]
    },
    {
        id: 203,
        name: "Godot Engine",
        description: "محرك ألعاب مفتوح المصدر وخفيف الوزن، مثالي للمطورين المستقلين.",
        category: "تطوير الألعاب",
        type: "محرك ألعاب",
        link: "https://godotengine.org/",
        features: ["لغة GDScript سهلة", "2D و 3D", "مجاني بالكامل"]
    },
    {
        id: 204,
        name: "Blender",
        description: "برنامج مفتوح المصدر لإنشاء نماذج ثلاثية الأبعاد، الرسوم المتحركة، والمحاكاة.",
        category: "تطوير الألعاب",
        type: "نمذجة 3D",
        link: "https://www.blender.org/",
        features: ["نمذجة ونحت", "تحريك (Animation)", "محرك عرض قوي"]
    },
    {
        id: 205,
        name: "GIMP",
        description: "برنامج مفتوح المصدر لتحرير الصور والرسومات، بديل مجاني لـ Photoshop.",
        category: "تطوير الألعاب",
        type: "تحرير رسومات 2D",
        link: "https://www.gimp.org/",
        features: ["طبقات وأقنعة", "أدوات رسم متقدمة", "دعم صيغ متعددة"]
    },
    {
        id: 206,
        name: "FMOD",
        description: "مكتبة صوتية متقدمة تستخدم لإدارة وتطبيق المؤثرات الصوتية والموسيقى في الألعاب.",
        category: "تطوير الألعاب",
        type: "أدوات صوتية",
        link: "https://www.fmod.com/",
        features: ["صوت تفاعلي", "تكامل مع المحركات", "أدوات مزج متقدمة"]
    },
    {
        id: 207,
        name: "Substance Painter",
        description: "أداة لطلاء وتظليل النماذج ثلاثية الأبعاد، تستخدم لإنشاء مواد واقعية.",
        category: "تطوير الألعاب",
        type: "تظليل ونقش 3D",
        link: "https://www.adobe.com/products/substance3d-painter.html",
        features: ["طلاء طبقات", "مواد PBR", "تصدير سهل"]
    },
    {
        id: 208,
        name: "Aseprite",
        description: "محرر رسومات بكسل (Pixel Art) متخصص لإنشاء رسومات وأنميشن للألعاب ثنائية الأبعاد.",
        category: "تطوير الألعاب",
        type: "رسومات بكسل",
        link: "https://www.aseprite.org/",
        features: ["تحريك البكسل", "طبقات", "تصدير Sprite Sheets"]
    },
    {
        id: 209,
        name: "Construct 3",
        description: "محرك ألعاب يعتمد على الأحداث (Event-based) ولا يتطلب كتابة كود، مثالي للمبتدئين.",
        category: "تطوير الألعاب",
        type: "محرك ألعاب 2D",
        link: "https://www.construct.net/",
        features: ["برمجة بصرية", "نشر سهل", "ألعاب HTML5"]
    },
    {
        id: 210,
        name: "Wwise",
        description: "منصة صوتية متكاملة توفر حلاً كاملاً لإدارة الصوت في الألعاب.",
        category: "تطوير الألعاب",
        type: "أدوات صوتية",
        link: "https://www.audiokinetic.com/products/wwise/",
        features: ["صوت ديناميكي", "أدوات مزج", "تكامل مع المحركات"]
    },
    // ... (90 more Game Development tools)
    {
        id: 300,
        name: "Tiled",
        description: "محرر خرائط (Tile Map Editor) مفتوح المصدر لإنشاء خرائط الألعاب ثنائية الأبعاد.",
        category: "تطوير الألعاب",
        type: "أدوات تصميم مستويات",
        link: "https://www.mapeditor.org/",
        features: ["دعم طبقات متعددة", "تصدير JSON/XML", "مرونة عالية"]
    },

    // =================================================================================================
    // 100 أدوات الذكاء الاصطناعي (Artificial Intelligence)
    // =================================================================================================
    {
        id: 301,
        name: "PyTorch",
        description: "إطار عمل مفتوح المصدر للتعلم الآلي، معروف بمرونته وسهولة استخدامه في البحث.",
        category: "الذكاء الاصطناعي",
        type: "إطار عمل تعلم آلي",
        link: "https://pytorch.org/",
        features: ["حساب رسومي ديناميكي", "واجهة Python", "دعم قوي للأبحاث"]
    },
    {
        id: 302,
        name: "TensorFlow",
        description: "مكتبة مفتوحة المصدر للتعلم الآلي والشبكات العصبية من Google.",
        category: "الذكاء الاصطناعي",
        type: "إطار عمل تعلم آلي",
        link: "https://www.tensorflow.org/",
        features: ["نشر سهل", "TensorBoard", "دعم قوي للإنتاج"]
    },
    {
        id: 303,
        name: "Keras",
        description: "واجهة برمجة تطبيقات عالية المستوى للشبكات العصبية، تعمل فوق TensorFlow أو Theano.",
        category: "الذكاء الاصطناعي",
        type: "واجهة برمجة تطبيقات للشبكات العصبية",
        link: "https://keras.io/",
        features: ["سهولة الاستخدام", "نمذجة سريعة", "وحدات قابلة للتوسيع"]
    },
    {
        id: 304,
        name: "Scikit-learn",
        description: "مكتبة Python للتعلم الآلي الكلاسيكي (التصنيف، الانحدار، التجميع).",
        category: "الذكاء الاصطناعي",
        type: "مكتبة تعلم آلي كلاسيكي",
        link: "https://scikit-learn.org/",
        features: ["خوارزميات متعددة", "توثيق ممتاز", "سهولة التكامل"]
    },
    {
        id: 305,
        name: "Hugging Face Transformers",
        description: "مكتبة توفر نماذج مدربة مسبقاً للغة الطبيعية (NLP) مثل BERT و GPT.",
        category: "الذكاء الاصطناعي",
        type: "نماذج لغة طبيعية",
        link: "https://huggingface.co/transformers/",
        features: ["نماذج ضخمة", "دعم PyTorch/TensorFlow", "مجتمع نشط"]
    },
    {
        id: 306,
        name: "OpenAI API",
        description: "واجهة برمجة تطبيقات للوصول إلى نماذج الذكاء الاصطناعي المتقدمة مثل GPT-4 و DALL-E.",
        category: "الذكاء الاصطناعي",
        type: "خدمة سحابية للذكاء الاصطناعي",
        link: "https://openai.com/api/",
        features: ["نماذج قوية", "توليد نصوص وصور", "تكامل سهل"]
    },
    {
        id: 307,
        name: "Google Colab",
        description: "بيئة Jupyter Notebook سحابية توفر وصولاً مجانياً إلى وحدات معالجة الرسوميات (GPUs).",
        category: "الذكاء الاصطناعي",
        type: "بيئة تطوير سحابية",
        link: "https://colab.research.google.com/",
        features: ["GPUs مجانية", "مشاركة سهلة", "تكامل مع Google Drive"]
    },
    {
        id: 308,
        name: "Weights & Biases (W&B)",
        description: "منصة لتتبع، تصور، وتحسين تجارب التعلم الآلي.",
        category: "الذكاء الاصطناعي",
        type: "إدارة تجارب التعلم الآلي",
        link: "https://wandb.ai/",
        features: ["تتبع المعلمات", "تصور النتائج", "تقارير آلية"]
    },
    {
        id: 309,
        name: "MLflow",
        description: "منصة مفتوحة المصدر لإدارة دورة حياة التعلم الآلي (MLOps).",
        category: "الذكاء الاصطناعي",
        type: "MLOps",
        link: "https://mlflow.org/",
        features: ["تتبع التجارب", "إدارة النماذج", "نشر النماذج"]
    },
    {
        id: 310,
        name: "RapidMiner",
        description: "منصة علم بيانات شاملة توفر أدوات بصرية للتعلم الآلي وتحليل البيانات.",
        category: "الذكاء الاصطناعي",
        type: "منصة علم بيانات",
        link: "https://www.rapidminer.com/",
        features: ["برمجة بصرية", "تحليل تنبؤي", "تكامل بيانات"]
    },
    // ... (90 more AI tools)
    {
        id: 400,
        name: "Stable Diffusion",
        description: "نموذج توليد صور مفتوح المصدر، يسمح بإنشاء صور واقعية من وصف نصي.",
        category: "الذكاء الاصطناعي",
        type: "توليد صور",
        link: "https://stability.ai/stablediffusion",
        features: ["مفتوح المصدر", "جودة عالية", "تخصيص واسع"]
    },

    // =================================================================================================
    // 100 أدوات الهاردوير (Hardware)
    // =================================================================================================
    {
        id: 401,
        name: "CPU-Z",
        description: "أداة مجانية تعرض معلومات مفصلة عن المعالج، اللوحة الأم، والذاكرة.",
        category: "الهاردوير",
        type: "تشخيص النظام",
        link: "https://www.cpuid.com/softwares/cpu-z.html",
        features: ["معلومات المعالج", "سرعة الناقل", "معلومات الذاكرة"]
    },
    {
        id: 402,
        name: "GPU-Z",
        description: "أداة مساعدة خفيفة الوزن تعرض معلومات مفصلة عن بطاقة الرسوميات.",
        category: "الهاردوير",
        type: "تشخيص النظام",
        link: "https://www.techpowerup.com/gpuz/",
        features: ["مواصفات البطاقة", "مراقبة درجات الحرارة", "حالة الذاكرة"]
    },
    {
        id: 403,
        name: "HWMonitor",
        description: "برنامج لمراقبة أجهزة الاستشعار الرئيسية في النظام (درجات الحرارة، الفولتية، سرعة المراوح).",
        category: "الهاردوير",
        type: "مراقبة النظام",
        link: "https://www.cpuid.com/softwares/hwmonitor.html",
        features: ["مراقبة في الوقت الفعلي", "دعم أجهزة متعددة", "تسجيل البيانات"]
    },
    {
        id: 404,
        name: "CrystalDiskInfo",
        description: "أداة لمراقبة صحة محركات الأقراص الصلبة (HDD) ومحركات الحالة الصلبة (SSD) باستخدام تقنية S.M.A.R.T.",
        category: "الهاردوير",
        type: "تشخيص التخزين",
        link: "https://crystalmark.info/en/software/crystaldiskinfo/",
        features: ["قراءة S.M.A.R.T.", "مراقبة درجات الحرارة", "تقدير العمر الافتراضي"]
    },
    {
        id: 405,
        name: "MemTest86",
        description: "برنامج لاختبار ذاكرة الوصول العشوائي (RAM) للكشف عن الأخطاء والمشاكل.",
        category: "الهاردوير",
        type: "اختبار الذاكرة",
        link: "https://www.memtest86.com/",
        features: ["اختبار شامل", "يعمل من USB", "كشف الأخطاء"]
    },
    {
        id: 406,
        name: "MSI Afterburner",
        description: "أداة لتعديل ترددات وسرعات بطاقة الرسوميات (Overclocking) ومراقبة الأداء.",
        category: "الهاردوير",
        type: "تعديل الأداء",
        link: "https://www.msi.com/Landing/afterburner/graphics-cards",
        features: ["رفع التردد", "مراقبة الأداء في الألعاب", "تسجيل الفيديو"]
    },
    {
        id: 407,
        name: "Raspberry Pi Imager",
        description: "أداة سهلة الاستخدام لكتابة أنظمة التشغيل على بطاقات SD لأجهزة Raspberry Pi.",
        category: "الهاردوير",
        type: "إعداد الأجهزة المصغرة",
        link: "https://www.raspberrypi.com/software/",
        features: ["واجهة بسيطة", "تحميل الأنظمة", "تنسيق البطاقة"]
    },
    {
        id: 408,
        name: "Arduino IDE",
        description: "بيئة تطوير متكاملة لكتابة وتحميل الكود على لوحات Arduino.",
        category: "الهاردوير",
        type: "برمجة المتحكمات الدقيقة",
        link: "https://www.arduino.cc/en/software",
        features: ["مكتبات جاهزة", "تصحيح أخطاء", "مجتمع ضخم"]
    },
    {
        id: 409,
        name: "Fritzing",
        description: "برنامج لتصميم الدوائر الإلكترونية وتوثيقها، مفيد لمشاريع Arduino و Raspberry Pi.",
        category: "الهاردوير",
        type: "تصميم دوائر إلكترونية",
        link: "http://fritzing.org/home/",
        features: ["تصميم PCB", "عرض Breadboard", "مخططات سهلة"]
    },
    {
        id: 410,
        name: "Open Hardware Monitor",
        description: "برنامج مفتوح المصدر لمراقبة درجات الحرارة، سرعات المراوح، والفولتية.",
        category: "الهاردوير",
        type: "مراقبة النظام",
        link: "https://openhardwaremonitor.org/",
        features: ["مفتوح المصدر", "مراقبة شاملة", "عرض في شريط المهام"]
    },
    // ... (90 more Hardware tools)
    {
        id: 500,
        name: "3DMark",
        description: "معيار صناعي لاختبار أداء بطاقة الرسوميات والمعالج في الألعاب.",
        category: "الهاردوير",
        type: "اختبار الأداء",
        link: "https://www.3dmark.com/",
        features: ["اختبارات متعددة", "مقارنة النتائج", "تقارير مفصلة"]
    },

    // =================================================================================================
    // 100 أدوات أخرى (Other Tools)
    // =================================================================================================
    {
        id: 501,
        name: "Everything",
        description: "أداة بحث سريعة جداً عن الملفات والمجلدات على نظام Windows.",
        category: "أدوات أخرى",
        type: "بحث محلي",
        link: "https://www.voidtools.com/",
        features: ["سرعة فائقة", "استهلاك منخفض للموارد", "واجهة بسيطة"]
    },
    {
        id: 502,
        name: "OBS Studio",
        description: "برنامج مفتوح المصدر لتسجيل الفيديو والبث المباشر.",
        category: "أدوات أخرى",
        type: "تسجيل وبث",
        link: "https://obsproject.com/",
        features: ["دعم مصادر متعددة", "بث مباشر", "مرشحات فيديو"]
    },
    {
        id: 503,
        name: "Notion",
        description: "مساحة عمل متكاملة للملاحظات، إدارة المشاريع، وقواعد البيانات.",
        category: "أدوات أخرى",
        type: "إدارة وتنظيم",
        link: "https://www.notion.so/",
        features: ["قواعد بيانات مرنة", "ملاحظات منظمة", "تعاون فريق"]
    },
    {
        id: 504,
        name: "PowerToys",
        description: "مجموعة من الأدوات المساعدة من مايكروسوفت لإضافة وظائف متقدمة لنظام ويندوز.",
        category: "أدوات أخرى",
        type: "أدوات مساعدة للنظام",
        link: "https://learn.microsoft.com/en-us/windows/powertoys/",
        features: ["إعادة تعيين المفاتيح", "تحديد الألوان", "إعادة تسمية الملفات"]
    },
    {
        id: 505,
        name: "ShareX",
        description: "أداة مفتوحة المصدر لالتقاط الشاشة وتسجيلها ومشاركتها.",
        category: "أدوات أخرى",
        type: "التقاط شاشة",
        link: "https://getsharex.com/",
        features: ["التقاط مناطق مختلفة", "تحميل تلقائي", "أدوات تحرير"]
    },
    {
        id: 506,
        name: "KeePassXC",
        description: "مدير كلمات مرور مفتوح المصدر، آمن، ولا يتطلب اتصالاً بالإنترنت.",
        category: "أدوات أخرى",
        type: "إدارة كلمات المرور",
        link: "https://keepassxc.org/",
        features: ["تشفير قوي", "مولد كلمات مرور", "ملفات قاعدة بيانات محلية"]
    },
    {
        id: 507,
        name: "VLC Media Player",
        description: "مشغل وسائط متعددة مفتوح المصدر، يدعم تقريباً جميع صيغ الفيديو والصوت.",
        category: "أدوات أخرى",
        type: "مشغل وسائط",
        link: "https://www.videolan.org/vlc/",
        features: ["دعم صيغ واسع", "بث شبكي", "مجاني ومفتوح المصدر"]
    },
    {
        id: 508,
        name: "Figma",
        description: "أداة تصميم واجهات المستخدم (UI/UX) قائمة على المتصفح، تدعم التعاون في الوقت الفعلي.",
        category: "أدوات أخرى",
        type: "تصميم UI/UX",
        link: "https://www.figma.com/",
        features: ["تعاون مباشر", "مكونات قابلة لإعادة الاستخدام", "نماذج أولية تفاعلية"]
    },
    {
        id: 509,
        name: "Draw.io (Diagrams.net)",
        description: "أداة مجانية ومفتوحة المصدر لإنشاء المخططات الانسيابية والرسوم البيانية.",
        category: "أدوات أخرى",
        type: "رسم بياني",
        link: "https://www.diagrams.net/",
        features: ["تكامل مع السحابة", "قوالب متعددة", "تصدير سهل"]
    },
    {
        id: 510,
        name: "Trello",
        description: "أداة لإدارة المشاريع تعتمد على نظام كانبان (Kanban Boards).",
        category: "أدوات أخرى",
        type: "إدارة مشاريع",
        link: "https://trello.com/",
        features: ["لوحات مرنة", "بطاقات مهام", "تكاملات متعددة"]
    },
    // ... (90 more Other tools)
    {
        id: 600,
        name: "AnyDesk",
        description: "برنامج للوصول عن بعد وسطح المكتب الافتراضي، يسمح بالتحكم في جهاز آخر.",
        category: "أدوات أخرى",
        type: "وصول عن بعد",
        link: "https://anydesk.com/",
        features: ["سرعة عالية", "تشفير قوي", "نقل ملفات"]
    }
];
