/* Desktop sidebar on the quiz page: lists the other quizzes, a few at a time, with "Load more". */
(function (QH) {
  'use strict';

  const STEP = 5;
  const list = document.getElementById('side-list');
  const more = document.getElementById('side-more');
  if (!list || !more) return;

  let shown = STEP;

  function currentId() {
    try { return decodeURIComponent(location.hash.replace(/^#\/?/, '')); } catch (e) { return ''; }
  }

  function others() {
    const current = currentId();
    return QH.catalog.filter(function (q) { return q.id !== current; });
  }

  function render() {
    const list_ = others();
    list.innerHTML = list_.slice(0, shown).map(function (quiz, i) {
      return (
        '<li>' +
          '<a class="side-item" style="--i:' + i + '" href="' + QH.escape(QH.quizLink(quiz.id)) + '">' +
            '<img src="' + QH.escape(QH.asset(quiz.thumb)) + '" alt="" loading="lazy" onerror="this.remove()">' +
            '<span class="side-text">' +
              '<strong>' + QH.escape(QH.pick(quiz.title)) + '</strong>' +
              '<span class="small">' + QH.escape(QH.fmt(QH.t('n_questions'), { n: quiz.questions })) + '</span>' +
            '</span>' +
          '</a>' +
        '</li>'
      );
    }).join('');

    more.classList.toggle('hidden', shown >= list_.length);
  }

  more.addEventListener('click', function () {
    shown += STEP;
    render();
  });

  window.addEventListener('hashchange', function () { shown = STEP; render(); });
  window.addEventListener('qh:langchange', render);
  render();
})(window.QH);
