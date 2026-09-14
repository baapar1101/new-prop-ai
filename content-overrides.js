(function () {
  'use strict';

  document.documentElement.lang = 'fa';
  document.documentElement.dir = 'rtl';
  document.title = 'پراپ — راهکارهای هوش مصنوعی';

  const replacements = [
    ['Google Antigravity', 'پراپ'],
    ['Antigravity', 'پراپ'],
    ['Build the new way', 'راهکارهای هوش مصنوعی نسل بعدی'],
    ['Build with Google', 'راهکارهای هوش مصنوعی'],
    ['The future of coding', 'آینده کسب‌وکار با هوش مصنوعی'],
    ['Get started', 'شروع رایگان'],
    ['Get Started', 'شروع رایگان'],
    ['Start building', 'شروع رایگان'],
    ['Download', 'شروع رایگان'],
    ['Product', 'خدمات'],
    ['Products', 'خدمات'],
    ['Pricing', 'قیمت‌گذاری'],
    ['Resources', 'منابع'],
    ['Documentation', 'مستندات'],
    ['Docs', 'مستندات'],
    ['Blog', 'وبلاگ'],
    ['Support', 'پشتیبانی'],
    ['Use cases', 'کاربردها'],
    ['Use Cases', 'کاربردها'],
    ['Changelog', 'به‌روزرسانی‌ها'],
    ['Learn more', 'بیشتر بدانید'],
    ['Learn More', 'بیشتر بدانید'],
    ['Contact us', 'تماس با ما'],
    ['Contact Us', 'تماس با ما'],
    ['Sign up', 'ثبت‌نام'],
    ['Sign Up', 'ثبت‌نام'],
    ['Try it now', 'همین حالا شروع کنید'],
    ['Try it Now', 'همین حالا شروع کنید'],
    ['AI-powered', 'مبتنی بر هوش مصنوعی'],
    ['AI powered', 'مبتنی بر هوش مصنوعی']
  ];

  function replaceText(value) {
    let out = value;
    for (const pair of replacements) {
      out = out.split(pair[0]).join(pair[1]);
    }
    return out;
  }

  function applyText(root) {
    if (!root) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    for (const node of nodes) {
      if (node.parentElement && ['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(node.parentElement.tagName)) continue;
      const next = replaceText(node.nodeValue || '');
      if (next !== node.nodeValue) node.nodeValue = next;
    }
  }

  function tuneMeta() {
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', 'پراپ با ارائه ابزارهای پیشرفته هوش مصنوعی، به شما کمک می‌کند فرآیندها را خودکارسازی کنید، بینش‌های ارزشمند به دست آورید و رشد پایدار داشته باشید.');
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', 'پراپ — راهکارهای هوش مصنوعی');
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', 'پراپ با ارائه ابزارهای پیشرفته هوش مصنوعی، به شما کمک می‌کند فرآیندها را خودکارسازی کنید، بینش‌های ارزشمند به دست آورید و رشد پایدار داشته باشید.');
  }

  function run() {
    applyText(document.body);
    tuneMeta();
  }

  const observer = new MutationObserver(() => run());
  observer.observe(document.documentElement, { childList: true, subtree: true, characterData: true });
  document.addEventListener('DOMContentLoaded', run);
  setTimeout(run, 250);
  setTimeout(run, 1000);
  setTimeout(run, 2500);
})();
