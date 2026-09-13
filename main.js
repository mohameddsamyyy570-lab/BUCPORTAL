// Demo-only. This form does not authenticate against any real server.
const form = document.getElementById('loginForm');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    // No real auth check — this is a static UI demo.
    window.location.href = 'pages/dashboard.html';
  });
}
