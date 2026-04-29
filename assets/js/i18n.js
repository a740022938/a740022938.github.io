(() => {
  const STORAGE_KEY = "site-lang";
  const SUPPORTED_LANGUAGES = ["zh", "en", "ja"];

  const dictionary = {
    zh: {
      meta: {
        title: "AIP v7.2.1 Stable",
        description: "AIP v7.2.1 Stable：本地优先 AI 治理与模型工厂控制平面。"
      },
      brand: { name: "AIP v7.2.1 Stable" },
      nav: {
        home: "首页",
        quickstart: "快速开始",
        download: "下载",
        verification: "验证",
        wechat: "WeChat",
        lang_switch_aria: "语言切换",
        theme_to_light: "浅色",
        theme_to_dark: "深色",
        theme_to_light_aria: "切换到浅色界面",
        theme_to_dark_aria: "切换到深色界面"
      },
      hero: {
        kicker: "AIP v7.2.1 Stable · Build 2026.04.29 · Tag v7.2.1-stable",
        title: "AIP v7.2.1 Stable",
        subtitle: "The local-first AI governance and model-factory control plane.",
        subtitle_zh: "本地优先的 AI 治理与模型工厂平台，覆盖工作流编排、治理中枢、插件池、响应式驾驶舱与可审计运行链路。",
        cta_github: "GitHub",
        cta_download: "下载 v7.2.1",
        cta_quickstart: "快速开始"
      },
      quickstart: { title: "Quick Start" },
      download: {
        title: "下载 / 发布",
        release: "GitHub Release",
        repo: "仓库: aegisflow-intelligence-platform",
        assets: "发布资产",
        source: "源代码",
        note: "ZIP 为 clean source release package，不包含 node_modules、logs、db、models、datasets、private credentials。"
      },
      cap: { title: "能力说明" },
      verify: { title: "验证结果" },
      roadmap: { title: "Roadmap" },
      footer: { title: "AIP v7.2.1 Stable" },
      wechat: {
        modal_title: "WeChat 联系",
        scan_hint: "扫码建立连接",
        qr_alt: "WeChat QR Code",
        image_missing: "请将二维码图片放到 assets/images/wechat_qr.png",
        close_aria: "关闭 WeChat 弹窗"
      },
      alerts: {
        required: "请填写所有必填项。",
        success: "已收到。"
      }
    },
    en: {
      meta: {
        title: "AIP v7.2.1 Stable",
        description: "AIP v7.2.1 Stable: the local-first AI governance and model-factory control plane."
      },
      brand: { name: "AIP v7.2.1 Stable" },
      nav: {
        home: "Home",
        quickstart: "Quick Start",
        download: "Download",
        verification: "Verification",
        wechat: "WeChat",
        lang_switch_aria: "Language Switch",
        theme_to_light: "Light UI",
        theme_to_dark: "Dark UI",
        theme_to_light_aria: "Switch to light interface",
        theme_to_dark_aria: "Switch to dark interface"
      },
      hero: {
        kicker: "AIP v7.2.1 Stable · Build 2026.04.29 · Tag v7.2.1-stable",
        title: "AIP v7.2.1 Stable",
        subtitle: "The local-first AI governance and model-factory control plane.",
        subtitle_zh: "A local-first AI governance and model-factory platform with workflow orchestration, governance hub, plugin pool, responsive cockpit, and auditable run chain.",
        cta_github: "GitHub",
        cta_download: "Download v7.2.1",
        cta_quickstart: "Quick Start"
      },
      quickstart: { title: "Quick Start" },
      download: {
        title: "Download / Release",
        release: "GitHub Release",
        repo: "Repo: aegisflow-intelligence-platform",
        assets: "Release Assets",
        source: "Source code",
        note: "ZIP is a clean source release package and excludes node_modules, logs, db, models, datasets, and private credentials."
      },
      cap: { title: "What It Does" },
      verify: { title: "Verification" },
      roadmap: { title: "Roadmap" },
      footer: { title: "AIP v7.2.1 Stable" },
      wechat: {
        modal_title: "WeChat Contact",
        scan_hint: "Scan to connect",
        qr_alt: "WeChat QR Code",
        image_missing: "Please place your QR image at assets/images/wechat_qr.png",
        close_aria: "Close WeChat modal"
      },
      alerts: {
        required: "Please fill in all required fields.",
        success: "Received."
      }
    },
    ja: {
      meta: {
        title: "AIP v7.2.1 Stable",
        description: "AIP v7.2.1 Stable: ローカル優先の AI ガバナンスとモデルファクトリー制御プレーン。"
      },
      brand: { name: "AIP v7.2.1 Stable" },
      nav: {
        home: "ホーム",
        quickstart: "クイックスタート",
        download: "ダウンロード",
        verification: "検証",
        wechat: "WeChat",
        lang_switch_aria: "言語切替",
        theme_to_light: "ライト",
        theme_to_dark: "ダーク",
        theme_to_light_aria: "ライト画面に切り替え",
        theme_to_dark_aria: "ダーク画面に切り替え"
      },
      hero: {
        kicker: "AIP v7.2.1 Stable · Build 2026.04.29 · Tag v7.2.1-stable",
        title: "AIP v7.2.1 Stable",
        subtitle: "The local-first AI governance and model-factory control plane.",
        subtitle_zh: "ワークフロー編成、ガバナンス中枢、プラグインプール、レスポンシブ運用画面、監査可能な実行チェーンを備えたローカル優先プラットフォーム。",
        cta_github: "GitHub",
        cta_download: "v7.2.1 をダウンロード",
        cta_quickstart: "クイックスタート"
      },
      quickstart: { title: "Quick Start" },
      download: {
        title: "Download / Release",
        release: "GitHub Release",
        repo: "Repo: aegisflow-intelligence-platform",
        assets: "リリース資産",
        source: "ソースコード",
        note: "ZIP は clean source release package で、node_modules / logs / db / models / datasets / private credentials は含みません。"
      },
      cap: { title: "What It Does" },
      verify: { title: "Verification" },
      roadmap: { title: "Roadmap" },
      footer: { title: "AIP v7.2.1 Stable" },
      wechat: {
        modal_title: "WeChat Contact",
        scan_hint: "Scan to connect",
        qr_alt: "WeChat QR Code",
        image_missing: "Please place your QR image at assets/images/wechat_qr.png",
        close_aria: "Close WeChat modal"
      },
      alerts: {
        required: "Please fill in all required fields.",
        success: "Received."
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
    document.documentElement.setAttribute("lang", currentLanguage === "zh" ? "zh-CN" : currentLanguage === "en" ? "en" : "ja");

    document.querySelectorAll("[data-i18n]").forEach((node) => { node.textContent = pick(currentLanguage, node.dataset.i18n); });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => { node.setAttribute("placeholder", pick(currentLanguage, node.dataset.i18nPlaceholder)); });
    document.querySelectorAll("[data-i18n-title]").forEach((node) => { node.setAttribute("title", pick(currentLanguage, node.dataset.i18nTitle)); });
    document.querySelectorAll("[data-i18n-aria-label]").forEach((node) => { node.setAttribute("aria-label", pick(currentLanguage, node.dataset.i18nAriaLabel)); });
    document.querySelectorAll("[data-i18n-content]").forEach((node) => { node.setAttribute("content", pick(currentLanguage, node.dataset.i18nContent)); });
    document.querySelectorAll("[data-i18n-alt]").forEach((node) => { node.setAttribute("alt", pick(currentLanguage, node.dataset.i18nAlt)); });
    document.querySelectorAll("[data-lang]").forEach((node) => { node.classList.toggle("is-active", node.dataset.lang === currentLanguage); });

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
