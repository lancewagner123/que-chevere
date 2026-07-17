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
   * Language-aware: re-run via updateHoursStatus(lang) whenever the language
   * toggle fires, since this text is generated at runtime, not static HTML.
   */
  var HOURS = {
    0: [10, 16],   // Sun
    3: [10, 21],   // Wed
    4: [10, 21],   // Thu
    5: [10, 21],   // Fri
    6: [10, 21]    // Sat
  };
  var DAY_NAMES = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

  function getStatus(lang) {
    var now = new Date();
    var day = now.getDay();
    var hour = now.getHours() + now.getMinutes() / 60;
    var todayRange = HOURS[day];
    if (todayRange && hour >= todayRange[0] && hour < todayRange[1]) {
      var closeH = todayRange[1];
      var closeHour12 = closeH > 12 ? closeH - 12 : closeH;
      if (lang === "es") {
        return { open: true, label: "Abierto ahora · cierra a las " + closeHour12 + " p.m." };
      }
      var closeLabel = closeHour12 + (closeH >= 12 ? "PM" : "AM");
      return { open: true, label: "Open now · closes " + closeLabel };
    }
    return { open: false, label: lang === "es" ? "Cerrado ahora" : "Closed now" };
  }

  function updateHoursStatus(lang) {
    document.querySelectorAll("[data-hours-status]").forEach(function (el) {
      var status = getStatus(lang);
      el.textContent = status.label;
      el.classList.toggle("is-open", status.open);
    });
  }

  var today = DAY_NAMES[new Date().getDay()];
  document.querySelectorAll("[data-day]").forEach(function (row) {
    if (row.getAttribute("data-day") === today) row.classList.add("is-today");
  });

  /* ---------- English / Spanish toggle ---------- */
  var LANG_KEY = "qc-lang";

  function getStoredLang() {
    try { return localStorage.getItem(LANG_KEY); } catch (e) { return null; }
  }
  function setStoredLang(lang) {
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) { /* ignore */ }
  }
  function otherLang(lang) { return lang === "es" ? "en" : "es"; }

  function applyLang(lang) {
    var dict = (window.QC_TRANSLATIONS && window.QC_TRANSLATIONS[lang]) || {};

    document.documentElement.setAttribute("lang", lang);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (Object.prototype.hasOwnProperty.call(dict, key)) el.textContent = dict[key];
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-html");
      if (Object.prototype.hasOwnProperty.call(dict, key)) el.innerHTML = dict[key];
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-alt");
      if (Object.prototype.hasOwnProperty.call(dict, key)) el.setAttribute("alt", dict[key]);
    });
    document.querySelectorAll("[data-i18n-content]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-content");
      if (Object.prototype.hasOwnProperty.call(dict, key)) el.setAttribute("content", dict[key]);
    });
    document.querySelectorAll("[data-i18n-aria-label]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-aria-label");
      if (Object.prototype.hasOwnProperty.call(dict, key)) el.setAttribute("aria-label", dict[key]);
    });

    var FULL_LANG_NAME = { en: "English", es: "Español" };
    document.querySelectorAll("[data-lang-toggle]").forEach(function (btn) {
      var target = otherLang(lang);
      var labelEl = btn.querySelector("[data-lang-label]");
      if (labelEl) labelEl.textContent = target.toUpperCase();
      var fullLabelEl = btn.querySelector("[data-lang-label-full]");
      if (fullLabelEl) fullLabelEl.textContent = FULL_LANG_NAME[target];
      btn.setAttribute(
        "aria-label",
        lang === "en" ? "Switch to Spanish" : "Cambiar a inglés"
      );
    });

    updateHoursStatus(lang);
  }

  var langToggles = document.querySelectorAll("[data-lang-toggle]");
  if (langToggles.length) {
    langToggles.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var current = document.documentElement.getAttribute("lang") || "en";
        var next = otherLang(current);
        setStoredLang(next);
        applyLang(next);
      });
    });
    applyLang(getStoredLang() || "en");
  } else {
    // No toggle on this page (shouldn't happen, but keep hours text correct)
    updateHoursStatus(document.documentElement.getAttribute("lang") || "en");
  }
})();
