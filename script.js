/* =========================================
   EXPEDIENTE 26
   EVU & AYLU
========================================= */


/* =========================================
   CURSOR
========================================= */

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {

    if (!cursor) return;

    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;

});


const elementosInteractivos = document.querySelectorAll(
    "button, .foto-marco"
);


elementosInteractivos.forEach((elemento) => {

    elemento.addEventListener("mouseenter", () => {

        cursor?.classList.add("grande");

    });


    elemento.addEventListener("mouseleave", () => {

        cursor?.classList.remove("grande");

    });

});


/* =========================================
   ABRIR ARCHIVO
========================================= */

const abrirBtn = document.getElementById("abrirBtn");

const inicio = document.getElementById("inicio");

const contenido = document.getElementById("contenido");


abrirBtn.addEventListener("click", () => {

    abrirBtn.innerHTML = "<span>DESCIFRANDO...</span>";

    setTimeout(() => {

        inicio.style.transition = "1s";
        inicio.style.opacity = "0";
        inicio.style.transform = "scale(1.05)";

    }, 700);


    setTimeout(() => {

        inicio.style.display = "none";

        contenido.classList.remove("oculto");

        iniciarAnimaciones();

        window.scrollTo({
            top: 0,
            behavior: "instant"
        });

    }, 1600);

});


/* =========================================
   ANIMACIONES AL HACER SCROLL
========================================= */

function iniciarAnimaciones() {

    const elementos = document.querySelectorAll(
        ".seccion > div:not(.numero), .dato, .botones-descubrir button"
    );


    elementos.forEach((elemento) => {

        elemento.classList.add("reveal");

    });


    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                }

            });

        },
        {
            threshold: .15
        }
    );


    elementos.forEach((elemento) => {

        observer.observe(elemento);

    });

}


/* =========================================
   ARCHIVOS INTERACTIVOS
========================================= */

const archivos = {

    comida: {

        numero: "01",

        texto:
            "Obviamente no podía faltar comida. Y sí, probablemente vas a repetir."

    },

    musica: {

        numero: "02",

        texto:
            "Prepará tus mejores pasos. La música va a ser parte importante del expediente."

    },

    fotos: {

        numero: "03",

        texto:
            "Porque algunas noches merecen quedar registradas para siempre."

    },

    baile: {

        numero: "04",

        texto:
            "No aceptamos excusas. El que viene, baila."

    },

    sorpresa: {

        numero: "05",

        texto:
            "Hay cosas que no se pueden revelar antes de tiempo..."

    },

    final: {

        numero: "06",

        texto:
            "Si llegaste hasta acá, ya tenés suficiente información. O eso creemos."

    }

};


const botones = document.querySelectorAll(
    ".botones-descubrir button"
);


const respuestaNumero =
    document.getElementById("respuestaNumero");


const respuestaTexto =
    document.getElementById("respuestaTexto");


botones.forEach((boton) => {

    boton.addEventListener("click", () => {

        const tipo = boton.dataset.info;

        const archivo = archivos[tipo];

        if (!archivo) return;


        botones.forEach((b) => {

            b.classList.remove("activo");

        });


        boton.classList.add("activo");


        respuestaNumero.textContent =
            archivo.numero;


        respuestaTexto.style.opacity = "0";


        setTimeout(() => {

            respuestaTexto.textContent =
                archivo.texto;

            respuestaTexto.style.opacity = "1";

        }, 200);

    });

});


/* =========================================
   CUENTA REGRESIVA
========================================= */

const fechaObjetivo =
    new Date("September 26, 2026 11:00:00").getTime();


function actualizarCountdown() {

    const ahora = new Date().getTime();

    const diferencia =
        fechaObjetivo - ahora;


    if (diferencia <= 0) {

        document.getElementById("dias").textContent = "00";
        document.getElementById("horas").textContent = "00";
        document.getElementById("minutos").textContent = "00";
        document.getElementById("segundos").textContent = "00";

        return;

    }


    const dias =
        Math.floor(
            diferencia / (1000 * 60 * 60 * 24)
        );


    const horas =
        Math.floor(
            (diferencia / (1000 * 60 * 60)) % 24
        );


    const minutos =
        Math.floor(
            (diferencia / (1000 * 60)) % 60
        );


    const segundos =
        Math.floor(
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


actualizarCountdown();


setInterval(actualizarCountdown, 1000);


/* =========================================
   FOTO
========================================= */

const fotoMarco =
    document.getElementById("fotoMarco");


fotoMarco.addEventListener("click", () => {

    fotoMarco.classList.toggle("revelada");

});


/* =========================================
   BOTÓN FINAL
========================================= */

const venirBtn =
    document.getElementById("venirBtn");


const finalPantalla =
    document.getElementById("finalPantalla");


const particulas =
    document.querySelector(".particulas");


venirBtn.addEventListener("click", () => {

    finalPantalla.classList.add("mostrar");

    crearParticulas();

});


/* =========================================
   PARTICULAS
========================================= */

function crearParticulas() {

    particulas.innerHTML = "";


    for (let i = 0; i < 100; i++) {

        const particula =
            document.createElement("div");


        particula.classList.add("particula");


        particula.style.left =
            Math.random() * 100 + "%";


        particula.style.setProperty(
            "--x",
            `${(Math.random() - .5) * 300}px`
        );


        particula.style.animationDelay =
            Math.random() * 2 + "s";


        particula.style.animationDuration =
            2 + Math.random() * 3 + "s";


        particulas.appendChild(particula);

    }

}


/* =========================================
   EFECTO PARALLAX SUAVE
========================================= */

document.addEventListener("mousemove", (e) => {

    const x =
        (e.clientX / window.innerWidth - .5);


    const y =
        (e.clientY / window.innerHeight - .5);


    const archivo =
        document.querySelector(".archivo");


    if (
        archivo &&
        inicio &&
        inicio.style.display !== "none"
    ) {

        archivo.style.transform =
            `perspective(1000px)
             rotateY(${x * 2}deg)
             rotateX(${y * -2}deg)`;

    }

});