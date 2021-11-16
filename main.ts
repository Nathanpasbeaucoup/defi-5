let alarme = 0
basic.forever(function () {
    alarme = pins.digitalReadPin(DigitalPin.P16)
    if (alarme == 1) {
        basic.showLeds(`
            # # . # #
            . # . # .
            . . # . .
            . # . # .
            # # . # #
            `)
    } else if (input.buttonIsPressed(Button.A)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
