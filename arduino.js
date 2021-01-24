import five from "johnny-five";
const board = new five.Board();

const BUILD_IN_LED_PIN = 13;
const BUTTON_PIN = 2;

board.on("ready", () => {
  const led = new five.Led(BUILD_IN_LED_PIN);
  led.blink(100);

  const button = new five.Button(BUTTON_PIN);

  button.on("hold", function () {
    console.log("Button held");
  });

  button.on("press", function () {
    console.log("Button pressed");
  });

  button.on("release", function () {
    console.log("Button released");
  });
});
