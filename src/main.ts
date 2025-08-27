// main.ts - Replace your main.ts with this
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="matrix-bg">
      <div class="matrix-rain" *ngFor="let drop of matrixDrops; trackBy: trackByFn" 
           [style.left.px]="drop.x" 
           [style.animation-delay]="drop.delay + 's'">
        {{ drop.char }}
      </div>
    </div>

    <nav class="navbar">
      <div class="nav-container">
        <div class="logo">
          <span class="glitch" data-text="DEV.MATRIX">&lt;DEV.MATRIX/&gt;</span>
        </div>
        <div class="nav-links">
          <a href="#about" class="nav-link" (click)="scrollTo('about')">ABOUT</a>
          <a href="#skills" class="nav-link" (click)="scrollTo('skills')">SKILLS</a>
          <a href="#projects" class="nav-link" (click)="scrollTo('projects')">PROJECTS</a>
          <a href="#contact" class="nav-link" (click)="scrollTo('contact')">CONTACT</a>
        </div>
      </div>
    </nav>

    <main class="main-content">
      <!-- Hero Section -->
      <section class="hero" id="hero">
        <div class="hero-content">
          <div class="hero-text">
            <h1 class="hero-title">
              <span class="typing-text">{{ typedText }}</span>
              <span class="cursor" [class.blink]="showCursor">|</span>
            </h1>
            <p class="hero-subtitle">Frontend Developer | 4+ Years Experience</p>
            <p class="hero-description">Crafting digital experiences with Angular, JavaScript & modern web technologies</p>
            <div class="hero-actions">
              <button class="btn-primary" (click)="scrollTo('projects')">
                <span>VIEW PROJECTS</span>
              </button>
              <button class="btn-secondary" (click)="scrollTo('contact')">
                <span>GET IN TOUCH</span>
              </button>
            </div>
          </div>
          <div class="hero-visual">
            <div class="terminal">
              <div class="terminal-header">
                <div class="terminal-controls">
                  <span class="control close"></span>
                  <span class="control minimize"></span>
                  <span class="control maximize"></span>
                </div>
                <span class="terminal-title">developer&#64;matrix:~$</span>
              </div>
              <div class="terminal-body">
                <div class="terminal-line" *ngFor="let line of terminalLines; let i = index" 
                     [style.animation-delay]="(i * 0.5) + 's'">
                  <span class="prompt">$</span> {{ line }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- About Section -->
      <section class="section" id="about">
        <div class="container">
          <h2 class="section-title">
            <span class="section-number">01.</span>
            About Me
          </h2>
          <div class="about-content">
            <div class="about-text">
              <div class="glass-card">
                <p>With 4+ years of experience in frontend development, I specialize in creating dynamic and responsive web applications using Angular, JavaScript, HTML, and CSS.</p>
                <p>I'm passionate about clean code, user experience, and staying current with the latest web technologies. My goal is to build applications that not only look great but also provide seamless functionality.</p>
                <div class="stats">
                  <div class="stat">
                    <span class="stat-number">4+</span>
                    <span class="stat-label">Years Experience</span>
                  </div>
                  <div class="stat">
                    <span class="stat-number">50+</span>
                    <span class="stat-label">Projects Completed</span>
                  </div>
                  <div class="stat">
                    <span class="stat-number">100%</span>
                    <span class="stat-label">Client Satisfaction</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Skills Section -->
      <section class="section" id="skills">
        <div class="container">
          <h2 class="section-title">
            <span class="section-number">02.</span>
            Tech Stack
          </h2>
          <div class="skills-grid">
            <div class="skill-card" *ngFor="let skill of skills">
              <div class="skill-icon">{{ skill.icon }}</div>
              <h3 class="skill-name">{{ skill.name }}</h3>
              <div class="skill-bar">
                <div class="skill-progress" [style.width.%]="skill.level"></div>
              </div>
              <span class="skill-level">{{ skill.level }}%</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Projects Section -->
      <section class="section" id="projects">
        <div class="container">
          <h2 class="section-title">
            <span class="section-number">03.</span>
            Featured Projects
          </h2>
          <div class="projects-grid">
            <div class="project-card" *ngFor="let project of projects">
              <div class="project-image">
                <div class="project-overlay">
                  <button class="project-btn">VIEW CODE</button>
                  <button class="project-btn">LIVE DEMO</button>
                </div>
              </div>
              <div class="project-info">
                <h3 class="project-title">{{ project.title }}</h3>
                <p class="project-description">{{ project.description }}</p>
                <div class="project-tech">
                  <span class="tech-tag" *ngFor="let tech of project.technologies">{{ tech }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section class="section" id="contact">
        <div class="container">
          <h2 class="section-title">
            <span class="section-number">04.</span>
            Get In Touch
          </h2>
          <div class="contact-content">
            <div class="contact-text">
              <div class="glass-card">
                <h3>Let's Build Something Amazing Together</h3>
                <p>I'm always interested in new opportunities and exciting projects. Whether you have a question or just want to say hi, feel free to reach out!</p>
                <div class="contact-info">
                  <div class="contact-item">
                    <span class="contact-icon">📧</span>
                    <span>your.email&#64;example.com</span>
                  </div>
                  <div class="contact-item">
                    <span class="contact-icon">💼</span>
                    <span>linkedin.com/in/yourprofile</span>
                  </div>
                  <div class="contact-item">
                    <span class="contact-icon">🔗</span>
                    <span>github.com/yourusername</span>
                  </div>
                </div>
                <button class="btn-primary contact-btn">
                  <span>SEND MESSAGE</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="footer">
      <div class="container">
        <p>&copy; 2025 Your Name. Built with Angular & Matrix vibes.</p>
      </div>
    </footer>
  `,
  styles: [
    `
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --primary-color: #00ff41;
  --secondary-color: #0066cc;
  --bg-color: #0d1117;
  --surface-color: #161b22;
  --text-color: #c9d1d9;
  --text-secondary: #8b949e;
  --accent-color: #00ff41;
  --glass-bg: rgba(22, 27, 34, 0.8);
  --glass-border: rgba(0, 255, 65, 0.2);
}

:host {
  display: block;
  font-family: 'Courier New', monospace;
  background: var(--bg-color);
  color: var(--text-color);
  line-height: 1.6;
  overflow-x: hidden;
  min-height: 100vh;
}

/* Matrix Background */
.matrix-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
}

