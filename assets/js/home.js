/* Homepage: quiz grid with a text search. Re-renders when the language changes. */
(function (QH) {
  'use strict';

  const grid = document.getElementById('quiz-grid');
  const input = document.getElementById('quiz-search');
  const empty = document.getElementById('quiz-empty');

  /* Every word typed must appear in the title, description or author. */
  function matches(quiz, query) {
    if (!query) return true;
    const text = [QH.pick(quiz.title), QH.pick(quiz.description), quiz.author || '']
      .join(' ')
      .toLowerCase();
    return query.split(/\s+/).every(function (word) {
      return text.indexOf(word) !== -1;
    });
  }

  function card(quiz, i) {
    return (
      '<a class="card quiz-card" style="--i:' + i + '" href="' + QH.escape(QH.quizLink(quiz.id)) + '">' +
        '<div class="quiz-row">' +
          '<img class="quiz-thumb" src="' + QH.escape(quiz.thumb) + '" alt="" loading="lazy" onerror="this.remove()">' +
          '<div class="quiz-body">' +
            '<span class="tag">' + QH.escape(QH.fmt(QH.t('n_questions'), { n: quiz.questions })) + '</span>' +
            '<h3>' + QH.escape(QH.pick(quiz.title)) + '</h3>' +
            '<p>' + QH.escape(QH.pick(quiz.description)) + '</p>' +
            (quiz.author ? '<span class="small">' + QH.escape(QH.fmt(QH.t('by_author'), { name: quiz.author })) + '</span>' : '') +
            '<span class="go">' + QH.escape(QH.t('start')) + ' <span aria-hidden="true">→</span></span>' +
          '</div>' +
        '</div>' +
      '</a>'
    );
  }

  function render() {
    const query = input.value.trim().toLowerCase();
    const list = QH.catalog.filter(function (quiz) { return matches(quiz, query); });

    input.placeholder = QH.t('search_placeholder');
    grid.innerHTML = list.map(card).join('');
    empty.textContent = QH.t('no_results');
    empty.classList.toggle('hidden', list.length > 0);
  }

  input.addEventListener('input', render);
  window.addEventListener('qh:langchange', render);
  render();
})(window.QH);
