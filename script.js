const megaMenu = document.getElementById("megaMenu");
function menuItem(title, desc, icon) {
    return `
    <a href="#" class="menu-item">
      <div class="icon-box">
        <i class="fa-solid ${icon}"></i>
      </div>
      <div class="item-text">
        <span class="title">${title}</span>
        <span class="desc">${desc}</span>
      </div>
    </a>
  `;
}
const menus = {
    products: `
    <div class="menu-column">
      <h4>AI Cloud</h4>

      ${menuItem("v0", "Build applications with AI", "fa-terminal")}
      ${menuItem("AI SDK", "The AI Toolkit for TypeScript", "fa-cube")}
      ${menuItem("AI Gateway", "One endpoint, all your models", "fa-wand-magic-sparkles")}
      ${menuItem("Vercel Agent", "An agent that knows your stack", "fa-sitemap")}
      ${menuItem("Sandbox", "AI workflows in live environments", "fa-box-open")}
    </div>

    <div class="menu-column">
      <h4>Core Platform</h4>

      ${menuItem("CI/CD", "Helping teams ship 6x faster", "fa-code-branch")}
      ${menuItem("Content Delivery", "Fast, scalable, and reliable", "fa-globe")}
      ${menuItem("Fluid Compute", "Servers, in serverless form", "fa-microchip")}
      ${menuItem("Observability", "Trace every step", "fa-chart-bar")}
    </div>

    <div class="menu-column">
      <h4>Security</h4>

      ${menuItem("Bot Management", "Scalable bot protection", "fa-robot")}
      ${menuItem("BotID", "Invisible CAPTCHA", "fa-fingerprint")}
      ${menuItem("Platform Security", "DDoS Protection, Firewall", "fa-shield-alt")}
      ${menuItem("Web Application Firewall", "Granular, custom protection", "fa-server")}
    </div>
  `,

    resources: `
    <div class="menu-column">
      <h4>Company</h4>

      ${menuItem("Customers", "Trusted by the best teams", "fa-face-smile")}
      ${menuItem("Blog", "The latest posts and changes", "fa-pen-nib")}
      ${menuItem("Changelog", "See what shipped", "fa-list-alt")}
      ${menuItem("Press", "Read the latest news", "fa-briefcase")}
      ${menuItem("Events", "Join us at an event", "fa-calendar-days")}
    </div>

    <div class="menu-column">
      <h4>Learn</h4>

      ${menuItem("Docs", "Vercel documentation", "fa-book")}
      ${menuItem("Academy", "Linear courses to level up", "fa-pen")}
      ${menuItem("Knowledge Base", "Find help quickly", "fa-book-open")}
      ${menuItem("Community", "Join the conversation", "fa-user-group")}
    </div>

    <div class="menu-column">
      <h4>Open Source</h4>

      ${menuItem("Next.js", "The native Next.js platform", "fa-bolt")}
      ${menuItem("Nuxt", "The progressive web framework", "fa-leaf")}
      ${menuItem("Svelte", "The web's efficient UI framework", "fa-fire")}
      ${menuItem("Turborepo", "Speed with Enterprise scale", "fa-circle-notch")}
    </div>
  `,

    solutions: `
    <div class="menu-column">
      <h4>Use Cases</h4>

      ${menuItem("AI Apps", "Deploy at the speed of AI", "fa-wand-magic-sparkles")}
      ${menuItem("Composable Commerce", "Power storefronts that convert", "fa-store")}
      ${menuItem("Marketing Sites", "Launch campaigns fast", "fa-chart-line")}
      ${menuItem("Multi-tenant Platforms", "Scale apps with one codebase", "fa-layer-group")}
      ${menuItem("Web Apps", "Ship features, not infrastructure", "fa-window-maximize")}
    </div>

    <div class="menu-column">
      <h4>Tools</h4>

      ${menuItem("Marketplace", "Extend and automate workflows", "fa-folder-open")}
      ${menuItem("Templates", "Jumpstart app development", "fa-object-group")}
      ${menuItem("Partner Finder", "Get help from solution partners", "fa-compass")}
    </div>

    <div class="menu-column">
      <h4>Users</h4>

      ${menuItem("Platform Engineers", "Automate away repetition", "fa-wrench")}
      ${menuItem("Design Engineers", "Deploy for every idea", "fa-palette")}
    </div>
  `
};

document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("mouseenter", () => {
        megaMenu.innerHTML = menus[link.dataset.menu];
        megaMenu.classList.add("active");
    });
});

document.querySelector(".navbar").addEventListener("mouseleave", () => {
    megaMenu.classList.remove("active");
});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".center");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});