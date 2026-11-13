/*
 * Reusable quiz engine. quiz.html is the only quiz page. It reads the quiz name
 * from the URL hash (quiz.html#work-style), loads assets/js/quizzes/<id>.js on
 * demand, and runs it. Nothing in this file is specific to one quiz.
 *
 * Quiz data shape: see assets/js/quizzes/work-style.js
 */
(function (QH) {
  'use strict';

  const app = document.getElementById('app');
  const STEP_INTRO = -1;

  let quiz = null;        // current quiz data
  let meta = {};          // catalog entry (author, etc.)
  let TOTAL = 0;
  let STEP_RESULT = 0;
  let images = {};
  let state = null;
  let currentId = null;

  function resetState() {
    state = { step: STEP_INTRO, answers: new Array(TOTAL).fill(null) };
  }

  /* Escaped, language-aware text. */
  function txt(value) { return QH.escape(QH.pick(value)); }

  function figure(src, extraClass) {
    if (!src) return '';
    return '<figure class="qimg ' + (extraClass || '') + '">' +
      '<img src="' + QH.escape(QH.asset(src)) + '" alt="" loading="lazy" onerror="this.parentNode.remove()"></figure>';
  }

  /* Label for a trait; falls back to the trait key when it has no results entry. */
  function labelFor(key) {
    const r = quiz.results[key];
    return r ? QH.pick(r.title) : key.charAt(0).toUpperCase() + key.slice(1);
  }

  /* Every trait used by an option, including any missing from results, so the breakdown never drops one. */
  function allTraits() {
    const keys = Object.keys(quiz.results);
    quiz.questions.forEach(function (q) {
      q.options.forEach(function (o) {
        if (keys.indexOf(o.trait) === -1) {
          keys.push(o.trait);
          console.warn('Quiz "' + quiz.id + '": trait "' + o.trait + '" has no entry in results.');
        }
      });
    });
    return keys;
  }

  /* Each answer adds one point to its trait. Most points wins; ties go to the
     trait declared first in quiz.results. */
  function score(answers) {
    const keys = allTraits();
    const counts = {};
    keys.forEach(function (k) { counts[k] = 0; });

    answers.forEach(function (optionIndex, qi) {
      const trait = quiz.questions[qi].options[optionIndex].trait;
      counts[trait] = (counts[trait] || 0) + 1;
    });

    const breakdown = keys.map(function (key) {
      return {
        key: key,
        label: labelFor(key),
        count: counts[key],
        pct: QH.percent(counts[key], answers.length)
      };
    });

    let top = breakdown[0];
    breakdown.forEach(function (b) { if (b.count > top.count) top = b; });

    return { breakdown: breakdown, topKey: top.key, topPct: top.pct };
  }

  /* The winning result's own image. Empty when the top score is tied. */
  function resultImage(s, result) {
    const topCount = Math.max.apply(null, s.breakdown.map(function (b) { return b.count; }));
    const winners = s.breakdown.filter(function (b) { return b.count === topCount; });
    if (winners.length > 1) return null;
    return result.image || null;
  }

  /* ---------- Screens ---------- */

  function renderIntro() {
    app.innerHTML =
      '<section class="card screen">' +
        figure(images.start, 'qimg-start') +
        '<p class="eyebrow">' + QH.escape(QH.t('quiz_eyebrow')) + '</p>' +
        '<h1>' + txt(quiz.title) + '</h1>' +
        '<p class="lead">' + txt(quiz.intro) + '</p>' +
        '<p class="meta">' + QH.escape(QH.fmt(QH.t('meta_questions'), { n: TOTAL })) + '</p>' +
        (meta.author ? '<p class="small">' + QH.escape(QH.fmt(QH.t('by_author'), { name: meta.author })) + '</p>' : '') +
        '<div class="btn-row">' +
          '<button type="button" class="btn btn-primary" data-action="start">' + QH.escape(QH.t('start_quiz')) + '</button>' +
        '</div>' +
      '</section>';
  }

  function renderQuestion() {
    const i = state.step;
    const question = quiz.questions[i];
    const chosen = state.answers[i];
    const pct = Math.round(((i + 1) / TOTAL) * 100);
    const isLast = i === TOTAL - 1;
    const questionImage = question.image || images.question;

    app.innerHTML =
      '<section class="card screen">' +
        '<div class="quiz-head">' +
          '<span>' + QH.escape(QH.fmt(QH.t('question_of'), { i: i + 1, n: TOTAL })) + '</span>' +
          '<span>' + pct + '%</span>' +
        '</div>' +
        '<div class="progress"><div class="progress-fill" data-w="' + pct + '" style="width:0"></div></div>' +
        figure(questionImage, 'qimg-question') +
        '<h2 class="prompt">' + txt(question.prompt) + '</h2>' +
        '<div class="options">' +
          question.options.map(function (option, oi) {
            return '<button type="button" class="option" style="--i:' + oi + '" data-option="' + oi + '" ' +
              'aria-pressed="' + (chosen === oi) + '">' + txt(option.text) + '</button>';
          }).join('') +
        '</div>' +
        '<div class="nav">' +
          '<button type="button" class="btn btn-ghost" data-action="back">' + QH.escape(QH.t('back')) + '</button>' +
          '<button type="button" class="btn btn-primary" data-action="next"' + (chosen === null ? ' disabled' : '') + '>' +
            QH.escape(isLast ? QH.t('see_result') : QH.t('next')) +
          '</button>' +
        '</div>' +
      '</section>';

    QH.animateBars(app);
  }

  function renderResult() {
    const s = score(state.answers);
    const result = quiz.results[s.topKey] || { title: { en: labelFor(s.topKey) }, text: {} };

    app.innerHTML =
      '<section class="card screen result">' +
        '<p class="eyebrow">' + QH.escape(QH.t('your_result')) + '</p>' +
        figure(resultImage(s, result), 'qimg-result pop') +
        '<h1 class="result-title pop">' + txt(result.title) + '</h1>' +
        '<p class="lead rise-late">' + txt(result.text) + '</p>' +
        '<h3 class="section-title">' + QH.escape(QH.t('breakdown')) + '</h3>' +
        '<div class="bars">' +
          s.breakdown.map(function (b, i) {
            return '<div class="bar" style="--i:' + i + '">' +
              '<span title="' + QH.escape(b.label) + '">' + QH.escape(b.label) + '</span>' +
              '<div class="track"><div class="fill" data-w="' + b.pct + '" style="width:0"></div></div>' +
              '<b>' + b.pct + '%</b>' +
            '</div>';
          }).join('') +
        '</div>' +
        '<div class="btn-row">' +
          '<button type="button" class="btn btn-primary" data-action="retake">' + QH.escape(QH.t('retake')) + '</button>' +
        '</div>' +
      '</section>';

    QH.animateBars(app);
  }

  function render() {
    if (state.step === STEP_INTRO) renderIntro();
    else if (state.step === STEP_RESULT) renderResult();
    else renderQuestion();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function notFound() {
    currentId = null;
    quiz = null;
    app.innerHTML = '<section class="card screen"><p class="empty"></p></section>';
    app.querySelector('p').textContent = QH.t('not_found');
  }

  /* Selecting an option updates the buttons in place, so the other options don't replay their entrance animation. */
  function selectOption(optionIndex) {
    state.answers[state.step] = optionIndex;
    app.querySelectorAll('.option').forEach(function (b) {
      b.setAttribute('aria-pressed', String(Number(b.dataset.option) === optionIndex));
    });
    const next = app.querySelector('[data-action="next"]');
    if (next) next.disabled = false;
  }

  /* ---------- Loading a quiz by name ---------- */

  function start(id) {
    quiz = QH.quizzes[id];
    meta = QH.catalog.find(function (q) { return q.id === id; }) || {};
    TOTAL = quiz.questions.length;
    STEP_RESULT = TOTAL;
    images = quiz.images || {};
    currentId = id;
    resetState();
    render();
  }

  function load(id) {
    if (!id) return notFound();
    if (id === currentId) return;

    const known = QH.catalog.some(function (q) { return q.id === id; });
    if (!known) return notFound();

    if (QH.quizzes[id]) return start(id);

    const script = document.createElement('script');
    script.src = 'assets/js/quizzes/' + encodeURIComponent(id) + '.js';
    script.onload = function () { if (QH.quizzes[id]) start(id); else notFound(); };
    script.onerror = notFound;
    document.head.appendChild(script);
  }

  function idFromHash() {
    try { return decodeURIComponent(location.hash.replace(/^#\/?/, '')); } catch (e) { return ''; }
  }

  /* ---------- Events ---------- */

  app.addEventListener('click', function (event) {
    const option = event.target.closest('[data-option]');
    if (option) {
      selectOption(Number(option.dataset.option));
      return;
    }

    const button = event.target.closest('[data-action]');
    if (!button || !quiz) return;

    switch (button.dataset.action) {
      case 'start':
        state.step = 0;
        break;
      case 'back':
        state.step = state.step === 0 ? STEP_INTRO : state.step - 1;
        break;
      case 'next':
        if (state.answers[state.step] === null) return;
        state.step += 1;
        break;
      case 'retake':
        resetState();
        state.step = 0;
        break;
      default:
        return;
    }
    render();
  });

  window.addEventListener('hashchange', function () {
    const id = idFromHash();
    if (id === currentId) return;
    currentId = null;
    load(id);
  });

  window.addEventListener('qh:langchange', function () {
    if (quiz) render();
    else if (!currentId) notFound();
  });

  load(idFromHash());
})(window.QH);
