/* Quiz library: pick a set (or all) and it is built below. Hash-linkable: quizzes.html#s3 */
(function () {
  var data = window.QUIZ_SETS || {};
  var list = document.getElementById("qlib");
  var stage = document.getElementById("stage");
  var host = document.getElementById("stage-quiz");
  var title = document.getElementById("stage-title");
  if (!list || !stage || !host) return;

  function el(t, c, x) { var e = document.createElement(t); if (c) e.className = c; if (x) e.textContent = x; return e; }
  var cards = {};

  function pick(key, scroll) {
    if (key !== "all" && !data[key]) return;
    Object.keys(cards).forEach(function (k) { cards[k].setAttribute("aria-pressed", k === key ? "true" : "false"); });
    title.textContent = key === "all" ? "Mixed review: every question" : data[key].title;
    host.setAttribute("data-sets", key);
    window.QuizEngine.build(host);
    stage.hidden = false;
    try { history.replaceState(null, "", "#" + key); } catch (e) {}
    if (scroll) stage.scrollIntoView();
  }

  var total = 0;
  Object.keys(data).forEach(function (k) {
    total += data[k].items.length;
    cards[k] = card(k, data[k].unit, data[k].title, data[k].blurb, data[k].items.length);
  });
  cards.all = card("all", "All units", "Mixed review", "Every question from every set, in order.", total);

  function card(key, unit, name, desc, n) {
    var b = el("button", "qcard");
    b.type = "button";
    b.setAttribute("aria-pressed", "false");
    b.appendChild(el("span", "unit", unit));
    b.appendChild(el("span", "name", name));
    b.appendChild(el("span", "desc", desc));
    b.appendChild(el("span", "count", n + (n === 1 ? " question" : " questions")));
    b.addEventListener("click", function () { pick(key, true); });
    list.appendChild(b);
    return b;
  }

  var h = (location.hash || "").replace("#", "");
  if (h) pick(h, false);
})();
