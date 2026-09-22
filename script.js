/* ==========================================
   RAMO DE FLORES
========================================== */

const ramo =
    document.getElementById("ramo");


const flores = [

    {
        x: 25,
        y: 145,
        escala: 0.78
    },

    {
        x: 70,
        y: 90,
        escala: 0.86
    },

    {
        x: 115,
        y: 48,
        escala: 0.96
    },

    {
        x: 170,
        y: 18,
        escala: 1.08
    },

    {
        x: 230,
        y: 28,
        escala: 1.02
    },

    {
        x: 285,
        y: 65,
        escala: 0.93
    },

    {
        x: 330,
        y: 120,
        escala: 0.80
    },

    {
        x: 90,
        y: 165,
        escala: 0.88
    },

    {
        x: 155,
        y: 135,
        escala: 1
    },

    {
        x: 220,
        y: 140,
        escala: 1.05
    },

    {
        x: 285,
        y: 165,
        escala: 0.88
    }

];


/* ==========================================
   FUNCIÓN PARA CREAR UNA FLOR
========================================== */

function crearFlor(
    x,
    y,
    escala
) {

    const flor =
        document.createElement(
            "div"
        );


    flor.className =
        "flor";


    flor.style.left =
        x + "px";


    flor.style.top =
        y + "px";


    flor.style.scale =
        escala;


    flor.style.animationDelay =
        Math.random()
        * 2
        + "s";


    /* Crear pétalos */

    for (
        let i = 0;
        i < 14;
        i++
    ) {

        const petalo =
            document.createElement(
                "div"
            );


        petalo.className =
            "petalo";


        petalo.style.transform =
            `rotate(${
                i * (360 / 14)
            }deg)`;


        flor.appendChild(
            petalo
        );

    }


    /* Centro de la flor */

    const centro =
        document.createElement(
            "div"
        );


    centro.className =
        "centro";


    flor.appendChild(
        centro
    );


    ramo.appendChild(
        flor
    );

}


/* Crear todas las flores */

flores.forEach(

    flor => {

        crearFlor(

            flor.x,

            flor.y,

            flor.escala

        );

    }

);


/* ==========================================
   ESTRELLAS
========================================== */

const estrellas =
    document.getElementById(
        "estrellas"
    );


for (
    let i = 0;
    i < 120;
    i++
) {

    const estrella =
        document.createElement(
            "div"
        );


    estrella.className =
        "estrella";


    const tamaño =
        1
        +
        Math.random()
        * 3;


    estrella.style.width =
        tamaño
        + "px";


    estrella.style.height =
        tamaño
        + "px";


    estrella.style.left =
        Math.random()
        * 100
        + "%";


    estrella.style.top =
        Math.random()
        * 100
        + "%";


    estrella.style.animationDelay =
        Math.random()
        * 4
        + "s";


    estrella.style.animationDuration =
        (
            1
            +
            Math.random()
            * 3
        )
        + "s";


    estrellas.appendChild(
        estrella
    );

}


/* ==========================================
   MENSAJES DEL FONDO
========================================== */

const textos = [

    "Te amo mucho, princesa 💛",

    "Mi Dannita hermosa 🌻",

    "Eres muy especial ✨",

    "Para ti, mi princesa 💛",

    "Mi niña hermosa 🌼",

    "Siempre tú 💛",

    "Te quiero muchísimo 🌻",

    "Mi Dannita 💛✨",

    "Mi princesa hermosa 🌻",

    "Te amo mucho 💛",

    "Para mi Dannita 🌻",

    "Eres muy especial 💛"

];


const mensajes =
    document.getElementById(
        "mensajes"
    );


function crearMensaje() {

    const mensaje =
        document.createElement(
            "div"
        );


    mensaje.className =
        "mensaje-flotante";


    mensaje.textContent =

        textos[

            Math.floor(

                Math.random()

                *

                textos.length

            )

        ];


    mensaje.style.left =
        Math.random()
        * 78
        + "%";


    mensaje.style.fontSize =
        (
            13
            +
            Math.random()
            * 13
        )
        + "px";


    const duracion =
        9
        +
        Math.random()
        * 7;


    mensaje.style.animationDuration =
        duracion
        + "s";


    mensajes.appendChild(
        mensaje
    );


    setTimeout(

        () => {

            mensaje.remove();

        },

        duracion * 1000

    );

}


setInterval(
    crearMensaje,
    1200
);


/* ==========================================
   CORAZONES, FLORES Y DESTELLOS
========================================== */

const particulas =
    document.getElementById(
        "particulas"
    );


const simbolos = [

    "💛",

    "💛",

    "✨",

    "🌻",

    "🌼",

    "💛",

    "✨",

    "💛"

];


function crearParticula() {

    const particula =
        document.createElement(
            "div"
        );


    particula.className =
        "particula";


    particula.textContent =

        simbolos[

            Math.floor(

                Math.random()

                *

                simbolos.length

            )

        ];


    particula.style.left =
        Math.random()
        * 100
        + "%";


    particula.style.fontSize =
        (
            13
            +
            Math.random()
            * 22
        )
        + "px";


    const duracion =
        6
        +
        Math.random()
        * 5;


    particula.style.animationDuration =
        duracion
        + "s";


    particulas.appendChild(
        particula
    );


    setTimeout(

        () => {

            particula.remove();

        },

        duracion * 1000

    );

}


setInterval(
    crearParticula,
    550
);


/* ==========================================
   EFECTO INICIAL
========================================== */

for (
    let i = 0;
    i < 15;
    i++
) {

    setTimeout(

        crearParticula,

        i * 160

    );


    setTimeout(

        crearMensaje,

        i * 300

    );

}


/* ==========================================
   COMPROBAR FOTO DE DANNITA
========================================== */

const fotoDannita =
    document.querySelector(
        ".foto-dannita"
    );


fotoDannita.addEventListener(
    "load",
    function () {

        console.log(
            "La foto de Dannita cargó correctamente 💛"
        );

    }
);


fotoDannita.addEventListener(
    "error",
    function () {

        console.error(
            "No se encontró Dannita.jpg"
        );

        this.alt =
            "No se encontró Dannita.jpg";

    }
);