/* Multiple-choice engine. Each <div class="quiz" data-sets="a,b"> is filled from SETS.
   Nothing is stored; reload or "Try again" resets. */
(function () {
  "use strict";
  var SETS = window.QUIZ_SETS || {};


  var LETTERS = ["A", "B", "C", "D", "E"];

  function h(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text !== undefined) e.textContent = text;
    return e;
  }

  function shuffle(arr) {
    for (var n = arr.length - 1; n > 0; n--) {
      var r = Math.floor(Math.random() * (n + 1));
      var tmp = arr[n];
      arr[n] = arr[r];
      arr[r] = tmp;
    }
    return arr;
  }

  function build(root) {
    var names = (root.getAttribute("data-sets") || "").split(",").map(function (s) { return s.trim(); });
    if (names.indexOf("all") !== -1) names = Object.keys(SETS);
    var showTitles = root.hasAttribute("data-titles");
    root.innerHTML = "";

    var total = 0, answered = 0, correct = 0;
    names.forEach(function (n) { if (SETS[n]) total += SETS[n].items.length; });

    var score = h("div", "score");
    score.setAttribute("aria-live", "polite");
    var left = h("span");
    var num = h("span", "n", "0 / " + total);
    left.appendChild(document.createTextNode("Score "));
    left.appendChild(num);
    var status = h("span", "", "Answered 0 of " + total);
    var reset = h("button", "", "Try again");
    reset.type = "button";
    reset.addEventListener("click", function () { build(root); });
    score.appendChild(left);
    score.appendChild(status);
    score.appendChild(reset);

    var counter = 0;
    names.forEach(function (name) {
      var set = SETS[name];
      if (!set) return;
      if (showTitles) root.appendChild(h("h2", "group-title", set.title));
      set.items.forEach(function (item) {
        counter += 1;
        var wrap = h("div", "q");
        wrap.setAttribute("role", "group");
        var id = "q-" + name + "-" + counter;
        wrap.setAttribute("aria-labelledby", id);
        wrap.appendChild(h("div", "qh", "Question " + counter + " of " + total));
        var qt = h("p", "qt", item.q);
        qt.id = id;
        wrap.appendChild(qt);
        var opts = h("div", "opts");
        var buttons = [];
        var fb = h("p", "fb");
        fb.hidden = true;

        var order = shuffle(item.o.map(function (_, n) { return n; }));
        var correctPos = order.indexOf(item.a);

        order.forEach(function (orig, i) {
          var text = item.o[orig];
          var b = h("button", "opt");
          b.type = "button";
          var k = h("span", "k", LETTERS[i]);
          var t = h("span", "t", text);
          b.appendChild(k);
          b.appendChild(t);
          var mk = h("span", "mark"); mk.setAttribute("aria-hidden", "true"); b.appendChild(mk);
          b.addEventListener("click", function () {
            if (wrap.getAttribute("data-done")) return;
            wrap.setAttribute("data-done", "1");
            answered += 1;
            var right = i === correctPos;
            if (right) correct += 1;
            buttons.forEach(function (bb, j) {
              bb.disabled = true;
              if (j === correctPos) bb.classList.add(right ? "ok" : "reveal");
            });
            if (!right) b.classList.add("no");
            var lab = h("b", right ? "" : "bad", right ? "Correct. " : "Not quite. The answer is " + LETTERS[correctPos] + ". ");
            fb.appendChild(lab);
            fb.appendChild(document.createTextNode(item.why));
            fb.hidden = false;
            num.textContent = correct + " / " + total;
            status.textContent = answered === total
              ? "Finished. " + (correct === total ? "Full marks." : "Review the units for the ones you missed.")
              : "Answered " + answered + " of " + total;
          });
          buttons.push(b);
          opts.appendChild(b);
        });

        wrap.appendChild(opts);
        wrap.appendChild(fb);
        root.appendChild(wrap);
      });
    });

    root.appendChild(score);
  }

  window.QuizEngine = { build: build };
  var roots = document.querySelectorAll(".quiz[data-sets]");
  for (var i = 0; i < roots.length; i++) build(roots[i]);
})();
