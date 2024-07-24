import { Layer } from "./components/Layer.ts";

let gameSpeed = 10;
const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const context = canvas?.getContext("2d") as CanvasRenderingContext2D;

const CANVAS_WIDTH = (canvas.width = 800);
const CANVAS_HEIGHT = (canvas.height = 700);

const backgroundLayer1 = new Image();
backgroundLayer1.src = "layer-1.png";

const backgroundLayer2 = new Image();
backgroundLayer2.src = "layer-2.png";

const backgroundLayer3 = new Image();
backgroundLayer3.src = "layer-3.png";

const backgroundLayer4 = new Image();
backgroundLayer4.src = "layer-4.png";

const backgroundLayer5 = new Image();
backgroundLayer5.src = "layer-5.png";

const layer1 = new Layer(backgroundLayer1, 0.5, context, gameSpeed);
const layer2 = new Layer(backgroundLayer2, 0.4, context, gameSpeed);
const layer3 = new Layer(backgroundLayer3, 0.3, context, gameSpeed);
const layer4 = new Layer(backgroundLayer4, 0.2, context, gameSpeed);
const layer5 = new Layer(backgroundLayer5, 0.1, context, gameSpeed);

const gameObj = [layer1, layer2, layer3, layer4, layer5];

const slider = document.getElementById("slider") as HTMLInputElement;
gameSpeed = Number(slider.value);
const showGameSpeed = document.getElementById(
  "showGameSpeed"
) as HTMLSpanElement;
showGameSpeed.innerHTML = gameSpeed.toString();
slider.addEventListener("change", function (e: Event) {
  const target = e.target as HTMLInputElement;
  showGameSpeed.innerHTML = target.value;
  gameSpeed = Number(target.value);
  gameObj.forEach((layer) => {
    layer.gameSpeed = gameSpeed;
  });
});

function animate() {
  context?.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  gameObj.forEach((layer) => {
    layer.update();
    layer.draw();
  });
  requestAnimationFrame(animate);
}

animate();
