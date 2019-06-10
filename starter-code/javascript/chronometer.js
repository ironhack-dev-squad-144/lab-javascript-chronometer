class Chronometer {
  constructor() {
    this.currentTime = 0
  }
  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime++
    }, 1000)
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }
  getSeconds() {
    return this.currentTime % 60
  }
  twoDigitsNumber(n) {
    if (n < 10) return "0"+n
    else return n.toString()
  }
  stopClick() {
    clearInterval(this.intervalId)
  }
  resetClick() {
    this.currentTime = 0
  }
  // splitClick() {}
}