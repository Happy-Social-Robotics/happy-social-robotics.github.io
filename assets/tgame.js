/* Game table for "Five questions to place any robot". Nothing is stored. */
(function () {
  var root = document.querySelector(".tgame");
  if (!root) return;
  var COLS = [["Jackrabbot", "ball on wheels"], ["Kismet", "expressive head"], ["Tega", "furry tutor"], ["PARO", "baby seal"]];
  var ROWS = [
    { q: "Who interacts with it?", o: ["Passersby", "Lab visitors", "Children", "Patients"], a: [0, 1, 2, 3] },
    { q: "For how long?", o: ["Weeks, repeated", "Daily, long-term", "A moment, passing by", "Minutes, face to face"], a: [2, 3, 0, 1] },
    { q: "What must it understand about people?", o: ["Touch and stroking", "Where people walk", "Engagement with a story", "Emotion in face and voice"], a: [1, 3, 2, 0] },
    { q: "How does it express itself?", o: ["Sounds and body movement", "Its path alone", "Speech and gesture", "Face and babble"], a: [1, 3, 2, 0] },
    { q: "What changes for the person?", o: ["Feels calmer", "Learns more words", "Passes without a collision", "Reacts, and researchers learn from it"], a: [2, 3, 1, 0] }
  ];
  function el(t, c, x) { var e = document.createElement(t); if (c) e.className = c; if (x != null) e.textContent = x; return e; }
  var bar = el("div", "tg-bar"), count = el("span", "tg-count", "0 of 20 placed"), btn = el("button", "tg-check", "Check my answers");
  btn.type = "button"; btn.disabled = true;
  bar.appendChild(count); bar.appendChild(btn);
  var wrap = el("div", "tg-wrap"), tbl = el("table", "tg");
  var thead = el("thead"), hr = el("tr"); hr.appendChild(el("th"));
  COLS.forEach(function (c) { var th = el("th", "tg-col"); th.appendChild(el("b", "", c[0])); th.appendChild(el("span", "", c[1])); hr.appendChild(th); });
  thead.appendChild(hr); tbl.appendChild(thead);
  var tb = el("tbody"), cells = [];
  ROWS.forEach(function (r, ri) {
    var tr = el("tr"), th = el("th", "tg-row", r.q); tr.appendChild(th);
    COLS.forEach(function (c, ci) {
      var td = el("td"), sel = el("select");
      sel.setAttribute("aria-label", r.q + " " + c[0]);
      var o0 = el("option", "", "?"); o0.value = ""; sel.appendChild(o0);
      r.o.forEach(function (t, oi) { var o = el("option", "", t); o.value = oi; sel.appendChild(o); });
      sel.addEventListener("change", function () { td.className = ""; update(); });
      td.appendChild(sel); tr.appendChild(td);
      cells.push({ td: td, sel: sel, right: r.a[ci] });
    });
    tb.appendChild(tr);
  });
  tbl.appendChild(tb); wrap.appendChild(tbl);
  var msg = el("p", "tg-msg"); msg.setAttribute("aria-live", "polite");
  root.appendChild(bar); root.appendChild(wrap); root.appendChild(msg);
  var checked = false;
  function placed() { return cells.filter(function (c) { return c.sel.value !== ""; }).length; }
  function update() { var n = placed(); count.textContent = n + " of 20 placed"; btn.disabled = n < 20; }
  btn.addEventListener("click", function () {
    var ok = 0;
    cells.forEach(function (c) {
      var good = String(c.right) === c.sel.value;
      c.td.className = good ? "ok" : "no";
      if (good) { ok++; c.sel.disabled = true; }
    });
    msg.textContent = ok === 20 ? "All 20 placed correctly." : ok + " of 20 correct. Fix the red ones and check again.";
    if (!checked) { checked = true; root.setAttribute("data-done", "1"); root.dispatchEvent(new CustomEvent("quizdone", { bubbles: true })); }
  });
})();
