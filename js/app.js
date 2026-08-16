/* Sweden 2026 trip site — app logic */

const PASSWORD = "Anguera";
const AUTH_KEY = "sweden2026_authed";

// ---------------- PASSWORD GATE ----------------
function initGate() {
  const gate = document.getElementById("gate");
  const site = document.getElementById("site");
  const form = document.getElementById("gate-form");
  const input = document.getElementById("gate-input");
  const error = document.getElementById("gate-error");
  const lockBtn = document.getElementById("lock-btn");

  function unlock() {
    gate.style.display = "none";
    site.hidden = false;
  }

  if (localStorage.getItem(AUTH_KEY) === "1") {
    unlock();
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (input.value === PASSWORD) {
      localStorage.setItem(AUTH_KEY, "1");
      error.classList.remove("show");
      unlock();
    } else {
      error.classList.add("show");
      input.value = "";
      input.focus();
    }
  });

  lockBtn.addEventListener("click", () => {
    localStorage.removeItem(AUTH_KEY);
    location.reload();
  });
}

// ---------------- WIKIPEDIA THUMBNAIL HELPER ----------------
const wikiCache = {};
async function getWikiThumb(title) {
  if (!title) return null;
  if (wikiCache[title] !== undefined) return wikiCache[title];
  try {
    const res = await fetch(
      "https://en.wikipedia.org/api/rest_v1/page/summary/" + encodeURIComponent(title),
      { headers: { Accept: "application/json" } }
    );
    if (!res.ok) throw new Error("not found");
    const data = await res.json();
    const url = (data.thumbnail && data.thumbnail.source) || (data.originalimage && data.originalimage.source) || null;
    wikiCache[title] = url;
    return url;
  } catch (e) {
    wikiCache[title] = null;
    return null;
  }
}

// ---------------- RENDER HELPERS ----------------
function el(tag, opts = {}, children = []) {
  const e = document.createElement(tag);
  if (opts.className) e.className = opts.className;
  if (opts.html !== undefined) e.innerHTML = opts.html;
  if (opts.text !== undefined) e.textContent = opts.text;
  if (opts.attrs) for (const k in opts.attrs) e.setAttribute(k, opts.attrs[k]);
  children.forEach((c) => c && e.appendChild(c));
  return e;
}

function fmtDate(iso, weekday) {
  return weekday + " · " + new Date(iso + "T12:00:00").toLocaleDateString("en-GB", {
    day: "numeric", month: "long"
  });
}

// ---------------- NAV ----------------
function buildNav() {
  const nav = document.getElementById("day-nav");
  nav.innerHTML = "";

  const overviewPill = el("button", { className: "day-pill", attrs: { "data-day": "overview" } });
  overviewPill.innerHTML = `Overview`;
  nav.appendChild(overviewPill);

  TRIP.days.forEach((d) => {
    const pill = el("button", { className: "day-pill", attrs: { "data-day": d.n } });
    const dt = new Date(d.date + "T12:00:00");
    const short = dt.toLocaleDateString("en-GB", { day: "numeric", month: "short" });
    pill.innerHTML = `Day ${d.n}<span class="pill-date">${short}</span>`;
    nav.appendChild(pill);
  });

  nav.addEventListener("click", (e) => {
    const btn = e.target.closest(".day-pill");
    if (!btn) return;
    const day = btn.getAttribute("data-day");
    location.hash = "#" + day;
  });
}

function setActivePill(dayKey) {
  document.querySelectorAll(".day-pill").forEach((p) => {
    p.classList.toggle("active", p.getAttribute("data-day") === String(dayKey));
  });
  const active = document.querySelector(".day-pill.active");
  if (active) active.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
}

