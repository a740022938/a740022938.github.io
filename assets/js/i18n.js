(() => {
  const STORAGE_KEY = "site-lang";
  const SUPPORTED_LANGUAGES = ["zh", "en", "ja"];

  const dictionary = {
    zh: {
      meta: {
        title: "AIP v7.3.0-rc1 Assistant Center Readonly Baseline",
        description: "AIP v7.3.0-rc1：本地优先 AI 治理平台的 Assistant Center 只读候选版。"
      },
      brand: { name: "AIP v7.3.0-rc1" },
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
        kicker: "AIP v7.3.0-rc1 · Build 2026.05.12 · Pre-release",
        title: "AIP v7.3.0-rc1 Assistant Center",
        subtitle: "The local-first AI governance and model-factory control plane.",
        subtitle_zh: "只读 Assistant Center 候选版，覆盖服务状态总览、全栈体检、任务包生成、报告/备份摘要与安全边界可视化。",
        cta_github: "GitHub",
        cta_download: "打开 v7.3.0-rc1 Release",
        cta_quickstart: "快速开始"
      },
      quickstart: { title: "Quick Start" },
      download: {
        title: "下载 / 发布",
        release: "GitHub Release",
        repo: "仓库: aegisflow-intelligence-platform",
        assets: "发布资产",
        source: "源代码",
        note: "v7.3.0-rc1 使用 GitHub 自动生成源码包，不包含 node_modules、logs、db、models、datasets、private credentials。"
      },
      cap: { title: "能力说明" },
      verify: { title: "验证结果" },
      roadmap: { title: "Roadmap" },
      footer: { title: "AIP v7.3.0-rc1" },
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
        title: "AIP v7.3.0-rc1 Assistant Center Readonly Baseline",
        description: "AIP v7.3.0-rc1: Assistant Center readonly release candidate for local-first AI governance."
      },
      brand: { name: "AIP v7.3.0-rc1" },
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
        kicker: "AIP v7.3.0-rc1 · Build 2026.05.12 · Pre-release",
        title: "AIP v7.3.0-rc1 Assistant Center",
        subtitle: "The local-first AI governance and model-factory control plane.",
        subtitle_zh: "Readonly Assistant Center baseline with service status, full stack health check, task package generation, report and backup summaries, and visible safety boundaries.",
        cta_github: "GitHub",
        cta_download: "Open v7.3.0-rc1 Release",
        cta_quickstart: "Quick Start"
      },
      quickstart: { title: "Quick Start" },
      download: {
        title: "Download / Release",
        release: "GitHub Release",
        repo: "Repo: aegisflow-intelligence-platform",
        assets: "Release Assets",
        source: "Source code",
        note: "v7.3.0-rc1 uses GitHub-generated source archives and excludes node_modules, logs, db, models, datasets, and private credentials."
      },
      cap: { title: "What It Does" },
      verify: { title: "Verification" },
      roadmap: { title: "Roadmap" },
      footer: { title: "AIP v7.3.0-rc1" },
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
        title: "AIP v7.3.0-rc1 Assistant Center Readonly Baseline",
        description: "AIP v7.3.0-rc1: Assistant Center readonly release candidate for local-first AI governance."
      },
      brand: { name: "AIP v7.3.0-rc1" },
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
        kicker: "AIP v7.3.0-rc1 · Build 2026.05.12 · Pre-release",
        title: "AIP v7.3.0-rc1 Assistant Center",
        subtitle: "The local-first AI governance and model-factory control plane.",
        subtitle_zh: "Readonly Assistant Center baseline with service status, full stack health check, task package generation, report and backup summaries, and visible safety boundaries.",
        cta_github: "GitHub",
        cta_download: "v7.3.0-rc1 Release",
        cta_quickstart: "クイックスタート"
      },
      quickstart: { title: "Quick Start" },
      download: {
        title: "Download / Release",
        release: "GitHub Release",
        repo: "Repo: aegisflow-intelligence-platform",
        assets: "リリース資産",
        source: "ソースコード",
        note: "v7.3.0-rc1 uses GitHub-generated source archives and excludes node_modules / logs / db / models / datasets / private credentials."
      },
      cap: { title: "What It Does" },
      verify: { title: "Verification" },
      roadmap: { title: "Roadmap" },
      footer: { title: "AIP v7.3.0-rc1" },
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
