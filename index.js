let canvas = document.querySelector('#main');
let ctx = canvas.getContext('2d');
let coord = { x: 0, y: 0 };
let color = black;
let brushSize = 5;
let draw = false;

function changeBrushSize() {
    brushSize = document.getElementById("slider").value;
}

function cleanCanvas() {
    ctx.reset();
}

function startdrawing(event) {
    draw = true;
    getPosition(event);
}
function stopdrawing() {
    draw = false;
}

function sketch(event) {
    if (!draw) return;
    ctx.beginPath();

    ctx.lineWidth = brushSize;
    ctx.lineCap = 'round';
    ctx.strokeStyle = color;
    ctx.moveTo(coord.x, coord.y);
    getPosition(event);
    ctx.lineTo(coord.x, coord.y);
    ctx.stroke();
}

function getPosition(event) {
    coord.x = event.clientX - canvas.offsetLeft;
    coord.y = event.clientY - canvas.offsetTop;
}

function changeColor(event) {
    let id = event.currentTarget.id;
    if (id === 'black') {
        color = '#000000';
    }
    else if (id === 'pink') {
        color = '#f1004b'
    }
    else if (id === 'blue') {
        color = '#256eff'
    }
    else if (id === 'yellow') {
        color = '#ffcf01'
    }
    else if (id === 'erase') {
        color = '#FFFFFF'
    }
}

window.addEventListener('load', () => {
    document.addEventListener('mousedown', startdrawing);
    document.addEventListener('mouseup', stopdrawing);
    document.addEventListener('mousemove', sketch);
    updateBrushSize();
});