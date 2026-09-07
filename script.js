/* =========================================================
   ELEMENTOS
========================================================= */

const terminalScreen =
    document.getElementById("terminalScreen");

const transmissionScreen =
    document.getElementById("transmissionScreen");

const archiveScreen =
    document.getElementById("archiveScreen");

const analysisScreen =
    document.getElementById("analysisScreen");

const finalScreen =
    document.getElementById("finalScreen");

const confirmationScreen =
    document.getElementById("confirmationScreen");


const startButton =
    document.getElementById("startButton");

const accessButton =
    document.getElementById("accessButton");

const continueButton =
    document.getElementById("continueButton");

const locationButton =
    document.getElementById("locationButton");

const yesButton =
    document.getElementById("yesButton");


const terminalLines =
    document.getElementById("terminalLines");

const progress =
    document.getElementById("progress");

const percentage =
    document.getElementById("percentage");


const fileModal =
    document.getElementById("fileModal");

const modalContent =
    document.getElementById("modalContent");

const closeModal =
    document.getElementById("closeModal");


const analysisText =
    document.getElementById("analysisText");

const analysisResult =
    document.getElementById("analysisResult");


const locationReveal =
    document.getElementById("locationReveal");

const missionText =
    document.getElementById("missionText");



/* =========================================================
   CAMBIAR PANTALLAS
========================================================= */

function showScreen(screen) {

    document
        .querySelectorAll(".screen")
        .forEach(section => {
            section.classList.remove("active");
        });

    screen.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}



/* =========================================================
   PARTICULAS
========================================================= */

const particlesContainer =
    document.querySelector(".particles");


for (let i = 0; i < 45; i++) {

    const particle =
        document.createElement("div");

    particle.className = "particle";

    particle.style.left =
        Math.random() * 100 + "%";

    particle.style.animationDuration =
        (8 + Math.random() * 15) + "s";

    particle.style.animationDelay =
        Math.random() * 10 + "s";

    particle.style.opacity =
        0.15 + Math.random() * 0.5;

    particlesContainer.appendChild(particle);
}



/* =========================================================
   TERMINAL BOOT
========================================================= */

const bootMessages = [

    {
        text: "[BOOT] Inicializando BIRTHDAY_OS...",
        type: ""
    },

    {
        text: "[OK] Sistema iniciado.",
        type: "ok"
    },

    {
        text: "[SCAN] Buscando evento especial...",
        type: ""
    },

    {
        text: "[SCAN] Evento encontrado.",
        type: ""
    },

    {
        text: "[INFO] Nivel de importancia: EXTREMO",
        type: "info"
    },

    {
        text: "[INFO] Motivo: cumpleaños detectado.",
        type: "info"
    },

    {
        text: "[SECURITY] Verificando invitación...",
        type: ""
    },

    {
        text: "[OK] Invitación autorizada.",
        type: "ok"
    },

    {
        text: "> Esperando interacción del usuario...",
        type: ""
    }

];


let bootIndex = 0;

let progressValue = 0;


function runBoot() {

    if (bootIndex < bootMessages.length) {

        const line =
            document.createElement("div");

        line.className =
            "terminal-line " +
            bootMessages[bootIndex].type;

        line.textContent =
            bootMessages[bootIndex].text;

        terminalLines.appendChild(line);

        bootIndex++;

        setTimeout(runBoot, 450);

    }

}



const progressInterval =
    setInterval(() => {

        progressValue += Math.random() * 4;

        if (progressValue >= 100) {

            progressValue = 100;

            clearInterval(progressInterval);

            startButton.disabled = false;

            startButton.textContent =
                "INICIAR SISTEMA →";

        }

        progress.style.width =
            progressValue + "%";

        percentage.textContent =
            Math.floor(progressValue) + "%";

    }, 120);


runBoot();



/* =========================================================
   BOTON INICIAR
========================================================= */

startButton.addEventListener("click", () => {

    showScreen(transmissionScreen);

});



/* =========================================================
   TRANSMISION
========================================================= */

accessButton.addEventListener("click", () => {

    showScreen(archiveScreen);

});



/* =========================================================
   ARCHIVOS
========================================================= */

