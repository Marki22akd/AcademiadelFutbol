const btnARG1 = document.getElementById('Argentina1')
btnARG1.addEventListener("click", () => temporada1(114317, "ar", " Liga Profesional "))
const btnARG2 = document.getElementById('Argentina2')
btnARG2.addEventListener("click", () => temporada1(114825, "ar", " Primera B Nacional "))
const btnARG3 = document.getElementById('Argentina3')
btnARG3.addEventListener("click", () => temporada1(114827, "ar", " B Metropolitana "))
const btnARG4 = document.getElementById('Argentina')
btnARG4.addEventListener("click", () => temporada1(116511, "ar", " Federal A "))
const btnENG1 = document.getElementById('England')
btnENG1.addEventListener("click", () => temporada1(118689, "gb", " Premier League "))
const btnESP1 = document.getElementById('Spain')
btnESP1.addEventListener("click", () => temporada1(118691, "es", " LaLiga "))
const btnITA1 = document.getElementById('Italy')
btnITA1.addEventListener("click", () => temporada1(118975, "it", " Serie A "))
const btnALE1 = document.getElementById('Germany')
btnALE1.addEventListener("click", () => temporada1(118693, "de", " Bundesliga "))
const btnFRA1 = document.getElementById('France')
btnFRA1.addEventListener("click", () => temporada1(119835, "fr", " Ligue 1 "))
const btnHOL1 = document.getElementById('Netherlands')
btnHOL1.addEventListener("click", () => temporada1(119799, "nl", " Eredivisie "))
const btnBRA1 = document.getElementById('Brazil')
btnBRA1.addEventListener("click", () => temporada1(113943, "br", " Brasileirao "))
function temporada1(id, pais, nombre) {
    const url = `ligas.html?id=${encodeURIComponent(id)}&pais=${encodeURIComponent(pais)}&nombre=${encodeURIComponent(nombre)}`;
    window.location.href = url;
}
const btnLIB = document.getElementById('Libertadores')
btnLIB.addEventListener("click", () => copa1(114037, " Copa Libertadores "))
const btnSUD = document.getElementById('Sudamericana')
btnSUD.addEventListener("click", () => copa1(114039, " Copa Sudamericana "))
function copa1(id, nombre) {
    const url = `copas.html?id=${encodeURIComponent(id)}&nombre=${encodeURIComponent(nombre)}`;
    window.location.href = url;
}