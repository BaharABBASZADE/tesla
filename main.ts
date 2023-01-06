let a = 0
let b = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(a)
    a = randint(0, 9)
})
input.onButtonPressed(Button.B, function () {
    b = randint(0, 9)
    basic.showNumber(b)
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(a * b)
})
