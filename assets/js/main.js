(function () {
  "use strict";

  /* Mobile nav toggle */
  var toggle = document.querySelector(".nav-toggle");
  var mobileNav = document.querySelector(".mobile-nav");
  if (toggle && mobileNav) {
    toggle.addEventListener("click", function () {
      var open = mobileNav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.style.overflow = open ? "hidden" : "";
    });
    mobileNav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        mobileNav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    });
  }

  /* Menu page tabs (Restaurant / Food Truck) */
  var tabs = document.querySelectorAll(".menu-tab");
  var panels = document.querySelectorAll(".menu-panel");
  if (tabs.length) {
    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        var target = tab.getAttribute("data-target");
        tabs.forEach(function (t) { t.classList.toggle("is-active", t === tab); });
        panels.forEach(function (p) { p.classList.toggle("is-active", p.id === target); });
        history.replaceState(null, "", "#" + target);
      });
    });
    var fromHash = window.location.hash.replace("#", "");
    var matchTab = fromHash && document.querySelector('.menu-tab[data-target="' + fromHash + '"]');
    if (matchTab) matchTab.click();
  }

  /*
   * Hours awareness. Business hours (local, America/Phoenix — Arizona does not
   * observe DST, so this matches the browser's local time for AZ visitors):
   * Wed-Sat 10:00-21:00, Sun 10:00-16:00, Mon/Tue closed.
   */
  var HOURS = {
    0: [10, 16],   // Sun
    3: [10, 21],   // Wed
    4: [10, 21],   // Thu
    5: [10, 21],   // Fri
    6: [10, 21]    // Sat
  };
  var DAY_NAMES = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

  function getStatus() {
    var now = new Date();
    var day = now.getDay();
    var hour = now.getHours() + now.getMinutes() / 60;
    var todayRange = HOURS[day];
    if (todayRange && hour >= todayRange[0] && hour < todayRange[1]) {
      var closeH = todayRange[1];
      var closeLabel = (closeH > 12 ? closeH - 12 : closeH) + (closeH >= 12 ? "PM" : "AM");
      return { open: true, label: "Open now · closes " + closeLabel };
    }
    return { open: false, label: "Closed now" };
  }

  document.querySelectorAll("[data-hours-status]").forEach(function (el) {
    var status = getStatus();
    el.textContent = status.label;
    el.classList.toggle("is-open", status.open);
  });

  var today = DAY_NAMES[new Date().getDay()];
  document.querySelectorAll("[data-day]").forEach(function (row) {
    if (row.getAttribute("data-day") === today) row.classList.add("is-today");
  });

  /* Promo carousel — auto-rotating dish spotlight, with manual override */
  var carousel = document.querySelector(".promo-carousel");
  if (carousel) {
    var track = carousel.querySelector(".promo-carousel-track");
    var slides = carousel.querySelectorAll(".promo-carousel-slide");
    var dotsWrap = carousel.querySelector(".promo-carousel-dots");
    var prevBtn = carousel.querySelector(".promo-carousel-btn.prev");
    var nextBtn = carousel.querySelector(".promo-carousel-btn.next");
    var count = slides.length;
    var current = 0;
    var timer = null;
    var AUTO_MS = 4500;
    var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    slides.forEach(function (_, i) {
      var dot = document.createElement("button");
      dot.type = "button";
      dot.className = "promo-carousel-dot" + (i === 0 ? " is-active" : "");
      dot.setAttribute("aria-label", "Go to slide " + (i + 1) + " of " + count);
      dot.addEventListener("click", function () { goTo(i); resetTimer(); });
      dotsWrap.appendChild(dot);
    });
    var dots = dotsWrap.querySelectorAll(".promo-carousel-dot");

    function goTo(i) {
      current = (i + count) % count;
      track.scrollTo({ left: track.clientWidth * current, behavior: "smooth" });
      updateDots();
    }
    function updateDots() {
      dots.forEach(function (d, i) { d.classList.toggle("is-active", i === current); });
    }
    function next() { goTo(current + 1); }
    function prev() { goTo(current - 1); }

    if (prevBtn) prevBtn.addEventListener("click", function () { prev(); resetTimer(); });
    if (nextBtn) nextBtn.addEventListener("click", function () { next(); resetTimer(); });

    function startTimer() {
      if (reducedMotion) return;
      stopTimer();
      timer = setInterval(function () {
        if (document.visibilityState === "visible") next();
      }, AUTO_MS);
    }
    function stopTimer() {
      if (timer) { clearInterval(timer); timer = null; }
    }
    function resetTimer() { startTimer(); }

    carousel.addEventListener("mouseenter", stopTimer);
    carousel.addEventListener("mouseleave", startTimer);
    carousel.addEventListener("touchstart", stopTimer, { passive: true });
    carousel.addEventListener("touchend", function () { resetTimer(); }, { passive: true });
    carousel.addEventListener("focusin", stopTimer);
    carousel.addEventListener("focusout", startTimer);
    document.addEventListener("visibilitychange", function () {
      if (document.visibilityState === "hidden") stopTimer(); else startTimer();
    });

    var scrollTimeout;
    track.addEventListener("scroll", function () {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(function () {
        current = Math.round(track.scrollLeft / track.clientWidth);
        updateDots();
      }, 100);
    });

    startTimer();
  }
})();
