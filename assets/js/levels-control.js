




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


//acciones internas de los niveles
//nivel 1


var downloadBtn = document.getElementById("download-l1");
downloadBtn.addEventListener("click", function () {
    alert("Descargar en Google Drive");
    window.open("https://drive.google.com/drive/u/0/folders/1nVhc_GuDaavQQgSMHC2J5TeCn8l-JJhZ", "_blank");

    var nextStepBtn = document.createElement("button");
    nextStepBtn.innerHTML = "Next step";
    nextStepBtn.classList.add("rn-btn", "w-auto", "btn-center", "mt-5");
    nextStepBtn.setAttribute("id", "next-level-modal");

    nextStepBtn.addEventListener("click", function () {
        $("#ModalCenter-1").modal("hide");
    });

    downloadBtn.parentNode.insertBefore(nextStepBtn, downloadBtn.nextSibling);
});









// centrar en pantalla los destinos de los fragmentos de anclaje

    var anclas = document.querySelectorAll(".lvl-s");
    anclas.forEach(function(ancla) {
        ancla.addEventListener("click", function(event) {
            event.preventDefault();
            var id = this.getAttribute("href");
            var destinoAncla = document.querySelector(id);
            var posicionAncla = destinoAncla.offsetTop;
    

            window.scrollTo({
                top: posicionAncla - (window.innerHeight * 0.18),
                behavior: "smooth"
            });
        });
    });




