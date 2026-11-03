// ===== Data =====
// To add a project, add an object here. `demo` and `source` are optional;
// each one that is set becomes a button on the card.
const skills = ["Python", "JavaScript", "C#", "Android", "Unity", "HTML", "CSS", "SQL", "MQTT", "Arduino", "Raspberry Pi", "Git", "Excel"];
const hobbies = ["Gaming", "Programming", "Reading", "Swimming"];
const projects = [
  {
    title: "Predictive Maintenance Dashboard",
    status: "Group project",
    description:
      "IoT system that turns live sensor data into health scores, alerts and remaining-life estimates, shown in a dashboard where technicians prioritise maintenance and dispatch work orders.",
    role: "Built the Streamlit dashboard and led development of the live MQTT data pipeline, the remaining-useful-life model and the work-order flow, using Claude Code for AI-assisted development.",
    image: "images/pdm-dashboard.svg",
    demo: "https://predictive-maintenance-dashboard-3ldxwrb9s9av4egmvykm9k.streamlit.app",
    source: "https://github.com/AhmedGoda1/Predictive-Maintenance-Dashboard",
    tags: ["Python", "Streamlit", "MQTT", "SQLite", "Machine Learning"],
  },
  {
    title: "Turn-Based Unity RPG",
    status: "In development",
    description: "Solo project.",
    image: "images/tbproject.svg",
    source: "https://github.com/Felnoodle/TBProject",
    tags: ["Unity", "C#", "Game Dev"],
  },
  {
    title: "Home CO2 Sensor System",
    description: "A sensor that monitors CO2 levels at home, with an online dashboard for tracking them over time.",
    image: "images/co2sensor.jpg",
    source: "https://app.arduino.cc/things/9fa9bd69-2150-4970-9b22-ed114f078ffb/sketch",
    sourceLabel: "Arduino Cloud",
    tags: ["Arduino", "IoT", "Dashboard"],
  },
  {
    title: "Memory Game",
    description: "A card-matching memory game built with C#.",
    image: "images/memorygame.png",
    source: "https://github.com/felnoodle/MemoryGame",
    tags: ["C#", "Game Dev"],
  },
];

// ===== Helpers =====
function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

function linkButton(href, label, primary) {
  const a = el("a", "btn btn-small " + (primary ? "btn-primary" : "btn-outline"), label);
  a.href = href;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  return a;
}

// ===== Populate Skills =====
const skillContainer = document.getElementById("skill-tags");
skills.forEach(function (skill) {
  const li = el("li", "skill-tag", skill);
  skillContainer.appendChild(li);
});

// ===== Populate Hobbies =====
const hobbyList = document.getElementById("hobby-list");
hobbies.forEach(function (hobby) {
  const li = el("li", "hobby-item");
  li.appendChild(el("span", "hobby-dot"));
  li.appendChild(document.createTextNode(hobby));
  hobbyList.appendChild(li);
});

// ===== Populate Projects =====
const projectsGrid = document.getElementById("projects-grid");
projects.forEach(function (project) {
  const card = el("article", "project-card fade-in");

  const imgWrap = el("div", "project-card-img");
  const img = document.createElement("img");
  img.src = project.image;
  img.alt = "Preview of " + project.title;
  img.loading = "lazy";
  img.width = 640;
  img.height = 360;
  imgWrap.appendChild(img);
  card.appendChild(imgWrap);

  const body = el("div", "project-card-body");
  if (project.status) body.appendChild(el("span", "project-status", project.status));
  body.appendChild(el("h3", null, project.title));
  body.appendChild(el("p", null, project.description));
  if (project.role) {
    const role = el("p", "project-role");
    role.appendChild(el("strong", null, "My part: "));
    role.appendChild(document.createTextNode(project.role));
    body.appendChild(role);
  }

  const tags = el("ul", "project-tags");
  tags.setAttribute("aria-label", "Technologies");
  project.tags.forEach(function (tag) {
    tags.appendChild(el("li", "project-tag", tag));
  });
  body.appendChild(tags);

  const links = el("div", "project-links");
  if (project.demo) links.appendChild(linkButton(project.demo, "Live demo", true));
  if (project.source) links.appendChild(linkButton(project.source, project.sourceLabel || "Source code", !project.demo));
  body.appendChild(links);

  card.appendChild(body);
  projectsGrid.appendChild(card);
});

// ===== Footer Year =====
document.getElementById("footer-year").textContent = new Date().getFullYear();

// ===== Scroll Fade-In =====
// Content is visible by default; the fade only applies once JS has run,
// so the page still works if the script fails or animations are reduced.
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (!reduceMotion && "IntersectionObserver" in window) {
  document.documentElement.classList.add("js-fade");
  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  document.querySelectorAll(".fade-in").forEach(function (node) {
    observer.observe(node);
  });
}
