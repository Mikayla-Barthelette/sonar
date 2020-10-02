// Created by: Mikayla Barthelette
// Created on: Oct. 2020
// 
// This program uses a sonar to find distance
let distance = 0
basic.showIcon(IconNames.Yes)
basic.pause(500)
basic.forever(function () {
    distance = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
    basic.showNumber(distance)
})
