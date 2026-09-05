/* =========================================
   ELEMENTOS
========================================= */

const portada =
    document.getElementById("portada");

const invitacion =
    document.getElementById("invitacion");

const abrirInvitacion =
    document.getElementById("abrirInvitacion");


/* =========================================
   ABRIR INVITACIÓN
========================================= */

abrirInvitacion.addEventListener(
    "click",
    () => {

        portada.style.opacity = "0";

        portada.style.transform =
            "scale(1.04)";


        setTimeout(() => {

            portada.style.display =
                "none";

            invitacion.classList.remove(
                "oculto"
            );

            window.scrollTo(
                0,
                0
            );

        }, 750);

    }
);


/* =========================================
   ANIMACIONES AL HACER SCROLL
========================================= */

const elementosReveal =
    document.querySelectorAll(
        ".reveal"
    );


const observador =
    new IntersectionObserver(
        (entradas) => {

            entradas.forEach(
                (entrada) => {

                    if (
                        entrada.isIntersecting
                    ) {

                        entrada.target.classList.add(
                            "visible"
                        );

                        observador.unobserve(
                            entrada.target
                        );

                    }

                }
            );

        },
        {
            threshold: 0.15,

            rootMargin:
                "0px 0px -40px 0px"
        }
    );


elementosReveal.forEach(
    (elemento) => {

        observador.observe(
            elemento
        );

    }
);


/* =========================================
   CONTADOR
========================================= */

/*
    Cumpleaños:
    24 de septiembre

    Festejo:
    26 de septiembre
    11:00 hs
*/

const fechaFestejo =
    new Date(
        "2026-09-26T11:00:00"
    ).getTime();


const diasElemento =
    document.getElementById(
        "dias"
    );

const horasElemento =
    document.getElementById(
        "horas"
    );

const minutosElemento =
    document.getElementById(
        "minutos"
    );

const segundosElemento =
    document.getElementById(
        "segundos"
    );


function animarNumero(elemento) {

    elemento.animate(
        [
            {
                opacity: .4,
                transform:
                    "translateY(-8px)"
            },

            {
                opacity: 1,
                transform:
                    "translateY(0)"
            }
        ],
        {
            duration: 350,
            easing: "ease-out"
        }
    );

}


let valoresAnteriores = {
    dias: null,
    horas: null,
    minutos: null,
    segundos: null
};


function actualizarContador() {

    const ahora =
        new Date().getTime();


    const diferencia =
        fechaFestejo - ahora;


    if (
        diferencia <= 0
    ) {

        diasElemento.textContent =
            "00";

        horasElemento.textContent =
            "00";

        minutosElemento.textContent =
            "00";

        segundosElemento.textContent =
            "00";

        return;

    }


    const dias =
        Math.floor(
            diferencia /
            (
                1000 *
                60 *
                60 *
                24
            )
        );


    const horas =
        Math.floor(
            (
                diferencia /
                (
                    1000 *
                    60 *
                    60
                )
            ) % 24
        );


    const minutos =
        Math.floor(
            (
                diferencia /
                (
                    1000 *
                    60
                )
            ) % 60
        );


    const segundos =
        Math.floor(
            (
                diferencia /
                1000
            ) % 60
        );


    const valores = {

        dias,

        horas,

        minutos,

        segundos

    };


    diasElemento.textContent =
        String(dias)
            .padStart(
                2,
                "0"
            );


    horasElemento.textContent =
        String(horas)
            .padStart(
                2,
                "0"
            );


    minutosElemento.textContent =
        String(minutos)
            .padStart(
                2,
                "0"
            );


    segundosElemento.textContent =
        String(segundos)
            .padStart(
                2,
                "0"
            );


    if (
        valoresAnteriores.dias !==
        valores.dias
    ) {

        animarNumero(
            diasElemento
        );

    }


    if (
        valoresAnteriores.horas !==
        valores.horas
    ) {

        animarNumero(
            horasElemento
        );

    }


    if (
        valoresAnteriores.minutos !==
        valores.minutos
    ) {

        animarNumero(
            minutosElemento
        );

    }


    if (
        valoresAnteriores.segundos !==
        valores.segundos
    ) {

        animarNumero(
            segundosElemento
        );

    }


    valoresAnteriores =
        valores;

}


actualizarContador();


setInterval(
    actualizarContador,
    1000
);


/* =========================================
   SECCIÓN SORPRESA
========================================= */

const sorpresaBtn =
    document.getElementById(
        "sorpresaBtn"
    );


const sorpresa =
    document.getElementById(
        "sorpresa"
    );


sorpresaBtn.addEventListener(
    "click",
    () => {

        const abierta =
            sorpresa.classList.toggle(
                "abierta"
            );


        if (abierta) {

            sorpresaBtn.innerHTML =
                `
                OCULTAR
                <span>↑</span>
                `;

        } else {

            sorpresaBtn.innerHTML =
                `
                DESCUBRIR
                <span>✦</span>
                `;

        }

    }
);


