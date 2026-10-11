import './portfolio.css'
import portraitUrl from '../bhattu27.png'

// Replace this value with your GitHub handle to show your real repositories.
const GITHUB_USERNAME = 'Aayushbhattu'

const icon = (name, className = '') => {
  const paths = {
    arrow: '<path d="M7 17 17 7M7 7h10v10"/>',
    github: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    message: '<path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8A8.5 8.5 0 0 1 8.7 3.9a8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8z"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    pin: '<path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
  }
  return `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name]}</svg>`
}

document.querySelector('#app').innerHTML = `
  <header class="site-header">
    <a class="wordmark" href="#home" aria-label="Home">dev<span>folio</span><i>.</i></a>
    <button class="menu-toggle" aria-label="Open navigation" aria-expanded="false">${icon('menu')}</button>
    <nav class="nav-links" aria-label="Main navigation">
      <a href="#about">About</a><a href="#work">What I do</a><a href="#projects">Projects</a>
      <a class="nav-contact" href="#contact">Let’s talk ${icon('arrow')}</a>
    </nav>
  </header>

  <main>
    <section class="hero section-shell" id="home">
      <div class="hero-copy">
        <p class="eyebrow"><span class="status-dot"></span> AVAILABLE FOR OPPORTUNITIES</p>
        <h1>Hi, I’m <span class="name-highlight">Aayush Bhandari</span>.<br>I build things for <span class="serif-accent">the real world.</span></h1>
        <p class="hero-summary">A recent IT graduate and developer building user-friendly web and mobile apps with Laravel, React Native, and connected-device technologies.</p>
        <div class="hero-actions">
          <a class="button button-primary" href="#projects">Explore my work ${icon('arrow')}</a>
          <a class="button button-quiet" href="#contact">Get in touch ${icon('arrow')}</a>
        </div>
        <div class="hero-meta">${icon('pin')} <span>Based in <strong>Pokhara-7, Nepal</strong></span><span class="meta-divider"></span><span>Open to remote work</span></div>
      </div>
      <div class="hero-art">
        <div class="art-orbit orbit-one"></div><div class="art-orbit orbit-two"></div>
        <div class="art-sun"></div>
        <div class="portrait-frame"><img src="${portraitUrl}" alt="Portrait of Aayush Bhandari" fetchpriority="high" /></div>
        <div class="art-label label-mobile"><span>✳</span> MOBILE</div><div class="art-label label-iot"><span>⌁</span> IOT</div>
        <div class="portrait-caption">Aayush Bhandari <span>— Developer</span></div>
      </div>
      <a class="scroll-cue" href="#about"><span></span> SCROLL TO EXPLORE</a>
    </section>

    <section class="intro-band" id="about"><div class="section-shell intro-inner"><p class="eyebrow">A LITTLE ABOUT ME</p><p class="intro-statement">Curiosity first.<br><span>Code with purpose.</span></p><div class="intro-detail"><p>I’m Aayush, a recent IT graduate from Pokhara, Nepal. I enjoy building efficient, user-friendly web and mobile apps—from Laravel and database-backed platforms to React Native experiences—and keep learning with every project.</p><a class="text-link" href="#experience">Explore my experience ${icon('arrow')}</a></div></div></section>

    <section class="services section-shell" id="work"><div class="section-heading"><div><p class="eyebrow">WHAT I’M INTO</p><h2>Different devices.<br><span>One curious mind.</span></h2></div><p class="heading-note">I like working across the stack—from the first screen tap to the systems behind it.</p></div>
      <div class="service-grid">
        <article class="service-card"><div class="service-number">01 / MOBILE</div><div class="service-symbol symbol-mobile">▯</div><h3>Mobile app development</h3><p>Cross-platform app experiences made to feel clear, useful, and at home on your phone.</p><div class="tag-list"><span>React Native</span><span>Mobile UI</span></div></article>
        <article class="service-card"><div class="service-number">02 / WEB</div><div class="service-symbol symbol-web">⌘</div><h3>Web applications</h3><p>Practical web tools with thoughtful interfaces, backed by reliable application logic.</p><div class="tag-list"><span>Laravel</span><span>PHP</span><span>Web</span></div></article>
        <article class="service-card"><div class="service-number">03 / CONNECTED</div><div class="service-symbol symbol-iot">⌁</div><h3>IoT &amp; experiments</h3><p>Exploring how software and connected devices can work together in everyday life.</p><div class="tag-list"><span>IoT</span><span>Prototyping</span></div></article>
      </div>
    </section>

    <section class="experience-section" id="experience"><div class="section-shell experience-inner"><div class="section-heading"><div><p class="eyebrow">THE PATH SO FAR</p><h2>Learning by <span>building.</span></h2></div><p class="heading-note">A few projects and milestones from my journey in software development.</p></div><div class="experience-columns"><div class="timeline-block"><h3 class="column-label">PROJECT EXPERIENCE</h3><article class="timeline-item"><span class="timeline-year">2026</span><div><h4>Futsal Mate</h4><p>Built a React Native social sports app for court reservations, team matchmaking, and community engagement, with real-time sync to help prevent booking conflicts.</p><span class="timeline-tech">React Native · Real-time data</span></div></article><article class="timeline-item"><span class="timeline-year">2025</span><div><h4>E-commerce website</h4><p>Built an e-commerce solution with a shopping cart, product management, billing, and an admin CMS.</p><span class="timeline-tech">Web · CMS · Billing</span></div></article><article class="timeline-item"><span class="timeline-year">2024</span><div><h4>Web-based chatting system</h4><p>Created a real-time chat platform with file sharing and user communication features.</p><span class="timeline-tech">Laravel · AJAX · jQuery · MySQL</span></div></article><article class="timeline-item"><span class="timeline-year">2023</span><div><h4>Pharmacy management system</h4><p>Developed a system for managing pharmacy inventory, billing, and reports.</p><span class="timeline-tech">Inventory · Billing · Reporting</span></div></article></div><aside class="education-block"><h3 class="column-label">EDUCATION</h3><article class="education-card"><span class="education-mark">01</span><h4>Bachelor of Information Technology</h4><p class="education-institution">Gandaki University</p><div class="education-row"><span>Study period</span><strong>2023–2026</strong></div></article><article class="education-card"><span class="education-mark">02</span><h4>Global Collegiate School</h4><div class="education-row"><span>NEB</span><strong>2019–2021 · B+ GPA</strong></div><div class="education-row"><span>School Level</span><strong>2006–2018 · A GPA</strong></div></article><div class="skills-block"><h3 class="column-label">TOOLS &amp; TECHNOLOGIES</h3><div class="skill-tags"><span>Laravel</span><span>PHP</span><span>React</span><span>React Native</span><span>JavaScript</span><span>HTML</span><span>CSS</span><span>Tailwind CSS</span><span>MySQL</span><span>Bash</span><span>IoT</span></div></div></aside></div></div></section>

    <section class="projects-section" id="projects"><div class="section-shell projects-inner"><div class="section-heading"><div><p class="eyebrow">FROM MY GITHUB</p><h2>Things I’ve <span>been building.</span></h2></div><a class="text-link github-profile-link" href="#contact">View GitHub profile ${icon('arrow')}</a></div><div id="project-list" class="project-grid" aria-live="polite"><div class="project-loading"><span class="loading-dot"></span>Loading public repositories…</div></div></div></section>

    <section class="contact-section section-shell" id="contact"><div class="contact-panel"><div class="contact-content"><p class="eyebrow">HAVE A GOOD ONE IN MIND?</p><h2>Let’s make<br><span>it happen.</span></h2><p>I’m keen to learn, collaborate, and take on new challenges. If you have a project or opportunity in mind, I’d love to hear from you.</p><div class="contact-actions"><a class="button button-light" href="mailto:aayushbhandari151@gmail.com">${icon('mail')} Email me ${icon('arrow')}</a><a class="button button-whatsapp" href="https://wa.me/9779804195168" target="_blank" rel="noreferrer">${icon('message')} WhatsApp me ${icon('arrow')}</a></div></div><div class="contact-decoration" aria-hidden="true"><div class="contact-ring ring-a"></div><div class="contact-ring ring-b"></div><span>✳</span></div></div></section>
  </main>
  <footer class="site-footer section-shell"><a class="wordmark" href="#home">dev<span>folio</span><i>.</i></a><p>Designed with curiosity <span>✳</span> Built for what’s next.</p><p>© <span id="year"></span> Aayush Bhandari</p></footer>
`

