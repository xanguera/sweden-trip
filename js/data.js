/* Sweden 2026 — Stockholm family trip data
   Edit this file to fix facts, add links, or (see PHOTOS section per day)
   add photo galleries once you have pictures from that day. */

const TRIP = {
  title: "Summer 2026 — Stockholm",
  subtitle: "Gamla Stan • Djurgården • The Archipelago • Sigtuna",
  dates: "August 11 – August 25, 2026 · 15 days / 14 nights",
  party: "2 adults + 2 kids (ages 9 & 12) · Landing 18:00 on the 11th, flying out 18:00 on the 25th",
  base: {
    name: "Base: Götalandsvägen 207 B, Älvsjö",
    lat: 59.2793, lng: 18.0038
  },

  eclipseAlert: {
    title: "🌓 There is a solar eclipse on Day 2",
    html: `On Wednesday 12 August, Stockholm sees a deep partial solar eclipse: <strong>80.9% of the sun covered at 19:56</strong>,
      with the sun only <strong>5° above the west-north-west horizon</strong>. That low angle is the whole problem — from the
      Old Town's lanes you would see nothing at all. The evening of Day 2 is built around <strong>Skinnarviksberget</strong>,
      the highest natural point in central Stockholm. Eclipse glasses (ISO 12312-2) are mandatory for the entire event —
      there is no totality here, so there is no safe moment to look unaided.`
  },

  bookings: [
    { what: "Eclipse glasses ×4", when: "Buy before flying", price: "a few € each", status: "done", statusText: "Done" },
    { what: "Aifur (Viking restaurant)", when: "Fri 21 Aug, 20:15", price: "à la carte", status: "booked", statusText: "Booked" },
    { what: "Glenn Miller Café (jazz)", when: "Tue 18 Aug, 19:30", price: "à la carte", status: "booked", statusText: "Booked" },
    { what: "Eclipse-night dinner, Södermalm", when: "Wed 12 Aug, after 21:00", price: "—", status: "pending", statusText: "Friend is booking — aim 21:15–21:30 near Mariatorget/Hornstull" },
    { what: "Skansen — children's tickets", when: "Sun 16 Aug (moved from Thu 13)", price: "0–15 free, adult ~245", status: "done", statusText: "Done — visited Day 6 instead of Day 3" },
    { what: "Vaxholm boat", when: "Fri 14 Aug, 12:00 from Strömkajen", price: "Free — Waxholmsbolaget with SL pass", status: "done", statusText: "Done — went and came back entirely on the SL pass, skipped the paid Strömma steamer" },
    { what: "Södermalm dinner — race night", when: "Sat 15 Aug, ~16:30", price: "—", status: "warning", statusText: "Book ahead or eat off-island" },
    { what: "Drottningholm boat", when: "Wed 19 Aug, 10:00 from Klara Mälarstrand", price: "220 SEK adult return", status: "pending", statusText: "Pre-book" },
    { what: "Cosmonova film slot", when: "Tue 18 Aug", price: "260 SEK adult combo", status: "warning", statusText: "Book on arrival — timed showings sell out" },
    { what: "Farewell dinner — Pelikan", when: "Mon 24 Aug, ~18:30", price: "à la carte", status: "pending", statusText: "Book. Blekingegatan 40, Södermalm" },
    { what: "Vasamuseet", when: "Thu 13 Aug, 08:30", price: "240 SEK adult; under-19 free", status: "ok", statusText: "No booking needed — just be there at opening" },
    { what: "Gröna Lund", when: "Mon 17 Aug, from ~14:00", price: "see price guide", status: "ok", statusText: "Open daily to 20 Aug — buy online the week before" },
    { what: "Stockholm City Hall tour", when: "Mon 24 Aug", price: "150 SEK adult, 60 SEK ages 7–18", status: "pending", statusText: "Tickets released one week ahead — reminder for 17 Aug" },
    { what: "SL 30-day tickets ×4", when: "Tue 11 Aug, on arrival", price: "~530 adult / ~355 reduced", status: "ok", statusText: "Buy at Arlanda C" }
  ],

  quickFacts: [
    "SL 30-day travel tickets are half price from 1 July–31 Dec 2026 — about 530 SEK instead of 1,060. Cheaper than a single 7-day ticket. Buy 30-day for all four of you.",
    "Your SL ticket includes the archipelago boats to Vaxholm — all SL tickets are valid on Waxholmsbolaget's vessels between Strömkajen and Vaxholm, year-round.",
    "Älvsjö is on the direct commuter-train (pendeltåg) line to/from Arlanda — no changes, no dragging suitcases across Central Station.",
    "Sweden is close to cashless. Cards only in most places — the Vasa Museum is card-only.",
    "Swedes eat early: dinner from 18:00, kitchens often closed by 21:00.",
    "Under-19s are free or nearly free almost everywhere: Vasamuseet, Vrak, Skansen, Naturhistoriska, Livrustkammaren, Nobel Prize Museum, Fotografiska, Moderna, Medelhavsmuseet, Bergianska."
  ],

  museumTiers: [
    {
      tier: "🥇 Must see",
      items: [
        { name: "Vasamuseet", why: "A 98%-original 1628 warship, 69 m long, standing in a dark hall. Nothing else like it exists.", time: "3–3.5 h", cost: "480 SEK" },
        { name: "Skansen", why: "150 relocated buildings, a Nordic zoo and a hillside. Outdoors, so it doesn't feel like museum fatigue.", time: "4–5 h", cost: "~490 SEK" },
        { name: "Naturhistoriska + Cosmonova", why: "Whales, dinosaurs, polar. Exhibitions free under 19; the dome cinema is extraordinary.", time: "4 h + film", cost: "720 SEK" },
        { name: "Vrak — Museum of Wrecks", why: "Swedish Museum of the Year 2026. Thousands of wrecks still on the Baltic seabed. Free under-19.", time: "1.5–2 h", cost: "370 SEK" }
      ]
    },
    {
      tier: "🥈 Worth it",
      items: [
        { name: "Royal Palace", why: "600 rooms, the Treasury, the Tre Kronor Museum. The guided tour makes it.", time: "2.5–3 h", cost: "720 SEK" },
        { name: "Drottningholm + Court Theatre", why: "The 1766 theatre with working original stage machinery — the most surprising thing on this trip.", time: "full day", cost: "750 SEK" },
        { name: "Nobel Prize Museum", why: "Small, sharp, on Stortorget. Guided tour included. Kids free.", time: "1.5 h", cost: "320 SEK" },
        { name: "Stockholm City Hall", why: "Blue Hall (Nobel banquet) and Golden Hall, plus a 106 m tower, 365 steps.", time: "45 min + tower", cost: "420 SEK + tower" },
        { name: "Livrustkammaren", why: "Streiff the stuffed warhorse, and Gustav II Adolf's bloodstained coat. No longer free.", time: "1.5 h", cost: "360 SEK" },
        { name: "Fotografiska", why: "Depends what's hanging. Open until 23:00. Free under 16.", time: "2 h", cost: "450 SEK" }
      ]
    },
    {
      tier: "🥉 Nice to see",
      items: [
        { name: "Moderna Museet", why: "Free under-19. Free for everyone Fridays 18:00–20:00 (resumes 21 Aug). Pick five works.", time: "2 h", cost: "340 SEK, or 0 on Fri eve" },
        { name: "Medelhavsmuseet", why: "Mummies with CT scans, best Cypriot collection outside Cyprus. Closed Mondays.", time: "1.5 h", cost: "320 SEK" },
        { name: "ABBA The Museum", why: "Pure silly fun and genuinely interactive.", time: "2 h", cost: "549–749 SEK (family)" },
        { name: "Tekniska Museet", why: "Hands-on, open to 21:00 daily. The best rainy-day card in the city.", time: "3 h", cost: "680 SEK" },
        { name: "Nordiska Museet", why: "Magnificent building, broad sweep of Swedish life. Overlaps with Skansen.", time: "2 h", cost: "490 SEK" },
        { name: "Sigtuna Museum", why: "Tiny — do it because you're already there. Free under 20.", time: "1 h", cost: "~200 SEK" }
      ]
    }
  ],

  practicalNotes: [
    { topic: "TRANSPORT", note: "Buy 30-day SL tickets, not 7-day — half price until 31 Dec 2026. Covers metro, bus, tram, commuter train, the Djurgården ferry and the Waxholmsbolaget boats to Vaxholm." },
    { topic: "WEATHER", note: "Mid-to-late August: roughly 18–22°C by day, 12–14°C in the evening. Pack layers and a light rain shell." },
    { topic: "DAYLIGHT", note: "Sunset drifts from about 20:50 on 11 Aug to about 20:10 on 25 Aug. Long evenings — most of the best free things are at their best after 19:00." },
    { topic: "MONDAYS", note: "Trip contains two (17 & 24 Aug). Naturhistoriska, Medelhavsmuseet and Moderna Museet close Mondays — both days are planned around it." },
    { topic: "CARDS, NOT CASH", note: "Sweden is close to cashless. Many cafés, museums and buses don't accept cash at all. The Vasa Museum is card-only." },
    { topic: "EATING", note: "Lunch 11:30–13:30, dinner from 18:00, kitchens often closed by 21:00. The dagens lunch is the best-value meal in the country." },
    { topic: "FIKA", note: "A genuine institution — coffee and something sweet, usually a kanelbulle. Build one into every afternoon." },
    { topic: "PACING", note: "16 and 23 August are meant to stay near-empty. Every museum day is timed at roughly 1.75× a normal visitor's pace." }
  ],

  tripSummary: [
    { range: "Aug 11–13", focus: "Arrival, the historic core & the eclipse", highlights: "Gamla Stan, Royal Palace + guided tour, eclipse from Skinnarviksberget, a full day at Vasamuseet" },
    { range: "Aug 14–16", focus: "Water, the guard, and the big night", highlights: "Vaxholm + the Kastell by public boat, Changing of the Guard, a Catalan folk festival, Midnattsloppet, Skansen" },
    { range: "Aug 17–19", focus: "Wrecks, rides, science & royalty", highlights: "Vrak, Gröna Lund, Naturhistoriska + Cosmonova, Bergianska, Glenn Miller, Drottningholm" },
    { range: "Aug 20–22", focus: "Vikings, art & parks", highlights: "Sigtuna rune stones, Skeppsholmen + Moderna, Aifur, Hagaparken, Ulriksdal" },
    { range: "Aug 23–25", focus: "Winding down", highlights: "Fotografiska, Nobel + City Hall, farewell dinner, departure" }
  ],

  days: [
    // ---------------- DAY 1 ----------------
    {
      n: 1, date: "2026-08-11", weekday: "Tuesday",
      title: "Arrival",
      tagline: "Landing 18:00 · Light until ~20:50 · Nothing scheduled",
      schedule: [
        { time: "On landing", html: "<strong>Arlanda C → Älvsjö, direct.</strong> Buy SL cards and two Arlanda passages at the machines in SkyCity, then take the commuter train south. ~50 minutes, no changes." },
        { time: "~19:30", html: "<strong>Check in and drop everything.</strong> This is a landing day — nothing ambitious." },
        { time: "~19:45", html: "<strong>Dinner: Texas Longhorn</strong>, Götalandsvägen 238 — a 2-minute walk. Steakhouse, kids' menu, open Tue 17:00–21:00." },
        { time: "alternative", html: "<strong>Coop Älvsjö</strong>, Älvsjö Torg 4, open to 22:00 — or <strong>ICA Nära Älvsjö</strong>, Svartlösavägen 181, also to 22:00." },
        { time: "Tonight", html: "<strong>Admin.</strong> Check the eclipse glasses are in the luggage. Confirm tomorrow's meeting time with your friend." }
      ],
      info: [
        { heading: "Stockholm — First Impressions", html: "Stockholm is built across <strong>14 islands</strong> where Lake Mälaren's fresh water meets the brackish Baltic — the reason it's stitched together by more than fifty bridges. First recorded in <strong>1252</strong> in a letter from Birger Jarl. East of the city the land dissolves into the <strong>archipelago</strong>: roughly 30,000 islands and skerries. Nearly everything in this plan is within 30 minutes of everything else, and Älvsjö is 12 minutes from Stockholm City by commuter train." },
        { heading: "💡 Did you know?", html: "Tonight is the season finale of <em>Allsång på Skansen</em> — Sweden's televised open-air singalong, live from Skansen. It collides with your travel day, but airs live on SVT if you want it on in the background while you unpack." },
        { heading: "🧒 Kids", html: "A game for the fortnight: Stockholm is 14 islands, and you'll set foot on at least seven — Gamla Stan, Djurgården, Skeppsholmen, Södermalm, Kungsholmen, Riddarholmen and Helgeandsholmen. Keep a tally on the fridge." }
      ],
      places: [
        { name: "Älvsjö (base)", wiki: "Älvsjö", url: "", lat: 59.2793, lng: 18.0038, note: "Home base for the trip" },
        { name: "Arlanda Airport", wiki: "Stockholm Arlanda Airport", url: "https://www.swedavia.com/arlanda/", lat: 59.6519, lng: 17.9186, note: "Landing 18:00" }
      ],
      photos: { album: "", images: [] }
    },
    // ---------------- DAY 2 ----------------
    {
      n: 2, date: "2026-08-12", weekday: "Wednesday",
      title: "Gamla Stan, the Royal Palace & the ECLIPSE",
      tagline: "Old Town by day · Friend at 17:30 · Eclipse from Skinnarviksberget",
      banner: "eclipse",
      schedule: [
        { time: "09:00", html: "Breakfast, then commuter train to Stockholm City, metro to Gamla Stan." },
        { time: "10:00–12:45", html: "<strong>Wander Gamla Stan, unhurried.</strong> Start at Stortorget, then Västerlånggatan, into Storkyrkan, and find Mårten Trotzigs Gränd. Skipped the Changing of the Guard this time — it happened instead on Day 5, a lucky accident — so the Old Town got the long, no-rush version instead." },
        { time: "13:00–14:15", html: "<strong>Lunch in the Old Town.</strong> Stora Nygatan and Österlånggatan rather than Västerlånggatan. Order the dagens lunch." },
        { time: "14:30–15:15", html: "<strong>Guided tour of the Royal Palace</strong> — included for a 30 SEK supplement, free for kids." },
        { time: "15:15–16:45", html: "The <strong>Treasury</strong> (crown jewels) and the <strong>Tre Kronor Museum</strong>, both included in your ticket." },
        { time: "17:15", html: "<strong>Meet your friend near Sergels Torg.</strong> Metro from Gamla Stan to T-Centralen, one stop." },
        { time: "18:05", html: "<strong>Head for the rock.</strong> T-Centralen → Mariatorget (red line, 6 min), then ~10 min on foot through Skinnarviksparken." },
        { time: "18:45", html: "<strong>Be on Skinnarviksberget.</strong> Claim a patch of rock and sit down — bring something to sit on." },
        { time: "19:03", html: "<strong>First contact.</strong> Glasses on from this moment." },
        { time: "19:56", html: "<strong>🌓 Maximum — 80.9% covered.</strong> Sun ~5° above the west-north-west horizon, a thin crescent low over Riddarfjärden." },
        { time: "20:46", html: "Eclipse ends — essentially as the sun reaches the water." },
        { time: "~20:47", html: "<strong>Sunset.</strong> Walk down along Monteliusvägen in the afterglow." },
        { time: "~21:15", html: "<strong>Dinner</strong> around Mariatorget or Hornstull. Swedish kitchens close early — anything after 21:30 needs checking." }
      ],
      info: [
        { heading: "⚠️ Eclipse glasses are mandatory for the entire event", html: "At 80.9% coverage there is no totality, no corona, no safe moment to look unaided. Use ISO 12312-2 certified glasses, check for scratches or pinholes. <strong>Never look through a camera, phone, binoculars or telescope while wearing them</strong> — the optics concentrate light and will burn through the filter." },
        { heading: "Why Skinnarviksberget", html: "At <strong>53 metres</strong> it's the highest natural point in central Stockholm, with an unbroken sweep west and north-west across Riddarfjärden. A 5°-altitude sun is behind almost everything else — buildings, trees, a slight rise in the ground. Backups in order: Monteliusvägen, Västerbron, Långholmen. Expect company — get up there by 18:45." },
        { heading: "Gamla Stan & Stortorget", html: "The whole original medieval city, on its own island, street plan unchanged since the 1600s. Stortorget was the site of the <strong>Stockholm Bloodbath</strong> (1520) — the event that triggered Gustav Vasa's rebellion and the founding of the independent Swedish state." },
        { heading: "The Royal Palace", html: "Over <strong>600 rooms</strong>, one of the largest palaces in Europe still in use by a head of state. Built on the site of Tre Kronor, the medieval castle that burned in 1697; took 57 years to finish, opening in 1754. The royal family has lived at Drottningholm since 1981." },
        { heading: "🧒 Kids (daytime)", html: "Find Mårten Trotzigs Gränd — 90 cm across at its tightest. Inside Storkyrkan, hunt for the wooden St George and the Dragon (1489) — the dragon's spines are real elk antlers." },
        { heading: "🧒 Kids (eclipse)", html: "Manage expectations — it will not go dark. Watch for the light going flat and metallic and shadows sharpening. Give each kid a job: one tracks time to maximum, the other checks the sun's shape every five minutes. Good question: the moon is 400× smaller than the sun and 400× closer — why us?" }
      ],
      places: [
        { name: "Stortorget / Gamla Stan", wiki: "Gamla stan", url: "https://www.visitstockholm.com/see-do/attractions/gamla-stan/", lat: 59.3251, lng: 18.0711, note: "Old Town wander" },
        { name: "Royal Palace", wiki: "Stockholm Palace", url: "https://www.kungligaslotten.se/english/royal-palaces-and-sites/the-royal-palace.html", lat: 59.3269, lng: 18.0715, note: "Guided tour 14:30 (Changing of the Guard ended up happening on Day 5 instead)" },
        { name: "Skinnarviksberget", wiki: "Skinnarviksberget", url: "", lat: 59.3168, lng: 18.0308, note: "🌓 Eclipse viewing 18:45–20:47" },
        { name: "Monteliusvägen", wiki: "Monteliusvägen", url: "", lat: 59.3186, lng: 18.0429, note: "Cliff-top walk down after the eclipse" }
      ],
      photos: { album: "", images: [] }
    },
    // ---------------- DAY 3 ----------------
    {
      n: 3, date: "2026-08-13", weekday: "Thursday",
      title: "Vasamuseet — the Whole Day",
      tagline: "The ship won, hands down · Skansen got pushed to Day 6 instead",
      schedule: [
        { time: "07:15", html: "Early breakfast — the one day worth an alarm." },
        { time: "08:30–12:00", html: "<strong>Vasamuseet, at opening.</strong> Galärvarvsvägen 14. Adults 240 SEK, under-19s free. Being there when doors open is the whole trick." },
        { time: "12:15–13:15", html: "<strong>Lunch.</strong> The museum's own restaurant." },
        { time: "13:15–17:00", html: "<strong>Back in for a second, slower pass.</strong> Skansen ended up not happening today — the ship held everyone's attention for the whole day instead. Second loop through the exhibits, the film, the model workshop and the gift shop, at no rush at all." },
        { time: "17:15", html: "Tram 7 back to the centre, or the Djurgården ferry to Slussen (free with your pass, prettier)." },
        { time: "Evening", html: "Something easy near the flat." }
      ],
      info: [
        { heading: "Vasamuseet — What to Know", html: "On <strong>10 August 1628</strong> the warship <em>Vasa</em> sailed on her maiden voyage, heeled over in a gust, and sank roughly 1,300 metres into the journey. She lay in the mud for <strong>333 years</strong> and was raised on 24 April 1961 — roughly <strong>98% original</strong>, 69 metres long, the most visited museum in Scandinavia." },
        { heading: "💡 Did you know?", html: "Vasa survived only because the Baltic is brackish — too fresh for the shipworm that devours submerged timber elsewhere. After salvage she was sprayed with polyethylene glycol for 17 years and is still being conserved today." },
        { heading: "🧒 Kids", html: "Find the carved lions, warriors and sea creatures on the stern, and the recovered objects — shoes, a backgammon set, a sewing kit. Ask: why did nobody stop the king?" }
      ],
      places: [
        { name: "Vasamuseet", wiki: "Vasa Museum", url: "https://www.vasamuseet.se/en", lat: 59.3280, lng: 18.0914, note: "Open 08:30–18:00 · 240 SEK adult, under-19 free · spent the whole day here" }
      ],
      photos: { album: "", images: [] }
    },
    // ---------------- DAY 4 ----------------
    {
      n: 4, date: "2026-08-14", weekday: "Friday",
      title: "Vaxholm, the Kastell & the Archipelago",
      tagline: "Built around the boats · Went and came back entirely on the SL pass · The most weather-sensitive day in the plan",
      schedule: [
        { time: "10:30", html: "Slow morning — midday boat, no rush." },
        { time: "11:30", html: "<strong>To Strömkajen.</strong> Commuter train to Stockholm City, then a short walk or one metro stop. Be at the quay 20 minutes early." },
        { time: "12:00", html: "<strong>⛴️ Waxholmsbolaget boat to Vaxholm</strong> — free with the SL 30-day pass, no extra ticket needed. Went this way both out and back, and it was lovely." },
        { time: "~13:00", html: "<strong>Arrive in Vaxholm.</strong> Wooden houses in faded pastels, a working harbour." },
        { time: "13:00–14:15", html: "<strong>Lunch by the water.</strong> Herring, prawns, or whatever was landed this morning." },
        { time: "14:30", html: "<strong>Ferry across to Vaxholms Kastell.</strong> M/S Djurgården 4 runs every 20 minutes, 10:20–17:20. Round trip 110 SEK adult / 80 SEK child." },
        { time: "14:45–16:30", html: "<strong>Vaxholm Fortress Museum.</strong> Open daily 11:00–17:00. 120 SEK adult, free 0–12 — both kids free." },
        { time: "16:45", html: "<strong>Ferry back to Vaxholm.</strong> Last one at 17:20 — do not miss it." },
        { time: "17:00–18:30", html: "<strong>Swim, wander, ice cream.</strong> Bring swimwear." },
        { time: "~18:45", html: "<strong>Waxholmsbolaget boat back to Strömkajen</strong> — the same free SL-pass boat, the whole round trip on public transport." }
      ],
      info: [
        { heading: "⛴️ What we actually did", html: "Skipped the paid Strömma steamer entirely — the SL 30-day ticket covers Waxholmsbolaget's boats between Strömkajen and Vaxholm year-round, so the whole day out and back was free with the pass already in your pocket. No booking, no extra cost, and it was a genuinely nice ride both ways." },
        { heading: "The Stockholm Archipelago", html: "Roughly <strong>30,000 islands, islets and skerries</strong> spread east towards the Baltic. Post-glacial rebound lifts this coast by several millimetres a year — new rocks genuinely emerge within a human lifetime." },
        { heading: "Vaxholm Fortress", html: "Vaxholm sits on the narrow channel any ship must pass to reach Stockholm from the sea. Gustav Vasa fortified it in <strong>1548</strong>. Tested against a Danish fleet in 1612 and the Russians in 1719. The blocky citadel today is a rebuild from the 1830s–60s." },
        { heading: "💡 Did you know?", html: "Sweden has <em>allemansrätten</em> — the 'right of public access'. Anyone may walk, swim, camp for a night, and pick berries almost anywhere, including private land, as long as they do no damage." },
        { heading: "🧒 Kids", html: "On the way out, count islands — it becomes impossible surprisingly fast. At the fortress, work out the sightlines: why here?" }
      ],
      places: [
        { name: "Strömkajen (departure)", wiki: "Strömkajen", url: "https://www.waxholmsbolaget.se/en/", lat: 59.3308, lng: 18.0763, note: "12:00 Waxholmsbolaget boat to Vaxholm, free with SL pass" },
        { name: "Vaxholm", wiki: "Vaxholm", url: "https://www.waxholmsbolaget.se/en/", lat: 59.4025, lng: 18.3522, note: "Harbour town, lunch, swimming" },
        { name: "Vaxholms Kastell", wiki: "Vaxholm Fortress", url: "https://www.vaxholmsfastning.se/en/", lat: 59.4064, lng: 18.3453, note: "Fortress museum, 14:45–16:30" }
      ],
      photos: { album: "", images: [] }
    },
    // ---------------- DAY 5 ----------------
    {
      n: 5, date: "2026-08-15", weekday: "Saturday",
      title: "Changing of the Guard, a Catalan Festival & Midnattsloppet",
      tagline: "The guard ceremony that skipped Day 2 turned up here instead · A festival you stumbled on · A late night",
      schedule: [
        { time: "09:00", html: "<strong>To Gamla Stan.</strong> Commuter train to Stockholm City, metro to Gamla Stan." },
        { time: "11:50", html: "<strong>Get into position at the Royal Palace.</strong> Ten minutes early made the difference." },
        { time: "12:15", html: "<strong>Changing of the Guard.</strong> The ceremony that didn't happen on Day 2 — free, ~40 minutes, forming up at Mynttorget." },
        { time: "13:00–16:00", html: "<strong>A Catalan folk festival, found by chance nearby.</strong> Stumbled onto castellers and sardana dancing in the streets around the Old Town — not on the original plan at all, and one of the best surprises of the trip. Watched the human towers go up, wandered the stalls, stayed for the music." },
        { time: "~16:30", html: "<strong>Early dinner</strong> before crossing to Södermalm — it fills up fast on race night." },
        { time: "18:30–18:50", html: "<strong>Lilla Midnattsloppet</strong> — the 2 km kids' race. Ages 7–13, released in waves by age. Your two's exact age group." },
        { time: "20:45", html: "<strong>Claim a spot on Ringvägen</strong>, near the start, for the mass send-off." },
        { time: "21:15", html: "<strong>🏁 Mass start — 21 km and 10 km.</strong> Tens of thousands of runners released into a summer night." },
        { time: "21:30–21:45", html: "Masquerade waves, then the 5 km." },
        { time: "~22:30", html: "Home." }
      ],
      info: [
        { heading: "Midnattsloppet — What to Know", html: "The 'Midnight Race' has run since <strong>1982</strong>, well over twenty thousand runners across its distances, looping through Södermalm after dark. The adult races are sold out — you're spectators, and it's the better family experience anyway. Bands, sound systems, spectators drinking on balconies, runners in costume." },
        { heading: "⚠️ Race-night practicalities", html: "Streets close from late afternoon. Use the metro — Zinkensdamm or Hornstull on the red line — no bus or taxi will cross the course. Bring a warm layer each. Nothing to book, nothing to pay." },
        { heading: "🧒 Kids", html: "At the castells, watch for the <em>enxaneta</em> — the child who climbs to the very top and raises a hand once the tower is complete. Then give them a costume scoreboard for the masquerade waves — a point for anything in a full-body suit, five for a group costume. Watch the 12- and 9-year-olds' waves separately." },
        { heading: "📝 Note", html: "The original plan for today's daytime had a Monteliusvägen walk and a SoFo wander instead — those got bumped for the guard ceremony and the festival. They're picked back up on Day 13, which already has a Södermalm afternoon built in." }
      ],
      places: [
        { name: "Royal Palace", wiki: "Stockholm Palace", url: "https://www.kungligaslotten.se/english/royal-palaces-and-sites/the-royal-palace.html", lat: 59.3269, lng: 18.0715, note: "Changing of the Guard 12:15" },
        { name: "Stortorget / Gamla Stan", wiki: "Gamla stan", url: "https://www.visitstockholm.com/see-do/attractions/gamla-stan/", lat: 59.3251, lng: 18.0711, note: "Catalan folk festival, castellers & sardana" },
        { name: "Ringvägen (race start)", wiki: "Midnattsloppet", url: "https://midnattsloppet.com/en/stockholm/", lat: 59.3139, lng: 18.0554, note: "21:15 mass start" }
      ],
      photos: { album: "", images: [] }
    },
    // ---------------- DAY 6 ----------------
    {
      n: 6, date: "2026-08-16", weekday: "Sunday",
      title: "Skansen",
      tagline: "No alarm · The day Skansen finally happened, since the Vasa ate all of Day 3 · Home for dinner",
      schedule: [
        { time: "Late morning", html: "Slow start. Nothing before midday." },
        { time: "~10:30", html: "<strong>To Djurgården.</strong> Tram 7 or bus, or the ferry from Slussen." },
        { time: "11:00–17:30", html: "<strong>Skansen, the whole day.</strong> Djurgårdsslätten 49–51, open 10:00–18:00. The visit that got bumped from Day 3 — no rush at all this time. Check the feeding-times board at the entrance." },
        { time: "within Skansen", html: "The Nordic zoo (bears, wolves, lynx, wolverines, moose), Lill-Skansen children's zoo, Baltic Sea Science Center, the 150 relocated buildings." },
        { time: "17:45", html: "Tram 7 back to the centre, or the Djurgården ferry to Slussen (free with your pass, prettier)." },
        { time: "Evening", html: "Home. Dinner in, nothing else planned." }
      ],
      info: [
        { heading: "Skansen — What to Know", html: "Founded in <strong>1891</strong> by Artur Hazelius, Skansen is the <strong>world's oldest open-air museum</strong>. Around 150 buildings bought from across Sweden, dismantled, and rebuilt here. Attached is a Nordic zoo: brown bears, wolves, lynx, wolverines, moose and seals." },
        { heading: "🧒 Kids", html: "Check feeding times, then go find the wolverines." },
        { heading: "📝 Note", html: "This was Day 3's afternoon originally — the Vasa Museum took the whole of that day instead, so Skansen moved here. The other Day 6 ideas (Fjäderholmarna, a Djurgården garden lunch, free swimming) are still worth keeping in your back pocket — Day 13 is flagged as a genuine spare day if one of them fits." }
      ],
      places: [
        { name: "Skansen", wiki: "Skansen", url: "https://www.skansen.se/en/", lat: 59.3252, lng: 18.1032, note: "Open 10:00–18:00 · spent the whole day here" }
      ],
      photos: { album: "", images: [] }
    },
    // ---------------- DAY 7 ----------------
    {
      n: 7, date: "2026-08-17", weekday: "Monday",
      title: "Djurgården — Vrak, ABBA & Gröna Lund",
      tagline: "Every state museum closes on Mondays — but Djurgården does not",
      schedule: [
        { time: "10:00", html: "<strong>Skeppsholmen walk</strong> (optional) — free, open and quiet on a Monday morning. Tall ships along the quays." },
        { time: "11:00–13:00", html: "<strong>Vrak — Museum of Wrecks.</strong> Djurgårdsstrand 17, five minutes from the Vasa. Swedish Museum of the Year 2026. Adults 185 SEK, 0–18 free. Open 10:00–18:00." },
        { time: "13:00–14:00", html: "<strong>Lunch on Djurgården.</strong> Blå Porten near Liljevalchs, or something quick before the park." },
        { time: "14:15–15:45", html: "<strong>Choose one:</strong> ABBA The Museum (family ticket 549–749 SEK) · or Nordiska Museet (calm, open Mondays) · or rent bikes to Djurgårdsbrunn and Blockhusudden." },
        { time: "16:00–21:30", html: "<strong>🎢 Gröna Lund.</strong> Lilla Allmänna Gränd 9. Open daily to 20 August. Going late means the queues thin and the park lights up over the water." },
        { time: "Evening", html: "Eat inside the park, or on the ferry back at Slussen." }
      ],
      info: [
        { heading: "⚠️ Gröna Lund tickets, honestly", html: "Plain entrance (~130–160 SEK) vs. 'Ticket to Ride' (unlimited rides, from ~495 SEK, priced dynamically). For four people that's roughly 2,000 SEK — the single biggest line item on the trip. Check the price for 17 August at gronalund.com, and check height limits — your 9- and 12-year-old will be on opposite sides of at least one cut-off." },
        { heading: "Gröna Lund — What to Know", html: "Opened in <strong>1883</strong>, Sweden's oldest amusement park — squeezed onto about four hectares of waterfront. Bob Marley played here in 1980 to the park's record crowd; Jimi Hendrix and ABBA played the same stage." },
        { heading: "💡 Did you know?", html: "Djurgården literally means 'the animal garden' — enclosed in the 16th century so kings could hunt deer and elk close to home. Part of the world's first National City Park, created in 1995." },
        { heading: "🧒 Kids", html: "Big-ticket rides: Jetline, Fritt Fall, Insane, the Eclipse tower. Agree the plan before you go in — who rides what, and where you meet." }
      ],
      places: [
        { name: "Vrak — Museum of Wrecks", wiki: "Vrak – Museum of Wrecks", url: "https://vrakmuseum.se/en/", lat: 59.3268, lng: 18.0932, note: "11:00–13:00 · 185 SEK adult, under-19 free" },
        { name: "ABBA The Museum", wiki: "ABBA The Museum", url: "https://abbathemuseum.com/en/", lat: 59.3241, lng: 18.0983, note: "Optional 14:15–15:45" },
        { name: "Gröna Lund", wiki: "Gröna Lund", url: "https://www.gronalund.com/en", lat: 59.3226, lng: 18.0968, note: "16:00–21:30" }
      ],
      photos: { album: "", images: [] }
    },
    // ---------------- DAY 8 ----------------
    {
      n: 8, date: "2026-08-18", weekday: "Tuesday",
      title: "Natural History, Cosmonova & Jazz",
      tagline: "Opens at 11:00 — the summer schedule ended Sunday, so no early start",
      schedule: [
        { time: "10:15", html: "<strong>Red line to Universitetet.</strong> ~15 minutes from the centre." },
        { time: "11:00", html: "<strong>Naturhistoriska Riksmuseet opens.</strong> Frescativägen 40. Book your Cosmonova slot the moment you walk in — showings are timed and sell out." },
        { time: "tickets", html: "Combination 260 SEK adult / 100 SEK child · Exhibitions free for everyone · Cosmonova only 160/100." },
        { time: "11:15–15:00", html: "<strong>Exhibitions.</strong> Whales, dinosaurs, the polar regions, the human body. At your pace, 3.5–4 hours." },
        { time: "your slot", html: "<strong>Cosmonova.</strong> Giant dome cinema, full-dome IMAX. If a space or sun-and-moon film is on, take it — six days after the eclipse it will land differently." },
        { time: "15:30–17:00", html: "<strong>🌿 Bergianska trädgården</strong>, next door. Outdoor gardens free. Glasshouses 100 SEK adult, free under-18: Edvard Anderson (Mediterranean) and Victoria House (giant water lilies)." },
        { time: "17:30", html: "Back to town on the red line." },
        { time: "19:30", html: "<strong>🎷 Glenn Miller Café.</strong> Brunnsgatan 21A. ✅ Booked. Tiny, warm jazz club with live music most nights." }
      ],
      info: [
        { heading: "Naturhistoriska Riksmuseet — What to Know", html: "Grew out of the collections of the Royal Swedish Academy of Sciences, founded in <strong>1739</strong> by a group including Carl Linnaeus. Sweden's largest museum by collection size, over ten million specimens." },
        { heading: "Stockholm's Metro — What to Know", html: "Widely described as the world's longest art gallery: more than 90 of ~100 stations decorated, many blasted straight out of bedrock. T-Centralen (blue vines on white rock), Kungsträdgården (underground grotto), Solna Centrum (a kilometre of painted red sky over green forest)." },
        { heading: "🧒 Kids", html: "Set the metro-art challenge: photograph the three best stations and rank them on the last night. At the museum, the blue whale is the standard crowd-stopper, but polar and deep-sea material tends to hold 9–12s longer." }
      ],
      places: [
        { name: "Naturhistoriska Riksmuseet", wiki: "Swedish Museum of Natural History", url: "https://www.nrm.se/en", lat: 59.3699, lng: 18.0567, note: "Opens 11:00" },
        { name: "Bergianska trädgården", wiki: "Bergius Botanic Garden", url: "https://www.bergianska.se/en/", lat: 59.3707, lng: 18.0498, note: "15:30–17:00" },
        { name: "Glenn Miller Café", wiki: "", url: "https://glennmillercafe.com/", lat: 59.3382, lng: 18.0661, note: "19:30 · Booked" }
      ],
      photos: { album: "", images: [] }
    },
    // ---------------- DAY 9 ----------------
    {
      n: 9, date: "2026-08-19", weekday: "Wednesday",
      title: "Drottningholm — the whole day",
      tagline: "A boat across Lake Mälaren · UNESCO World Heritage",
      schedule: [
        { time: "09:15", html: "<strong>To Klara Mälarstrand</strong>, the quay by City Hall. Pre-book the sailing." },
        { time: "10:00", html: "<strong>⛴️ Boat departs.</strong> 50–60 minutes across Lake Mälaren on S/S Drottningholm or M/S Prins Carl Philip. 220 SEK adult return, children roughly half." },
        { time: "11:00–13:00", html: "<strong>The Palace.</strong> Baroque state apartments, the staircase, the library. Buy the combination ticket: 250 SEK adult / 125 SEK child for palace + Chinese Pavilion." },
        { time: "13:00–14:15", html: "<strong>Lunch and the gardens.</strong> The baroque parterre, then the English park behind it." },
        { time: "14:30–15:15", html: "<strong>🎭 The Court Theatre.</strong> Do not skip this. Guided tours only — ask at the palace for times." },
        { time: "15:30–16:45", html: "<strong>The Chinese Pavilion</strong>, at the far end of the park." },
        { time: "16:45–17:45", html: "The park, slowly, or the Drottningholm café." },
        { time: "18:30", html: "<strong>Boat back</strong>, arriving central Stockholm around 19:30." }
      ],
      info: [
        { heading: "Drottningholm — What to Know", html: "'The Queen's Islet' begun in <strong>1662</strong>, unashamedly Sweden's answer to Versailles. UNESCO World Heritage since 1991. Since 1981 the actual private home of the Swedish royal family." },
        { heading: "The Court Theatre — What to Know", html: "Built in <strong>1766</strong>, still has its original 18th-century stage machinery in working order — hand-cranked wooden drums, a rumbling box of stones for thunder, a rope-and-canvas wind machine. Survived by accident: used as a storeroom for over a century, rediscovered in the 1920s intact." },
        { heading: "💡 Did you know?", html: "The Chinese Pavilion was a surprise birthday present: in 1753 King Adolf Fredrik had it built in secret and unveiled it to Queen Lovisa Ulrika on her birthday." },
        { heading: "🧒 Kids", html: "The theatre is the winner — ask the guide about the thunder machine and the wind machine, both cranked by hand, doing in 1766 what you'd do today with a speaker." }
      ],
      places: [
        { name: "Klara Mälarstrand (departure)", wiki: "", url: "", lat: 59.3300, lng: 18.0512, note: "10:00 boat" },
        { name: "Drottningholm Palace", wiki: "Drottningholm Palace", url: "https://www.kungligaslotten.se/english/royal-palaces-and-sites/drottningholm-palace.html", lat: 59.3226, lng: 17.8874, note: "UNESCO World Heritage" },
        { name: "Drottningholm Court Theatre", wiki: "Drottningholm Palace Theatre", url: "https://www.dtm.se/en", lat: 59.3221, lng: 17.8862, note: "14:30 guided tour" }
      ],
      photos: { album: "", images: [] }
    },
    // ---------------- DAY 10 ----------------
    {
      n: 10, date: "2026-08-20", weekday: "Thursday",
      title: "Sigtuna",
      tagline: "Moved here from Saturday, exactly as you asked · Outdoors, old, and not a museum",
      schedule: [
        { time: "09:30", html: "<strong>Commuter train to Märsta, then bus 570 or 575.</strong> 45–60 minutes door to door, no extra fare." },
        { time: "10:45–12:15", html: "<strong>Stora Gatan and the rune stones.</strong> Walk the main street, then find the stones — they stand out in the open around town and along the water." },
        { time: "12:15–13:45", html: "<strong>Long lunch by the lake.</strong>" },
        { time: "13:45–15:15", html: "<strong>The church ruins and Mariakyrkan.</strong> St Olof's and St Per's stand roofless and open. Rune stone U 394 is right by St Per's ruins." },
        { time: "15:15–16:15", html: "<strong>Sigtuna Museum & Art.</strong> Open Tue–Sun 12:00–16:00, free under-20. Small, focused, an hour." },
        { time: "16:30", html: "Bus and train home, or stay by the water until the light goes." }
      ],
      info: [
        { heading: "☀️ Weather swap / 🌧️ rain plan", html: "On a genuinely hot day, take Grinda instead — a nature-reserve island ~1.5 h by ferry, easy trails, two swimming beaches, an inn. If it rains: Tekniska Museet (hands-on tech, open to 21:00) is a reliable hit for 9–12s." },
        { heading: "Sigtuna — What to Know", html: "Founded around <strong>980 AD</strong>, generally reckoned Sweden's oldest town. Stora Gatan still follows its original medieval alignment. The Mälaren valley has the densest concentration of runic inscriptions in the world, and Sigtuna has around 150 in its immediate area." },
        { heading: "💡 Did you know?", html: "Sweden's first coins were struck here around 995, copied closely from English pennies — Anglo-Saxon coinage being the money the Vikings knew best from Danegeld." },
        { heading: "🧒 Kids", html: "Rune stones beat any museum case — you can touch them. Get a runic alphabet (16-character Younger Futhark) and have them write their own names, then hunt the stones for letters they recognise." }
      ],
      places: [
        { name: "Sigtuna", wiki: "Sigtuna", url: "https://www.sigtunaturism.se/en/", lat: 59.6172, lng: 17.7233, note: "Stora Gatan, rune stones, church ruins" },
        { name: "Sigtuna Museum", wiki: "", url: "https://www.sigtunamuseum.se/", lat: 59.6183, lng: 17.7238, note: "12:00–16:00 · free under-20" }
      ],
      photos: { album: "", images: [] }
    },
    // ---------------- DAY 11 ----------------
    {
      n: 11, date: "2026-08-21", weekday: "Friday",
      title: "Skeppsholmen, Moderna & Aifur",
      tagline: "Calm, central, walkable · Aifur at 20:15",
      schedule: [
        { time: "11:00–14:00", html: "<strong>Medelhavsmuseet.</strong> Fredsgatan 2. Open Tue–Sun, Fridays to 20:00. Adults 160 SEK, under-19s free. Egyptian mummies with CT scans, and one of the largest Cypriot collections outside Cyprus." },
        { time: "14:00–15:15", html: "<strong>Lunch in Norrmalm.</strong>" },
        { time: "15:30–17:00", html: "<strong>Walk to and around Skeppsholmen.</strong> Quiet, leafy, tall ships along the quays, best free views back at the palace. The Moderna Museet sculpture terrace outside is free — Niki de Saint Phalle's huge figures are often the actual highlight for a 9-year-old." },
        { time: "17:00–18:00", html: "<strong>Fika</strong>, or the af Chapman quayside." },
        { time: "19:45", html: "<strong>Walk to Gamla Stan</strong> — 20 minutes across the bridges." },
        { time: "20:15", html: "<strong>🍽️ Aifur.</strong> ✅ Booked. Västerlånggatan 68b." }
      ],
      info: [
        { heading: "Alternative: both museums, moving briskly", html: "Medelhavsmuseet 11:00–13:00 (Egyptian rooms, skip Near Eastern) · lunch · Skeppsholmen 14:15–15:00 · Moderna Museet 15:00–18:00 (open to 20:00 Fridays, and free entry 18:00–20:00 resuming 21 August — though that leaves only 105 minutes before Aifur)." },
        { heading: "Medelhavsmuseet — What to Know", html: "One of the largest Egyptian collections in Scandinavia, and one of the largest collections of Cypriot antiquities anywhere outside Cyprus, from the Swedish Cyprus Expedition of 1927–31." },
        { heading: "Skeppsholmen & Moderna Museet", html: "'The ship islet' was the Swedish Navy's base from the 1640s. Moored alongside is the af Chapman, an 1888 full-rigged ship, now a youth hostel. Moderna Museet holds Picasso, Matisse, Dalí, Duchamp, Rauschenberg." },
        { heading: "💡 Did you know?", html: "Moderna Museet was designed by Rafael Moneo — the same architect behind the Museo Nacional de Arte Romano in Mérida." },
        { heading: "🧒 Kids", html: "The mummies at Medelhavsmuseet are the draw — CT scans show what's inside the wrappings without unwrapping them." }
      ],
      places: [
        { name: "Medelhavsmuseet", wiki: "Medelhavsmuseet", url: "https://medelhavsmuseet.se/en", lat: 59.3308, lng: 18.0716, note: "11:00–14:00" },
        { name: "Skeppsholmen", wiki: "Skeppsholmen", url: "", lat: 59.3251, lng: 18.0868, note: "15:30–17:00 walk" },
        { name: "Moderna Museet", wiki: "Moderna Museet", url: "https://www.modernamuseet.se/stockholm/en/", lat: 59.3255, lng: 18.0876, note: "Sculpture terrace free" },
        { name: "Aifur", wiki: "", url: "https://aifur.se/en/", lat: 59.3230, lng: 18.0709, note: "20:15 · Booked" }
      ],
      photos: { album: "", images: [] }
    },
    // ---------------- DAY 12 ----------------
    {
      n: 12, date: "2026-08-22", weekday: "Saturday",
      title: "Haga, Ulriksdal & a Lego detour",
      tagline: "Moved here from Thursday · Mostly a park day",
      schedule: [
        { time: "10:30", html: "Commuter train / bus north to Haga." },
        { time: "11:00–12:00", html: "<strong>Fjärilshuset Haga Ocean</strong> (optional, 916 SEK for four). Do the butterfly house properly and walk past the sharks — you live near the Oceanário." },
        { time: "12:00–14:00", html: "<strong>🌳 Hagaparken, and lunch in it.</strong> Free: the Copper Tents, the Echo Temple, and the exposed foundations of Gustav III's unfinished palace. Bring a picnic, or use the café by the Copper Tents." },
        { time: "14:30–16:00", html: "<strong>Ulriksdals Slott.</strong> Open Tue–Sun 12:00–16:00, guided tours only — aim for the 15:00 English tour. ~120–140 SEK adult, 60–70 SEK per child. The Orangery Museum is closed for the season; the chapel, Confidencen theatre and Slottsträdgården are still open." },
        { time: "16:30–18:00", html: "<strong>🧱 Optional Lego detour:</strong> the LEGO Store at Mall of Scandinavia, Stjärntorget 2, Solna — open to 21:00. Pick & Build wall and Build-a-Minifigure station." },
        { time: "18:30", html: "<strong>Dinner on Rörstrandsgatan.</strong> Vasastan's restaurant street. Call ahead on a warm Saturday evening." }
      ],
      info: [
        { heading: "⚠️ Ring Ulriksdal before you go", html: "+46 8 402 61 00 (weekday mornings). Entry is by guided tour only and the English slot is a single 15:00 departure — this is the one booking on the trip a phone call genuinely de-risks." },
        { heading: "Hagaparken — What to Know", html: "Gustav III's park, laid out from the 1780s as an English landscape garden. The Copper Tents were built purely because they looked good from the palace windows." },
        { heading: "Ulriksdal — What to Know", html: "Built in the 1640s for Jakob De la Gardie. Its jewel is Confidencen, Sweden's oldest surviving rococo theatre — named after a dining table on a mechanism that could be lowered through the floor, loaded downstairs, and raised again fully laid." },
        { heading: "🧒 Kids", html: "In the butterfly house, stand still in a bright shirt and wait — they land on people. At Ulriksdal, let them run the grounds and the water." }
      ],
      places: [
        { name: "Fjärilshuset Haga Ocean", wiki: "", url: "https://www.fjarilshuset.se/en/", lat: 59.3568, lng: 18.0349, note: "Optional · 10:00–17:00" },
        { name: "Hagaparken", wiki: "Haga Park", url: "https://www.kungligaslotten.se/english/royal-palaces-and-sites/haga-park.html", lat: 59.3596, lng: 18.0323, note: "Free · Copper Tents, Echo Temple" },
        { name: "Ulriksdals Slott", wiki: "Ulriksdal Palace", url: "https://www.kungligaslotten.se/english/royal-palaces-and-sites/ulriksdal-palace.html", lat: 59.3752, lng: 18.0261, note: "15:00 English tour" },
        { name: "LEGO Store, Mall of Scandinavia", wiki: "", url: "https://www.lego.com/en-se/stores", lat: 59.3708, lng: 18.0018, note: "Optional · to 21:00" }
      ],
      photos: { album: "", images: [] }
    },
    // ---------------- DAY 13 ----------------
    {
      n: 13, date: "2026-08-23", weekday: "Sunday",
      title: "Södermalm & Fotografiska",
      tagline: "Or a genuine spare day",
      schedule: [
        { time: "Morning", html: "<strong>Slow.</strong> You've now been on Södermalm three times — eclipse night, race night, today. Good day to finally do the daylight Monteliusvägen walk that got bumped on Day 5 for the guard ceremony and the Catalan festival." },
        { time: "12:00–14:00", html: "<strong>Monteliusvägen by daylight, then SoFo.</strong> A 500 m cliff-top walkway with the best skyline view in Stockholm, free, then some smaller shops keep short Sunday hours." },
        { time: "15:00–18:30", html: "<strong>Fotografiska.</strong> Stadsgårdshamnen 22. Open 10:00–23:00, no rush. Adults 225 SEK, free under 16. Check what's on before committing — exhibitions rotate." },
        { time: "Evening", html: "<strong>Dinner — not Aifur or Glenn Miller</strong>, both closed Sundays. The Fotografiska restaurant on the top floor has the view." }
      ],
      info: [
        { heading: "Södermalm & Fotografiska — What to Know", html: "Södermalm was for centuries the poor island — workers, dockhands, industries the city wanted downwind. Fotografiska opened in 2010 in Stora Tullhuset, a 1906 art nouveau customs house designed by Ferdinand Boberg." },
        { heading: "🧒 Kids", html: "Walk back up to Skinnarviksberget in daylight and let them see what they were standing on during the eclipse — completely different without a crowd and a crescent sun." },
        { heading: "📝 Still spare, if there's room", html: "Two Day 6 ideas never got used since that day went to Skansen instead: Fjäderholmarna (30-min boat from Slussen, swimming off the rocks, craft studios) and free swimming at Långholmsbadet. Either slots in if the morning runs long or Fotografiska gets cut." }
      ],
      places: [
        { name: "Monteliusvägen", wiki: "Monteliusvägen", url: "", lat: 59.3186, lng: 18.0429, note: "Cliff-top walk, best skyline view" },
        { name: "Fotografiska", wiki: "Fotografiska", url: "https://www.fotografiska.com/sto/", lat: 59.3172, lng: 18.0813, note: "15:00–18:30 · 225 SEK, free under 16" },
        { name: "Skinnarviksberget (by day)", wiki: "Skinnarviksberget", url: "", lat: 59.3168, lng: 18.0308, note: "Revisit in daylight" }
      ],
      photos: { album: "", images: [] }
    },
    // ---------------- DAY 14 ----------------
    {
      n: 14, date: "2026-08-24", weekday: "Monday",
      title: "Nobel, the City Hall & Farewell",
      tagline: "Your last full day — Nobel, IKEA/Lego, and something only Stockholm has",
      schedule: [
        { time: "09:45", html: "To Gamla Stan." },
        { time: "10:00–11:30", html: "<strong>🏅 Nobel Prize Museum.</strong> Stortorget 2 — same square as the Bloodbath, in the old Stock Exchange building. Adults 160 SEK, under-18s free, guided tour included — take it. Laureates' portraits circle the ceiling on a cable rail, like dry cleaning." },
        { time: "11:45–13:00", html: "<strong>⚔️ Livrustkammaren (Royal Armoury).</strong> Slottsbacken 3, palace basement, open daily 10:00–17:00. No longer free: 180 SEK adult, under-19s free." },
        { time: "13:00–14:15", html: "Lunch in the Old Town, or walk to Kungsholmen." },
        { time: "14:30–15:15", html: "<strong>🏛️ Stockholm City Hall — guided tour.</strong> 150 SEK adult, 60 SEK ages 7–18. 45 minutes through the Blue Hall (Nobel banquet) and the Golden Hall (18 million gold mosaic tiles). ⚠️ Tickets released one week ahead — book on 17 August." },
        { time: "15:30–16:15", html: "<strong>🗼 The City Hall Tower.</strong> 106 metres, 365 steps. ~80 SEK." },
        { time: "16:30–18:00", html: "<strong>Souvenirs.</strong> Drottninggatan and Åhléns City, or SoFo on Södermalm for the better stuff." },
        { time: "18:30", html: "<strong>🍽️ Farewell dinner: Pelikan</strong>, Blekingegatan 40, Södermalm. Book it." },
        { time: "Tonight", html: "Pack. Confirm tomorrow's train times." }
      ],
      info: [
        { heading: "Why Pelikan", html: "Serving in the same art nouveau room on Blekingegatan since <strong>1904</strong> — high ceilings, dark wood, a beer-hall roar. Husmanskost done seriously; meatballs made in-house in 150-kilo batches. Open 11:30–01:00 every day. If full: Meatballs for the People, Villa Godthem, or Östermalms Saluhall." },
        { heading: "The Nobel Prize — where to actually find it", html: "Split across two places: the Nobel Prize Museum (the collection, the stories) and Stockholm City Hall (the rooms — where the banquet actually happens). Do both, in that order." },
        { heading: "IKEA and Lego — the honest answer", html: "The IKEA Museum is 500 km south in Älmhult — not doable. But IKEA Kungens Kurva, 20 minutes from your flat, is the third-largest IKEA on Earth. No Legoland near Stockholm, but the LEGO Store at Mall of Scandinavia (Day 12) is the real thing." },
        { heading: "Only-in-Stockholm", html: "The Vasa · Skansen · the metro art · Drottningholm's Court Theatre · the Nobel banquet hall · Midnattsloppet · the eclipse." }
      ],
      places: [
        { name: "Nobel Prize Museum", wiki: "Nobel Prize Museum", url: "https://nobelprizemuseum.se/en/", lat: 59.3251, lng: 18.0714, note: "10:00–11:30" },
        { name: "Livrustkammaren", wiki: "Royal Armoury (Sweden)", url: "https://www.livrustkammaren.se/en/", lat: 59.3268, lng: 18.0719, note: "11:45–13:00" },
        { name: "Stockholm City Hall", wiki: "Stockholm City Hall", url: "https://stadshuset.stockholm/en/", lat: 59.3274, lng: 18.0545, note: "14:30 tour + tower" },
        { name: "Pelikan", wiki: "", url: "https://www.pelikan.se/", lat: 59.3141, lng: 18.0764, note: "18:30 · Farewell dinner" }
      ],
      photos: { album: "", images: [] }
    },
    // ---------------- DAY 15 ----------------
    {
      n: 15, date: "2026-08-25", weekday: "Tuesday",
      title: "Departure",
      tagline: "11:00 checkout · 18:00 flight · A proper last morning, bag-free",
      schedule: [
        { time: "11:00", html: "Check out, bags and all. Walk to Älvsjö station." },
        { time: "11:20", html: "Commuter train to Stockholm City — 12 minutes." },
        { time: "11:45", html: "<strong>🧳 Left luggage.</strong> Lockers at Central Station, open 24/7: small ~70 SEK / large ~90 SEK per 24 h. Two large lockers take four suitcases." },
        { time: "12:15–14:15", html: "<strong>A proper last morning, bag-free.</strong> Kungsträdgården, Gamla Stan one final time, Norr Mälarstrand, or Åhléns City for last souvenirs." },
        { time: "14:15", html: "<strong>A final fika.</strong> Buy the cinnamon buns — they travel fine in hand luggage." },
        { time: "14:35", html: "Collect the bags." },
        { time: "~14:50", html: "<strong>🚆 Commuter train, Stockholm City → Arlanda C, direct.</strong> ~40 minutes." },
        { time: "15:35", html: "At the airport. Allow the full margin — August queues at Arlanda are real." },
        { time: "18:00", html: "<strong>Fly home.</strong>" }
      ],
      info: [
        { heading: "⚠️ Check the night before", html: "Whether your Arlanda passage is still valid on your 30-day tickets or whether you need two more passages in the SL app — buy them the evening before either way, ~280 SEK, removes a queue on the day." }
      ],
      places: [
        { name: "Stockholm Central Station", wiki: "Stockholm Central Station", url: "", lat: 59.3304, lng: 18.0583, note: "Left luggage, 11:45" },
        { name: "Arlanda Airport", wiki: "Stockholm Arlanda Airport", url: "https://www.swedavia.com/arlanda/", lat: 59.6519, lng: 17.9186, note: "Flight 18:00" }
      ],
      photos: { album: "", images: [] }
    }
  ]
};
