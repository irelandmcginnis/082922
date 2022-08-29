let turns_green = 0
let turns_red = 0
input.onGesture(Gesture.Shake, function () {
    turns_green = 0
})
input.onGesture(Gesture.TiltRight, function () {
    turns_red = 0
})
