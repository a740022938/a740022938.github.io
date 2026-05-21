(() => {
  const STORAGE_KEY = "site-lang";
  const SUPPORTED_LANGUAGES = ["zh", "en", "ja"];

  const dictionary = {
    zh: {
      meta: {
        title: "OpenAIP v7.62.0 正式发布",
        description: "OpenAIP v7.62.0 是当前稳定 GitHub Release，面向本地优先 AI 治理、工作流与运营控制台。"
      },
      brand: { name: "OpenAIP v7.62.0" },
      nav: {
        home: "首页",
        release: "发布",
        verification: "验证",
        roadmap: "维护路线",
        wechat: "WeChat",
        lang_switch_aria: "语言切换",
        theme_to_light: "浅色",
        theme_to_dark: "深色",
        theme_to_light_aria: "切换到浅色界面",
        theme_to_dark_aria: "切换到深色界面"
      },
      hero: {
        kicker: "正式 GitHub Release · Final seal complete",
        title: "OpenAIP v7.62.0",
        subtitle: "AIP 当前稳定正式版：本地优先的 AI 治理、工作流与运营控制平面。",
        boundary: "Stage C 保持禁用，feature flag 保持关闭；v7.63 仅是 maintenance / cleanup 路线，不是已发布版本。",
        cta_release: "打开 v7.62.0 Release",
        cta_github: "GitHub 仓库",
        cta_verification: "查看验证"
      },
      proof: {
        version_label: "稳定版本",
        tag_label: "Release tag",
        head_label: "Final seal HEAD"
      },
      strip: {
        auth_label: "授权",
        auth_value: "已归档",
        tests_label: "Smoke tests",
        release_label: "GitHub Release",
        release_value: "已发布",
        status_label: "状态",
        status_value: "稳定版"
      },
      release: {
        title: "Release Center",
        current_title: "当前稳定版本",
        current_body: "OpenAIP v7.62.0 是当前稳定线的正式 GitHub Release。官网展示已从旧稳定版和候选版信息更新到正式发布状态。",
        source_link: "Tag 源码树",
        quickstart_title: "Quick start"
      },
      cap: {
        title: "平台重点",
        workflow: "用发布安全的控制界面构建和检查本地 AI 工作流。",
        governance: "让执行边界、授权记录和安全门禁始终可见。",
        operations: "清晰呈现运行状态、验证结果和运营上下文。",
        audit: "支持证据驱动的验证，不把维护任务伪装成正式发布。"
      },
      verify: {
        title: "发布验证",
        pipeline_title: "流水线结果",
        boundary_title: "发布边界"
      },
      roadmap: {
        title: "维护路线",
        body: "已发布稳定线是 v7.62.0。后续工作应按 v7.63 maintenance / cleanup 规划，不能描述成已经发布。",
        item_one: "保持 v7.62.0 作为公开稳定版本。",
        item_two: "用 v7.63 处理后续清理和既有脏工作。",
        item_three: "tag、GitHub Release、发布动作必须继续显式授权。"
      },
      footer: {
        title: "OpenAIP v7.62.0",
        summary: "当前稳定 OpenAIP 版本的官方发布页。"
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
        success: "已收到。"
      }
    },
    en: {
      meta: {
        title: "OpenAIP v7.62.0 Official Release",
        description: "OpenAIP v7.62.0 is the current stable GitHub Release for the local-first AI governance, workflow, and operations control plane."
      },
      brand: { name: "OpenAIP v7.62.0" },
      nav: {
        home: "Home",
        release: "Release",
        verification: "Verification",
        roadmap: "Roadmap",
        wechat: "WeChat",
        lang_switch_aria: "Language Switch",
        theme_to_light: "Light UI",
        theme_to_dark: "Dark UI",
        theme_to_light_aria: "Switch to light interface",
        theme_to_dark_aria: "Switch to dark interface"
      },
      hero: {
        kicker: "Official GitHub Release · Final seal complete",
        title: "OpenAIP v7.62.0",
        subtitle: "The current stable release of AIP: a local-first AI governance, workflow, and operations control plane.",
        boundary: "Stage C remains disabled, the feature flag remains off, and v7.63 is a maintenance / cleanup track rather than a published release.",
        cta_release: "Open v7.62.0 Release",
        cta_github: "GitHub Repository",
        cta_verification: "Verification"
      },
      proof: {
        version_label: "Stable version",
        tag_label: "Release tag",
        head_label: "Final seal HEAD"
      },
      strip: {
        auth_label: "Authorization",
        auth_value: "Filed",
        tests_label: "Smoke tests",
        release_label: "GitHub Release",
        release_value: "Published",
        status_label: "Status",
        status_value: "Stable"
      },
      release: {
        title: "Release Center",
        current_title: "Current stable release",
        current_body: "OpenAIP v7.62.0 is the official GitHub Release for the current stable line. It replaces older stable and release-candidate public messaging.",
        source_link: "Source tree at tag",
        quickstart_title: "Quick start"
      },
      cap: {
        title: "Platform Focus",
        workflow: "Build and inspect local AI workflows with a release-safe control surface.",
        governance: "Keep execution boundaries, approvals, and safety gates visible.",
        operations: "Surface runtime status, checks, and operational context clearly.",
        audit: "Support evidence-led verification without presenting maintenance work as a release."
      },
      verify: {
        title: "Release Verification",
        pipeline_title: "Pipeline result",
        boundary_title: "Release boundaries"
      },
      roadmap: {
        title: "Maintenance Track",
        body: "The released line is v7.62.0. Future work should be planned as v7.63 maintenance / cleanup and should not be described as already published.",
        item_one: "Keep v7.62.0 as the public stable release.",
        item_two: "Use v7.63 for follow-up cleanup of pre-existing dirty work.",
        item_three: "Keep release actions, tags, and GitHub Releases explicitly authorized."
      },
      footer: {
        title: "OpenAIP v7.62.0",
        summary: "Official release page for the current stable OpenAIP line."
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
        success: "Received."
      }
    },
    ja: {
      meta: {
        title: "OpenAIP v7.62.0 Official Release",
        description: "OpenAIP v7.62.0 is the current stable GitHub Release for the local-first AI governance, workflow, and operations control plane."
      },
      brand: { name: "OpenAIP v7.62.0" },
      nav: {
        home: "ホーム",
        release: "Release",
        verification: "Verification",
        roadmap: "Roadmap",
        wechat: "WeChat",
        lang_switch_aria: "言語切替",
        theme_to_light: "ライト",
        theme_to_dark: "ダーク",
        theme_to_light_aria: "ライト画面に切り替え",
        theme_to_dark_aria: "ダーク画面に切り替え"
      },
      hero: {
        kicker: "Official GitHub Release · Final seal complete",
        title: "OpenAIP v7.62.0",
        subtitle: "The current stable release of AIP: a local-first AI governance, workflow, and operations control plane.",
        boundary: "Stage C remains disabled, the feature flag remains off, and v7.63 is a maintenance / cleanup track rather than a published release.",
        cta_release: "v7.62.0 Release",
        cta_github: "GitHub Repository",
        cta_verification: "Verification"
      },
      proof: {
        version_label: "Stable version",
        tag_label: "Release tag",
        head_label: "Final seal HEAD"
      },
      strip: {
        auth_label: "Authorization",
        auth_value: "Filed",
        tests_label: "Smoke tests",
        release_label: "GitHub Release",
        release_value: "Published",
        status_label: "Status",
        status_value: "Stable"
      },
      release: {
        title: "Release Center",
        current_title: "Current stable release",
        current_body: "OpenAIP v7.62.0 is the official GitHub Release for the current stable line. It replaces older stable and release-candidate public messaging.",
        source_link: "Source tree at tag",
        quickstart_title: "Quick start"
      },
      cap: {
        title: "Platform Focus",
        workflow: "Build and inspect local AI workflows with a release-safe control surface.",
        governance: "Keep execution boundaries, approvals, and safety gates visible.",
        operations: "Surface runtime status, checks, and operational context clearly.",
        audit: "Support evidence-led verification without presenting maintenance work as a release."
      },
      verify: {
        title: "Release Verification",
        pipeline_title: "Pipeline result",
        boundary_title: "Release boundaries"
      },
      roadmap: {
        title: "Maintenance Track",
        body: "The released line is v7.62.0. Future work should be planned as v7.63 maintenance / cleanup and should not be described as already published.",
        item_one: "Keep v7.62.0 as the public stable release.",
        item_two: "Use v7.63 for follow-up cleanup of pre-existing dirty work.",
        item_three: "Keep release actions, tags, and GitHub Releases explicitly authorized."
      },
      footer: {
        title: "OpenAIP v7.62.0",
        summary: "Official release page for the current stable OpenAIP line."
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
