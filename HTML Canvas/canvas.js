window.addEventListener("load", () => {
    const canvas = document.querySelector("#canvas");	
    const ctx = canvas.getContext("2d");

    //Resizing
    canvas.height = window.innerHeight / 2;
    canvas.width = window.innerWidth / 2;

    //Variables
    let painting = false;
    ctx.lineWidth = 10;
    ctx.lineCap = "round";

    //We need to put draw(e) because if we don't we can't draw dots.
    //The mousedown only fires if we click, but we don't move it so it doesn't emit the mousemove event, therefore
    //not calling the draw() function
    //That's why it won't draw if we just click.
    function startPosition(e){
        painting = true;
        draw(e);
    }

    //We need to put ctx.beginPath() to update the new Path or position to draw.
    //If we don't, it will remember the last path we draw, therefore if we let go, and click/move again,
    //It will fill the line.
    function finishPosition(){
        painting = false;
        ctx.beginPath()
    }

    
function changeColorRed(){
    ctx.strokeStyle = "red";
}
function changeColorBlue(){
    ctx.strokeStyle = "blue";
}
function changeColorBlack(){
    ctx.strokeStyle = "black";
}
function changeColorYellow(){
    ctx.strokeStyle = "yellow";
}

    function draw(e){
        if(!painting) return;
        

        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);

    }

    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", finishPosition);
    canvas.addEventListener("mousemove", draw);
    document.getElementById("red").addEventListener("click", changeColorRed);
    document.getElementById("yellow").addEventListener("click", changeColorYellow);
    document.getElementById("blue").addEventListener("click", changeColorBlue);
    document.getElementById("black").addEventListener("click", changeColorBlack);
})
