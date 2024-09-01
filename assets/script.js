// Funzione per il toggle tra modalità chiara e scura
function toggleTheme() {
    const body = document.body;
    const currentTheme = body.classList.contains("dark-mode");
    console.log("Current Theme:", currentTheme); // Debug
  
    // Cambia il tema
    if (currentTheme) {
      body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    } else {
      body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    }
  
    // Cambia le icone del pulsante
    const sunIcon = document.querySelector("#theme-toggler .fa-sun");
    const moonIcon = document.querySelector("#theme-toggler .fa-moon");
  
    if (sunIcon && moonIcon) {
      if (currentTheme) {
        // Se il tema corrente è scuro, mostra l'icona del sole e nascondi la luna
        sunIcon.style.display = "none";
        moonIcon.style.display = "inline";
      } else {
        // Se il tema corrente è chiaro, mostra l'icona della luna e nascondi il sole
        sunIcon.style.display = "inline";
        moonIcon.style.display = "none";
      }
    }
  }
  
  // Aggiungi un listener al bottone per il toggle
  document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("theme-toggler");
    if (toggleButton) {
      toggleButton.addEventListener("click", toggleTheme);
    }
  
    // Imposta la modalità "light" come predefinita ignorando il localStorage
    document.body.classList.remove("dark-mode");
    localStorage.setItem("theme", "light");
  
    // Imposta le icone del pulsante in base al tema iniziale (che ora sarà sempre "light")
    const sunIcon = document.querySelector("#theme-toggler .fa-sun");
    const moonIcon = document.querySelector("#theme-toggler .fa-moon");
  
    if (sunIcon && moonIcon) {
      sunIcon.style.display = "inline";
      moonIcon.style.display = "none";
    }
  });
  