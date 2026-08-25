const projects = {
  minuzie: {
    title: "Minuzie Fest",
    label: "Visual identity · Illustration · Merchandise · 2026",
    intro: "A playful visual world developed for an independent cultural festival in Bologna, where music, art and community meet.",
    images: [
      ["assets/frog.png", "Orange illustrated frog character developed for Minuzie Fest", "wide"],
      ["assets/minuzie-poster.png", "Black and white Minuzie Fest poster illustration", ""],
      ["assets/minuzie-merch.png", "Minuzie Fest illustration applied to a T-shirt and tote bag", ""],
      ["assets/minuzie-logo-black.png", "Hand-drawn black Minuzie Fest logo", ""],
      ["assets/minuzie-logo-colour.png", "Yellow Minuzie Fest logo on violet", ""]
    ],
    role: "I developed the hand-drawn logo, central frog character, botanical imagery and graphic applications for print, social communication and merchandise.",
    approach: "The identity balances a deliberately imperfect line with bold colour combinations. The frog acts as a small guide through the festival’s lively ecosystem, connecting music, nature and collective experience."
  },
  casalone: {
    title: "Casalone Music Posters",
    label: "Poster design · Illustration · Event communication · 2025—",
    intro: "An ongoing series of posters for concerts, parties and cultural events at Casalone di Ritmolento in Bologna.",
    images: [
      ["assets/balkan-poster.png", "Orange and blue Balkan Express event poster", ""],
      ["assets/karaoke-poster.png", "Pastel illustrated karaoke night poster", ""],
      ["assets/silki-poster.png", "Blue botanical poster for Silki and Gianlu Ballu", ""]
    ],
    role: "For each event, I shape a distinct visual mood while keeping the communication energetic, readable and connected to the venue’s independent identity.",
    approach: "The series moves across garage-punk textures, pastel illustration and organic forms. This freedom lets the visual language respond to the sound, atmosphere and audience of each night.",
    link: "https://www.instagram.com/ritmolento/"
  },
  puntolineare: {
    title: "Puntolineare",
    label: "Personal illustration practice · Ongoing",
    intro: "A personal space for observational drawing, natural forms, characters and small visual experiments.",
    images: [
      ["assets/bologna-drawing.jpg", "Observational drawing made in a green space in Bologna", "wide"]
    ],
    role: "Puntolineare is the nickname I use when sharing personal illustrations and visual notes outside commissioned work.",
    approach: "These drawings begin with curiosity: looking closely at a place, a plant, a shape or an everyday detail, then translating it through colour and an intuitive line.",
    link: "https://www.instagram.com/puntolineare/"
  }
};

const dialog = document.querySelector("#project-dialog");
const dialogContent = document.querySelector("#dialog-content");
document.querySelectorAll(".project-open").forEach(button => button.addEventListener("click", () => {
  const project = projects[button.dataset.project];
  const figures = project.images.map(([src, alt, cls]) => `<figure class="${cls}"><img src="${src}" alt="${alt}"></figure>`).join("");
  dialogContent.innerHTML = `<div class="dialog-hero"><p class="eyebrow">${project.label}</p><h2>${project.title}</h2><p>${project.intro}</p></div><div class="dialog-gallery">${figures}</div><div class="dialog-text"><div><h3>My role</h3><p>${project.role}</p></div><div><h3>Approach</h3><p>${project.approach}</p>${project.link ? `<a href="${project.link}" target="_blank" rel="noreferrer">View on Instagram ↗</a>` : ""}</div></div>`;
  dialog.showModal();
  dialog.querySelector(".dialog-hero").scrollIntoView();
}));
document.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); });
document.addEventListener("keydown", event => { if (event.key === "Escape" && dialog.open) dialog.close(); });

document.querySelectorAll(".filter").forEach(button => button.addEventListener("click", () => {
  document.querySelectorAll(".filter").forEach(item => item.classList.remove("active"));
  button.classList.add("active");
  document.querySelectorAll(".project").forEach(project => {
    project.hidden = button.dataset.filter !== "all" && !project.dataset.category.includes(button.dataset.filter);
  });
}));

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector("#site-nav");
menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", open);
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => { nav.classList.remove("open"); menuButton.setAttribute("aria-expanded", "false"); }));
document.querySelector("#year").textContent = new Date().getFullYear();