// ---------------- OVERVIEW PAGE ----------------
function renderOverview() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  content.appendChild(el("div", { className: "day-header" }, [
    el("div", { className: "day-eyebrow", text: "Trip overview" }),
    el("h2", { text: TRIP.title }),
    el("p", { className: "tagline", html: `${TRIP.subtitle}<br>${TRIP.dates}<br>${TRIP.party}` })
  ]));

  content.appendChild(el("div", { className: "eclipse-banner" }, [
    el("h3", { text: TRIP.eclipseAlert.title }),
    el("p", { html: TRIP.eclipseAlert.html })
  ]));

  const factsCard = el("div", { className: "card" }, [
    el("h3", { text: "📌 Quick facts" }),
    el("ul", { className: "fact-list", html: TRIP.quickFacts.map((f) => `<li>${f}</li>`).join("") })
  ]);
  content.appendChild(factsCard);

  // Bookings table
  const bookingsRows = TRIP.bookings.map((b) => `
    <tr>
      <td>${b.what}</td>
      <td>${b.when}</td>
      <td>${b.price}</td>
      <td><span class="status-chip status-${b.status}">${b.statusText}</span></td>
    </tr>`).join("");
  content.appendChild(el("div", { className: "card" }, [
    el("h3", { text: "✅ Bookings — what to reserve" }),
    el("div", { className: "table-scroll", html: `
      <table class="data-table">
        <thead><tr><th>Booking</th><th>Date &amp; time</th><th>Price</th><th>Status</th></tr></thead>
        <tbody>${bookingsRows}</tbody>
      </table>` })
  ]));

  // Trip summary
  const summaryRows = TRIP.tripSummary.map((s) => `
    <tr><td><b>${s.range}</b></td><td>${s.focus}</td><td>${s.highlights}</td></tr>
  `).join("");
  content.appendChild(el("div", { className: "card" }, [
    el("h3", { text: "🗓️ Trip summary" }),
    el("div", { className: "table-scroll", html: `
      <table class="data-table">
        <thead><tr><th>Dates</th><th>Focus</th><th>Highlights</th></tr></thead>
        <tbody>${summaryRows}</tbody>
      </table>` })
  ]));

  // Museum league table (accordion)
  const museumHtml = TRIP.museumTiers.map((tier) => `
    <div class="tier-block">
      <h5>${tier.tier}</h5>
      ${tier.items.map((it) => `
        <div class="tier-item">
          <b>${it.name}</b> — ${it.why}
          <div class="tier-meta">${it.time} · ${it.cost}</div>
        </div>`).join("")}
    </div>
  `).join("");
  content.appendChild(el("details", { className: "accordion", html: `
    <summary>🏛️ The museum league table</summary>
    <div class="accordion-body">${museumHtml}</div>
  ` }));

  // Practical notes (accordion)
  const notesRows = TRIP.practicalNotes.map((n) => `<tr><td><b>${n.topic}</b></td><td>${n.note}</td></tr>`).join("");
  content.appendChild(el("details", { className: "accordion", html: `
    <summary>🧭 Practical notes</summary>
    <div class="accordion-body table-scroll">
      <table class="data-table"><tbody>${notesRows}</tbody></table>
    </div>
  ` }));

  document.getElementById("trip-title").textContent = TRIP.title;
  document.getElementById("trip-dates").textContent = TRIP.dates;
}

// ---------------- DAY PAGE ----------------
function renderDay(day) {
  const content = document.getElementById("content");
  content.innerHTML = "";

  content.appendChild(el("div", { className: "day-header" }, [
    el("div", { className: "day-eyebrow", text: `Day ${day.n} · ${fmtDate(day.date, day.weekday)}` }),
    el("h2", { text: day.title }),
    el("p", { className: "tagline", text: day.tagline })
  ]));

  if (day.banner === "eclipse") {
    content.appendChild(el("div", { className: "eclipse-banner" }, [
      el("h3", { text: TRIP.eclipseAlert.title }),
      el("p", { html: TRIP.eclipseAlert.html })
    ]));
  }

  // Schedule
  if (day.schedule && day.schedule.length) {
    const rows = day.schedule.map((s) => el("div", { className: "schedule-row" }, [
      el("div", { className: "schedule-time", text: s.time }),
      el("div", { html: s.html })
    ]));
    content.appendChild(el("div", { className: "card" }, [
      el("h3", { text: "🕒 Today's plan" }),
      el("div", { className: "schedule" }, rows)
    ]));
  }

  // Map
  if (day.places && day.places.length) {
    const mapCard = el("div", { className: "card" }, [
      el("h3", { text: "🗺️ Map" }),
      el("div", { attrs: { id: "map" } })
    ]);
    content.appendChild(mapCard);
  }

  // Places / links / pictures
  if (day.places && day.places.length) {
    const grid = el("div", { className: "places-grid" });
    day.places.forEach((p) => {
      const img = el("div", { className: "place-img-placeholder", text: "📍" });
      const linksChildren = [];
      if (p.url) linksChildren.push(el("a", { text: "Official site ↗", attrs: { href: p.url, target: "_blank", rel: "noopener" } }));
      linksChildren.push(el("a", {
        text: "Map ↗",
        attrs: { href: `https://www.google.com/maps/search/?api=1&query=${p.lat},${p.lng}`, target: "_blank", rel: "noopener" }
      }));
      const card = el("div", { className: "place-card" }, [
        img,
        el("div", { className: "place-body" }, [
          el("div", { className: "place-name", text: p.name }),
          p.note ? el("div", { className: "place-note", text: p.note }) : null,
          el("div", { className: "place-links" }, linksChildren)
        ])
      ]);
      grid.appendChild(card);

      if (p.wiki) {
        getWikiThumb(p.wiki).then((url) => {
          if (url) {
            const realImg = el("img", { className: "place-img", attrs: { src: url, alt: p.name, loading: "lazy" } });
            img.replaceWith(realImg);
          }
        });
      }
    });
    content.appendChild(el("div", { className: "card" }, [
      el("h3", { text: "📍 Places today" }),
      grid
    ]));
  }

  // Info sections
  if (day.info && day.info.length) {
    const blocks = day.info.map((sec) => el("div", { className: "info-block" }, [
      el("h4", { text: sec.heading }),
      el("p", { html: sec.html })
    ]));
    content.appendChild(el("div", { className: "card" }, [
      el("h3", { text: "📖 About today" }),
      ...blocks
    ]));
  }

  // Photos
  content.appendChild(renderPhotos(day));

  // Init map after DOM insert
  if (day.places && day.places.length) {
    initMap(day.places);
  }
}

