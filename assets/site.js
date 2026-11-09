/* Mobile menu and course progress ring. No tracking, no storage. */
(function () {
  document.documentElement.classList.add("js");
  var btn = document.querySelector(".menu-toggle");
  var nav = document.getElementById("site-nav");
  if (btn && nav) {
    btn.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  var UNITS = ["history", "pioneers", "foundations", "types", "psychology", "behavior", "methods", "publish"];
  var PARTS = { history: 3, psychology: 7 }; // every other unit has 4
  var STEPS = [], LAST = {};
  UNITS.forEach(function (u) {
    var n = PARTS[u] || 4;
    for (var k = 1; k <= n; k++) STEPS.push(u + (k === 1 ? "" : k));
    LAST[STEPS[STEPS.length - 1]] = true;
  });
  var total = STEPS.length, MIN_PER_STEP = 1.5;
  if (!document.querySelector(".unitnav")) return;
  var file = (location.pathname.split("/").pop() || "index.html").replace(/\.html$/, "");
  var pos = file === "references" ? total : Math.max(0, STEPS.indexOf(file)); // steps finished on arrival
  var onStep = STEPS.indexOf(file) >= 0;
  var reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ----- the ring ----- */
  var R = 26, C = 2 * Math.PI * R;
  var badge = document.createElement("div");
  badge.className = "ringbadge";
  badge.setAttribute("role", "progressbar");
  badge.setAttribute("aria-label", "Course progress");
  badge.setAttribute("aria-valuemin", "0");
  badge.setAttribute("aria-valuemax", "100");
  badge.innerHTML =
    '<svg viewBox="0 0 64 64" aria-hidden="true"><circle class="rb-track" cx="32" cy="32" r="' + R + '"/>' +
    '<circle class="rb-arc" cx="32" cy="32" r="' + R + '" stroke-dasharray="' + C.toFixed(2) + '" stroke-dashoffset="' + C.toFixed(2) + '"/></svg>' +
    '<b class="rb-num">0%</b><span class="rb-txt"><em></em></span><button class="rb-menu" type="button" aria-expanded="false">Contents</button>';
  document.body.appendChild(badge);
  var hdr = document.querySelector(".site-header");
  function place() { if (hdr) document.documentElement.style.setProperty("--hh", hdr.getBoundingClientRect().height + "px"); }
  place(); addEventListener("resize", place);
  var menuBtn = badge.querySelector(".rb-menu");
  menuBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    var on = document.body.classList.toggle("show-units");
    menuBtn.setAttribute("aria-expanded", on ? "true" : "false");
  });
  document.addEventListener("click", function (e) {
    if (document.body.classList.contains("show-units") && !e.target.closest(".unitnav")) {
      document.body.classList.remove("show-units"); menuBtn.setAttribute("aria-expanded", "false");
    }
  });
  addEventListener("keydown", function (e) { if (e.key === "Escape") { document.body.classList.remove("show-units"); menuBtn.setAttribute("aria-expanded", "false"); } });
  var arc = badge.querySelector(".rb-arc"), num = badge.querySelector(".rb-num"), sub = badge.querySelector("em");

  function paint(frac) {
    frac = Math.min(1, Math.max(0, frac));
    var pct = Math.round(frac * 100);
    arc.style.strokeDashoffset = (C * (1 - frac)).toFixed(2);
    num.textContent = pct >= 100 ? "✓" : pct + "%";
    badge.classList.toggle("done", pct >= 100);
    badge.setAttribute("aria-valuenow", String(pct));
    var left = Math.max(0, Math.ceil((1 - frac) * total * MIN_PER_STEP));
    sub.textContent = pct >= 100 ? "Course complete" : pct === 0 ? "About " + total * MIN_PER_STEP + " min in all" : "About " + left + " min left";
  }
  function target() {
    if (!onStep) return pos / total;
    var h = document.documentElement.scrollHeight - innerHeight;
    var f = h <= 24 ? 1 : Math.min(1, Math.max(0, scrollY / h));
    return (pos + f) / total;
  }

  var tweening = false, ticking = false;
  function follow() {
    if (tweening || ticking) return;
    ticking = true;
    requestAnimationFrame(function () { ticking = false; paint(target()); });
  }
  function tween(from, to, ms, done) {
    if (reduce) { paint(to); done(); return; }
    tweening = true;
    var t0 = null;
    function step(t) {
      if (t0 === null) t0 = t;
      var k = Math.min(1, (t - t0) / ms), e = 1 - Math.pow(1 - k, 3);
      paint(from + (to - from) * e);
      if (k < 1) requestAnimationFrame(step); else { tweening = false; done(); }
    }
    requestAnimationFrame(step);
  }

  /* arrival: the ring climbs from the last step's share to the new total, with a message */
  var MSG = {};
  MSG[Math.round(total * 0.25)] = ["A quarter done", "You know who built social robots, and why."];
  MSG[Math.round(total * 0.5)] = ["Halfway there", "The hard concepts are behind you."];
  MSG[Math.round(total * 0.75)] = ["Three quarters done", "Only methods and publishing left."];
  MSG[total] = ["Course complete", "Now pick a venue and write your paper."];
  var PLAIN = ["Good start", "Keep going", "Nice pace", "Building momentum", "On a roll", "Stay with it", "Nearly there"];
  function toast(pct, left) {
    var m = MSG[pos] || [PLAIN[pos % PLAIN.length], left + (left === 1 ? " step" : " steps") + " to go"];
    var t = document.createElement("div");
    t.className = "ringtoast";
    t.setAttribute("role", "status");
    t.innerHTML = "<b>" + pct + "% complete</b><span><strong>" + m[0] + ".</strong> " + m[1] + "</span>";
    document.body.appendChild(t);
    requestAnimationFrame(function () { t.classList.add("show"); });
    setTimeout(function () { t.classList.remove("show"); setTimeout(function () { t.remove(); }, 500); }, 5200);
  }

  paint(Math.max(0, pos - 1) / total);
  if (pos > 0) {
    tween(Math.max(0, pos - 1) / total, pos / total, 1100, function () { paint(target()); });
    setTimeout(function () { toast(Math.round(pos / total * 100), total - pos); }, reduce ? 0 : 500);
  } else {
    paint(0);
  }
  if (onStep) {
    addEventListener("scroll", follow, { passive: true });
    addEventListener("resize", follow);
  }

  /* end of every unit: a completion card */
  if (onStep && LAST[file]) {
    var cur = document.querySelector('.unitnav a[aria-current="page"]');
    var name = cur ? cur.textContent.replace(/^\d+\s*/, "") : "Unit";
    var last = pos === total - 1, left = UNITS.length - 1 - UNITS.indexOf(file.replace(/\d+$/, ""));
    var d = document.createElement("div");
    d.className = "unitdone";
    d.innerHTML = '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="24" cy="24" r="20"/><path d="M15 25l7 7 12-14"/></svg><div><b>' +
      (last ? "Course complete" : name + " complete") + "</b><span>" +
      (last ? "Now pick a venue and start your paper." : left + (left === 1 ? " unit" : " units") + " to go") + "</span></div>";
    var anchor = document.querySelector(".breakcard") || document.querySelector(".pager");
    if (anchor) anchor.parentNode.insertBefore(d, anchor);
  }
})();