const fileData = {

    evento: {

        content: `

            <div class="modal-content-title">
                EVENT_SYSTEM // DATA
            </div>

            <h3>EVENTO</h3>

            <p>
                Se ha detectado un evento especial
                en el sistema.
            </p>

            <br>

            <p>
                Tipo:
                <strong>CUMPLEAÑOS</strong>
            </p>

            <p>
                Nivel:
                <strong>INOVIDABLE </strong>
            </p>

            <p>
                Estado:
                <strong>ACTIVO ✓</strong>
            </p>

        `

    },


    ubicacion: {

        content: `

            <div class="modal-content-title">
                LOCATION_SYSTEM // ACCESS
            </div>

            <h3>📍 UBICACIÓN</h3>

            <p>
                La ubicación ha sido desbloqueada.
            </p>

            <div class="location-modal-box">
                <strong>
                   <a href="https://maps.app.goo.gl/8ByVy2pudiYjXPne9" target="_blank"  style="text-decoration: none; color: #ffffff;">
                        EN MI CASA (Toca para abrir en Google Maps)
                   </a>
                </strong>

            </div>

            <p>
                Te esperamos el
                <strong>26 de septiembre</strong>.
            </p>

        `

    },


    horario: {

        content: `

            <div class="modal-content-title">
                TIME_SYSTEM // DATA
            </div>

            <h3>⏰ HORARIO</h3>

            <p>
                Fecha:
                <strong>26 DE SEPTIEMBRE</strong>
            </p>

            <p>
                Inicio:
                <strong>11:00</strong>
            </p>

            <p>
                Fin:
                <strong>16:00</strong>
            </p>

            <br>

            <p>
                Duración estimada:
                <strong>5 HORAS</strong>
            </p>

        `

    }

};



document
    .querySelectorAll(".file")
    .forEach(file => {

        file.addEventListener("click", () => {

            const type =
                file.dataset.file;


            if (type === "secreto") {

                startGuestAnalysis();

                return;

            }


            if (fileData[type]) {

                modalContent.innerHTML =
                    fileData[type].content;

                fileModal.classList.add("open");

            }

        });

    });



/* =========================================================
   CERRAR MODAL
========================================================= */

closeModal.addEventListener("click", () => {

    fileModal.classList.remove("open");

});


fileModal.addEventListener("click", event => {

    if (event.target === fileModal) {

        fileModal.classList.remove("open");

    }

});


document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        fileModal.classList.remove("open");

    }

});



/* =========================================================
   ANALISIS
========================================================= */

function escribirLinea(
    texto,
    clase = "",
    delay = 0
) {

    return new Promise(resolve => {

        setTimeout(() => {

            const line =
                document.createElement("div");

            line.className =
                "analysis-line " + clase;

            line.textContent =
                texto;

            analysisText.appendChild(line);

            resolve();

        }, delay);

    });

}



function barraAnalisis(
    nombre,
    porcentajeFinal,
    duracion = 1500
) {

    return new Promise(resolve => {

        const container =
            document.createElement("div");

        container.className =
            "analysis-bar-container";


        const title =
            document.createElement("div");

        title.className =
            "analysis-bar-title";


        const label =
            document.createElement("span");

        label.textContent =
            nombre;


        const value =
            document.createElement("span");

        value.textContent =
            "0%";


        title.appendChild(label);

        title.appendChild(value);


        const bar =
            document.createElement("div");

        bar.className =
            "real-analysis-bar";


        const fill =
            document.createElement("div");

        fill.className =
            "real-analysis-fill";


        bar.appendChild(fill);

        container.appendChild(title);

        container.appendChild(bar);

        analysisText.appendChild(container);


        let current = 0;

        const startTime = performance.now();


        function animate(time) {

            const elapsed =
                time - startTime;

            const progressValue =
                Math.min(
                    elapsed / duracion,
                    1
                );


            current =
                Math.floor(
                    progressValue *
                    porcentajeFinal
                );


            fill.style.width =
                current + "%";

            value.textContent =
                current + "%";


            if (progressValue < 1) {

                requestAnimationFrame(animate);

            } else {

                current =
                    porcentajeFinal;

                fill.style.width =
                    current + "%";

                value.textContent =
                    current + "%";

                resolve();

            }

        }


        requestAnimationFrame(animate);

    });

}



