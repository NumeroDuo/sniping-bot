// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href').substring(1);
    const el = document.getElementById(id);
    if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth', block:'start'}); }
  });
});

// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Reveal on scroll
const io = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){ entry.target.classList.add('visible'); io.unobserve(entry.target); }
  });
},{threshold:0.15});
document.querySelectorAll('.reveal, .card').forEach(el=>io.observe(el));

/* -------- Language toggle (DE/EN) -------- */
const STRINGS = {
  de: {
    nav_features: "Features",
    nav_presets: "Presets",
    nav_download: "Download",
    nav_faq: "FAQ",
    nav_imprint: "Impressum",
    nav_ig: "Instagram",
    nav_tt: "TikTok",

    subtitle: `Dein Sniping‑Bot für die <strong>bald kommende EA&nbsp;FC&nbsp;26 WebApp</strong> – mit vorgefertigten Presets für <strong>EA&nbsp;FC&nbsp;25</strong> und <strong>EA&nbsp;FC&nbsp;26</strong>. Einfach Preset wählen und sofort starten. Feineinstellungen sind jederzeit möglich.`,
    release: `<strong>Hinweis:</strong> Das <strong>FC26‑Preset</strong> wird zum offiziellen Release der WebApp freigeschaltet (<em>voraussichtlich 17.09.2025</em>).`,
    updates: `Wir posten <strong>alle wichtigen Infos &amp; Updates</strong> zu Releases, Fixes &amp; Tipps auf <strong>Instagram</strong> &amp; <strong>TikTok</strong>. Folge uns, um nichts zu verpassen:`,

    why_title: "Warum Sniping BOT?",
    why_1: "Optimiert für die kommende <strong>EA&nbsp;FC&nbsp;26 WebApp</strong>",
    why_2: "<strong>Presets</strong> für FC25 &amp; FC26 – sofort einsatzbereit",
    why_3: "Maus‑ &amp; Tastatur‑Automationen mit Timing‑Kontrolle",
    why_4: "Start/Stop per Button &amp; Shortcut",
    why_5: "Loop oder einmalige Ausführung",

    features_title: "Features",
    f1_title: "Preset‑Auswahl",
    f1_copy: "Wähle <strong>FC25</strong> oder <strong>FC26</strong> – alle Klick‑Koordinaten, Tastenfolgen und Wartezeiten sind vorkonfiguriert. Bei Bedarf kannst du alles feinjustieren.",
    f2_title: "Interaktive Koordinaten",
    f2_copy: "Klicke auf „Koordinate setzen“, dann übernimmt der Bot die aktuelle Mausposition – super schnell und präzise.",
    f3_title: "Timing &amp; Loops",
    f3_copy: "Bestimme exakte Wartezeiten zwischen Aktionen, schalte Loop‑Modus ein/aus und lege die Wiederholungen fest.",
    f4_title: "Hotkeys",
    f4_copy: "Starte/stoppe jederzeit per Shortcut. Volle Kontrolle, auch wenn das Fenster im Hintergrund läuft.",
    f5_title: "Safe‑Guards",
    f5_copy: "Abbruch bei Mausbewegung oder Tastatureingabe möglich – damit nichts Ungewolltes passiert.",
    f6_title: "Leichtgewichtig",
    f6_copy: "Ressourcenschonend und für Windows optimiert. Läuft smooth neben Browser &amp; WebApp.",

    presets_title: "Presets: FC25 &amp; FC26",
    presets_copy: "Im Programm sind <strong>fertige Presets</strong> für beide Versionen angelegt. Wähle einfach das passende Profil und leg los. Später kannst du Timing, Koordinaten oder Tastenfolgen jederzeit anpassen.",
    presets_release: "<strong>FC26‑Preset:</strong> Verfügbar ab dem offiziellen WebApp‑Release (<em>voraussichtlich 17.09.2025</em>).",
    presets_li1: "Einfaches Umschalten zwischen FC25/FC26",
    presets_li2: "Empfohlene Standard‑Delays enthalten",
    presets_li3: "Manuelle Feineinstellung jederzeit möglich",
    pill25: "FC25",
    pill26: "FC26",

    download_title: "Jetzt herunterladen",
    download_copy: "Installer für Windows. Starte mit Presets und passe auf Wunsch später an.",
    dl_hero: "Download",
    dl_footer: "Download",

    notes_title: "Was ist neu?",
    notes_list: `
      <li><strong>v1.0.0</strong> – Erste öffentliche Version, Presets für FC25, FC26‑Preset wird am WebApp‑Release freigeschaltet.</li>
      <li>Hotkeys Start/Stop, Loop‑Modus, interaktive Koordinaten‑Erfassung.</li>
      <li>Stabilitäts‑ und Performance‑Optimierungen.</li>
    `,

    faq_title: "FAQ",
    faq_q1: "Ist der Bot bann‑sicher?",
    faq_a1: `Der Bot läuft <strong>lokal auf deinem PC</strong> und greift <strong>nicht</strong> auf EA‑Server zu. Er automatisiert lediglich Maus‑ und Tastatureingaben – das ist an sich nicht illegal. <br><strong>Wichtig:</strong> Wir geben <strong>keine Garantie</strong> für Bannfreiheit. Die Nutzung erfolgt auf eigenes Risiko und du solltest stets die <strong>Nutzungsbedingungen von EA</strong> beachten.`,
    faq_q2: "Brauche ich Admin‑Rechte?",
    faq_a2: "In der Regel nein. Einige Funktionen (z. B. globale Hotkeys) können erhöhte Rechte erfordern.",
    faq_q3: "Läuft es neben dem Browser?",
    faq_a3: "Ja, der Bot ist leichtgewichtig und auf Windows optimiert. Er kann im Hintergrund laufen.",
    faq_q4: "Kann ich alles anpassen?",
    faq_a4: "Ja. Presets sind Startpunkte. Koordinaten, Tastenfolgen und Delays lassen sich jederzeit ändern.",

    imprint_title: "Impressum",
    imprint_resp: "Verantwortlich: Sniping BOT, Schweiz",
    imprint_mail: `E‑Mail: <a href="mailto:hello@example.com">hello@example.com</a>`,
    legal_note: "Hinweis: Dieses Projekt steht in keiner Verbindung zu Electronic Arts. EA SPORTS, EA FC und zugehörige Logos sind Marken von Electronic Arts Inc.",

    ig_label: "Instagram – Folge uns",
    tt_label: "TikTok – Folge uns",
    footer_ig: "Instagram",
    footer_tt: "TikTok"
  },
  en: {
    nav_features: "Features",
    nav_presets: "Presets",
    nav_download: "Download",
    nav_faq: "FAQ",
    nav_imprint: "Imprint",
    nav_ig: "Instagram",
    nav_tt: "TikTok",

    subtitle: `Your sniping bot for the <strong>upcoming EA&nbsp;FC&nbsp;26 WebApp</strong> – with ready‑made presets for <strong>EA&nbsp;FC&nbsp;25</strong> and <strong>EA&nbsp;FC&nbsp;26</strong>. Pick a preset and start instantly. You can fine‑tune anything later.`,
    release: `<strong>Note:</strong> The <strong>FC26 preset</strong> will unlock when the WebApp officially releases (<em>expected Sep 17, 2025</em>).`,
    updates: `We post <strong>all key info &amp; updates</strong> (releases, fixes, tips) on <strong>Instagram</strong> &amp; <strong>TikTok</strong>. Follow so you don’t miss out:`,

    why_title: "Why Sniping BOT?",
    why_1: "Optimized for the upcoming <strong>EA&nbsp;FC&nbsp;26 WebApp</strong>",
    why_2: "<strong>Presets</strong> for FC25 &amp; FC26 – ready to use",
    why_3: "Mouse &amp; keyboard automations with timing control",
    why_4: "Start/Stop via button &amp; hotkey",
    why_5: "Loop or single‑run",

    features_title: "Features",
    f1_title: "Preset selection",
    f1_copy: "Choose <strong>FC25</strong> or <strong>FC26</strong> — all click coordinates, key sequences and delays are preconfigured. Tweak anytime.",
    f2_title: "Interactive coordinates",
    f2_copy: "Click “Set coordinate” and the bot reads your current mouse position — fast and precise.",
    f3_title: "Timing & loops",
    f3_copy: "Define exact delays, toggle loop mode and set repetitions.",
    f4_title: "Hotkeys",
    f4_copy: "Start/stop at any time via global hotkey. Full control even when the window is in background.",
    f5_title: "Safeguards",
    f5_copy: "Abort on mouse move or keyboard input to prevent unwanted actions.",
    f6_title: "Lightweight",
    f6_copy: "Low footprint, optimized for Windows. Runs smoothly alongside the browser & WebApp.",

    presets_title: "Presets: FC25 &amp; FC26",
    presets_copy: "The app ships with <strong>ready presets</strong> for both versions. Select a profile and go. You can adjust timings, coordinates or key sequences anytime.",
    presets_release: "<strong>FC26 preset:</strong> Available from the official WebApp release (<em>expected Sep 17, 2025</em>).",
    presets_li1: "Easy switch between FC25/FC26",
    presets_li2: "Recommended default delays included",
    presets_li3: "Manual fine‑tuning possible at any time",
    pill25: "FC25",
    pill26: "FC26",

    download_title: "Download now",
    download_copy: "Windows installer. Start with presets and tweak later if you like.",
    dl_hero: "Download",
    dl_footer: "Download",

    notes_title: "Release notes",
    notes_list: `
      <li><strong>v1.0.0</strong> – First public version, presets for FC25. FC26 preset unlocks on WebApp release.</li>
      <li>Hotkeys start/stop, loop mode, interactive coordinate capture.</li>
      <li>Stability and performance improvements.</li>
    `,

    faq_title: "FAQ",
    faq_q1: "Is the bot ban‑proof?",
    faq_a1: `The bot runs <strong>locally on your PC</strong> and <strong>does not</strong> access EA servers. It only automates mouse/keyboard input, which is not illegal by itself. <br><strong>Important:</strong> We provide <strong>no guarantee</strong> against bans. Use at your own risk and always follow <strong>EA’s Terms of Service</strong>.`,
    faq_q2: "Do I need admin rights?",
    faq_a2: "Usually no. Some features (e.g., global hotkeys) may require elevated permissions.",
    faq_q3: "Does it run alongside the browser?",
    faq_a3: "Yes. It’s lightweight and optimized for Windows and can run in the background.",
    faq_q4: "Can I tweak everything?",
    faq_a4: "Yes. Presets are a starting point. You can change coordinates, key sequences and delays anytime.",

    imprint_title: "Imprint",
    imprint_resp: "Responsible: Sniping BOT, Switzerland",
    imprint_mail: `Email: <a href="mailto:hello@example.com">hello@example.com</a>`,
    legal_note: "Note: This project is not affiliated with Electronic Arts. EA SPORTS, EA FC and related logos are trademarks of Electronic Arts Inc.",

    ig_label: "Instagram – Follow us",
    tt_label: "TikTok – Follow us",
    footer_ig: "Instagram",
    footer_tt: "TikTok"
  }
};

