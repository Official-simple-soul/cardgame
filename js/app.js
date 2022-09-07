// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let cardOne = document.querySelector('.card-one')
let cardTwo = document.querySelector('.card-two')
let random = document.querySelector('.count-random')
let playerCountOne = document.querySelector('.player-one-count')
let playerCountTwo = document.querySelector('.player-two-count')
let navSelect = document.querySelectorAll('.nav-links ul li')
let nextPlayer = document.querySelector('.next')
let playOne = document.querySelector('.playone')
let playTwo = document.querySelector('.playtwo')
let lg = console.log.bind(document)
let reader = document.querySelector('.reader')
let readerNum = document.querySelector('.reader-num')
let letsPlay = document.querySelector('.lets-play')
let inText = document.querySelector('.in-text')
let set = document.querySelector('.set')
let set2 = document.querySelector('.details-box-computer .set')
let inputName = document.querySelector('.input-name')
let inputName2 = document.querySelector('.details-box-computer .input-name')
let submitName = document.querySelector('.submit-name')
let submitName2 = document.querySelector('.details-box-computer .submit-name')
let main = document.querySelector('.main-3')
let welcomeBox = document.querySelector('.welcome-box')
let detailsBox = document.querySelector('.details-box')
let detailsBoxComputer = document.querySelector('.details-box-computer')
let congrat = document.querySelector('.congratulations')
let versus = document.querySelector('.versus')
let rules = document.querySelector('.rules')
let validInput = document.querySelector('.valid')
let validInput2 = document.querySelector('.details-box-computer .valid')
let read = 0
let getstart = 0

let nameArr = ['']



submitName.addEventListener('click', function() {
   let nameValue = inputName.value
    if (nameValue.length < 2) {
            validInput.classList.remove('hide')
            setTimeout(() => {
                validInput.classList.add('hide')
            }, 3000)
            set.innerText = ''
        }
    else {
        nameArr.push(nameValue)
        inputName.value = ''
        lg(nameArr[0])
        lg(nameArr.length)
    }
    
    lg(nameArr)
    if(nameArr.length == 1) {
        document.querySelector('.enter-names').innerHTML = 'Player 2, enter your name'
    }
    else if (nameArr.length == 2) {
        inputName.classList.add('opacity')
        submitName.classList.add('hide')
        playOne.innerHTML = nameArr[0]
        playTwo.innerHTML = nameArr[1]
        set.innerHTML = `${nameArr[0]} vs ${nameArr[1]}`
        document.querySelector('.enter-names').innerHTML = 'Please wait, your game is been set'
        let gettingSet = setInterval(() => {
            getstart++
            document.querySelector('.getting-ready').classList.remove('hide')
            if (getstart == 100) {
                clearInterval(gettingSet)
                rules.classList.remove('hide')
                detailsBox.classList.add('hide')
            }
        }, 50)

    }
    
})

submitName2.addEventListener('click', function() {
    let nameValue = inputName2.value
     if (nameValue.length < 2) {
             validInput2.classList.remove('hide')
             setTimeout(() => {
                 validInput2.classList.add('hide')
             }, 3000)
             set2.innerText = ''
         }
     else {
         nameArr.unshift(nameValue)
         inputName2.value = ''
     }

        inputName2.classList.add('opacity')
        submitName2.classList.add('hide')
        playOne.innerHTML = nameArr[0]
        playTwo.innerHTML = 'Computer'
        set2.innerHTML = `${nameArr[0]} vs Computer`
        document.querySelector('.details-box-computer .enter-names').innerHTML = 'Please wait, your game is been set'
        let gettingSet = setInterval(() => {
            getstart++
            document.querySelector('.details-box-computer .getting-ready').classList.remove('hide')
            if (getstart == 100) {
                clearInterval(gettingSet)
                rules.classList.remove('hide')
                detailsBoxComputer.classList.add('hide')
            }
        }, 50)

       
     
 })



