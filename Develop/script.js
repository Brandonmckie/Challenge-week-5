const currentTime = moment().format('hA')
const savebtn = document.getElementById('btn')


let currentDay = document.getElementById('current-day')
let timeBox1 = document.getElementById('time-bx-1')


let hour = document.getElementById('9am')
let time = moment().format()


currentDay.textContent = moment().format('dddd, MMMM Do')


if (hour < currentTime) {
    box1.className = 'form-control present'
}

document.getElementById('btn').onclick = function saveText() {
    let box1 = document.getElementById('time-bx-1').value
    localStorage.setItem('userInput', box1)
}
document.getElementById('time-bx-1').value = localStorage.getItem('userInput')

document.getElementById('btn2').onclick = function saveText2() {
    let box2 = document.getElementById('time-bx-2').value
    localStorage.setItem('userInput2', box2)
}
document.getElementById('time-bx-2').value = localStorage.getItem('userInput2')

document.getElementById('btn3').onclick = function saveText3() {
    let box3 = document.getElementById('time-bx-3').value
    localStorage.setItem('userInput3', box3)
}
document.getElementById('time-bx-3').value = localStorage.getItem('userInput3')

document.getElementById('btn4').onclick = function saveText4() {
    let box4 = document.getElementById('time-bx-4').value
    localStorage.setItem('userInput4', box4)
}
document.getElementById('time-bx-4').value = localStorage.getItem('userInput4')

document.getElementById('btn5').onclick = function saveText5() {
    let box5 = document.getElementById('time-bx-5').value
    localStorage.setItem('userInput5', box5)
}
document.getElementById('time-bx-5').value = localStorage.getItem('userInput5')

document.getElementById('btn6').onclick = function saveText6() {
    let box6 = document.getElementById('time-bx-6').value
    localStorage.setItem('userInput6', box6)
}
document.getElementById('time-bx-6').value = localStorage.getItem('userInput6')

document.getElementById('btn7').onclick = function saveText7() {
    let box7 = document.getElementById('time-bx-7').value
    localStorage.setItem('userInput7', box7)
}
document.getElementById('time-bx-7').value = localStorage.getItem('userInput7')

document.getElementById('btn8').onclick = function saveText8() {
    let box8 = document.getElementById('time-bx-8').value
    localStorage.setItem('userInput8', box8)
}
document.getElementById('time-bx-8').value = localStorage.getItem('userInput8')

document.getElementById('btn9').onclick = function saveText9() {
    let box9 = document.getElementById('time-bx-9').value
    localStorage.setItem('userInput9', box9)
}
document.getElementById('time-bx-9').value = localStorage.getItem('userInput9')

let testTime = document.getElementById('9am')
testTime.innerText = moment().hour(09).format('hA')

let testTime1 = document.getElementById('10am')
testTime1.innerText = moment().hour(10).format('hA')

let testTime2 = document.getElementById('11am')
testTime2.innerText = moment().hour(11).format('hA')

let testTime3 = document.getElementById('12pm')
testTime3.innerText = moment().hour(12).format('hA')

let testTime4 = document.getElementById('1pm')
testTime4.innerText = moment().hour(13).format('hA')

let testTime5 = document.getElementById('2pm')
testTime5.innerText = moment().hour(14).format('hA')

let testTime6 = document.getElementById('3pm')
testTime6.innerText = moment().hour(15).format('hA')

let testTime7 = document.getElementById('4pm')
testTime7.innerText = moment().hour(16).format('hA')

let testTime8 = document.getElementById('5pm')
testTime8.innerText = moment().hour(17).format('hA')


// ifs

if (testTime1.innerText == currentTime) {
    document.getElementById('time-bx-2').className = 'form-control present'
} if (testTime1.innerText > currentTime) {
    document.getElementById('time-bx-2').className = 'form-control future'
}

if (testTime2.innerText == currentTime) {
    document.getElementById('time-bx-3').className = 'form-control present'
} if (testTime2.innerText > currentTime) {
    document.getElementById('time-bx-3').className = 'form-control future'
}

if (testTime3.innerText == currentTime) {
    document.getElementById('time-bx-4').className = 'form-control present'
} if (testTime3.innerText > currentTime) {
    document.getElementById('time-bx-4').className = 'form-control future'
}

if (testTime4.innerText == currentTime) {
    document.getElementById('time-bx-5').className = 'form-control present'
} if (testTime4.innerText > currentTime) {
    document.getElementById('time-bx-5').className = 'form-control future'
}

if (testTime5.innerText == currentTime) {
    document.getElementById('time-bx-6').className = 'form-control present'
} if (testTime5.innerText > currentTime) {
    document.getElementById('time-bx-6').className = 'form-control future'
}

if (testTime6.innerText == currentTime) {
    document.getElementById('time-bx-7').className = 'form-control present'
} if (testTime6.innerText > currentTime) {
    document.getElementById('time-bx-7').className = 'form-control future'
}

if (testTime7.innerText == currentTime) {
    document.getElementById('time-bx-8').className = 'form-control present'
} if (testTime7.innerText > currentTime) {
    document.getElementById('time-bx-8').className = 'form-control future'
}

if (testTime8.innerText == currentTime) {
    document.getElementById('time-bx-9').className = 'form-control present'
} if (testTime8.innerText > currentTime) {
    document.getElementById('time-bx-9').className = 'form-control future'
}





