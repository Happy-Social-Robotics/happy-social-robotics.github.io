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
    '<b class="rb-num">0%</b><span class="rb-txt"><em hidden></em></span><button class="rb-menu" type="button" aria-expanded="false" aria-label="Course contents"><svg viewBox="0 0 20 20" aria-hidden="true"><path d="M3 5h14M3 10h14M3 15h14"/></svg></button>';
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
    badge.title = (pct >= 100 ? "Course complete" : "About " + left + " min left");
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
    if (MSG[pos]) setTimeout(function () { toast(Math.round(pos / total * 100), total - pos); }, reduce ? 0 : 500);
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
  var quizzes = Array.prototype.filter.call(document.querySelectorAll(".paper .quiz"), function (q) { return !q.closest(".vrow"); }); // quizzes beside a video stay with it
  if (!quizzes.length || !("IntersectionObserver" in window)) return;
  var active = new Set(), armed = false;
  /* only a scroll away from the top arms it; at the top of the page nothing is enlarged or dimmed */
  function arm() {
    var y = window.pageYOffset || document.documentElement.scrollTop;
    var now = y > 60;
    if (now !== armed) { armed = now; apply(); }
  }
  addEventListener("scroll", arm, { passive: true });
  function apply() {
    document.querySelectorAll(".focus-host").forEach(function (n) { n.classList.remove("focus-host"); });
    quizzes.forEach(function (q) { q.classList.remove("is-focus"); });
    var first = null;
    quizzes.forEach(function (q) { if (!first && armed && active.has(q)) first = q; });
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

/* One section at a time: the page is cut into beats; the one in view is bright, the rest wait or fade back */
(function () {
  var art = document.querySelector(".paper.overview");
  if (!art || !document.querySelector(".kicker.steps")) return;
  var kids = Array.prototype.slice.call(art.children), groups = [], cur = null;
  function starts(n) {
    return n.tagName === "H2" || n.classList.contains("vrow") || n.classList.contains("breakcard") ||
      n.classList.contains("unitdone");
  }
  kids.forEach(function (n, i) {
    if (cur === null || (starts(n) && !(n.tagName === "H2" && groups.length === 1 && cur.length <= 2))) { cur = []; groups.push(cur); }
    cur.push(n);
  });
  if (groups.length < 2) return;
  var beats = groups.map(function (g) {
    var s = document.createElement("div");
    s.className = "beat future";
    art.insertBefore(s, g[0]);
    g.forEach(function (n) { s.appendChild(n); });
    return s;
  });
  /* a first section that is too short on its own takes the next one with it */
  while (beats.length > 1 && beats[0].getBoundingClientRect().height < window.innerHeight * 0.32) {
    var nxt = beats.splice(1, 1)[0];
    while (nxt.firstChild) beats[0].appendChild(nxt.firstChild);
    nxt.parentNode.removeChild(nxt);
  }
  if (beats.length < 2) return;
  document.body.classList.add("js-beats");
  var cue = document.createElement("div");
  cue.className = "scrollcue";
  cue.setAttribute("aria-hidden", "true");
  cue.innerHTML = '<svg viewBox="0 0 24 24"><path d="M5 9l7 7 7-7"/></svg>';
  document.body.appendChild(cue);
  var ticking = false;
  function update() {
    ticking = false;
    var vh = window.innerHeight, now = 0;
    cue.classList.toggle("hide", (window.pageYOffset || 0) > 40);
    var atEnd = window.pageYOffset + vh >= document.documentElement.scrollHeight - 4;
    beats.forEach(function (b, i) { if (b.getBoundingClientRect().top < vh * 0.6) now = i; });
    if (atEnd) now = beats.length - 1;
    if ((window.pageYOffset || 0) < 8 && !atEnd) now = 0; // the first section is always the one you start on
    beats.forEach(function (b, i) {
      b.classList.toggle("now", i === now);
      b.classList.toggle("past", i < now);
      b.classList.toggle("future", i > now);
    });
  }
  function req() { if (!ticking) { ticking = true; requestAnimationFrame(update); } }
  addEventListener("scroll", req, { passive: true });
  addEventListener("resize", req);
  update();
})();


/* Next stays locked until the page has been read to the end and its quizzes are done */
(function () {
  if (!document.querySelector(".kicker.steps")) return;
  var nexts = [];
  var top = document.querySelectorAll(".stepnav");
  if (top.length) nexts.push(top[top.length - 1]);
  var pg = document.querySelectorAll(".pager a");
  var lastLink = pg[pg.length - 1];
  if (lastLink && !/^\s*←/.test(lastLink.textContent)) nexts.push(lastLink);
  if (!nexts.length) return;
  var gates = Array.prototype.slice.call(document.querySelectorAll(".paper .quiz, .paper [data-gate]"));
  var reachedEnd = false;
  function ready() { return reachedEnd && gates.every(function (g) { return g.getAttribute("data-done") === "1"; }); }
  function paint() {
    var ok = ready();
    nexts.forEach(function (a) {
      a.classList.toggle("locked", !ok);
      if (ok) { a.removeAttribute("aria-disabled"); a.removeAttribute("title"); a.removeAttribute("tabindex"); }
      else { a.setAttribute("aria-disabled", "true"); a.setAttribute("tabindex", "-1"); a.title = "Finish this page to continue"; }
    });
  }
  nexts.forEach(function (a) {
    a.addEventListener("click", function (e) { if (a.classList.contains("locked")) e.preventDefault(); });
  });
  function check() {
    var y = window.pageYOffset || document.documentElement.scrollTop;
    if (y + window.innerHeight >= document.documentElement.scrollHeight - 80) { if (!reachedEnd) { reachedEnd = true; paint(); } }
  }
  addEventListener("scroll", check, { passive: true });
  addEventListener("resize", check);
  document.addEventListener("quizdone", function (e) {
    var g = e.target.closest ? e.target.closest(".quiz, [data-gate]") : null;
    if (g) { g.setAttribute("data-done", "1"); paint(); }
  });
  paint(); check();
})();
