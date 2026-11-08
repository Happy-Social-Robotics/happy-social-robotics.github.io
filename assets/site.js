/* Mobile menu and course progress bar. No tracking, no storage. */
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

  var STEPS = ["history", "history2", "pioneers", "pioneers2", "foundations", "foundations2", "types", "types2",
    "psychology", "psychology2", "behavior", "behavior2", "methods", "methods2", "publish", "publish2"];
  var file = (location.pathname.split("/").pop() || "index.html").replace(/\.html$/, "");
  var i = STEPS.indexOf(file);
  var strip = document.querySelector(".unitnav .container");
  if (i < 0 || !strip) return;
  var total = STEPS.length, pct = function (n) { return (n / total * 100).toFixed(1) + "%"; };

  var no = document.createElement("span");
  no.className = "stepno";
  no.textContent = "Step " + (i + 1) + " of " + total;
  strip.appendChild(no);

  var bar = document.createElement("div");
  bar.className = "prog";
  bar.setAttribute("role", "progressbar");
  bar.setAttribute("aria-label", "Course progress");
  bar.setAttribute("aria-valuemin", "0");
  bar.setAttribute("aria-valuemax", String(total));
  bar.setAttribute("aria-valuenow", String(i + 1));
  var fill = document.createElement("i");
  fill.style.width = pct(i);
  bar.appendChild(fill);
  strip.parentNode.appendChild(bar);
  requestAnimationFrame(function () { requestAnimationFrame(function () { fill.style.width = pct(i + 1); }); });

  if (i % 2 === 1) {
    var cur = document.querySelector('.unitnav a[aria-current="page"]');
    var name = cur ? cur.textContent.replace(/^\d+\s*/, "") : "Unit";
    var last = i === total - 1, left = (total - i - 1) / 2;
    var d = document.createElement("div");
    d.className = "unitdone";
    d.innerHTML = '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="24" cy="24" r="20"/><path d="M15 25l7 7 12-14"/></svg><div><b>' +
      (last ? "Course complete" : name + " complete") + "</b><span>" +
      (last ? "Now pick a venue and start your paper." : left + (left === 1 ? " unit" : " units") + " to go") + "</span></div>";
    var pager = document.querySelector(".pager");
    if (pager) pager.parentNode.insertBefore(d, pager);
  }
})();
