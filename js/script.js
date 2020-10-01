// ouverture fermeture menu
const body = document.querySelector('body');
const menu = document.querySelector('.menu-icon');
menu.addEventListener('click', function () {
    body.classList.toggle('nav-active');
});

// changement de couleur:
const switchBarre = document.getElementById('switch-barre');
const switchCercle = document.getElementById('switch-cercle');

const logo = this.document.getElementById('logo');
const imgFond = document.getElementById('img-fond');
const root = document.documentElement;

const imgsReseau = this.document.querySelectorAll('.img-reseau');
switchCercle.addEventListener('click', function () {
    // changer couleur logo et
    //changer les valeurs des variable couleurs
    if (getComputedStyle(root).getPropertyValue('--couleur-principale').includes('#000')) {
        // passage en blanc
        root.style.setProperty('--couleur-principale', '#fff');
        root.style.setProperty('--couleur-secondaire', '#000');
        root.style.setProperty('--couleur-ombre', 'rgba(5,5,5,0.1)');
        logo.style.filter = 'invert(1)';
        imgFond.style.filter = 'invert(1)';
        root.style.setProperty('--inversion', '1');
        rectangle.strokeColor = "rgb(0,0,0,0.7)"; // couleur dessin du 2eme cercle du curseur

    }
    else {
        // passage en noir
        root.style.setProperty('--couleur-secondaire', '#fff');
        root.style.setProperty('--couleur-principale', '#000');
        root.style.setProperty('--couleur-ombre', 'rgba(250,250,250,0.1)');
        logo.style.filter = 'invert(0)';
        imgFond.style.filter = 'invert(0)';
        root.style.setProperty('--inversion', '0');
        rectangle.strokeColor = "rgb(255,255,255,0.7)"; // couleur dessin du 2eme cercle du curseur

    }
    switchCercle.classList.toggle('switched');

})

//------------- changement de langue :

const btnFr = document.getElementById('lang-fr');
const btnEn = document.getElementById('lang-en');

function changerLangue() {
    // changer couleur bouton selectionné/ non selectionné
    if (this === btnFr) {
        this.classList.remove('langue-non-selectionnee');
        btnEn.classList.add('langue-non-selectionnee');
    }
    if (this === btnEn) {
        this.classList.remove('langue-non-selectionnee');
        btnFr.classList.add('langue-non-selectionnee');
    }
}
btnFr.addEventListener('click', changerLangue);
btnEn.addEventListener('click', changerLangue);


// -----------------------------curseur :
// set the starting position of the cursor outside of the screen
let clientX = -100;
let clientY = -100;
const innerCursor = document.querySelector(".cursor--small");

const initCursor = () => {
    // add listener to track the current mouse position
    document.addEventListener("mousemove", e => {
        clientX = e.clientX;
        clientY = e.clientY;
    });

    // transform the innerCursor to the current mouse position
    // use requestAnimationFrame() for smooth performance
    const render = () => {
        innerCursor.style.transform = `translate(${clientX}px, ${clientY}px)`;


        requestAnimationFrame(render);
    };
    requestAnimationFrame(render);
};

initCursor();

let lastX = 0;
let lastY = 0;
let group;

const initCanvas = () => {
    const canvas = document.querySelector(".cursor--canvas");
    paper.setup(canvas);
    const strokeWidth = 2;

    rectangle = new paper.Path.Rectangle(
        new paper.Rectangle(lastX, lastY, 60, 60), (30, 30)
    );

    rectangle.strokeColor = "rgba(255,255,255,0.7)";
    rectangle.strokeWidth = strokeWidth;
    group = new paper.Group([rectangle]);
    group.applyMatrix = false;

    // function for linear interpolation of values
    const lerp = (a, b, n) => {
        return (1 - n) * a + n * b;
    };


    // the draw loop of Paper.js
    // (60fps with requestAnimationFrame under the hood)
    paper.view.onFrame = event => {
        // using linear interpolation, the circle will move 0.2 (20%)
        // of the distance between its current position and the mouse
        // coordinates per Frame

        lastX = lerp(lastX, clientX, 0.3);
        lastY = lerp(lastY, clientY, 0.3);
        group.position = new paper.Point(lastX, lastY);

    };
};

initCanvas();
