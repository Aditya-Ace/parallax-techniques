export class Layer {
  private positionX: number;
  private positionY: number;
  private imageWidth: number;
  private imageHeight: number;
  private positionX2: number;
  private imageFile: CanvasImageSource;
  private speedModifier: number;
  public gameSpeed: number;
  private currentGameSpeed: number;
  private canvasContext: CanvasRenderingContext2D;

  constructor(
    imageFile: CanvasImageSource,
    speedModifier: number,
    context: CanvasRenderingContext2D,
    gameSpeed: number
  ) {
    this.positionX = 0;
    this.positionY = 0;
    this.imageWidth = 2400;
    this.imageHeight = 700;
    this.gameSpeed = gameSpeed;
    this.positionX2 = this.imageWidth;
    this.imageFile = imageFile;
    this.speedModifier = speedModifier;
    this.currentGameSpeed = this.gameSpeed * this.speedModifier;
    this.canvasContext = context;
  }

  public log() {
    console.log(this.gameSpeed);
  }

  public update() {
    this.currentGameSpeed = this.gameSpeed * this.speedModifier;
    if (this.positionX < -this.imageWidth) {
      this.positionX =
        this.imageWidth + this.positionX2 - this.currentGameSpeed;
    }
    if (this.positionX2 < -this.imageWidth) {
      this.positionX2 =
        this.imageWidth + this.positionX - this.currentGameSpeed;
    }
    this.positionX = Math.floor(this.positionX - this.currentGameSpeed);
    this.positionX2 = Math.floor(this.positionX2 - this.currentGameSpeed);
  }

  public draw() {
    this.canvasContext.drawImage(
      this.imageFile,
      this.positionX,
      this.positionY,
      this.imageWidth,
      this.imageHeight
    );
    this.canvasContext.drawImage(
      this.imageFile,
      this.positionX2,
      this.positionY,
      this.imageWidth,
      this.imageHeight
    );
  }
}
