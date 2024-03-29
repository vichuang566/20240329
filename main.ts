radio.onReceivedNumber(function (receivedNumber) {
    list = ["1", "2", "3"]
    enemy = list[randint(0, 2)]
    if (enemy == "1") {
        basic.showIcon(IconNames.Scissors)
    }
    if (enemy == "2") {
        basic.showIcon(IconNames.SmallSquare)
    }
    if (enemy == "3") {
        basic.showIcon(IconNames.Square)
    }
    basic.pause(500)
    if (receivedNumber == 1 && enemy == "1") {
        basic.showString("=")
        radio.sendString("=")
    }
    if (receivedNumber == 2 && enemy == "2") {
        basic.showString("=")
        radio.sendString("=")
    }
    if (receivedNumber == 3 && enemy == "3") {
        basic.showString("=")
        radio.sendString("=")
    }
    if (receivedNumber == 1 && enemy == "2") {
        basic.showString("W")
        radio.sendString("L")
    }
    if (receivedNumber == 2 && enemy == "3") {
        basic.showString("W")
        radio.sendString("L")
    }
    if (receivedNumber == 3 && enemy == "1") {
        basic.showString("W")
        radio.sendString("L")
    }
    if (receivedNumber == 1 && enemy == "3") {
        basic.showString("L")
        radio.sendString("W")
    }
    if (receivedNumber == 2 && enemy == "1") {
        basic.showString("L")
        radio.sendString("W")
    }
    if (receivedNumber == 3 && enemy == "2") {
        basic.showString("L")
        radio.sendString("W")
    }
})
input.onButtonPressed(Button.A, function () {
    我方 = 1
    radio.sendNumber(1)
    basic.showLeds(`
        # # . . #
        # # . # .
        . . # . .
        # # . # .
        # # . . #
        `)
})
input.onButtonPressed(Button.AB, function () {
    我方 = 3
    radio.sendNumber(3)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    我方 = 2
    radio.sendNumber(2)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
})
let 我方 = 0
let enemy = ""
let list: string[] = []
radio.setGroup(1)
