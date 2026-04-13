(() => {
  const STORAGE_KEY = "site-lang";
  const SUPPORTED_LANGUAGES = ["zh", "en", "ja"];

  const dictionary = {
    zh: {
      meta: {
        title: "AGI Model Factory",
        description: "AGI Model Factory：本地优先的 AI 系统平台，聚焦任务治理、训练评估闭环、审计归档与可控扩展。"
      },
      brand: {
        name: "AGI Model Factory"
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
        title_main: "AGI Model Factory",
        title_sub: "AGI 系统 • 自动化 • 智能交付",
        subtitle: "本地优先的 AI 系统平台，围绕任务治理、模板执行、训练评估闭环、审计归档与可控扩展持续演进。",
        cta_projects: "查看平台能力面",
        cta_contact: "打开联系通道",
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
        kicker: "平台能力面",
        title: "AGI Model Factory 主线",
        p1: {
          state: "核心平台",
          desc: "覆盖训练、评估、版本治理与自动部署的全生命周期模型平台。",
          meta_1: "任务到交付主链路",
          meta_2: "治理与审计闭环",
          cta: "申请访问"
        },
        p2: {
          state: "现有能力",
          desc: "任务治理、知识沉淀、自动回流、成本路由等能力已形成稳定联动，并持续打磨产品可读性。",
          meta_1: "统一控制台",
          meta_2: "跨页面联动",
          cta: "查看核心能力"
        },
        p3: {
          state: "未来展望",
          desc: "OpenClaw 作为未来方向：聚焦数字员工协同、受控工具调用、可审计执行与插件式接入。",
          meta_1: "数字员工协同",
          meta_2: "可审计执行",
          cta: "交流路线图"
        }
      },
      showcase: {
        pill: "产品核心",
        subtitle_zh: "本地 AI 模型全链路运营平台",
        description: "覆盖训练、产物管理、评估与部署的完整 AI 工作流系统。",
        flow: {
          training: "Training",
          artifact: "Artifact",
          evaluation: "Evaluation",
          deployment: "Deployment"
        },
        cap: {
          training: { title: "Training Center", desc: "统一训练任务编排与资源管理。", status: "ACTIVE" },
          artifacts: { title: "Artifacts Center", desc: "模型产物追踪、版本管理与审计。", status: "READY" },
          evaluations: { title: "Evaluations", desc: "自动评估、基准对比与质量门禁。", status: "RUNNING" },
          deployments: { title: "Deployments", desc: "发布策略、灰度通道与回滚保护。", status: "STANDBY" },
          datasets: { title: "Datasets", desc: "数据集生命周期与质量追踪管理。", status: "SYNCED" },
          templates: { title: "Templates", desc: "工作流模板化复用，加速交付效率。", status: "AVAILABLE" }
        },
        console: {
          system: "SYSTEM STATUS",
          system_value: "ONLINE",
          training: "Training",
          training_value: "ACTIVE",
          artifacts: "Artifacts",
          artifacts_value: "READY",
          evaluation: "Evaluation",
          evaluation_value: "RUNNING",
          deployment: "Deployment",
          deployment_value: "STANDBY"
        },
        cta: {
          explore: "查看平台范围",
          architecture: "查看运行原则",
          more: "申请私有演示"
        }
      },
      agi: {
        badge: "核心模块",
        version: "版本 6.5.0（P4 Stage1 Seal）",
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
        alt: "也可通过 WeChat 对接合作需求，采用私有交付与受控访问方式推进。"
      },
      footer: {
        desc: "以任务治理、工程执行与审计归档为基础，持续构建可交付的 AI 系统。",
        copyright_brand: "AGI Model Factory.",
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
        title: "AGI Model Factory",
        description: "AGI Model Factory: a local-first AI platform focused on task governance, training-evaluation closure, auditable archives, and controlled extensibility."
      },
      brand: {
        name: "AGI Model Factory"
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
        title_main: "AGI Model Factory",
        title_sub: "AGI Systems • Automation • Intelligent Delivery",
        subtitle: "A local-first AI platform focused on task governance, template execution, training-evaluation closure, audit archives, and controlled extension.",
        cta_projects: "Explore Platform Surfaces",
        cta_contact: "Open Contact Channel",
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
        kicker: "Platform Surfaces",
        title: "AGI Model Factory Focus",
        p1: {
          state: "Core Platform",
          desc: "Comprehensive model lifecycle system for training, evaluation, release governance, and deployment automation.",
          meta_1: "Task-to-delivery mainline",
          meta_2: "Governance + audit closure",
          cta: "Request Access"
        },
        p2: {
          state: "Current Capabilities",
          desc: "Task governance, knowledge center, automatic feedback loop, and cost routing are now operating as a coherent product surface.",
          meta_1: "Unified console",
          meta_2: "Cross-page linkage",
          cta: "View Core Surface"
        },
        p3: {
          state: "Future Outlook",
          desc: "OpenClaw is a future direction for digital-worker collaboration, controlled tool invocation, auditable execution, and plugin-style integration.",
          meta_1: "Digital-worker synergy",
          meta_2: "Auditable execution",
          cta: "Discuss Roadmap"
        }
      },
      showcase: {
        pill: "Product Core",
        subtitle_zh: "A Local AI Operations Platform",
        description: "A full lifecycle system covering training, artifact management, evaluation, and deployment.",
        flow: {
          training: "Training",
          artifact: "Artifact",
          evaluation: "Evaluation",
          deployment: "Deployment"
        },
        cap: {
          training: { title: "Training Center", desc: "Unified orchestration and resource control for model training.", status: "ACTIVE" },
          artifacts: { title: "Artifacts Center", desc: "Artifact tracking, version governance, and audit visibility.", status: "READY" },
          evaluations: { title: "Evaluations", desc: "Automated scoring, benchmark comparison, and quality gates.", status: "RUNNING" },
          deployments: { title: "Deployments", desc: "Release strategies, staged rollout channels, and rollback safety.", status: "STANDBY" },
          datasets: { title: "Datasets", desc: "Lifecycle management and quality traceability for datasets.", status: "SYNCED" },
          templates: { title: "Templates", desc: "Reusable workflow templates to accelerate delivery.", status: "AVAILABLE" }
        },
        console: {
          system: "SYSTEM STATUS",
          system_value: "ONLINE",
          training: "Training",
          training_value: "ACTIVE",
          artifacts: "Artifacts",
          artifacts_value: "READY",
          evaluation: "Evaluation",
          evaluation_value: "RUNNING",
          deployment: "Deployment",
          deployment_value: "STANDBY"
        },
        cta: {
          explore: "View Platform Scope",
          architecture: "See Operating Principles",
          more: "Request Private Demo"
        }
      },
      agi: {
        badge: "CORE MODULE",
        version: "VERSION 6.5.0 (P4 Stage1 Seal)",
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
        alt: "You can also connect via WeChat for private delivery and controlled-access collaboration."
      },
      footer: {
        desc: "Building delivery-grade AI systems with clear governance, disciplined execution, and auditable outcomes.",
        copyright_brand: "AGI Model Factory.",
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
        title: "AGI Model Factory",
        description: "AGI Model Factory: タスク統治、学習評価の閉ループ、監査アーカイブ、制御可能な拡張に焦点を当てたローカル優先の AI プラットフォーム。"
      },
      brand: {
        name: "AGI Model Factory"
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
        title_main: "AGI Model Factory",
        title_sub: "AGI Systems • Automation • Intelligent Delivery",
        subtitle: "AIネイティブなシステム、オートメーション基盤、プロダクト品質の実装を重視したエンジニアリングサイトです。",
        cta_projects: "プラットフォームを見る",
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
        kicker: "Platform Surfaces",
        title: "AGI Model Factory Focus",
        p1: {
          state: "Core Platform",
          desc: "Comprehensive model lifecycle system for training, evaluation, release governance, and deployment automation.",
          meta_1: "Model Ops Platform",
          meta_2: "Pipeline Automation",
          cta: "Request Access"
        },
        p2: {
          state: "Current Capabilities",
          desc: "Task governance, knowledge center, automatic feedback loop, and cost routing are now operating as a coherent product surface.",
          meta_1: "Unified console",
          meta_2: "Cross-page linkage",
          cta: "View Core Surface"
        },
        p3: {
          state: "Future Outlook",
          desc: "OpenClaw is a future direction for digital-worker collaboration, controlled tool invocation, auditable execution, and plugin-style integration.",
          meta_1: "Digital-worker synergy",
          meta_2: "Auditable execution",
          cta: "Discuss Roadmap"
        }
      },
      showcase: {
        pill: "Product Core",
        subtitle_zh: "ローカル AI モデル運用プラットフォーム",
        description: "Training、Artifact、Evaluation、Deployment を一体化したフルライフサイクルシステム。",
        flow: {
          training: "Training",
          artifact: "Artifact",
          evaluation: "Evaluation",
          deployment: "Deployment"
        },
        cap: {
          training: { title: "Training Center", desc: "トレーニング実行とリソース制御を統合。", status: "ACTIVE" },
          artifacts: { title: "Artifacts Center", desc: "アーティファクト追跡、バージョン管理、監査対応。", status: "READY" },
          evaluations: { title: "Evaluations", desc: "自動評価とベンチマーク比較、品質ゲート。", status: "RUNNING" },
          deployments: { title: "Deployments", desc: "リリース戦略、段階配信、ロールバック保護。", status: "STANDBY" },
          datasets: { title: "Datasets", desc: "データセットのライフサイクルと品質追跡。", status: "SYNCED" },
          templates: { title: "Templates", desc: "ワークフローテンプレートで実装速度を向上。", status: "AVAILABLE" }
        },
        console: {
          system: "SYSTEM STATUS",
          system_value: "ONLINE",
          training: "Training",
          training_value: "ACTIVE",
          artifacts: "Artifacts",
          artifacts_value: "READY",
          evaluation: "Evaluation",
          evaluation_value: "RUNNING",
          deployment: "Deployment",
          deployment_value: "STANDBY"
        },
        cta: {
          explore: "View Platform Scope",
          architecture: "See Operating Principles",
          more: "Request Private Demo"
        }
      },
      agi: {
        badge: "CORE MODULE",
        version: "VERSION 6.5.0 (P4 Stage1 Seal)",
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
        alt: "You can also connect via WeChat for private delivery and controlled-access collaboration."
      },
      footer: {
        desc: "Building systems at the intersection of AI capability, software engineering, and high-reliability automation.",
        copyright_brand: "AGI Model Factory.",
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
