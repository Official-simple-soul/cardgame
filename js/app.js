let nav = document.querySelector('.nav-links')
let toggler = document.querySelector('.fa-solid')
let cardOne = document.querySelector('.card-one')
let cardTwo = document.querySelector('.card-two')
let random = document.querySelector('.count-random')
let playerCountOne = document.querySelector('.player-one-count')
let playerCountTwo = document.querySelector('.player-two-count')
let navSelect = document.querySelectorAll('.nav-links ul li')
let nextPlayer = document.querySelector('.next')
let lg = console.log.bind(document)

navSelect.forEach(function(item) {
    item.addEventListener('click', function() {
        navSelect.forEach(function(navlist) {
            navlist.classList.remove('active')
        })
        this.classList.add('active')
    })
})
toggler.addEventListener('click', function() {
    nav.classList.toggle('show')
    toggler.classList.toggle('fa-xmark')
})


random.addEventListener('click', function() {
    random.classList.toggle('change')

    let randomNumber = Math.floor(Math.random() * 11)

    let inner = Number(playerCountOne.innerText)
    let inner2 = Number(playerCountTwo.innerText)
    inner += randomNumber;
    inner2 += randomNumber;

        if (!random.classList.contains('change')) {
            cardTwo.innerHTML = randomNumber
            playerCountTwo.innerHTML = inner2
            nextPlayer.innerHTML = 'Player one pick'

            if(randomNumber <= 4) {
                cardTwo.style.backgroundColor = 'red'
            }
    
            else if(randomNumber <= 7) {
                cardTwo.style.backgroundColor = 'purple'
            }
    
            else {
                cardTwo.style.backgroundColor = 'black'
            }
        }

        else {
            cardOne.innerHTML = randomNumber
            playerCountOne.innerHTML = inner
            nextPlayer.innerHTML = 'Player two pick'

            if(randomNumber <= 4) {
                cardOne.style.backgroundColor = 'red'
            }
    
            else if(randomNumber <= 7) {
                cardOne.style.backgroundColor = 'purple'
            }
    
            else {
                cardOne.style.backgroundColor = 'black'
            }
        }

        // decision
        if (playerCountOne.innerHTML > 20) {
            nextPlayer.innerHTML = "Player 1 is out of the game"
            nextPlayer.classList.add('lost')
        }

        if (playerCountTwo.innerHTML > 20) {
            nextPlayer.innerHTML = "Player 2 is out of the game"
            nextPlayer.classList.add('lost')
        }
})

