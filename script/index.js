let currentLang = 'zh'; // 默认语言

// 设置页面文本内容
function setLanguage(lang) {
  const elements = document.querySelectorAll("[data-lang]");

  elements.forEach(element => {
    const key = element.getAttribute("data-lang");
    element.textContent = langConfig[lang][key];
  });
}

// 切换语言
function changeLanguage(language) {
  currentLang = language; // 更新当前语言
  setLanguage(currentLang); // 更新页面语言
}

// 初始化页面（设置为默认语言）
document.addEventListener("DOMContentLoaded", () => {
  setLanguage(currentLang); // 初始化时设置默认语言
});
