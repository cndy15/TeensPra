const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

function drawRectangle() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "blue";
    ctx.fillRect(50, 50, 200, 100);
}

function drawSquare() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "red";
    ctx.fillRect(50, 50, 100, 100);
}