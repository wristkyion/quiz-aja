/* Shared helpers: language, theme, translation, and small render utilities.
   Loaded on every page after i18n.js. */
(function (global) {
  'use strict';

  const QH = (global.QH = global.QH || {});

  /* Set this to your repository. Used by the GitHub and "suggest a quiz" buttons. */
  QH.config = { repo: 'https://github.com/YOUR-USER/personality-quiz-hub' };

  QH.quizzes = QH.quizzes || {};   // filled by files in assets/js/quizzes/
  QH.catalog = QH.catalog || [];   // filled by assets/js/catalog.js
  QH.base = (document.body && document.body.dataset.base) || ''; // '../' on quiz pages

  QH.escape = function (value) {
    return String(value).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  };

  QH.asset = function (path) { return QH.base + path; };

  /* Link to a quiz: quiz.html#<id>. Works on GitHub Pages without extra files. */
  QH.quizLink = function (id) { return QH.asset('quiz.html#' + encodeURIComponent(id)); };

  QH.percent = function (part, whole) {
    return whole ? Math.round((part / whole) * 100) : 0;
  };

  /* Pick the current language from a { en, zh, ja, id } object (falls back to English). */
  QH.pick = function (value) {
    if (value == null) return '';
    if (typeof value === 'string') return value;
    return value[QH.lang] || value.en || '';
  };

  /* Translate a UI string key, with optional {placeholders}. */
  QH.t = function (key, vars) {
    const dict = QH.strings[QH.lang] || {};
    let text = dict[key] !== undefined ? dict[key] : (QH.strings.en[key] || key);
    if (vars) {
      Object.keys(vars).forEach(function (name) {
        text = text.split('{' + name + '}').join(vars[name]);
      });
    }
    return text;
  };

  QH.fmt = function (text, vars) {
    Object.keys(vars).forEach(function (name) {
      text = text.split('{' + name + '}').join(vars[name]);
    });
    return text;
  };

  /* Horizontal bar. The fill animates to data-w after the element is inserted (see animateBars). */
  QH.bar = function (label, pct) {
    return (
      '<div class="bar">' +
        '<span title="' + QH.escape(label) + '">' + QH.escape(label) + '</span>' +
        '<div class="track"><div class="fill" data-w="' + pct + '" style="width:0"></div></div>' +
        '<b>' + pct + '%</b>' +
      '</div>'
    );
  };

  QH.animateBars = function (root) {
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        root.querySelectorAll('[data-w]').forEach(function (el) {
          el.style.width = el.dataset.w + '%';
        });
      });
    });
  };

  /* ---------- Language ---------- */

  function detectLang() {
    let saved = null;
    try { saved = localStorage.getItem('qh.lang'); } catch (err) { /* ignore */ }
    if (saved && QH.strings[saved]) return saved;

    const browser = String(navigator.language || 'en').slice(0, 2).toLowerCase();
    if (browser === 'in') return 'id';
    return QH.strings[browser] ? browser : 'en';
  }

  function applyStatic() {
    const htmlLang = (QH.languages.find(function (l) { return l.code === QH.lang; }) || {}).html || 'en';
    document.documentElement.lang = htmlLang;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      el.textContent = QH.t(el.dataset.i18n);
    });
    document.querySelectorAll('[data-i18n-label]').forEach(function (el) {
      el.setAttribute('aria-label', QH.t(el.dataset.i18nLabel));
    });
    document.querySelectorAll('[data-repo-path]').forEach(function (el) {
      el.setAttribute('href', QH.config.repo + el.dataset.repoPath);
    });
  }

  QH.setLang = function (code) {
    if (!QH.strings[code]) return;
    QH.lang = code;
    try { localStorage.setItem('qh.lang', code); } catch (err) { /* ignore */ }
    applyStatic();
    syncControls();
    window.dispatchEvent(new CustomEvent('qh:langchange'));
  };

  /* ---------- Theme ---------- */

  QH.theme = function () {
    return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
  };

  QH.setTheme = function (name) {
    document.documentElement.dataset.theme = name;
    try { localStorage.setItem('qh.theme', name); } catch (err) { /* ignore */ }
    syncControls();
  };

  /* ---------- Header controls (language + theme) ---------- */

  function syncControls() {
    document.querySelectorAll('[data-lang-select]').forEach(function (s) { s.value = QH.lang; });
    document.querySelectorAll('[data-theme-toggle]').forEach(function (b) {
      b.setAttribute('aria-label', QH.t('theme_label'));
    });
  }

  QH.mountControls = function () {
    document.querySelectorAll('[data-controls]').forEach(function (host) {
      const options = QH.languages.map(function (l) {
        return '<option value="' + l.code + '">' + QH.escape(l.label) + '</option>';
      }).join('');

      host.innerHTML =
        '<select class="select" data-lang-select data-i18n-label="lang_label" aria-label="Language">' + options + '</select>' +
        '<button type="button" class="icon-btn" data-theme-toggle>' +
          '<svg class="icon-sun" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">' +
            '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>' +
          '</svg>' +
          '<svg class="icon-moon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">' +
            '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>' +
          '</svg>' +
        '</button>';
    });

    document.querySelectorAll('[data-lang-select]').forEach(function (s) {
      s.addEventListener('change', function (e) { QH.setLang(e.target.value); });
    });
    document.querySelectorAll('[data-theme-toggle]').forEach(function (b) {
      b.addEventListener('click', function () {
        QH.setTheme(QH.theme() === 'dark' ? 'light' : 'dark');
      });
    });

    syncControls();
  };

  /* ---------- Init ---------- */

  QH.lang = detectLang();
  applyStatic();
  QH.mountControls();
})(window);
