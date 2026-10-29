# Happy Social Robotics

Website for the Happy Social Robotics student group at the University of Tsukuba.
Plain HTML, CSS and JavaScript. No build step, no tracking, nothing stored.
Palette: black, white and navy on a blue background.

## Pages

| File | Tab |
| --- | --- |
| `index.html` | Home |
| `people.html` | People (placeholder until the team template is added) |
| `quizzes.html` | Quiz library (pick a set, or a mixed review) |
| `course/` | Beginner course on social robotics (10 pages) |
| `assets/site.css`, `site.js` | Shared style and mobile menu |
| `assets/quiz.js`, `quiz-data.js`, `quiz-library.js` | Quiz engine, questions, library page |

## University emblem

Put the official emblem at `assets/images/tsukuba-emblem.png` (square, transparent
background). It appears next to the site name automatically; until then only the name shows.

## Publishing

Settings → Pages → deploy from branch `main`, folder `/ (root)`.

## Adding a quiz

Open `assets/quiz-data.js` and add a set:

```js
mykey: {
  unit: "Unit 9",
  title: "My quiz",
  blurb: "One line shown on the card.",
  items: [
    { q: "Question text?",
      o: ["Option A", "Option B", "Option C", "Option D"],
      a: 1,                       // index of the correct option (0 = first)
      why: "Explanation shown after answering." }
  ]
}
```

It appears automatically on the Quizzes page (`quizzes.html#mykey` links to it).
To put it inside any page, add `<div class="quiz" data-sets="mykey"></div>` and load
`assets/quiz-data.js` then `assets/quiz.js` (use `data-sets="all"` for everything).
Option order is shuffled on every attempt.