const translations = {
  en: {
    nav_work:"Work", nav_editorial:"Editorial", nav_digital:"Digital", nav_about:"About", nav_contact:"Contact",
    hero_eyebrow:"Hi, I’m Alice · Bologna, Italy",
    hero_title:'I write, draw,<br>design & build<br><em>curious things.</em>',
    hero_copy:"I’m a multidisciplinary creative and Digital Humanities student working across editorial writing, visual communication and interactive digital projects.",
    story_1:'I’ve always moved between different ways of understanding and expressing things: <strong>music, writing, drawing, languages and technology.</strong>',
    story_2:"I’m especially drawn to independent culture, live music, cultural heritage and the small details that make places and communities feel alive.",
    story_3:"Curiosity is the thread connecting everything I do.",
    hobby1_title:"Music first", hobby1_copy:"I’m constantly looking for new sounds, small venues and independent scenes — often the starting point for my writing and visual work.",
    hobby2_title:"Drawing what I notice", hobby2_copy:'Plants, places, characters and everyday details feed my personal illustration practice, <strong>Puntolineare</strong>.',
    hobby3_title:"Museums, archives, rabbit holes", hobby3_copy:"I like understanding how cultural material is organised, preserved and turned into something people can actually explore.",
    hobby4_title:"Learning by making", hobby4_copy:'A lot of my projects start with a question like: <em>“Can I build this?”</em> Then I research, test, learn and iterate until it works.',
    see_work:"See what<br>I make",
    work_eyebrow:"Selected visual work · 2024—2026", work_title:"Things I’ve<br>been making.",
    editorial_eyebrow:"Music journalism · Cultural writing · Interviews", editorial_title:"Editorial.",
    editorial_intro:"I write about music, independent culture and the way digital platforms shape how we discover, share and experience creative work. My editorial practice moves between criticism, cultural reporting, interviews and social-first storytelling.",
    digital_eyebrow:"Web design · Digital humanities", digital_title:'Ideas that live<br><em>on the web.</em>', digital_intro:"Alongside my editorial and visual practice, I design and build academic digital projects that connect cultural heritage, storytelling and interactive web experiences.",
    about_eyebrow:"About Alice", about_title:'Writing, designing<br>and building with <em>curiosity.</em>', about_large:"I’m Alice, a multidisciplinary creative working across editorial writing, visual communication and digital humanities.",
    about_p1:"My practice moves between music journalism, graphic design, cultural communication and interactive web projects. I write about independent music and cultural scenes, create visual communication for concerts and events in Bologna, and build digital projects around cultural heritage, archives and storytelling.",
    about_p2:"I’m interested in the point where content, design and technology meet: how research becomes a story, how information becomes an interface, and how digital tools can make culture more accessible and engaging.",
    about_p3:'<strong>Puntolineare</strong> is the nickname I use for my personal illustration practice — a space for experimentation, visual notes and things made simply because they spark curiosity.',
    contact_eyebrow:"Have a project, a gig or an idea?", contact_title:'Let’s make<br>something <em>alive.</em>'
  },
  it: {
    nav_work:"Lavori", nav_editorial:"Editoriale", nav_digital:"Digitale", nav_about:"Chi sono", nav_contact:"Contatti",
    hero_eyebrow:"Ciao, sono Alice · Bologna, Italia",
    hero_title:'Scrivo, disegno,<br>progetto e costruisco<br><em>cose curiose.</em>',
    hero_copy:"Sono una creativa multidisciplinare e studentessa di Digital Humanities, tra scrittura editoriale, comunicazione visiva e progetti digitali interattivi.",
    story_1:'Mi sono sempre mossa tra modi diversi di capire ed esprimere le cose: <strong>musica, scrittura, disegno, lingue e tecnologia.</strong>',
    story_2:"Mi attirano soprattutto la cultura indipendente, la musica dal vivo, il patrimonio culturale e quei piccoli dettagli che danno identità ai luoghi e alle comunità.",
    story_3:"La curiosità è il filo che collega tutto quello che faccio.",
    hobby1_title:"Prima la musica", hobby1_copy:"Cerco continuamente nuovi suoni, piccoli spazi e scene indipendenti: spesso è proprio da lì che partono i miei lavori di scrittura e comunicazione visiva.",
    hobby2_title:"Disegnare quello che noto", hobby2_copy:'Piante, luoghi, personaggi e dettagli quotidiani alimentano la mia pratica personale di illustrazione, <strong>Puntolineare</strong>.',
    hobby3_title:"Musei, archivi e rabbit hole", hobby3_copy:"Mi piace capire come i materiali culturali vengono organizzati, conservati e trasformati in qualcosa che le persone possano davvero esplorare.",
    hobby4_title:"Imparare facendo", hobby4_copy:'Molti miei progetti iniziano con una domanda tipo: <em>“Riesco a costruirlo?”</em> Poi ricerco, provo, imparo e continuo a iterare finché non funziona.',
    see_work:"Guarda cosa<br>faccio",
    work_eyebrow:"Lavori visivi selezionati · 2024—2026", work_title:"Cose che ho<br>realizzato.",
    editorial_eyebrow:"Giornalismo musicale · Scrittura culturale · Interviste", editorial_title:"Editoriale.",
    editorial_intro:"Scrivo di musica, cultura indipendente e di come le piattaforme digitali influenzano il modo in cui scopriamo, condividiamo e viviamo i lavori creativi. La mia pratica editoriale si muove tra critica, racconto culturale, interviste e contenuti pensati per i social.",
    digital_eyebrow:"Web design · Digital humanities", digital_title:'Idee che vivono<br><em>sul web.</em>', digital_intro:"Accanto al lavoro editoriale e visivo, progetto e sviluppo progetti digitali accademici che uniscono patrimonio culturale, narrazione ed esperienze web interattive.",
    about_eyebrow:"Chi sono", about_title:'Scrivere, progettare<br>e costruire con <em>curiosità.</em>', about_large:"Sono Alice, una creativa multidisciplinare che lavora tra scrittura editoriale, comunicazione visiva e digital humanities.",
    about_p1:"La mia pratica si muove tra giornalismo musicale, graphic design, comunicazione culturale e progetti web interattivi. Scrivo di musica indipendente e scene culturali, creo comunicazione visiva per concerti ed eventi a Bologna e sviluppo progetti digitali legati a patrimonio culturale, archivi e storytelling.",
    about_p2:"Mi interessa il punto in cui contenuto, design e tecnologia si incontrano: come una ricerca diventa racconto, come l’informazione diventa interfaccia e come gli strumenti digitali possono rendere la cultura più accessibile e coinvolgente.",
    about_p3:'<strong>Puntolineare</strong> è il nome che uso per la mia pratica personale di illustrazione: uno spazio di sperimentazione, appunti visivi e cose create semplicemente perché accendono la curiosità.',
    contact_eyebrow:"Hai un progetto, un concerto o un’idea?", contact_title:'Facciamo qualcosa<br>di <em>vivo.</em>'
  }
};

