## For Raspberry-Pi 3 Model B Plus (also Raspberry-Pi Zero),
- depends on raspi-io and johnny-five npm packages
- `npm i`
- `node raspberry-pi.js`

## For Arduino Nano (and all Arduino Models),
- Arduino IDE download
- File > Example > Firmata > StandardFirmataPlus
- Tools > Board > Arduino Nano
- Tools> Processor > ATmega328P (Old Bootloader)
- Tools> Port > usbserial-xxx
- depends on johnny-five npm package and StandardFirmataPlus script on Arduino
- `npm i`
- `node arduino.js`


#### when occurred an error about serialport (arduino) on MacOS

firstly,

run `xcode-select --install`

after then `npm install johnny-five`

_when 2017 using nokia 5510 display_

![nokia5510screen](https://github.com/alikadir/javascript-iot/blob/master/assets/20170608_003118.jpg?raw=true)