/* =========================================
   MODAL
========================================= */

const confirmarAsistencia =
    document.getElementById(
        "confirmarAsistencia"
    );


const modal =
    document.getElementById(
        "modal"
    );


const cerrarModal =
    document.getElementById(
        "cerrarModal"
    );


confirmarAsistencia.addEventListener(
    "click",
    () => {

        modal.classList.add(
            "activo"
        );

        document.body.classList.add(
            "modal-abierto"
        );

        crearConfeti();

    }
);


function cerrarVentana() {

    modal.classList.remove(
        "activo"
    );

    document.body.classList.remove(
        "modal-abierto"
    );

}


cerrarModal.addEventListener(
    "click",
    cerrarVentana
);


modal.addEventListener(
    "click",
    (evento) => {

        if (
            evento.target === modal
        ) {

            cerrarVentana();

        }

    }
);


document.addEventListener(
    "keydown",
    (evento) => {

        if (
            evento.key === "Escape"
        ) {

            cerrarVentana();

        }

    }
);


/* =========================================
   CONFETI
========================================= */

function crearConfeti() {

    const cantidad =
        window.innerWidth < 600
            ? 25
            : 45;


    for (
        let i = 0;
        i < cantidad;
        i++
    ) {

        const confeti =
            document.createElement(
                "div"
            );


        confeti.style.position =
            "fixed";


        confeti.style.width =
            Math.random() * 6 + 4 +
            "px";


        confeti.style.height =
            Math.random() * 6 + 4 +
            "px";


        confeti.style.background =
            i % 2 === 0
                ? "#aa8b5a"
                : "#e8dfd1";


        confeti.style.left =
            Math.random() * 100 +
            "vw";


        confeti.style.top =
            "-15px";


        confeti.style.zIndex =
            "10000";


        confeti.style.pointerEvents =
            "none";


        confeti.style.borderRadius =
            Math.random() > .5
                ? "50%"
                : "0";


        document.body.appendChild(
            confeti
        );


        const duracion =
            1800 +
            Math.random() * 2500;


        const movimientoX =
            (
                Math.random() -
                .5
            ) * 250;


        confeti.animate(
            [

                {
                    transform:
                        "translateY(0) rotate(0deg)",
                    opacity: 1
                },

                {
                    transform:
                        `
                        translate(
                            ${movimientoX}px,
                            110vh
                        )
                        rotate(720deg)
                        `,
                    opacity: 0
                }

            ],
            {
                duration:
                    duracion,

                easing:
                    "cubic-bezier(.2,.7,.3,1)"
            }
        );


        setTimeout(
            () => {

                confeti.remove();

            },
            duracion
        );

    }

}


/* =========================================
   PARALLAX SOLO EN PC
========================================= */

const puedeMoverMouse =
    window.matchMedia(
        "(min-width: 900px)"
    ).matches;


if (puedeMoverMouse) {

    const circulos =
        document.querySelectorAll(
            ".circulo-decorativo"
        );


    window.addEventListener(
        "mousemove",
        (evento) => {

            const x =
                (
                    evento.clientX /
                    window.innerWidth -
                    .5
                ) * 25;


            const y =
                (
                    evento.clientY /
                    window.innerHeight -
                    .5
                ) * 25;


            circulos.forEach(
                (
                    circulo,
                    index
                ) => {

                    const multiplicador =
                        index === 0
                            ? 1
                            : -1;


                    circulo.style.transform =
                        `
                        translate(
                            ${x * multiplicador}px,
                            ${y * multiplicador}px
                        )
                        `;

                }
            );

        }
    );

}


/* =========================================
   EFECTO EN LA FECHA 26
========================================= */

const fechaImportante =
    document.querySelector(
        ".fecha-importante .fecha-numero"
    );


if (fechaImportante) {

    fechaImportante.addEventListener(
        "click",
        () => {

            fechaImportante.animate(
                [

                    {
                        transform:
                            "scale(1)"
                    },

                    {
                        transform:
                            "scale(1.15) rotate(4deg)"
                    },

                    {
                        transform:
                            "scale(1) rotate(0)"
                    }

                ],
                {
                    duration: 600,

                    easing:
                        "ease-out"
                }
            );

        }
    );

}


/* =========================================
   EFECTO TÁCTIL EN CELULAR
========================================= */

const tarjetas =
    document.querySelectorAll(
        ".info-card, .sorpresa-item"
    );


tarjetas.forEach(
    (tarjeta) => {

        tarjeta.addEventListener(
            "touchstart",
            () => {

                tarjeta.style.transform =
                    "scale(.97)";

            },
            {
                passive: true
            }
        );


        tarjeta.addEventListener(
            "touchend",
            () => {

                tarjeta.style.transform =
                    "";

            },
            {
                passive: true
            }
        );

    }
);