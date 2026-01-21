const menus = document.querySelectorAll('.menu');
const mainGrid = document.querySelector('.main-grid');

let activeMenu = 0;

// SIMPAN HTML PROFILE AWAL
const profileHTML = mainGrid.innerHTML;

// PLACEHOLDER BIOS
const placeholderHTML = `
<pre style="
  font-size:20px;
  font-weight:bold;
  color:#003399;
">
No data available

Press Esc to return
</pre>
`;

// SET AWAL
updateMenu();
showContent();

// KEYBOARD CONTROL
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') {
    activeMenu = (activeMenu + 1) % menus.length;
    updateMenu();
  }

  if (e.key === 'ArrowLeft') {
    activeMenu = (activeMenu - 1 + menus.length) % menus.length;
    updateMenu();
  }

  if (e.key === 'Enter') {
    showContent();
  }

  if (e.key === 'Escape') {
    activeMenu = 0;
    updateMenu();
    showContent();
  }
});

// UPDATE MENU HIGHLIGHT
function updateMenu() {
  menus.forEach(menu => menu.classList.remove('active'));
  menus[activeMenu].classList.add('active');
}

// GANTI ISI KONTEN KIRI (BUKAN LAYOUT)
function showContent() {
  const name = menus[activeMenu].textContent.trim();

  if (name === 'Profile') {
    mainGrid.innerHTML = profileHTML;
  } else {
    mainGrid.innerHTML = placeholderHTML;
  }
}
