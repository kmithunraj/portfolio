const toggleBtn = document.querySelector('.toggle-menu');
const navBar = document.querySelector('.mob-nav-links');
const navScreen = document.querySelector('.nav-screen');

toggleBtn.addEventListener('click', () => {
    navBar.style.left = '0';
    navScreen.style.display = 'block';
});

document.addEventListener('click', function(e) {
if (!navBar.contains(e.target) && !toggleBtn.contains(e.target)) {
    if (window.innerWidth < 850) {
    navBar.style.left = '-100%';
    navScreen.style.display = 'none';
    }
}
});

document.addEventListener('mousemove', function(e) {
    var cursor = document.getElementById('custom-cursor');
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });


  document.addEventListener("DOMContentLoaded", function() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        // code for mobile devices
        document.getElementById('custom-cursor').style.display = 'none';
      }
      else{
        // code for desktop/laptop devices
        document.getElementById('custom-cursor').style.display = 'block';
      }
  });


  