/* =========================================================
   EJECUTAR ANALISIS
========================================================= */

async function startGuestAnalysis() {

    showScreen(analysisScreen);


    analysisText.innerHTML = "";

    analysisResult.classList.remove("visible");


    await escribirLinea(
        "> GUEST_ANALYSIS.EXE",
        "highlight"
    );


    await escribirLinea(
        "> Inicializando protocolo de análisis..."
    );


    await escribirLinea(
        "[SYSTEM] Conexión establecida ✓",
        "green"
    );


    await escribirLinea(
        ""
    );


    await escribirLinea(
        "INICIANDO ESCANEO DEL INVITADO...",
        "highlight"
    );


    await escribirLinea(
        "> Buscando información relevante..."
    );


    await escribirLinea(
        "> Analizando comportamiento..."
    );


    await escribirLinea(
        "> Comparando datos..."
    );


    await escribirLinea(
        ""
    );


    await escribirLinea(
        "ANALIZANDO NIVEL DE AMISTAD...",
        "highlight"
    );


    await barraAnalisis(
        "Nivel de amistad",
        100,
        1200
    );


    await escribirLinea(
        "Nivel de amistad 100% ✓",
        "green"
    );


    await escribirLinea(
        ""
    );


    await escribirLinea(
        "CALCULANDO PROBABILIDAD DE ASISTENCIA...",
        "highlight"
    );


    await barraAnalisis(
        "Probabilidad de venir",
        94,
        1400
    );


    await escribirLinea(
        "Probabilidad de venir 94%",
        "green"
    );


    await escribirLinea(
        ""
    );


    await escribirLinea(
        "EVALUANDO CAPACIDAD GASTRONÓMICA...",
        "highlight"
    );


    await barraAnalisis(
        "Capacidad para comer torta",
        100,
        1200
    );


    await escribirLinea(
        "Capacidad para comer torta 100%",
        "green"
    );


    await escribirLinea(
        ""
    );


    await escribirLinea(
        "EVALUANDO NIVEL DE QUILOMBO...",
        "highlight"
    );


    await barraAnalisis(
        "Capacidad para hacer quilombo",
        100,
        1200
    );


    await escribirLinea(
        "Capacidad para hacer quilombo 100%",
        "pink"
    );


    await escribirLinea(
        ""
    );


    await escribirLinea(
        "> VERIFICANDO RESULTADOS..."
    );


    await escribirLinea(
        "> Todos los parámetros fueron procesados."
    );


    await escribirLinea(
        "> Generando decisión final..."
    );


    await new Promise(resolve =>
        setTimeout(resolve, 600)
    );


    analysisResult.classList.add("visible");

}



/* =========================================================
   CONTINUAR
========================================================= */

continueButton.addEventListener("click", () => {

    showScreen(finalScreen);

    startFinalSequence();

});



/* =========================================================
   SECUENCIA FINAL
========================================================= */

function startFinalSequence() {

    locationReveal.classList.remove("show");

    missionText.classList.remove("show");

    setTimeout(() => {

        document.getElementById(
            "finalMessage"
        ).style.opacity = "1";

    }, 300);

}



/* =========================================================
   UBICACION
========================================================= */

locationButton.addEventListener("click", () => {

    locationButton.style.display = "none";

    locationReveal.classList.add("show");


    setTimeout(() => {

        missionText.classList.add("show");

    }, 1000);

});



/* =========================================================
   CONFIRMACION WHATSAPP
========================================================= */

yesButton.addEventListener("click", () => {

    createConfetti();


    setTimeout(() => {

        showScreen(confirmationScreen);

    }, 900);


    setTimeout(() => {

        const phone =
            "5492944602390";


        const message =
            "¡Sí, voy al cumpleaños! Nos vemos el 26 de septiembre.";


        const whatsappUrl =
            "https://wa.me/2944602390" +
            phone +
            "?text=" +
            encodeURIComponent(message);


        window.open(
            whatsappUrl,
            "_blank"
        );

    }, 1200);

});

