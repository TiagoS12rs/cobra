const canvasElemento = document.querySelector("canvas");
const dCtx = canvasElemento.getContext('2d');

function setup(){
    canvasElemento.width = dCtx.width = screen.width;
    canvasElemento.height = dCtx.height = screen.height;
}
setup();
