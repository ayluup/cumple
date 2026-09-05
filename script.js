// ==============================
// ABRIR LA INVITACIÓN
// ==============================

const abrirInvitacion =
    document.getElementById("abrirInvitacion");

const portada =
    document.getElementById("portada");

const invitacion =
    document.getElementById("invitacion");


abrirInvitacion.addEventListener("click", () => {

    portada.style.display = "none";

    invitacion.classList.remove("oculto");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ==============================
// CONTADOR REGRESIVO
// ==============================

// Fecha del cumpleaños:
// 24 de septiembre de 2026 - 11:00 hs

const fechaCumple =
    new Date("2026-09-24T11:00:00").getTime();


const intervalo =
    setInterval(() => {

        const ahora =
            new Date().getTime();

        const diferencia =
            fechaCumple - ahora;


        // Si ya llegó el día

        if (diferencia <= 0) {

            clearInterval(intervalo);

            document.getElementById("dias").innerText = "00";

            document.getElementById("horas").innerText = "00";

            document.getElementById("minutos").innerText = "00";

            document.getElementById("segundos").innerText = "00";

            return;

        }


        // Cálculos

        const dias =
            Math.floor(
                diferencia / (1000 * 60 * 60 * 24)
            );


        const horas =
            Math.floor(
                (
                    diferencia %
                    (1000 * 60 * 60 * 24)
                ) /
                (1000 * 60 * 60)
            );


        const minutos =
            Math.floor(
                (
                    diferencia %
                    (1000 * 60 * 60)
                ) /
                (1000 * 60)
            );


        const segundos =
            Math.floor(
                (
                    diferencia %
                    (1000 * 60)
                ) /
                1000
            );


        // Mostrar valores

        document.getElementById("dias").innerText =
            String(dias).padStart(2, "0");


        document.getElementById("horas").innerText =
            String(horas).padStart(2, "0");


        document.getElementById("minutos").innerText =
            String(minutos).padStart(2, "0");


        document.getElementById("segundos").innerText =
            String(segundos).padStart(2, "0");


    }, 1000);


// ==============================
// MODAL CONFIRMAR ASISTENCIA
// ==============================

const confirmarAsistencia =
    document.getElementById("confirmarAsistencia");

const modal =
    document.getElementById("modal");

const cerrarModal =
    document.getElementById("cerrarModal");


confirmarAsistencia.addEventListener("click", () => {

    modal.style.display = "flex";

});


cerrarModal.addEventListener("click", () => {

    modal.style.display = "none";

});


// ==============================
// CERRAR AL TOCAR AFUERA
// ==============================

window.addEventListener("click", (evento) => {

    if (evento.target === modal) {

        modal.style.display = "none";

    }

});