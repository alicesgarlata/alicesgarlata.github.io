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
