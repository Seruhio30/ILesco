const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('header-menu');

hamburger.addEventListener('click', () => {
  menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
});


document.querySelectorAll('img').forEach((img, i) => {
  const src = img.src;

  // Filtrar solo imágenes locales (evita extensiones)
  if (src.startsWith('http://127.0.0.1') || src.includes('/img/')) {
    const temp = new Image();
    temp.src = src;

    temp.onload = () => {
      console.log(`IMG ${i + 1}:`);
      console.log(`<img src="${src}" alt="${img.alt}" width="${temp.naturalWidth}" height="${temp.naturalHeight}" loading="lazy">`);
    };

    temp.onerror = () => {
      console.warn(`IMG ${i + 1} failed to load:`, src);
    };
  }
});