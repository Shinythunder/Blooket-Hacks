function footer() {
let cr = document.createElement("div")
cr.style.color = "white"
cr.style.fontFamily = "Nunito"
cr.style.backgroundColor = "#111111"
cr.style.position = "absolute"
cr.style.top = "50px"
cr.style.left = "50px"
cr.style.width = "200px"
cr.style.height = "70px"
cr.style.borderRadius = "7.5px"
cr.style.textAlign = "center"
cr.style.lineHeight = "70px"
cr.innerHTML = "Made By ShinyThunder";
document.body.appendChild(cr)
let isDragging = false;
let offsetX, offsetY;

    // Mouse events
        cr.addEventListener('mousedown', (e) => {
            isDragging = true;
            offsetX = e.clientX - cr.offsetLeft;
            offsetY = e.clientY - cr.offsetTop;
            cr.style.cursor = 'grabbing';
        });

        document.addEventListener('mouseup', () => {
isDragging = false;
cr.style.cursor = 'grab';
});

        document.addEventListener('mousemove', (e) => {
if (isDragging) {
cr.style.left = `${e.clientX - offsetX}px`;
cr.style.top = `${e.clientY - offsetY}px`;
}});

cr.addEventListener('touchstart', (e) => {
            isDragging = true;
            const touch = e.touches[0];
            offsetX = touch.clientX - cr.offsetLeft;
            offsetY = touch.clientY - cr.offsetTop;
            cr.style.cursor = 'grabbing';
});
document.addEventListener('touchend', () => {
isDragging = false;
cr.style.cursor = 'grab';
});
document.addEventListener('touchmove', (e) => {
if (isDragging) {
const touch = e.touches[0];
cr.style.left = `${touch.clientX - offsetX}px`;
cr.style.top = `${touch.clientY - offsetY}px`;
}})}
footer()