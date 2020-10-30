radio.onReceivedNumber(function (receivedNumber) {
    number = receivedNumber
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(2)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(1)
})
let number = 0
radio.setGroup(1)
basic.showLeds(`
    . # . # .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
basic.forever(function () {
    if (number == 0) {
        servos.P0.run(50)
        servos.P1.run(-50)
    }
    if (number == 1) {
        servos.P0.run(-50)
        servos.P1.run(50)
    }
    if (number == 2) {
        servos.P0.run(50)
        servos.P1.run(50)
    }
})
