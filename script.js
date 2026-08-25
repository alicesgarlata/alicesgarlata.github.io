document.documentElement.classList.add("js");
const translations={en:{nav_intro:"About",nav_practice:"Practice",nav_editorial:"Editorial",nav_visual:"Visual",nav_digital:"Digital",nav_contact:"Contact",intro_eyebrow:"Hi, I’m Alice · Bologna, Italy",intro_title:'Writing, designing<br>and building with<br><em>curiosity.</em>',intro_lead:"I’m a multidisciplinary creative and Digital Humanities student moving between editorial writing, visual communication and interactive digital projects.",intro_body:"I’m interested in independent culture, live music, cultural heritage and the small details that give places and communities their identity. I like learning by making things, and most of my work starts with research, curiosity and a question I want to follow.",note1_title:"Music",note1_copy:"New sounds, small venues and independent scenes often become the starting point for my writing and design work.",note2_title:"Drawing",note2_copy:'Plants, places and everyday details feed my personal illustration practice, <strong>Puntolineare</strong>.',note3_title:"Archives",note3_copy:"I like understanding how cultural material is organised, preserved and turned into something people can explore.",note4_title:"Learning",note4_copy:"I research, test, fail, adjust and try again. Curiosity is usually the thread connecting everything.",practice_eyebrow:"What I do",write_title:"I write to make ideas clear, engaging and worth following.",write_copy:"From album reviews to cultural features, I like finding an angle, doing the research and building a voice around it.",design_title:"I design to give ideas a visual language.",design_copy:"I work with colour, typography, illustration and layout to create communication that feels connected to the people and places behind it.",build_title:"I build when a story needs to become an experience.",build_copy:"Maps, knowledge graphs, interfaces and small digital experiments let me combine research, structure and interaction.",editorial_eyebrow:"Music journalism · Cultural writing · Interviews",editorial_title:"Editorial",editorial_intro:"Writing about music, independent culture and the way technology shapes how we discover and experience creative work.",ed1_type:"Cultural commentary · Music & technology",ed1_copy:"A social-first editorial piece exploring how recommendation algorithms, hype culture, FOMO and platform metrics shape music discovery and listening habits.",ed2_type:"Cultural feature · Local music scene",ed2_copy:"A feature on Bologna Estate, Porta Pratello Summerground and Rusco Music Festival, focused on accessibility, identity and community-building in independent cultural spaces.",ed3_type:"Long-form review · Music criticism",ed3_copy:"A long-form review reading the album’s punk and emo influences through themes of belonging, resistance and the tension between leaving and remaining in Southern Italy.",ed4_type:"Artist interview · Editorial profile",ed4_copy:"An interview and editorial profile of Irossa, exploring their influences, their relationship with the Italian independent scene and the space available to alternative sounds.",view_post:"View published post ↗",visual_eyebrow:"Identity · Illustration · Event communication",visual_title:"Visual",visual_intro:"Posters, identities and illustrations built around music, independent culture and playful visual systems.",vis1_copy:"A playful identity built around a curious frog, handmade lettering, botanical imagery and applications for print, social media and merchandise.",vis2_copy:"An evolving poster series translating each event’s sound and audience into a different visual language.",vis3_copy:"My personal illustration practice: observational drawings, natural forms, characters and small visual experiments.",digital_eyebrow:"Web design · Digital humanities",digital_title:'Ideas that live<br><em>on the web.</em>',digital_intro:"Interactive projects connecting cultural heritage, research, storytelling and interface design.",dig1_copy:"A virtual museum that turns movie locations into an explorable cultural experience through interactive mapping and location-based storytelling.",dig2_copy:"An individual project transforming research into an interactive article, entity explorer and RDF knowledge representation.",dig3_copy:"A hybrid exhibition concept on Italian Pride history, combining archival research, physical space and interactive media.",dig4_copy:"A collaborative project representing and enriching Renaissance cultural heritage information through RDF, SPARQL and a public web interface.",contact_eyebrow:"Have a project, a gig or an idea?",contact_title:'Let’s make<br>something <em>alive.</em>',footer_text:"Words, colour, noise & code in Bologna."},it:{nav_intro:"Chi sono",nav_practice:"Cosa faccio",nav_editorial:"Editorial",nav_visual:"Visual",nav_digital:"Digital",nav_contact:"Contatti",intro_eyebrow:"Ciao, sono Alice · Bologna, Italia",intro_title:'Scrivere, progettare<br>e costruire con<br><em>curiosità.</em>',intro_lead:"Sono una creativa multidisciplinare e studentessa di Digital Humanities, tra scrittura editoriale, comunicazione visiva e progetti digitali interattivi.",intro_body:"Mi interessano la cultura indipendente, la musica dal vivo, il patrimonio culturale e quei piccoli dettagli che danno identità ai luoghi e alle comunità. Mi piace imparare facendo, e gran parte del mio lavoro nasce da ricerca, curiosità e da una domanda che voglio seguire.",note1_title:"Musica",note1_copy:"Nuovi suoni, piccoli spazi e scene indipendenti diventano spesso il punto di partenza dei miei lavori di scrittura e design.",note2_title:"Disegno",note2_copy:'Piante, luoghi e dettagli quotidiani alimentano la mia pratica personale di illustrazione, <strong>Puntolineare</strong>.',note3_title:"Archivi",note3_copy:"Mi piace capire come i materiali culturali vengono organizzati, conservati e trasformati in qualcosa che le persone possano esplorare.",note4_title:"Imparare",note4_copy:"Ricerco, provo, sbaglio, correggo e riprovo. La curiosità è quasi sempre il filo che collega tutto.",practice_eyebrow:"Cosa faccio",write_title:"Scrivo per rendere le idee chiare, coinvolgenti e degne di essere seguite.",write_copy:"Dalle recensioni di album agli approfondimenti culturali, mi piace trovare un taglio, fare ricerca e costruire una voce.",design_title:"Progetto per dare alle idee un linguaggio visivo.",design_copy:"Lavoro con colore, tipografia, illustrazione e layout per creare una comunicazione legata alle persone e ai luoghi che la generano.",build_title:"Costruisco quando una storia ha bisogno di diventare un’esperienza.",build_copy:"Mappe, knowledge graph, interfacce e piccoli esperimenti digitali mi permettono di unire ricerca, struttura e interazione.",editorial_eyebrow:"Giornalismo musicale · Scrittura culturale · Interviste",editorial_title:"Editorial",editorial_intro:"Scrittura su musica, cultura indipendente e su come la tecnologia influenza il modo in cui scopriamo e viviamo il lavoro creativo.",ed1_type:"Commento culturale · Musica e tecnologia",ed1_copy:"Un contenuto editoriale social-first su come algoritmi di raccomandazione, hype, FOMO e metriche delle piattaforme influenzano la scoperta musicale e le abitudini di ascolto.",ed2_type:"Approfondimento culturale · Scena musicale locale",ed2_copy:"Un articolo su Bologna Estate, Porta Pratello Summerground e Rusco Music Festival, con un focus su accessibilità, identità e costruzione di comunità negli spazi culturali indipendenti.",ed3_type:"Recensione lunga · Critica musicale",ed3_copy:"Una recensione lunga che legge le influenze punk ed emo dell’album attraverso i temi dell’appartenenza, della resistenza e della tensione tra partire e restare nel Sud Italia.",ed4_type:"Intervista · Profilo editoriale",ed4_copy:"Un’intervista e profilo editoriale degli Irossa, sulle loro influenze, sul rapporto con la scena indipendente italiana e sullo spazio disponibile per i suoni alternativi.",view_post:"Vedi il post pubblicato ↗",visual_eyebrow:"Identità · Illustrazione · Comunicazione eventi",visual_title:"Visual",visual_intro:"Poster, identità e illustrazioni costruiti intorno a musica, cultura indipendente e sistemi visivi giocosi.",vis1_copy:"Un’identità giocosa costruita attorno a una rana curiosa, lettering disegnato a mano, elementi botanici e applicazioni per stampa, social e merchandise.",vis2_copy:"Una serie di poster in evoluzione che traduce il suono e il pubblico di ogni evento in un linguaggio visivo diverso.",vis3_copy:"La mia pratica personale di illustrazione: disegno dal vero, forme naturali, personaggi e piccoli esperimenti visivi.",digital_eyebrow:"Web design · Digital humanities",digital_title:'Idee che vivono<br><em>sul web.</em>',digital_intro:"Progetti interattivi che collegano patrimonio culturale, ricerca, storytelling e design delle interfacce.",dig1_copy:"Un museo virtuale che trasforma le location cinematografiche in un’esperienza culturale esplorabile attraverso mappe interattive e storytelling legato ai luoghi.",dig2_copy:"Un progetto individuale che trasforma la ricerca in un articolo interattivo, un esploratore di entità e una rappresentazione della conoscenza in RDF.",dig3_copy:"Un concept di mostra ibrida sulla storia del Pride italiano, tra ricerca archivistica, spazio fisico e media interattivi.",dig4_copy:"Un progetto collaborativo che rappresenta e arricchisce informazioni sul patrimonio rinascimentale attraverso RDF, SPARQL e un’interfaccia web pubblica.",contact_eyebrow:"Hai un progetto, un concerto o un’idea?",contact_title:'Facciamo qualcosa<br>di <em>vivo.</em>',footer_text:"Parole, colore, rumore e codice a Bologna."}};
function setLanguage(lang){const dict=translations[lang]||translations.en;document.documentElement.lang=lang;document.querySelectorAll('[data-i18n]').forEach(el=>{const k=el.dataset.i18n;if(dict[k]!==undefined)el.textContent=dict[k]});document.querySelectorAll('[data-i18n-html]').forEach(el=>{const k=el.dataset.i18nHtml;if(dict[k]!==undefined)el.innerHTML=dict[k]});document.querySelectorAll('.lang-btn').forEach(btn=>{const active=btn.dataset.lang===lang;btn.classList.toggle('active',active);btn.setAttribute('aria-pressed',String(active))});localStorage.setItem('portfolio-language',lang);updatePracticeCopy()}
document.querySelectorAll('.lang-btn').forEach(btn=>btn.addEventListener('click',()=>setLanguage(btn.dataset.lang)));
const menuButton=document.querySelector('.menu-toggle');const nav=document.querySelector('#site-nav');menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',open)});nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false')}));
const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;const revealObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('is-visible')})},{threshold:.14,rootMargin:'0px 0px -8% 0px'});document.querySelectorAll('.reveal,.reveal-title').forEach(el=>{if(reduceMotion)el.classList.add('is-visible');else revealObserver.observe(el)});
const practiceWord=document.querySelector('#practice-word');const practiceCopy=document.querySelector('#practice-subcopy');let activeStep=document.querySelector('.story-step');function updatePracticeCopy(){if(!activeStep)return;const lang=document.documentElement.lang||'en';practiceWord.textContent=activeStep.dataset.word;practiceCopy.textContent=lang==='it'?activeStep.dataset.copyIt:activeStep.dataset.copyEn}
const stepObserver=new IntersectionObserver(entries=>{const visible=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];if(!visible)return;document.querySelectorAll('.story-step').forEach(el=>el.classList.remove('active'));activeStep=visible.target;activeStep.classList.add('active');updatePracticeCopy()},{threshold:[.35,.5,.65],rootMargin:'-18% 0px -35% 0px'});document.querySelectorAll('.story-step').forEach(step=>stepObserver.observe(step));
const saved=localStorage.getItem('portfolio-language');const browserLang=navigator.language?.toLowerCase().startsWith('it')?'it':'en';setLanguage(saved||browserLang);document.querySelector('#year').textContent=new Date().getFullYear();