function renderPhotos(day) {
  const photos = day.photos || { album: "", images: [] };
  const wrap = el("div", { className: "card" }, [
    el("h3", { text: "📷 Photos from this day" })
  ]);

  if (photos.album) {
    wrap.appendChild(el("a", {
      className: "album-link",
      text: "Open full album in Google Photos ↗",
      attrs: { href: photos.album, target: "_blank", rel: "noopener" }
    }));
  }

  if (photos.images && photos.images.length) {
    const grid = el("div", { className: "photo-grid" });
    photos.images.forEach((src, i) => {
      const thumb = el("img", {
        className: "photo-thumb",
        attrs: { src, alt: `Photo ${i + 1} from Day ${day.n}`, loading: "lazy" }
      });
      thumb.addEventListener("click", () => openLightbox(photos.images, i));
      grid.appendChild(thumb);
    });
    wrap.appendChild(grid);
  } else {
    wrap.appendChild(el("div", {
      className: "photo-empty",
      html: `No photos added for this day yet.<br>See <code>js/data.js</code> → this day's <code>photos.images</code> array to add hotlinked photo URLs, or set <code>photos.album</code> to a Google Photos shared-album link.`
    }));
  }

  return wrap;
}

// ---------------- MAP ----------------
let mapInstance = null;
function initMap(places) {
  const mapEl = document.getElementById("map");
  if (!mapEl) return;

  if (typeof L === "undefined") {
    mapEl.outerHTML = '<div class="photo-empty">Map unavailable — could not load the map library (check your internet connection).</div>';
    return;
  }

  try {
    if (mapInstance) {
      mapInstance.remove();
      mapInstance = null;
    }

    mapInstance = L.map(mapEl, { scrollWheelZoom: false });
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
      maxZoom: 19
    }).addTo(mapInstance);

    const markers = [];
    places.forEach((p) => {
      const marker = L.marker([p.lat, p.lng]).addTo(mapInstance);
      marker.bindPopup(`<b>${p.name}</b>${p.note ? "<br>" + p.note : ""}`);
      markers.push(marker);
    });

    if (markers.length === 1) {
      mapInstance.setView([places[0].lat, places[0].lng], 14);
    } else {
      const group = L.featureGroup(markers);
      mapInstance.fitBounds(group.getBounds().pad(0.25));
    }
  } catch (e) {
    mapEl.outerHTML = '<div class="photo-empty">Map could not be loaded.</div>';
  }
}

// ---------------- LIGHTBOX ----------------
let lightboxImages = [];
let lightboxIndex = 0;

function buildLightbox() {
  const lb = el("div", { attrs: { id: "lightbox" } });
  lb.innerHTML = `
    <button class="lightbox-close" aria-label="Close">✕</button>
    <button class="lightbox-prev" aria-label="Previous">‹</button>
    <img id="lightbox-img" src="" alt="">
    <button class="lightbox-next" aria-label="Next">›</button>
  `;
  document.body.appendChild(lb);

  lb.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
  lb.querySelector(".lightbox-prev").addEventListener("click", () => stepLightbox(-1));
  lb.querySelector(".lightbox-next").addEventListener("click", () => stepLightbox(1));
  lb.addEventListener("click", (e) => { if (e.target === lb) closeLightbox(); });
  document.addEventListener("keydown", (e) => {
    if (!lb.classList.contains("open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") stepLightbox(-1);
    if (e.key === "ArrowRight") stepLightbox(1);
  });
}

function openLightbox(images, index) {
  lightboxImages = images;
  lightboxIndex = index;
  document.getElementById("lightbox-img").src = images[index];
  document.getElementById("lightbox").classList.add("open");
}
function closeLightbox() {
  document.getElementById("lightbox").classList.remove("open");
}
function stepLightbox(dir) {
  lightboxIndex = (lightboxIndex + dir + lightboxImages.length) % lightboxImages.length;
  document.getElementById("lightbox-img").src = lightboxImages[lightboxIndex];
}

// ---------------- ROUTER ----------------
function route() {
  const hash = location.hash.replace("#", "") || "overview";
  setActivePill(hash);
  if (hash === "overview") {
    renderOverview();
  } else {
    const day = TRIP.days.find((d) => String(d.n) === hash);
    if (day) renderDay(day);
    else renderOverview();
  }
  window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
}

// ---------------- INIT ----------------
document.addEventListener("DOMContentLoaded", () => {
  initGate();
  buildNav();
  buildLightbox();
  document.getElementById("trip-title").textContent = TRIP.title;
  document.getElementById("trip-dates").textContent = TRIP.dates;
  window.addEventListener("hashchange", route);
  route();
});