.matrix-rain {
  position: absolute;
  top: -100px;
  font-family: 'Courier New', monospace;
  font-size: 18px;
  color: var(--primary-color);
  opacity: 0.3;
  animation: matrixFall 15s linear infinite;
}

@keyframes matrixFall {
  0% { transform: translateY(-100px); opacity: 1; }
  100% { transform: translateY(100vh); opacity: 0; }
}

/* Navigation */
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(13, 17, 23, 0.9);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--glass-border);
  z-index: 1000;
  padding: 1rem 0;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--primary-color);
}

.glitch {
  position: relative;
}

.glitch::before,
.glitch::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.glitch::before {
  animation: glitch-1 0.5s infinite;
  color: #ff0040;
  z-index: -1;
}

.glitch::after {
  animation: glitch-2 0.5s infinite;
  color: #00ffff;
  z-index: -2;
}

@keyframes glitch-1 {
  0%, 100% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
}

@keyframes glitch-2 {
  0%, 100% { transform: translate(0); }
  20% { transform: translate(2px, 2px); }
  40% { transform: translate(2px, -2px); }
  60% { transform: translate(-2px, 2px); }
  80% { transform: translate(-2px, -2px); }
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-link {
  color: var(--text-color);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  cursor: pointer;
}

.nav-link:hover {
  color: var(--primary-color);
}

.nav-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -5px;
  left: 0;
  background: var(--primary-color);
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

/* Main Content */
.main-content {
  margin-top: 80px;
}

.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 2rem;
}