const closingScene = document.querySelector(".closing-scene");
const closingTitle = closingScene?.querySelector(".reveal-title");
if (closingScene && closingTitle && !reduceMotion) {
  const closingObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) closingTitle.classList.add("is-visible");
    });
  }, { threshold: 0.01, rootMargin: "15% 0px 15% 0px" });
  closingObserver.observe(closingScene);
}



// Custom cursor
const cursor = document.querySelector(".custom-cursor");

if (cursor && window.matchMedia("(hover:hover) and (pointer:fine)").matches) {
  const dot = cursor.querySelector(".cursor-dot");
  const ring = cursor.querySelector(".cursor-ring");

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;
  let cursorFrame;

  const renderCursor = () => {
    ringX += (mouseX - ringX) * 0.16;
    ringY += (mouseY - ringY) * 0.16;

    dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
    ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;

    cursorFrame = requestAnimationFrame(renderCursor);
  };

  document.addEventListener("pointermove", event => {
    mouseX = event.clientX;
    mouseY = event.clientY;
    cursor.classList.add("is-active");

    const target = event.target;
    const interactive = target.closest("a, button, [role='button']");
    cursor.classList.toggle("is-link", Boolean(interactive));

    const darkSection = target.closest(".practice, .digital-section, .feature-violet");
    cursor.classList.toggle("is-dark", Boolean(darkSection));
  }, { passive:true });

  document.addEventListener("pointerleave", () => {
    cursor.classList.remove("is-active");
  });

  document.addEventListener("pointerenter", () => {
    cursor.classList.add("is-active");
  });

  renderCursor();

  window.addEventListener("beforeunload", () => {
    cancelAnimationFrame(cursorFrame);
  });
}
