import five from "johnny-five";
import io from "raspi-io";

const board = new five.Board({
  io: new io.RaspiIO()
});

board.on("ready", () => {
 const led = new five.Led('GPIO23');
 led.blink(100);
});
