## For Raspberry-Pi 3 Model B Plus (also Raspberry-Pi Zero),
- `npm install raspi-io`
- `npm install johnny-five`
- `node raspberry-pi.js`

## For Arduino Nano (and all Arduino Models),
- Arduino IDE download
- File > Example > Firmata > StandardFirmataPlus
- Tools > Board > Arduino Nano
- Tools> Processor > ATmega328P (Old Bootloader)
- Tools> Port > usbserial-xxx
- `npm install johnny-five`
- `node arduino.js`


#### when occurred an error about serialport (arduino) on MacOS

firstly,

run `xcode-select --install`

after then `npm install johnny-five`

_when 2017 using nokia 5510 display_

![nokia5510screen](https://github.com/alikadir/js-iot-johnny-five/blob/master/assets/20170608_003118.jpg?raw=true)

