// ===== Data =====
const skills = ["Python", "JavaScript", "C#", "HTML", "CSS", "Arduino", "Raspberry Pi", "SQL", "Excel"];
const hobbies = ["Gaming", "Programming", "Reading", "Swimming"];
const projects = [
  {
    title: "Home CO2 Sensor System",
    description: "A monitoring system for home CO2 levels and online dashboard for tracking.",
    image: "https://raw.githubusercontent.com/Felnoodle/browser-programming-template/main/lecture-05-dom-data/co2sensor.jpg",
    link: "https://app.arduino.cc/things/9fa9bd69-2150-4970-9b22-ed114f078ffb/sketch",
    tags: ["Arduino", "IoT", "Dashboard"],
  },
  {
    title: "Memory Game",
    description: "A simple memory game built with C#.",
    image: "https://raw.githubusercontent.com/Felnoodle/browser-programming-template/main/lecture-05-dom-data/memorygame.png",
    link: "https://github.com/felnoodle/MemoryGame",
    tags: ["C#", "Game Dev"],
  },
];

// ===== Populate Skills =====
const skillContainer = document.getElementById("skill-tags");
skills.forEach(function (skill) {
  const span = document.createElement("span");
  span.className = "skill-tag";
  span.textContent = skill;
  skillContainer.appendChild(span);
});

// ===== Populate Hobbies =====
const hobbyList = document.getElementById("hobby-list");
hobbies.forEach(function (hobby) {
  const li = document.createElement("li");
  li.className = "hobby-item";
  li.innerHTML = '<span class="hobby-dot"></span>' + hobby;
  hobbyList.appendChild(li);
});

// ===== Populate Projects =====
const projectsGrid = document.getElementById("projects-grid");
projects.forEach(function (project) {
  const card = document.createElement("a");
  card.href = project.link;
  card.target = "_blank";
  card.rel = "noopener noreferrer";
  card.className = "project-card fade-in";

  var tagsHTML = "";
  project.tags.forEach(function (tag) {
    tagsHTML += '<span class="project-tag">' + tag + "</span>";
  });

  card.innerHTML =
    '<div class="project-card-img"><img src="' + project.image + '" alt="' + project.title + '" /></div>' +
    '<div class="project-card-body">' +
    "<h3>" + project.title + "</h3>" +
    "<p>" + project.description + "</p>" +
    '<div class="project-tags">' + tagsHTML + "</div>" +
    "</div>";

  projectsGrid.appendChild(card);
});

// ===== Footer Year =====
var footerText = document.getElementById("footer-text");
footerText.textContent = "\u00A9 " + new Date().getFullYear() + " Joni Dunkel. All rights reserved.";

// ===== Scroll Fade-In =====
var fadeEls = document.querySelectorAll(".fade-in");

var observer = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1 }
);

fadeEls.forEach(function (el) {
  observer.observe(el);
});
