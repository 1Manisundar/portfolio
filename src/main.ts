// src/main.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Matrix Background -->
    <div class="matrix-bg">
      <div
        class="matrix-rain"
        *ngFor="let drop of matrixDrops; trackBy: trackByFn"
        [style.left.px]="drop.x"
        [style.animation-delay]="drop.delay + 's'"
      >
        {{ drop.char }}
      </div>
    </div>

    <!-- Top bar with glitch logo (links removed) -->
    <nav class="navbar">
      <div class="nav-container">
        <div class="logo">
          <span class="glitch" data-text="DEV.MATRIX">&lt;DEV.MATRIX/&gt;</span>
        </div>
      </div>
    </nav>

    <!-- Coming Soon -->
    <main class="main-content">
      <section class="hero">
        <div class="hero-content single-column">
          <h1 class="hero-title">
            <span class="typing-text">{{ typedText }}</span>
            <span class="cursor" [class.blink]="showCursor">|</span>
          </h1>
          <p class="hero-description">My portfolio is currently cooking — serving soon 🍽️</p>
        </div>
      </section>
    </main>

    <footer class="footer">
      <div class="container">
        <p>© {{ year }} Mani Sundar. Built with Angular & Matrix vibes.</p>
      </div>
    </footer>
  `,
  styles: [`
/* Reset + theme */
* { margin: 0; padding: 0; box-sizing: border-box; }
:root {
  --primary-color:#00ff41; --secondary-color:#1f6feb;
  --bg-color:#0d1117; --surface-color:#161b22;
  --text-color:#c9d1d9; --text-secondary:#8b949e;
  --glass-bg:rgba(22,27,34,.8); --glass-border:rgba(0,255,65,.2);
}
:host {
  display:block; min-height:100vh; font-family:'Courier New',monospace;
  background:var(--bg-color); color:var(--text-color); overflow-x:hidden;
}

/* Matrix background */
.matrix-bg{position:fixed; inset:0; z-index:-1; overflow:hidden;}
.matrix-rain{
  position:absolute; top:-100px; font-size:18px; color:var(--primary-color);
  opacity:.28; animation:matrixFall 15s linear infinite;
}
@keyframes matrixFall { 0%{transform:translateY(-100px);opacity:1} 100%{transform:translateY(100vh);opacity:0} }

/* Navbar */
.navbar{position:fixed; top:0; left:0; right:0; z-index:10; padding:12px 0;
  background:rgba(13,17,23,.9); backdrop-filter:blur(10px); border-bottom:1px solid var(--glass-border);}
.nav-container{max-width:1200px; margin:0 auto; padding:0 24px; display:flex; align-items:center; justify-content:space-between;}
.logo{font-size:18px; color:var(--primary-color); font-weight:700;}
.glitch{position:relative; display:inline-block}
.glitch::before, .glitch::after{content:attr(data-text); position:absolute; inset:0}
.glitch::before{color:#ff0040; z-index:-1; animation:glitch1 .5s infinite}
.glitch::after{color:#00ffff; z-index:0; animation:glitch2 .5s infinite}
@keyframes glitch1{0%,100%{transform:translate(0)}20%{transform:translate(-2px,2px)}40%{transform:translate(-2px,-2px)}60%{transform:translate(2px,2px)}80%{transform:translate(2px,-2px)}}
@keyframes glitch2{0%,100%{transform:translate(0)}20%{transform:translate(2px,2px)}40%{transform:translate(2px,-2px)}60%{transform:translate(-2px,2px)}80%{transform:translate(-2px,-2px)}}

/* Layout */
.main-content{margin-top:72px;}
.hero{min-height:calc(100vh - 72px); display:flex; align-items:center; padding:2rem;}
.hero-content{max-width:900px; margin:0 auto; display:grid; gap:1.25rem;}
.hero-content.single-column{text-align:center;}
.hero-title{font-size:3rem; font-weight:800; color:var(--primary-color); letter-spacing:1px;}
.typing-text{display:inline-block;}
.cursor{color:var(--primary-color); animation:blink 1s infinite;}
.cursor.blink{animation:none;}
@keyframes blink{0%,50%{opacity:1}51%,100%{opacity:0}}

.hero-subtitle{font-size:1.35rem; color:var(--secondary-color)}
.hero-description{font-size:1.05rem; color:var(--text-secondary)}

.footer{background:rgba(13,17,23,.9); border-top:1px solid var(--glass-border); padding:1.25rem 0; text-align:center; color:white}
.container{max-width:1200px; margin:0 auto; padding:0 1rem;}

@media (max-width:768px){
  .hero-title{font-size:2rem}
  .hero-subtitle{font-size:1.1rem}
}
  `],
})
export class AppComponent implements OnInit {
  typedText = '';
  showCursor = true;
  fullText = "HEY, I'M MANI SUNDAR";
  private typeIndex = 0;
  year = new Date().getFullYear();

  matrixDrops: Array<{x:number; char:string; delay:number}> = [];

  ngOnInit() {
    this.initMatrixRain();
    this.startTypingEffect();
  }

  /** Build the matrix “rain” characters with random positions/delays */
  initMatrixRain() {
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    for (let i = 0; i < 60; i++) {
      this.matrixDrops.push({
        x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
        char: chars[Math.floor(Math.random() * chars.length)],
        delay: Math.random() * 5,
      });
    }
  }

  /** Type the greeting text, then stop cursor blink */
  startTypingEffect() {
    const iv = setInterval(() => {
      if (this.typeIndex < this.fullText.length) {
        this.typedText += this.fullText.charAt(this.typeIndex++);
      } else {
        clearInterval(iv);
        this.showCursor = false;
      }
    }, 90);
  }

  trackByFn(index: number) { return index; }
}

bootstrapApplication(AppComponent).catch(err => console.error(err));