.hero-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.hero-title {
  font-size: 3rem;
  font-weight: bold;
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.typing-text {
  display: inline-block;
}

.cursor {
  color: var(--primary-color);
  animation: blink 1s infinite;
}

.cursor.blink {
  animation: none;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

.hero-subtitle {
  font-size: 1.5rem;
  color: var(--secondary-color);
  margin-bottom: 1rem;
}

.hero-description {
  font-size: 1.1rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  line-height: 1.8;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
}

/* Terminal */
.terminal {
  background: rgba(13, 17, 23, 0.9);
  border: 1px solid var(--glass-border);
  border-radius: 10px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.terminal-header {
  background: rgba(22, 27, 34, 0.8);
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--glass-border);
}

.terminal-controls {
  display: flex;
  gap: 0.5rem;
}

.control {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.control.close { background: #ff5f56; }
.control.minimize { background: #ffbd2e; }
.control.maximize { background: #27ca3f; }

.terminal-title {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.terminal-body {
  padding: 1.5rem;
  min-height: 200px;
}

.terminal-line {
  margin-bottom: 0.5rem;
  opacity: 0;
  animation: fadeInUp 0.5s ease forwards;
}

.prompt {
  color: var(--primary-color);
  margin-right: 0.5rem;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Sections */
.section {
  padding: 5rem 2rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: var(--text-color);
}

.section-number {
  color: var(--primary-color);
  font-size: 1.5rem;
  margin-right: 1rem;
}

/* Glass Cards */
.glass-card {
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 15px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

/* About Section */
.about-content {
  display: grid;
  gap: 2rem;
}

.stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 2rem;
}

.stat {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 2rem;
  font-weight: bold;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.stat-label {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

/* Skills Section */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.skill-card {
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 15px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.skill-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 40px rgba(0, 255, 65, 0.2);
}

.skill-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.skill-name {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: var(--text-color);
}

.skill-bar {
  background: rgba(139, 148, 158, 0.2);
  border-radius: 10px;
  height: 8px;
  margin-bottom: 0.5rem;
  overflow: hidden;
}

.skill-progress {
  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
  height: 100%;
  border-radius: 10px;
  transition: width 1s ease-in-out;
}

.skill-level {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

/* Projects Section */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.project-card {
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 15px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 16px 50px rgba(0, 255, 65, 0.15);
}

.project-image {
  height: 200px;
  background: linear-gradient(135deg, var(--surface-color), rgba(0, 255, 65, 0.1));
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.project-overlay {
  display: flex;
  gap: 1rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.project-btn {
  background: var(--primary-color);
  color: var(--bg-color);
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}

.project-btn:hover {
  background: var(--secondary-color);
  transform: scale(1.05);
}

.project-info {
  padding: 1.5rem;
}

.project-title {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: var(--text-color);
}

.project-description {
  color: var(--text-secondary);
  margin-bottom: 1rem;
  line-height: 1.6;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  background: rgba(0, 255, 65, 0.2);
  color: var(--primary-color);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  border: 1px solid var(--glass-border);
}

/* Contact Section */
.contact-content {
  display: flex;
  justify-content: center;
}

.contact-text {
  max-width: 600px;
}

.contact-info {
  margin: 2rem 0;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  color: var(--text-secondary);
}

.contact-icon {
  font-size: 1.2rem;
}

.contact-btn {
  margin-top: 1rem;
}

/* Buttons */
.btn-primary, .btn-secondary {
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  overflow: hidden;
}

.btn-primary {
  background: var(--primary-color);
  color: var(--bg-color);
}

.btn-secondary {
  background: transparent;
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
}

.btn-primary:hover, .btn-secondary:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 255, 65, 0.4);
}

.btn-primary::before, .btn-secondary::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.btn-primary:hover::before, .btn-secondary:hover::before {
  left: 100%;
}

/* Footer */
.footer {
  background: rgba(13, 17, 23, 0.9);
  border-top: 1px solid var(--glass-border);
  padding: 2rem;
  text-align: center;
  color: var(--text-secondary);
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .hero-title {
    font-size: 2rem;
  }
  
  .nav-links {
    display: none;
  }
  
  .stats {
    grid-template-columns: 1fr;
  }
  
  .skills-grid {
    grid-template-columns: 1fr;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
  }
  
  .hero-actions {
    flex-direction: column;
    align-items: center;
  }
}

@media (max-width: 480px) {
  .nav-container {
    padding: 0 1rem;
  }
  
  .section {
    padding: 3rem 1rem;
  }
  
  .hero-title {
    font-size: 1.5rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
}
  `,
  ],
})
export class AppComponent implements OnInit {
  typedText = '';
  showCursor = true;
  private fullText = "HELLO, I'M A FRONTEND DEVELOPER";
  private typeIndex = 0;

  matrixDrops: any[] = [];

  terminalLines = [
    'npm install awesome-developer',
    'git clone experience.git',
    'cd frontend-mastery',
    'npm run build-dreams',
    '✓ Ready to create amazing things!',
  ];

  skills = [
    { name: 'Angular', icon: '🅰️', level: 90 },
    { name: 'JavaScript', icon: '🟨', level: 85 },
    { name: 'HTML5', icon: '🧡', level: 95 },
    { name: 'CSS3', icon: '🔵', level: 90 },
    { name: 'TypeScript', icon: '🔷', level: 80 },
    { name: 'Git', icon: '📱', level: 85 },
  ];

  projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'Modern e-commerce solution built with Angular featuring real-time updates and seamless user experience.',
      technologies: ['Angular', 'TypeScript', 'CSS3', 'API Integration'],
    },
    {
      title: 'Task Management App',
      description:
        'Collaborative task management application with drag-and-drop functionality and real-time collaboration.',
      technologies: ['Angular', 'JavaScript', 'HTML5', 'CSS3'],
    },
    {
      title: 'Portfolio Dashboard',
      description:
        'Interactive dashboard for portfolio management with data visualization and responsive design.',
      technologies: ['Angular', 'Charts.js', 'CSS Grid', 'API'],
    },
  ];

  ngOnInit() {
    this.initMatrixRain();
    this.startTypingEffect();
  }

  initMatrixRain() {
    const chars =
      '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    for (let i = 0; i < 50; i++) {
      this.matrixDrops.push({
        x:
          Math.random() *
          (typeof window !== 'undefined' ? window.innerWidth : 1200),
        char: chars[Math.floor(Math.random() * chars.length)],
        delay: Math.random() * 5,
      });
    }
  }

  startTypingEffect() {
    const typingInterval = setInterval(() => {
      if (this.typeIndex < this.fullText.length) {
        this.typedText += this.fullText.charAt(this.typeIndex);
        this.typeIndex++;
      } else {
        clearInterval(typingInterval);
        this.showCursor = false;
      }
    }, 100);
  }

  scrollTo(elementId: string) {
    if (typeof document !== 'undefined') {
      document
        .getElementById(elementId)
        ?.scrollIntoView({ behavior: 'smooth' });
    }
  }

  trackByFn(index: number, item: any) {
    return index;
  }
}

// Bootstrap the application
bootstrapApplication(AppComponent).catch((err) => console.error(err));
