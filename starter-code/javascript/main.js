// var chronometer = {
//   currentTime: 0,
//   startClick: function() {
//     this.intervalId = setInterval(() => {
//       this.currentTime++
//     }, 1000)
//   },
//   getMinutes: function() {
//     return Math.floor(this.currentTime / 60)
//   },
//   getSeconds: function() {
//     return this.currentTime % 60
//   },
//   twoDigitsNumber: function(n) {
//     if (n < 10) return "0"+n
//     else return n.toString()
//   },
//   stopClick: function() {
//     clearInterval(this.intervalId)
//   },
//   resetClick: function() {
//     this.currentTime = 0
//   }
// }

var chronometer = new Chronometer();
var $btnLeft    = document.getElementById('btnLeft');
var $btnRight   = document.getElementById('btnRight');
var $minDec     = document.getElementById('minDec');
var $minUni     = document.getElementById('minUni');
var $secDec     = document.getElementById('secDec');
var $secUni     = document.getElementById('secUni');
var $milDec     = document.getElementById('milDec');
var $milUni     = document.getElementById('milUni');
var $splitsList = document.querySelector('#splits');

// This function is only modifying the DOM
function printTime() {
  printMinutes()
  printSeconds()
}

// This function is only modifying the DOM
function printMinutes() {
  let stringMin = chronometer.twoDigitsNumber(chronometer.getMinutes())
  $minDec.innerText = stringMin[0]
  $minUni.innerText = stringMin[1]
}

// This function is only modifying the DOM
function printSeconds() {
  let stringSec = chronometer.twoDigitsNumber(chronometer.getSeconds())
  $secDec.innerText = stringSec[0]
  $secUni.innerText = stringSec[1]
}

function printMilliseconds() {
}

// This function is only modifying the DOM
function printNewSplit() {
  let stringMin = chronometer.twoDigitsNumber(chronometer.getMinutes())
  let stringSec = chronometer.twoDigitsNumber(chronometer.getSeconds())
  // Insert at the end of $splitsList
  $splitsList.innerHTML += `<li>${stringMin}:${stringSec}</li>`
}

// This function is only modifying the DOM
function clearSplits() {
  $splitsList.innerHTML = ""
}

// This function is only modifying the DOM
function setStopBtn() {
  $btnLeft.classList.remove('start')
  $btnLeft.classList.add('stop')
  $btnLeft.innerText = 'STOP'
}

// This function is only modifying the DOM
function setSplitBtn() {
  $btnRight.classList.remove('reset')
  $btnRight.classList.add('split')
  $btnRight.innerText = 'SPLIT'
}

// This function is only modifying the DOM
function setStartBtn() {
  $btnLeft.classList.add('start')
  $btnLeft.classList.remove('stop')
  $btnLeft.innerText = 'START'
}

// This function is only modifying the DOM
function setResetBtn() {
  $btnRight.classList.add('reset')
  $btnRight.classList.remove('split')
  $btnRight.innerText = 'RESET'
}

// Start/Stop Button
let intervalId
$btnLeft.onclick = function () {
  // If we click on start
  if ($btnLeft.innerText === 'START') {
    chronometer.startClick()
    intervalId = setInterval(() => {
      console.log("setInterval")
      printTime()
    }, 1000)
    setStopBtn()
    setSplitBtn()
  }
  else {
    chronometer.stopClick()
    clearInterval(intervalId)
    setStartBtn()
    setResetBtn()
  }
};

// Reset/Split Button
$btnRight.onclick = function () {
  console.log("Right button clicked", $btnRight.innerText === 'SPLIT')
  if ($btnRight.innerText === 'SPLIT') {
    printNewSplit()
  }
  else {
    chronometer.resetClick()
    printTime() // To print "00:00"
    clearSplits()
  }
};
