const log = console.log

log(sleepHours(20))
log(minimunCals(20))
log(minimunWaterIntake(20))
log(minimunLightIncome(20))

function sleepHours(points) {
  let minimunSleepHours = parseInt(points / 8) * 90
  return minimunSleepHours / 60
}

function minimunCals(points) {
  return 2000 + 50 * points
}

function minimunWaterIntake(points) {
  let water = (points / 3) * 100
  return parseInt(2600 + water)
}

function minimunLightIncome(points) {
  let light = parseInt(points / 12) * 45
  return light / 60
}
