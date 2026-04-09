(() => {
  const STORAGE_KEY = "site-lang";
  const SUPPORTED_LANGUAGES = ["zh", "en", "ja"];

  const dictionary = {
    zh: {
      meta: {
        title: "姚金龙的AI工厂",
        description: "姚金龙的AI工厂：AI 项目、AGI 实验与自动化产品展示。"
      },
      brand: {
        name: "姚金龙的AI工厂"
      },
      nav: {
        home: "首页",
        about: "关于",
        projects: "项目",
        contact: "联系",
        wechat: "WeChat",
        lang_switch_aria: "语言切换",
        theme_to_light: "浅色",
        theme_to_dark: "深色",
        theme_to_light_aria: "切换到浅色界面",
        theme_to_dark_aria: "切换到深色界面"
      },
      hero: {
        status_online: "AI SYSTEM ONLINE",
        status_note: "控制平面稳定",
        title_main: "姚金龙的AI工厂",
        title_sub: "AGI 系统 • 自动化 • 智能交付",
        subtitle: "专注 AI 原生系统、自动化流水线与产品级落地交付，面向高价值业务场景构建可运行的智能平台。",
        cta_projects: "查看项目矩阵",
        cta_contact: "打开联络通道",
        metric_uptime_label: "系统可用率",
        metric_uptime_value: "99.98%",
        metric_tracks_label: "活跃构建链路",
        metric_tracks_value: "12 条流水线",
        metric_mode_label: "执行模式",
        metric_mode_value: "本地 + 云端混合"
      },
      about: {
        kicker: "开发者画像",
        title: "工厂背后的构建者",
        p1: "我专注构建可落地的 AI 系统，强调工程化架构、可观测性与稳定交付，把模型能力变成真正可用的产品能力。",
        p2: "工作覆盖全栈开发、工作流编排与 AI 集成，目标是做出看起来高级、运行稳定、并且真正解决问题的系统。",
        chip_1: "全栈工程",
        chip_2: "AI 集成",
        chip_3: "自动化系统",
        chip_4: "产品交付"
      },
      projects: {
        kicker: "项目矩阵",
        title: "核心系统",
        p1: {
          state: "旗舰项目",
          desc: "覆盖训练、评估、版本治理与自动部署的全生命周期模型平台。",
          meta_1: "Model Ops 平台",
          meta_2: "流水线自动化",
          cta: "查看 GitHub"
        },
        p2: {
          state: "实验系统",
          desc: "面向数据集、模型实验与可视分析的交互式工作台，支持可复现实验流程。",
          meta_1: "实验控制台",
          meta_2: "可视化分析",
          cta: "查看项目"
        },
        p3: {
          state: "自动化栈",
          desc: "为 AI 助手执行场景打造的技能集合，包含保护机制、编排能力与交付模板。",
          meta_1: "任务编排",
          meta_2: "安全执行",
          cta: "浏览技能"
        }
      },
      agi: {
        badge: "核心模块",
        version: "版本 1.0.0",
        desc: "本站灵魂区：面向生产的 AGI 平台，将训练流程、产物生命周期、自动评估与部署发布完整串联。",
        pipeline_1_title: "Training",
        pipeline_1_desc: "数据集 + 微调",
        pipeline_2_title: "Artifact",
        pipeline_2_desc: "版本 + 注册",
        pipeline_3_title: "Evaluation",
        pipeline_3_desc: "评分 + 护栏",
        pipeline_4_title: "Deployment",
        pipeline_4_desc: "服务 + 观测",
        console_1_label: "SYSTEM",
        console_1_value: "运行中",
        console_1_desc: "health: stable",
        console_2_label: "PIPELINES",
        console_2_value: "12 条活跃",
        console_2_desc: "auto-scheduler on",
        console_3_label: "OBSERVABILITY",
        console_3_value: "实时指标",
        console_3_desc: "latency + drift watch",
        console_4_label: "RELEASE",
        console_4_value: "渐进式发布",
        console_4_desc: "safe deployment path",
        cta: "进入 AGI Model Factory"
      },
      contact: {
        kicker: "联络通道",
        title: "建立连接",
        intro: "发送你的需求指令，我会给出可执行的技术路径。",
        name_label: "姓名",
        name_placeholder: "你的姓名",
        email_label: "邮箱",
        email_placeholder: "your.email@example.com",
        message_label: "消息",
        message_placeholder: "描述你的项目目标、自动化诉求或 AI 工作流问题。",
        submit: "发送指令",
        alt: "你也可以通过 GitHub 与我联系，交流 AGI 与自动化系统合作。"
      },
      footer: {
        desc: "在 AI 能力、软件工程与高可靠自动化的交叉点持续构建系统。",
        copyright_brand: "姚金龙的AI工厂.",
        copyright_rights: "保留所有权利。",
        built: "使用 HTML、CSS、JavaScript 构建，并坚持工程化执行。"
      },
      wechat: {
        modal_title: "WeChat 联系",
        scan_hint: "扫码建立连接",
        qr_alt: "WeChat QR Code",
        image_missing: "请将二维码图片放到 assets/images/wechat_qr.png",
        close_aria: "关闭 WeChat 弹窗"
      },
      alerts: {
        required: "请填写所有必填项。",
        success: "已收到你的指令，我会尽快回复。"
      }
    },
    en: {
      meta: {
        title: "Yao Jinlong AI Factory",
        description: "Yao Jinlong AI Factory: AI projects, AGI experiments, and automation platform showcase."
      },
      brand: {
        name: "Yao Jinlong AI Factory"
      },
      nav: {
        home: "Home",
        about: "About",
        projects: "Projects",
        contact: "Contact",
        wechat: "WeChat",
        lang_switch_aria: "Language Switch",
        theme_to_light: "Light UI",
        theme_to_dark: "Dark UI",
        theme_to_light_aria: "Switch to light interface",
        theme_to_dark_aria: "Switch to dark interface"
      },
      hero: {
        status_online: "AI SYSTEM ONLINE",
        status_note: "Control Plane Stable",
        title_main: "Yao Jinlong AI Factory",
        title_sub: "AGI Systems • Automation • Intelligent Delivery",
        subtitle: "Premium engineering studio focused on AI-native systems, automation pipelines, and product-grade delivery for high-impact workflows.",
        cta_projects: "Explore Project Matrix",
        cta_contact: "Open Command Channel",
        metric_uptime_label: "Factory Uptime",
        metric_uptime_value: "99.98%",
        metric_tracks_label: "Active Build Tracks",
        metric_tracks_value: "12 Pipelines",
        metric_mode_label: "Execution Mode",
        metric_mode_value: "Local + Cloud Hybrid"
      },
      about: {
        kicker: "Builder Profile",
        title: "Builder Behind The Factory",
        p1: "I design and ship practical AI systems with production-minded architecture. My focus is turning model capability into stable products with strong observability, clean interfaces, and reliable automation.",
        p2: "I work across full-stack engineering, workflow orchestration, and AI integration. The goal is simple: build systems that look sharp, run smoothly, and solve real problems.",
        chip_1: "Full-Stack Engineering",
        chip_2: "AI Integration",
        chip_3: "Automation Systems",
        chip_4: "Product Delivery"
      },
      projects: {
        kicker: "Project Matrix",
        title: "Featured Systems",
        p1: {
          state: "Flagship",
          desc: "Comprehensive model lifecycle system for training, evaluation, release governance, and deployment automation.",
          meta_1: "Model Ops Platform",
          meta_2: "Pipeline Automation",
          cta: "View on GitHub"
        },
        p2: {
          state: "Lab System",
          desc: "Interactive experimentation environment for datasets, model runs, and visual analytics with reproducible workflows.",
          meta_1: "Experiment Console",
          meta_2: "Visual Analytics",
          cta: "View Project"
        },
        p3: {
          state: "Automation Stack",
          desc: "Curated automation skills for robust AI assistant execution, including safeguards, orchestration, and delivery templates.",
          meta_1: "Task Orchestration",
          meta_2: "Guarded Execution",
          cta: "Explore Skills"
        }
      },
      agi: {
        badge: "CORE MODULE",
        version: "VERSION 1.0.0",
        desc: "The centerpiece of this site: a production-minded AGI platform that connects training workflows, artifact lifecycle, automated evaluation, and release deployment.",
        pipeline_1_title: "Training",
        pipeline_1_desc: "Dataset + Fine-tune",
        pipeline_2_title: "Artifact",
        pipeline_2_desc: "Version + Registry",
        pipeline_3_title: "Evaluation",
        pipeline_3_desc: "Score + Guardrails",
        pipeline_4_title: "Deployment",
        pipeline_4_desc: "Serve + Observe",
        console_1_label: "SYSTEM",
        console_1_value: "Operational",
        console_1_desc: "health: stable",
        console_2_label: "PIPELINES",
        console_2_value: "12 Active",
        console_2_desc: "auto-scheduler on",
        console_3_label: "OBSERVABILITY",
        console_3_value: "Realtime Metrics",
        console_3_desc: "latency + drift watch",
        console_4_label: "RELEASE",
        console_4_value: "Progressive Rollout",
        console_4_desc: "safe deployment path",
        cta: "Enter AGI Model Factory"
      },
      contact: {
        kicker: "Command Channel",
        title: "Get In Touch",
        intro: "Drop a command and I will respond with a practical execution path.",
        name_label: "Name",
        name_placeholder: "Your name",
        email_label: "Email",
        email_placeholder: "your.email@example.com",
        message_label: "Message",
        message_placeholder: "Describe your project, automation goal, or AI workflow challenge.",
        submit: "Send Instruction",
        alt: "You can also reach me via GitHub for collaboration on AGI and automation systems."
      },
      footer: {
        desc: "Building systems at the intersection of AI capability, software engineering, and high-reliability automation.",
        copyright_brand: "Yao Jinlong AI Factory.",
        copyright_rights: "All rights reserved.",
        built: "Built with HTML, CSS, JavaScript, and disciplined execution."
      },
      wechat: {
        modal_title: "WeChat Contact",
        scan_hint: "Scan to connect",
        qr_alt: "WeChat QR Code",
        image_missing: "Please place your QR image at assets/images/wechat_qr.png",
        close_aria: "Close WeChat modal"
      },
      alerts: {
        required: "Please fill in all required fields.",
        success: "Instruction received. I will get back to you soon."
      }
    },
    ja: {
      meta: {
        title: "姚金龍AIファクトリー",
        description: "姚金龍AIファクトリー: AI プロジェクト、AGI 実験、自動化プラットフォームの紹介。"
      },
      brand: {
        name: "姚金龍AIファクトリー"
      },
      nav: {
        home: "ホーム",
        about: "概要",
        projects: "プロジェクト",
        contact: "連絡",
        wechat: "WeChat",
        lang_switch_aria: "言語切替",
        theme_to_light: "ライト",
        theme_to_dark: "ダーク",
        theme_to_light_aria: "ライト画面に切り替え",
        theme_to_dark_aria: "ダーク画面に切り替え"
      },
      hero: {
        status_online: "AI SYSTEM ONLINE",
        status_note: "Control Plane Stable",
        title_main: "姚金龍AIファクトリー",
        title_sub: "AGI Systems • Automation • Intelligent Delivery",
        subtitle: "AIネイティブなシステム、オートメーション基盤、プロダクト品質の実装を重視したエンジニアリングサイトです。",
        cta_projects: "プロジェクトを見る",
        cta_contact: "連絡チャネルを開く",
        metric_uptime_label: "稼働率",
        metric_uptime_value: "99.98%",
        metric_tracks_label: "アクティブパイプライン",
        metric_tracks_value: "12 Pipelines",
        metric_mode_label: "実行モード",
        metric_mode_value: "Local + Cloud Hybrid"
      },
      about: {
        kicker: "Builder Profile",
        title: "Builder Behind The Factory",
        p1: "I design and ship practical AI systems with production-minded architecture.",
        p2: "I work across full-stack engineering, workflow orchestration, and AI integration.",
        chip_1: "Full-Stack Engineering",
        chip_2: "AI Integration",
        chip_3: "Automation Systems",
        chip_4: "Product Delivery"
      },
      projects: {
        kicker: "Project Matrix",
        title: "Featured Systems",
        p1: {
          state: "Flagship",
          desc: "Comprehensive model lifecycle system for training, evaluation, release governance, and deployment automation.",
          meta_1: "Model Ops Platform",
          meta_2: "Pipeline Automation",
          cta: "View on GitHub"
        },
        p2: {
          state: "Lab System",
          desc: "Interactive experimentation environment for datasets, model runs, and visual analytics with reproducible workflows.",
          meta_1: "Experiment Console",
          meta_2: "Visual Analytics",
          cta: "View Project"
        },
        p3: {
          state: "Automation Stack",
          desc: "Curated automation skills for robust AI assistant execution, including safeguards, orchestration, and delivery templates.",
          meta_1: "Task Orchestration",
          meta_2: "Guarded Execution",
          cta: "Explore Skills"
        }
      },
      agi: {
        badge: "CORE MODULE",
        version: "VERSION 1.0.0",
        desc: "A production-minded AGI platform that connects training workflows, artifact lifecycle, automated evaluation, and release deployment.",
        pipeline_1_title: "Training",
        pipeline_1_desc: "Dataset + Fine-tune",
        pipeline_2_title: "Artifact",
        pipeline_2_desc: "Version + Registry",
        pipeline_3_title: "Evaluation",
        pipeline_3_desc: "Score + Guardrails",
        pipeline_4_title: "Deployment",
        pipeline_4_desc: "Serve + Observe",
        console_1_label: "SYSTEM",
        console_1_value: "Operational",
        console_1_desc: "health: stable",
        console_2_label: "PIPELINES",
        console_2_value: "12 Active",
        console_2_desc: "auto-scheduler on",
        console_3_label: "OBSERVABILITY",
        console_3_value: "Realtime Metrics",
        console_3_desc: "latency + drift watch",
        console_4_label: "RELEASE",
        console_4_value: "Progressive Rollout",
        console_4_desc: "safe deployment path",
        cta: "Enter AGI Model Factory"
      },
      contact: {
        kicker: "Command Channel",
        title: "Get In Touch",
        intro: "Drop a command and I will respond with a practical execution path.",
        name_label: "Name",
        name_placeholder: "Your name",
        email_label: "Email",
        email_placeholder: "your.email@example.com",
        message_label: "Message",
        message_placeholder: "Describe your project, automation goal, or AI workflow challenge.",
        submit: "Send Instruction",
        alt: "You can also reach me via GitHub for collaboration on AGI and automation systems."
      },
      footer: {
        desc: "Building systems at the intersection of AI capability, software engineering, and high-reliability automation.",
        copyright_brand: "姚金龍AIファクトリー.",
        copyright_rights: "All rights reserved.",
        built: "Built with HTML, CSS, JavaScript, and disciplined execution."
      },
      wechat: {
        modal_title: "WeChat Contact",
        scan_hint: "Scan to connect",
        qr_alt: "WeChat QR Code",
        image_missing: "Please place your QR image at assets/images/wechat_qr.png",
        close_aria: "Close WeChat modal"
      },
      alerts: {
        required: "Please fill in all required fields.",
        success: "Instruction received. I will get back to you soon."
      }
    }
  };

  let currentLanguage = "zh";

  const pick = (lang, key) => {
    const walk = (source) => key.split(".").reduce((acc, part) => (acc && Object.prototype.hasOwnProperty.call(acc, part) ? acc[part] : undefined), source);

    return walk(dictionary[lang]) ?? walk(dictionary.en) ?? walk(dictionary.zh) ?? key;
  };

  const normalizeLanguage = (language) => (SUPPORTED_LANGUAGES.includes(language) ? language : "zh");

  const applyLanguage = (language) => {
    currentLanguage = normalizeLanguage(language);

    document.documentElement.setAttribute(
      "lang",
      currentLanguage === "zh" ? "zh-CN" : currentLanguage === "en" ? "en" : "ja"
    );

    document.querySelectorAll("[data-i18n]").forEach((node) => {
      node.textContent = pick(currentLanguage, node.dataset.i18n);
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
      node.setAttribute("placeholder", pick(currentLanguage, node.dataset.i18nPlaceholder));
    });

    document.querySelectorAll("[data-i18n-title]").forEach((node) => {
      node.setAttribute("title", pick(currentLanguage, node.dataset.i18nTitle));
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach((node) => {
      node.setAttribute("aria-label", pick(currentLanguage, node.dataset.i18nAriaLabel));
    });

    document.querySelectorAll("[data-i18n-content]").forEach((node) => {
      node.setAttribute("content", pick(currentLanguage, node.dataset.i18nContent));
    });

    document.querySelectorAll("[data-i18n-alt]").forEach((node) => {
      node.setAttribute("alt", pick(currentLanguage, node.dataset.i18nAlt));
    });

    document.querySelectorAll("[data-lang]").forEach((node) => {
      node.classList.toggle("is-active", node.dataset.lang === currentLanguage);
    });

    localStorage.setItem(STORAGE_KEY, currentLanguage);
    document.dispatchEvent(new CustomEvent("languagechange", { detail: { language: currentLanguage } }));
    return currentLanguage;
  };

  const init = () => {
    const savedLanguage = normalizeLanguage(localStorage.getItem(STORAGE_KEY) || "zh");
    return applyLanguage(savedLanguage);
  };

  window.SiteI18n = {
    init,
    applyLanguage,
    getCurrentLanguage: () => currentLanguage,
    t: (key) => pick(currentLanguage, key),
    supported: SUPPORTED_LANGUAGES.slice(),
  };
})();
