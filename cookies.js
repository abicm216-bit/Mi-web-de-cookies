document.addEventListener("DOMContentLoaded", function () {
  const acepto = localStorage.getItem('cookiesAceptadas');

  if (acepto !== 'true') {
    document.getElementById("cookieBanner").style.display = "block";
  }
});