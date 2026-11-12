# Quiz Hub

A dependency-free personality quiz site in plain HTML, CSS and JavaScript. Open `index.html` in a browser to run it. No build step or server is needed.

## Features

- Reusable quiz engine with progress, back/next navigation and changeable answers
- Personality result with a percentage breakdown
- Four languages: English, 中文, 日本語, Indonesia (picked from the browser, switchable in the header)
- Light and dark themes (follows the system setting by default, switchable in the header)
- Images on the start, question and result screens
- "Explore on GitHub" and "Suggest a quiz" buttons that open issues for new quiz ideas
- No history and no stored data

## Structure

```
index.html                    Homepage
quizzes/<id>.html             One page per quiz (a thin shell)
assets/css/styles.css         Themes (CSS variables) and animations
assets/js/i18n.js             UI strings and the language list
assets/js/core.js             Language, theme, translation helpers, header controls
assets/js/catalog.js          Homepage quiz list
assets/js/home.js             Homepage rendering
assets/js/quiz-engine.js      Reusable engine for every quiz
assets/js/quizzes/<id>.js     Quiz data: text in each language, traits, results, images
assets/img/                   Images used by quizzes
.github/ISSUE_TEMPLATE/       Template used by the "Suggest a quiz" button
```

## Setup

1. Open `assets/js/core.js` and set `QH.config.repo` to your repository URL. The GitHub buttons use it.

## Adding a quiz

1. Create `assets/js/quizzes/my-quiz.js` and register it with `QH.quizzes['my-quiz'] = { ... }`. Copy `work-style.js` as a template.
2. Copy `quizzes/work-style.html` to `quizzes/my-quiz.html` and change `data-quiz` on `<body>` and the script path.
3. Add an entry to `QH.catalog` in `assets/js/catalog.js`, including `questions` (the count).

For a new language, add an entry to `QH.languages` and every key in `QH.strings` in `i18n.js`, and add the language to each quiz's text objects. Missing translations fall back to English.

## Images

Images are set per quiz in the `images` object (`start`, `question`, `result`), with paths relative to the site root. Each question can also have its own `image`. The defaults point to `assets/img/placeholder.svg`. Put your own files in `assets/img/` and update the paths. Images are optional, and a question with no image shows no picture.

## Scoring

Each answer adds a point to its trait. The trait with the most points gives the result. Ties go to the trait listed first in `results`. The breakdown shows each trait's share as a percentage.

## Suggesting quizzes

The "Suggest a quiz" button opens a new issue on your repository using `.github/ISSUE_TEMPLATE/new-quiz.md`. Accepted ideas become a new quiz file and catalog entry.