/* Break videos: thumbnail first, player on click */
(function () {
  document.addEventListener("click", function (e) {
    var btn = e.target.closest && e.target.closest(".vthumb");
    if (!btn) return;
    var card = btn.parentNode, id = card.getAttribute("data-id");
    var f = document.createElement("iframe");
    f.src = "https://www.youtube-nocookie.com/embed/" + id + "?autoplay=1&rel=0";
    f.title = btn.getAttribute("aria-label").replace(/^Play: /, "");
    f.allow = "accelerometer; autoplay; encrypted-media; picture-in-picture";
    f.setAttribute("allowfullscreen", "");
    f.referrerPolicy = "strict-origin-when-cross-origin";
    var box = document.createElement("div");
    box.className = "vplayer";
    box.appendChild(f);
    card.replaceChild(box, btn);
  });
})();

/* Quiz focus: when a quiz sits in the middle of the screen it grows and the rest of the page fades back */
(function () {
  var quizzes = document.querySelectorAll(".paper .quiz");
  if (!quizzes.length || !("IntersectionObserver" in window)) return;
  var active = new Set();
  function apply() {
    document.querySelectorAll(".focus-host").forEach(function (n) { n.classList.remove("focus-host"); });
    quizzes.forEach(function (q) { q.classList.remove("is-focus"); });
    var first = null;
    quizzes.forEach(function (q) { if (!first && active.has(q)) first = q; });
    if (first) {
      first.classList.add("is-focus");
      var host = first.closest(".paper > *");
      if (host) host.classList.add("focus-host");
      document.body.classList.add("qfocus");
    } else {
      document.body.classList.remove("qfocus");
    }
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) active.add(e.target); else active.delete(e.target); });
    apply();
  }, { rootMargin: "-45% 0px -45% 0px" });
  quizzes.forEach(function (q) { io.observe(q); });
})();
