document.addEventListener("DOMContentLoaded", function () {

  
  (function blinkText() {
    const el = document.getElementById("blink-text");
    if (!el) return;
    setInterval(() => {
      el.style.visibility = (el.style.visibility === "hidden") ? "visible" : "hidden";
    }, 450);
  })();

  
  (function rollingText() {
    const el = document.getElementById("rolling-text");
    if (!el) return;
    el.style.position = "absolute";
    el.style.whiteSpace = "nowrap";
    let pos = window.innerWidth;
    function frame() {
      pos -= 2; // velocidade (aumente para rápido)
      if (pos < -el.offsetWidth) pos = window.innerWidth;
      el.style.left = pos + "px";
      requestAnimationFrame(frame);
    }
    frame();
    window.addEventListener("resize", () => { pos = window.innerWidth; });
  })();


  document.querySelectorAll('img[data-hover]').forEach(img => {
    const original = img.getAttribute('src');
    const over = img.getAttribute('data-hover');
    img.addEventListener('mouseover', () => { if (over) img.src = over; });
    img.addEventListener('mouseout',  () => { img.src = original; });
  });

  
  (function buttonGlow() {
    const btn = document.getElementById("neon-button");
    if (!btn) return;
    btn.addEventListener("mouseenter", () => btn.classList.add("glow"));
    btn.addEventListener("mouseleave", () => btn.classList.remove("glow"));
  })();

  
  (function visitorCounter() {
    const c = document.getElementById("visitor-counter");
    if (!c) return;
    let val = parseInt(c.textContent.replace(/\D/g,'')) || 1000;
    setInterval(() => {
      val += Math.floor(Math.random() * 3); // sobe devagar
      c.textContent = val.toString().padStart(6, '0');
    }, 3500);
  })();

 
  (function mouseTrail() {
    let last = 0;
    document.addEventListener("mousemove", (e) => {
      const now = Date.now();
      if (now - last < 60) return; // controla frequência
      last = now;

      const s = document.createElement("span");
      s.textContent = "✦";
      s.style.position = "absolute";
      s.style.left = (e.pageX - 6) + "px";
      s.style.top = (e.pageY - 6) + "px";
      s.style.pointerEvents = "none";
      s.style.fontSize = "14px";
      s.style.opacity = "1";
      s.style.transition = "transform 700ms linear, opacity 700ms linear";
      document.body.appendChild(s);

      // anima
      requestAnimationFrame(() => {
        s.style.transform = "translateY(-18px) scale(1.4)";
        s.style.opacity = "0";
      });

      setTimeout(() => s.remove(), 750);
    });
  })();

});