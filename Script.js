
document.addEventListener("DOMContentLoaded", () => {
  console.log("Página de AMIRI🍒 cargada correctamente.");

  const enlaces = document.querySelectorAll(".enlace");

  enlaces.forEach((enlace) => {
    enlace.addEventListener("click", () => {
      console.log("Abriendo: " + enlace.textContent.trim());
    });
  });
});