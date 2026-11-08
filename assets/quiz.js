/* Quiz engine: one card at a time, points, streaks, a result screen.
   Nothing is stored. Each <div class="quiz" data-sets="a,b"> is filled from window.QUIZ_SETS.
   "all" means every set that is not marked hidden. */
(function () {
  "use strict";
  var SETS = window.QUIZ_SETS || {};
  var LETTERS = ["A", "B", "C", "D", "E"];
  var CHEER = ["Nice!", "Spot on!", "Exactly!", "You got it!", "Sharp thinking!", "Yes!"];
  var MISS = ["Not quite.", "Close, but not that one.", "Good try.", "Tricky one."];
  var CONF = ["#ffffff", "#a9c0ee", "#5b7bbf", "#0a0a0a"];
  var calm = !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  var NS = "http://www.w3.org/2000/svg";

  var ICON = {
    star: '<path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.3 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8z"/>',
    flame: '<path d="M12 2c1 4 5 6 5 11a5 5 0 0 1-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-4-1-6 1-10z"/>',
    check: '<path d="M5 12.5l4.5 4.5L19 7" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>',
    cross: '<path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>'
  };
  function icon(name, cls) {
    var s = document.createElementNS(NS, "svg");
    s.setAttribute("viewBox", "0 0 24 24");
    s.setAttribute("aria-hidden", "true");
    s.setAttribute("class", "qg-ico" + (cls ? " " + cls : ""));
    s.innerHTML = ICON[name];
    return s;
  }
  function h(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }
  function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function pick(a) { return a[Math.floor(Math.random() * a.length)]; }

  function collect(root) {
    var names = (root.getAttribute("data-sets") || "").split(",").map(function (s) { return s.trim(); }).filter(Boolean);
    if (names.indexOf("all") !== -1) names = Object.keys(SETS).filter(function (k) { return !SETS[k].hidden; });
    var out = [];
    names.forEach(function (n) { if (SETS[n]) SETS[n].items.forEach(function (it) { out.push(it); }); });
    return out;
  }

  function countTo(el, from, to) {
    if (calm || from === to) { el.textContent = to; return; }
    var t0 = null;
    function step(t) {
      if (t0 === null) t0 = t;
      var p = Math.min((t - t0) / 550, 1);
      el.textContent = Math.round(from + (to - from) * p);
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  function confetti(parent) {
    if (calm) return;
    var box = h("div", "qg-conf");
    box.setAttribute("aria-hidden", "true");
    for (var n = 0; n < 28; n++) {
      var p = h("i");
      p.style.left = (8 + Math.random() * 84) + "%";
      p.style.background = CONF[n % CONF.length];
      p.style.setProperty("--dx", (Math.random() * 180 - 90) + "px");
      p.style.setProperty("--r", (Math.random() * 720 - 360) + "deg");
      p.style.animationDelay = (Math.random() * 140) + "ms";
      box.appendChild(p);
    }
    parent.appendChild(box);
    setTimeout(function () { if (box.parentNode) box.parentNode.removeChild(box); }, 1500);
  }

  function build(root, retry) {
    var items = retry || collect(root);
    root.innerHTML = "";
    var total = items.length;
    if (!total) return;

    var s = { i: 0, points: 0, streak: 0, best: 0, correct: 0, missed: [], marks: [] };
    var phase = "q";
    var btns = [];

    var wrap = h("div", "qg");
    var stage = h("div", "qg-stage");
    var bar = h("div", "qg-bar");
    var live = h("p", "qg-live");
    live.setAttribute("aria-live", "polite");

    var progress = h("div", "qg-prog");
    var stats = h("div", "qg-stats");
    var ptsWrap = h("span", "qg-stat");
    ptsWrap.appendChild(icon("star"));
    var ptsNum = h("b", "", "0");
    ptsWrap.appendChild(ptsNum);
    ptsWrap.setAttribute("title", "Points");
    var strWrap = h("span", "qg-stat qg-streak");
    strWrap.appendChild(icon("flame"));
    var strNum = h("b", "", "0");
    strWrap.appendChild(strNum);
    strWrap.setAttribute("title", "Answers right in a row");
    stats.appendChild(ptsWrap);
    stats.appendChild(strWrap);
    bar.appendChild(progress);
    bar.appendChild(stats);
    wrap.appendChild(stage);
    wrap.appendChild(bar);
    wrap.appendChild(live);
    root.appendChild(wrap);

    var dots = [];
    var meter = null;
    if (total <= 12) {
      progress.className = "qg-dots";
      for (var d = 0; d < total; d++) { var dot = h("span", "qg-dot"); dots.push(dot); progress.appendChild(dot); }
    } else {
      progress.className = "qg-meterwrap";
      meter = h("span", "qg-meter");
      meter.appendChild(h("i"));
      progress.appendChild(meter);
    }

    function paintBar(animatePoints, prevPoints) {
      dots.forEach(function (dot, n) {
        var m = s.marks[n];
        dot.className = "qg-dot" + (m === true ? " ok" : m === false ? " no" : n === s.i && phase !== "done" ? " cur" : "");
        dot.textContent = m === true ? "✓" : m === false ? "✕" : "";
      });
      if (meter) meter.firstChild.style.width = (100 * Math.min(s.marks.length, total) / total) + "%";
      if (animatePoints) countTo(ptsNum, prevPoints, s.points); else ptsNum.textContent = s.points;
      strNum.textContent = s.streak;
      strWrap.className = "qg-stat qg-streak" + (s.streak >= 2 ? " hot" : "");
    }

    function show(screen) {
      stage.innerHTML = "";
      stage.appendChild(screen);
    }

    function showQuestion() {
      phase = "q";
      var it = items[s.i];
      var order = shuffle(it.o.map(function (_, n) { return n; }));
      var correctPos = order.indexOf(it.a);
      var scr = h("section", "qg-screen qg-q");
      scr.setAttribute("aria-label", "Question " + (s.i + 1) + " of " + total);
      var top = h("div", "qg-top");
      top.appendChild(h("p", "qg-count", "Question " + (s.i + 1) + " of " + total));
      top.appendChild(h("p", "qg-text", it.q));
      var bot = h("div", "qg-bot");
      var opts = h("div", "qg-opts");
      btns = [];
      var done = false;

      function choose(i) {
        if (done) return;
        done = true;
        phase = "wait";
        var right = i === correctPos;
        var prev = s.points;
        var gain = 0;
        btns.forEach(function (bb, j) {
          bb.disabled = true;
          if (j === correctPos) bb.classList.add("is-right");
        });
        if (right) {
          s.correct += 1;
          s.streak += 1;
          s.best = Math.max(s.best, s.streak);
          gain = 10 + Math.min(s.streak - 1, 3) * 5;
          s.points += gain;
          confetti(scr);
        } else {
          btns[i].classList.add("is-wrong");
          s.streak = 0;
          s.missed.push(it);
        }
        s.marks[s.i] = right;
        paintBar(true, prev);
        live.textContent = right ? "Correct." : "Not quite. The answer is " + LETTERS[correctPos] + ".";
        setTimeout(function () { showInsight(it, right, gain, correctPos); }, calm ? 200 : 950);
      }

      order.forEach(function (orig, i) {
        var b = h("button", "qg-opt");
        b.type = "button";
        b.appendChild(h("span", "qg-k", LETTERS[i]));
        b.appendChild(h("span", "qg-t", it.o[orig]));
        b.appendChild(h("span", "qg-mark"));
        b.addEventListener("click", function () { choose(i); });
        btns.push(b);
        opts.appendChild(b);
      });
      bot.appendChild(opts);
      scr.appendChild(top);
      scr.appendChild(bot);
      show(scr);
      paintBar(false);
    }

    function showInsight(it, right, gain, correctPos) {
      phase = "ins";
      var scr = h("section", "qg-screen qg-ins " + (right ? "is-right" : "is-wrong"));
      var badge = h("div", "qg-badge");
      badge.appendChild(icon(right ? "check" : "cross"));
      scr.appendChild(badge);
      scr.appendChild(h("p", "qg-head", right ? pick(CHEER) : pick(MISS)));
      var m = it.why.match(/^(.+?[.!?])(\s+[\s\S]*)?$/);
      var first = m ? m[1] : it.why;
      var rest = m && m[2] ? m[2].trim() : "";
      scr.appendChild(h("p", "qg-big", first));
      if (rest) scr.appendChild(h("p", "qg-rest", rest));
      if (!right) {
        var ans = h("p", "qg-ans");
        ans.appendChild(h("b", "", "Answer " + LETTERS[correctPos] + ". "));
        ans.appendChild(document.createTextNode(it.o[it.a]));
        scr.appendChild(ans);
      }
      if (right) {
        var chips = h("p", "qg-gain");
        chips.appendChild(h("span", "", "+" + gain + " points"));
        if (s.streak >= 2) chips.appendChild(h("span", "hot", s.streak + " in a row"));
        scr.appendChild(chips);
      } else {
        scr.appendChild(h("p", "qg-gain-note", "Streak reset. The next one is a fresh start."));
      }
      var last = s.i === total - 1;
      var nb = h("button", "qg-next", last ? (total === 1 ? "Try again" : "See results") : "Next question");
      nb.type = "button";
      nb.addEventListener("click", function () {
        if (!last) { s.i += 1; showQuestion(); }
        else if (total === 1) build(root);
        else showResults();
      });
      scr.appendChild(nb);
      show(scr);
      try { nb.focus({ preventScroll: true }); } catch (e) { nb.focus(); }
      paintBar(false);
    }

    function showResults() {
      phase = "done";
      var pct = Math.round(100 * s.correct / total);
      var stars = pct >= 90 ? 3 : pct >= 60 ? 2 : 1;
      var scr = h("section", "qg-screen qg-res");
      var C = 2 * Math.PI * 54;
      var ring = document.createElementNS(NS, "svg");
      ring.setAttribute("viewBox", "0 0 128 128");
      ring.setAttribute("class", "qg-ring");
      ring.setAttribute("role", "img");
      ring.setAttribute("aria-label", pct + " percent correct");
      ring.innerHTML = '<circle cx="64" cy="64" r="54" fill="none" stroke="rgba(255,255,255,.22)" stroke-width="12"/>' +
        '<circle class="qg-arc" cx="64" cy="64" r="54" fill="none" stroke="#fff" stroke-width="12" stroke-linecap="round" transform="rotate(-90 64 64)" stroke-dasharray="' + C.toFixed(1) + '" stroke-dashoffset="' + (calm ? (C * (1 - pct / 100)).toFixed(1) : C.toFixed(1)) + '"/>';
      var ringBox = h("div", "qg-ringbox");
      ringBox.appendChild(ring);
      var big = h("div", "qg-ringtxt");
      big.appendChild(h("b", "", s.correct + " / " + total));
      big.appendChild(h("span", "", pct + "%"));
      ringBox.appendChild(big);
      scr.appendChild(ringBox);
      var st = h("div", "qg-stars");
      for (var n = 0; n < 3; n++) st.appendChild(icon("star", n < stars ? "on" : "off"));
      st.setAttribute("aria-label", stars + " of 3 stars");
      scr.appendChild(st);
      scr.appendChild(h("p", "qg-rtitle", pct >= 90 ? "Outstanding." : pct >= 60 ? "Solid work." : "A good start. Go again."));
      var line = h("p", "qg-rline");
      line.textContent = s.points + " points  ·  best streak " + s.best;
      scr.appendChild(line);
      var row = h("div", "qg-actions");
      var again = h("button", "qg-next light", "Play again");
      again.type = "button";
      again.addEventListener("click", function () { build(root); });
      row.appendChild(again);
      if (s.missed.length) {
        var rm = h("button", "qg-next ghost", "Retry the " + s.missed.length + " I missed");
        rm.type = "button";
        rm.addEventListener("click", function () { build(root, shuffle(s.missed)); });
        row.appendChild(rm);
      }
      scr.appendChild(row);
      show(scr);
      paintBar(false);
      if (pct >= 60) confetti(scr);
      if (!calm) {
        var arc = scr.querySelector(".qg-arc");
        setTimeout(function () { arc.style.transition = "stroke-dashoffset 1s ease"; arc.setAttribute("stroke-dashoffset", (C * (1 - pct / 100)).toFixed(1)); }, 60);
      }
    }

    wrap.addEventListener("keydown", function (e) {
      if (phase !== "q" || e.ctrlKey || e.metaKey || e.altKey) return;
      var k = LETTERS.indexOf((e.key || "").toUpperCase());
      if (k > -1 && btns[k]) { e.preventDefault(); btns[k].click(); }
    });

    showQuestion();
  }

  window.QuizEngine = { build: build };
  var roots = document.querySelectorAll(".quiz[data-sets]");
  for (var i = 0; i < roots.length; i++) build(roots[i]);
})();