function setLanguage(lang){
  const dict = translations[lang] || translations.en;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    const key = el.dataset.i18nHtml;
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
  document.querySelectorAll(".lang-btn").forEach(btn => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-pressed", String(active));
  });
  localStorage.setItem("portfolio-language", lang);
}

document.querySelectorAll(".lang-btn").forEach(btn => {
  btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
});

const savedLanguage = localStorage.getItem("portfolio-language");
const browserLanguage = navigator.language && navigator.language.toLowerCase().startsWith("it") ? "it" : "en";
setLanguage(savedLanguage || browserLanguage);



// Scroll choreography
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!prefersReducedMotion) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.14,
    rootMargin: "0px 0px -8% 0px"
  });

  document.querySelectorAll(".reveal, .scroll-title").forEach(el => revealObserver.observe(el));

  // Hero enters immediately without waiting for scroll.
  document.querySelectorAll(".hero .reveal, .hero .scroll-title").forEach(el => el.classList.add("is-visible"));

  // Very light parallax for decorative hero marks only.
  const hero = document.querySelector(".hero");
  const doodles = hero ? hero.querySelectorAll(".hero-doodles span") : [];
  let ticking = false;

  const updateParallax = () => {
    const y = window.scrollY;
    doodles.forEach((el, index) => {
      const speed = 0.025 + index * 0.012;
      el.style.translate = `0 ${Math.min(y * speed, 34)}px`;
    });
    ticking = false;
  };

  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }, { passive: true });
} else {
  document.querySelectorAll(".reveal, .scroll-title").forEach(el => el.classList.add("is-visible"));
}
