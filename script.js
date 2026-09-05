/* =====================================
   ABRIR INVITACIÓN
===================================== */

const abrirInvitacion = document.getElementById("abrirInvitacion");
const portada = document.getElementById("portada");
const invitacion = document.getElementById("invitacion");


abrirInvitacion.addEventListener("click", () => {

    portada.style.opacity = "0";
    portada.style.transform = "scale(1.05)";

    setTimeout(() => {

        portada.style.display = "none";

        invitacion.classList.remove("oculto");

        window.scrollTo({
            top: 0,
            behavior: "instant"
        });

    }, 700);

});


/* =====================================
   CUENTA REGRESIVA
===================================== */

/*
    IMPORTANTE:

    El cumpleaños es el 24.

    Pero el festejo es el 26.

    Por eso el contador apunta al:
    26 de septiembre de 2026
    a las 11:00 hs.
*/

const fechaFestejo = new Date(
    "2026-09-26T11:00:00"
).getTime();


function actualizarContador() {

    const ahora = new Date().getTime();

    const diferencia = fechaFestejo - ahora;


    if (diferencia <= 0) {

        document.getElementById("dias").textContent = "00";
        document.getElementById("horas").textContent = "00";
        document.getElementById("minutos").textContent = "00";
        document.getElementById("segundos").textContent = "00";

        return;
    }


    const dias = Math.floor(
        diferencia / (1000 * 60 * 60 * 24)
    );

    const horas = Math.floor(
        (diferencia / (1000 * 60 * 60)) % 24
    );

    const minutos = Math.floor(
        (diferencia / (1000 * 60)) % 60
    );

    const segundos = Math.floor(
        (diferencia / 1000) % 60
    );


    document.getElementById("dias").textContent =
        String(dias).padStart(2, "0");

    document.getElementById("horas").textContent =
        String(horas).padStart(2, "0");

    document.getElementById("minutos").textContent =
        String(minutos).padStart(2, "0");

    document.getElementById("segundos").textContent =
        String(segundos).padStart(2, "0");

}


actualizarContador();

setInterval(actualizarContador, 1000);


/* =====================================
   ANIMACIONES AL HACER SCROLL
===================================== */

const elementos = document.querySelectorAll(".revelar");


const observador = new IntersectionObserver(
    (entradas) => {

        entradas.forEach((entrada) => {

            if (entrada.isIntersecting) {

                entrada.target.classList.add("visible");

            }

        });

    },
    {
        threshold: 0.15
    }
);


elementos.forEach((elemento) => {

    observador.observe(elemento);

});


/* =====================================
   SECCIÓN SORPRESA
===================================== */

const sorpresaBtn =
    document.getElementById("sorpresaBtn");

const sorpresa =
    document.getElementById("sorpresa");


sorpresaBtn.addEventListener("click", () => {

    sorpresa.classList.toggle("abierta");


    if (sorpresa.classList.contains("abierta")) {

        sorpresaBtn.innerHTML =
            'OCULTAR <span>↑</span>';

    } else {

        sorpresaBtn.innerHTML =
            'DESCUBRIR <span>✦</span>';

    }

});


/* =====================================
   MODAL CONFIRMACIÓN
===================================== */

const confirmarAsistencia =
    document.getElementById("confirmarAsistencia");

const modal =
    document.getElementById("modal");

const cerrarModal =
    document.getElementById("cerrarModal");


confirmarAsistencia.addEventListener("click", () => {

    modal.classList.add("activo");

    crearConfeti();

});


cerrarModal.addEventListener("click", () => {

    modal.classList.remove("activo");

});


modal.addEventListener("click", (e) => {

    if (e.target === modal) {

        modal.classList.remove("activo");

    }

});


/* =====================================
   CONFETI
===================================== */

function crearConfeti() {

    for (let i = 0; i < 35; i++) {

        const confeti =
            document.createElement("div");

        confeti.style.position = "fixed";
        confeti.style.width = "7px";
        confeti.style.height = "7px";

        confeti.style.background =
            i % 2 === 0
                ? "#aa8b5a"
                : "#e8dfd1";

        confeti.style.left =
            Math.random() * 100 + "vw";

        confeti.style.top = "-10px";

        confeti.style.zIndex = "2000";

        confeti.style.pointerEvents = "none";

        confeti.style.transform =
            `rotate(${Math.random() * 360}deg)`;


        document.body.appendChild(confeti);


        const duracion =
            2000 + Math.random() * 2500;


        confeti.animate(
            [
                {
                    transform:
                        `translateY(0) rotate(0deg)`,
                    opacity: 1
                },

                {
                    transform:
                        `translateY(110vh) rotate(720deg)`,
                    opacity: 0
                }
            ],
            {
                duration: duracion,
                easing: "ease-out"
            }
        );


        setTimeout(() => {

            confeti.remove();

        }, duracion);

    }

}


/* =====================================
   EFECTO PARALLAX SUAVE
===================================== */

window.addEventListener("mousemove", (e) => {

    const decoraciones =
        document.querySelectorAll(".hero-decoracion");

    const x =
        (e.clientX / window.innerWidth - 0.5) * 20;

    const y =
        (e.clientY / window.innerHeight - 0.5) * 20;


    decoraciones.forEach((decoracion, index) => {

        const multiplicador =
            index === 0 ? 1 : -1;

        decoracion.style.transform =
            `translate(${x * multiplicador}px,
                       ${y * multiplicador}px)`;

    });

});


/* =====================================
   EFECTO CLICK EN LA FECHA 26
===================================== */

const numero26 =
    document.querySelector(".fecha-festejo .numero-fecha");


if (numero26) {

    numero26.addEventListener("click", () => {

        numero26.animate(
            [
                {
                    transform: "scale(1)"
                },

                {
                    transform: "scale(1.2)"
                },

                {
                    transform: "scale(1)"
                }
            ],
            {
                duration: 600
            }
        );

    });

}


/* =====================================
   TRANSICIÓN DE PORTADA
===================================== */

portada.style.transition =
    "opacity .7s ease, transform .7s ease";