const setHTML = (id, html)=>{ const el=document.getElementById(id); if(el) el.innerHTML = html; };

const applyLang = (lang)=>{
  const s = STRINGS[lang]; if(!s) return;
  document.body.setAttribute('data-lang', lang);
  localStorage.setItem('snipingbot-lang', lang);

  // Nav & socials
  setHTML('i-nav-features', s.nav_features);
  setHTML('i-nav-presets', s.nav_presets);
  setHTML('i-nav-download', s.nav_download);
  setHTML('i-nav-faq', s.nav_faq);
  setHTML('i-nav-imprint', s.nav_imprint);
  setHTML('i-nav-ig', s.nav_ig);
  setHTML('i-nav-tt', s.nav_tt);

  // Hero & why
  setHTML('i-subtitle', s.subtitle);
  setHTML('i-release', s.release);
  setHTML('i-updates', s.updates);
  setHTML('i-why-title', s.why_title);
  setHTML('i-why-1', s.why_1);
  setHTML('i-why-2', s.why_2);
  setHTML('i-why-3', s.why_3);
  setHTML('i-why-4', s.why_4);
  setHTML('i-why-5', s.why_5);

  // Features
  setHTML('i-features-title', s.features_title);
  setHTML('i-f1-title', s.f1_title); setHTML('i-f1-copy', s.f1_copy);
  setHTML('i-f2-title', s.f2_title); setHTML('i-f2-copy', s.f2_copy);
  setHTML('i-f3-title', s.f3_title); setHTML('i-f3-copy', s.f3_copy);
  setHTML('i-f4-title', s.f4_title); setHTML('i-f4-copy', s.f4_copy);
  setHTML('i-f5-title', s.f5_title); setHTML('i-f5-copy', s.f5_copy);
  setHTML('i-f6-title', s.f6_title); setHTML('i-f6-copy', s.f6_copy);

  // Presets
  setHTML('i-presets-title', s.presets_title);
  setHTML('i-presets-copy', s.presets_copy);
  setHTML('i-presets-release', s.presets_release);
  setHTML('i-presets-li1', s.presets_li1);
  setHTML('i-presets-li2', s.presets_li2);
  setHTML('i-presets-li3', s.presets_li3);
  setHTML('i-pill25', s.pill25);
  setHTML('i-pill26', s.pill26);

  // Download
  setHTML('i-download-title', s.download_title);
  setHTML('i-download-copy', s.download_copy);
  setHTML('i-dl-hero', s.dl_hero);
  setHTML('i-dl-footer', s.dl_footer);

  // Release notes
  setHTML('i-notes-title', s.notes_title);
  setHTML('i-notes-list', s.notes_list);

  // FAQ
  setHTML('i-faq-title', s.faq_title);
  setHTML('i-faq-q1', s.faq_q1); setHTML('i-faq-a1', s.faq_a1);
  setHTML('i-faq-q2', s.faq_q2); setHTML('i-faq-a2', s.faq_a2);
  setHTML('i-faq-q3', s.faq_q3); setHTML('i-faq-a3', s.faq_a3);
  setHTML('i-faq-q4', s.faq_q4); setHTML('i-faq-a4', s.faq_a4);

  // Imprint & footer
  setHTML('i-imprint-title', s.imprint_title);
  setHTML('i-imprint-resp', s.imprint_resp);
  setHTML('i-imprint-mail', s.imprint_mail);
  setHTML('i-legal-note', s.legal_note);
  setHTML('i-footer-ig', s.footer_ig);
  setHTML('i-footer-tt', s.footer_tt);

  // Toggle UI
  document.querySelectorAll('.lang-btn').forEach(b=>{
    b.classList.toggle('active', b.dataset.setLang === lang);
  });
};

document.querySelectorAll('[data-set-lang]').forEach(btn=>{
  btn.addEventListener('click', ()=>applyLang(btn.dataset.setLang));
});

// init language
applyLang(localStorage.getItem('snipingbot-lang') || 'de');