const username = GITHUB_USERNAME.trim()
const profileLink = document.querySelector('.github-profile-link')
const projectList = document.querySelector('#project-list')
document.querySelector('#year').textContent = new Date().getFullYear()

profileLink.href = `https://github.com/${username}`
profileLink.target = '_blank'
profileLink.rel = 'noreferrer'

const featuredProjects = [
  {
    name: 'futsal-mate-mobile',
    description: 'A mobile app project for making futsal easier to organize and enjoy.',
    language: 'TypeScript',
  },
  {
    name: 'ESP32_QR_Payment_Display',
    description: 'An IoT project exploring QR-code payment display with an ESP32.',
    language: 'IoT',
  },
  {
    name: 'chatting-system',
    description: 'A web-based chatting system built with Laravel and PHP.',
    language: 'PHP',
  },
]

projectList.innerHTML = featuredProjects.map((project, index) => `
  <article class="project-card">
    <div class="project-card-top"><span class="project-index">0${index + 1}</span>${icon('github', 'project-github')}</div>
    <h3>${escapeHTML(project.name.replaceAll('-', ' ').replaceAll('_', ' '))}</h3>
    <p>${escapeHTML(project.description)}</p>
    <div class="project-card-bottom"><span class="repo-language"><i style="--language-color:${languageColor(project.language)}"></i>${escapeHTML(project.language)}</span><a href="https://github.com/${username}/${encodeURIComponent(project.name)}" target="_blank" rel="noreferrer" aria-label="View ${escapeHTML(project.name)} on GitHub">View project ${icon('arrow')}</a></div>
  </article>`).join('')

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character])
}

function languageColor(language) {
  const colors = { JavaScript: '#f1c40f', TypeScript: '#3178c6', PHP: '#8892bf', Dart: '#00b4ab', Python: '#3572a5', HTML: '#e34c26', CSS: '#563d7c' }
  return colors[language] || '#a4b09f'
}

const menuToggle = document.querySelector('.menu-toggle')
const navLinks = document.querySelector('.nav-links')
menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true'
  menuToggle.setAttribute('aria-expanded', String(!isOpen))
  menuToggle.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation')
  navLinks.classList.toggle('is-open', !isOpen)
})
navLinks.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    menuToggle.setAttribute('aria-expanded', 'false')
    menuToggle.setAttribute('aria-label', 'Open navigation')
    navLinks.classList.remove('is-open')
  }
})
