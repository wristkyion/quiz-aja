/*
 * Quiz catalog: one entry per quiz. The homepage builds its grid from this list.
 *
 * To add a quiz:
 *   1. Create assets/js/quizzes/<id>.js with the quiz data.
 *   2. Copy quizzes/work-style.html to quizzes/<id>.html and update data-quiz and the script path.
 *   3. Add an entry below. "questions" is the number of questions in the quiz.
 */
(function (QH) {
  'use strict';

  QH.catalog = [
    {
      id: 'work-style',
      title: { en: 'Work Style', zh: '工作风格', ja: '仕事のスタイル', id: 'Gaya Kerja' },
      description: {
        en: 'How you approach projects, plans and deadlines.',
        zh: '你如何应对项目、计划和截止日期。',
        ja: 'プロジェクトや計画、締め切りへの向き合い方。',
        id: 'Cara kamu menghadapi proyek, rencana, dan tenggat waktu.'
      },
      questions: 5,
      author: 'Your Name',
      thumb: "assets/img/quizzes/work-style.svg",
      page: 'quizzes/work-style.html'
    },
    {
      id: 'social-energy',
      title: { en: 'Social Energy', zh: '社交能量', ja: 'ソーシャルエナジー', id: 'Energi Sosial' },
      description: {
        en: 'Where you recharge and how you show up around people.',
        zh: '你在哪里充电，以及和人相处时的状态。',
        ja: 'どこでエネルギーを充電し、人の中でどう振る舞うか。',
        id: 'Di mana kamu mengisi ulang energi dan bagaimana sikapmu di sekitar orang.'
      },
      questions: 5,
      author: 'Your Name',
      thumb: "assets/img/quizzes/social-energy.svg",
      page: 'quizzes/social-energy.html'
    }
  ];
})(window.QH = window.QH || {});