random.addEventListener('click', function() {
    random.classList.toggle('change')

    let randomNumber = Math.floor(Math.random() * 10)

    let inner = Number(playerCountOne.innerText)
    let inner2 = Number(playerCountTwo.innerText)
    inner += randomNumber;
    inner2 += randomNumber;

        if (!random.classList.contains('change')) {
            cardTwo.innerHTML = randomNumber
            playerCountTwo.innerHTML = inner2
            document.querySelector('.card-two-bg').innerHTML = randomNumber
            nextPlayer.innerHTML = `${nameArr[0]} is picking`
        }

        else {
            cardOne.innerHTML = randomNumber
            document.querySelector('.card-one-bg').innerHTML = randomNumber
            playerCountOne.innerHTML = inner
            if (nameArr[1] == '') {
                nextPlayer.innerHTML = `Computer is picking`
            }
            else {
                nextPlayer.innerHTML = `${nameArr[1]} is picking`
            }
        }

        // decision
        if (playerCountOne.innerHTML > 20) {
            nextPlayer.innerHTML = `${nameArr[0]} is out of the game`
            nextPlayer.classList.add('lost')
            document.querySelector('.continue').classList.remove('hide')
            document.querySelector('.winner-name').innerText = 'Computer'
            clearInterval(setTime)
        }

        if (playerCountTwo.innerHTML > 20) {
            if (nameArr[1] == '') {
                nextPlayer.innerHTML = `Computer is out of the game`
            }

            else {
                nextPlayer.innerHTML = `${nameArr[1]} is out of the game`
            }
            
            nextPlayer.classList.add('lost')
            document.querySelector('.continue').classList.remove('hide')
            document.querySelector('.winner-name').innerText = nameArr[0]

        }

        if (playerCountOne.innerHTML == 20) {
            nextPlayer.innerHTML = `${nameArr[0]} wins`
            nextPlayer.classList.add('win')
            document.querySelector('.continue').classList.remove('hide')
            document.querySelector('.winner-name').innerText = nameArr[0]
            clearInterval(setTime)
        }

        if (playerCountTwo.innerHTML == 20) {
            if (nameArr[1] == '') {
                nextPlayer.innerHTML = `Computer wins`
                document.querySelector('.winner-name').innerText = 'Computer'
            }

            else {
                nextPlayer.innerHTML = `${nameArr[1]} wins`
                document.querySelector('.winner-name').innerText = nameArr[1]
            }
            nextPlayer.classList.add('win')
            document.querySelector('.continue').classList.remove('hide') 

        }

        if (random.classList.contains('change') && nameArr[1] == '') {
            let reading = 0
            let setTime = setInterval(() => {
                reading++
                lg(reading)
                if(reading == 20) {
                    random.click()
                }
                else if (reading > 20) {
                    clearInterval(setTime)
                }
            }, 100)
            
            
        }
})

   


function allRead(n) {
    let timeOut = setInterval(() => {
        reader.style.width = `${read}%`
        readerNum.innerText = `${read}%`

        if (read < n) {
            read++
        }

        if (read == n) {
            clearInterval(timeOut)
            
        }
    }, 25)
}

function marginOne() {
    allRead(25)
}

function marginTwo() {
    allRead(45)
}

function marginThree() {
    allRead(85)
}

function marginFour() {
    allRead(101)
}

function marginFive() {
    allRead(115)
}

function myReader() {
    marginOne()
    inText.textContent = 'Getting ready';

    setTimeout(() => {
        marginTwo()
        inText.textContent = 'Experience loads of fun'
    }, 2500);

    setTimeout(() => {
        marginThree()
        inText.textContent = 'Created by Simple-soul'
    }, 5000);

    setTimeout(() => {
        marginFour()
        inText.textContent = 'Completed';
        document.querySelector('.loading').innerHTML = 'Completed'
    }, 7500);

    setTimeout(() => {
        marginFive()
        welcomeBox.classList.add("hide")
        versus.classList.remove('hide')
    }, 10000);

}

letsPlay.addEventListener('click', function() {
    setTimeout(myReader, 2000)
    document.querySelector('.loading').classList.remove('hide')
})

document.querySelector('.continue').addEventListener('click', () => {
    main.classList.add('hide')
    congrat.classList.remove('hide')
})


document.querySelector('.play-again').addEventListener('click', () => {
    window.location.reload()
})

document.querySelector('.rule-continue').addEventListener('click', () => {
    main.classList.remove('hide')
    rules.classList.add('hide')
})

document.querySelector('.vs-user').addEventListener('click', () => {
    detailsBox.classList.remove('hide')
    versus.classList.add('hide')
})

document.querySelector('.vs-computer').addEventListener('click', () => {
    detailsBoxComputer.classList.remove('hide')
    versus.classList.add('hide')
})







