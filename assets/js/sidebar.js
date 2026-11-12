/* Desktop sidebar on quiz pages: lists the other quizzes, a few at a time, with "Load more". */
(function (QH) {
  'use strict';

  const STEP = 5;
  const list = document.getElementById('side-list');
  const more = document.getElementById('side-more');
  if (!list || !more) return;

  const current = document.body.dataset.quiz;
  const others = QH.catalog.filter(function (q) { return q.id !== current; });
  let shown = STEP;

  function render() {
    list.innerHTML = others.slice(0, shown).map(function (quiz, i) {
      return (
        '<li>' +
          '<a class="side-item" style="--i:' + i + '" href="' + QH.escape(QH.asset(quiz.page)) + '">' +
            '<img src="' + QH.escape(QH.asset(quiz.thumb)) + '" alt="" loading="lazy" onerror="this.remove()">' +
            '<span class="side-text">' +
              '<strong>' + QH.escape(QH.pick(quiz.title)) + '</strong>' +
              '<span class="small">' + QH.escape(QH.fmt(QH.t('n_questions'), { n: quiz.questions })) + '</span>' +
            '</span>' +
          '</a>' +
        '</li>'
      );
    }).join('');

    more.classList.toggle('hidden', shown >= others.length);
  }

  more.addEventListener('click', function () {
    shown += STEP;
    render();
  });

  window.addEventListener('qh:langchange', render);
  render();
})(window.QH);