function toggleTheme() {
  const html = document.documentElement;
  html.classList.toggle('dark');
}

window.addEventListener("load", () => {
  gsap.from(".gsap-fade", {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.3
  });
});
