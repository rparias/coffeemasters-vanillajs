window.addEventListener('DOMContentLoaded', () => {
  let nav = document.querySelector('nav');
  console.log(nav);
  nav.innerHTML = `
    <h2>Hello DOM</h2>
    <p>This is HTML withing a Javascript string</p>
  `
})