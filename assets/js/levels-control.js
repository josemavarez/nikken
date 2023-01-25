// Agregar evento de clic al botón "next-level-modal"
document.getElementById("next-level-modal").addEventListener("click", function () {
    // Extraer número del nivel actual
    var currentLevel = document.getElementsByClassName("active")[0].getAttribute("data-target").match(/\d+/)[0];

    console.log("Estas en el nivel " + currentLevel)

    // Buscar elemento con id "ModalCenter-x+1" y cambiar la clase "inactive" por "active"
    var nextLevel = parseInt(currentLevel) + 1;
    document.getElementById("ModalCenter-" + nextLevel).classList.remove("inactive");
    document.getElementById("ModalCenter-" + nextLevel).classList.add("active");
    console.log("Pasaste al nivel " + nextLevel)
});


