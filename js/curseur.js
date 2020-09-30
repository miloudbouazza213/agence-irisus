let clientX = -100;
let clientY = -100;
const cursor = document.querySelector(".curseur");

const initCursor = () => {
    document.addEventListener("mousemove", e => {
        clientX = e.clientX;
        clientY = e.clientY;
    });

    const render = () => {
        //cursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
        cursor.style.top = `${clientY}px`;
        cursor.style.left = `${clientX}px`;

        requestAnimationFrame(render);
    };
    requestAnimationFrame(render);
};

cursor.addEventListener('click',function () {
    console.log('ok');

})

initCursor();