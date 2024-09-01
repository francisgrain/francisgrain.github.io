// Funzione per il toggle tra modalità chiara e scura
function toggleTheme() {
  const body = document.body;
  const isDarkMode = body.classList.contains("dark-mode");

  // Cambia il tema
  if (isDarkMode) {
    body.classList.remove("dark-mode");
    localStorage.setItem("theme", "light");
  } else {
    body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
  }

  // Aggiorna le icone del pulsante
  updateIcons(!isDarkMode);
}

// Funzione per aggiornare le icone in base al tema
function updateIcons(isDarkMode) {
  const sunIcon = document.querySelector("#theme-toggler .fa-sun");
  const moonIcon = document.querySelector("#theme-toggler .fa-moon");

  if (isDarkMode) {
    sunIcon.style.display = "inline";
    moonIcon.style.display = "none";
  } else {
    sunIcon.style.display = "none";
    moonIcon.style.display = "inline";
  }
}

// Aggiungi un listener al bottone per il toggle
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("theme-toggler");
  if (toggleButton) {
    toggleButton.addEventListener("click", toggleTheme);
  }

  // Imposta la modalità "light" come predefinita e aggiorna le icone
  document.body.classList.remove("dark-mode");
  localStorage.setItem("theme", "light");
  updateIcons(false); // Passa `false` perché il tema iniziale è "light"
});
