const hamburguer = document.querySelector(".hamburguer");
const mainMenu = document.querySelector(".mainMenu");

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle("active");
    mainMenu.classList.toggle("active");
})

