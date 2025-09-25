const menuBtn = document.getElementById('menu-btn');
const sidebar = document.getElementById('sidebar');
const links = document.querySelectorAll('#sidebar-links li');

menuBtn.addEventListener('click', () => {
  if (window.innerWidth <= 1024) {
    sidebar.classList.toggle('open'); // Mobile overlay
  } else {
    sidebar.classList.toggle('collapsed'); // Desktop shrink
  }
});

// Active link highlighting
links.forEach(link => {
  link.addEventListener('click', () => {
    links.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
    // In your project, this is where you'd load the page from colleagues
    console.log(`Load page: ${link.dataset.page}`);
  });
});



