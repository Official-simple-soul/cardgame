
let reader = document.querySelector('.reader')
let readerNum = document.querySelector('.reader-num')
let letsPlay = document.querySelector('.lets-play')
let inText = document.querySelector('.in-text')
let set = document.querySelector('.set')
let inputName = document.querySelector('.input-name')
let submitName = document.querySelector('.submit-name')
let headerBox = document.querySelector('.header-box')
let welcomeBox = document.querySelector('.welcome-box')
let detailsBox = document.querySelector('.details-box')
let read = 0



function myReader() {
const readTime = setInterval(() => {
    read++
    reader.style.width = `${read}%`
    readerNum.innerText = `${read}%`

    // document.querySelector('.loading').classList.remove('hide')

    if (read > 10 && read <= 33) {
        inText.textContent = 'Getting ready'
    }
    else if (read <= 66) {
        inText.textContent = 'Experience loads of fun'
    }
    else if (read <= 99) {
        inText.textContent = 'Created by Simple-soul'
    }
    else {
        inText.textContent = 'Completed'
        document.querySelector('.loading').innerHTML = 'Completed'
    }

    if(read == 100) {
        clearInterval(readTime)
    }

}, 100)
}

letsPlay.addEventListener('click', function() {
    setTimeout(myReader, 2000)
    document.querySelector('.loading').classList.remove('hide')
    
})



// submitName.addEventListener('input', function() {
//     let nameValue = inputName.value
//     set.innerText = `<p class="set">Hi ${nameValue}, Match is set for you</p>`
// })

// const screens = setInterval(() => {
//     read++

//     if (read == 90) {

//     }

//     if(read == 100) {
//         clearInterval(screens)
//         welcomeBox.classList.add("hide")
//         welcomeBox.classList.add("opacity")
//         detailsBox.classList.remove("hide")
//         headerBox.classList.remove("hide")
//     }
// }, 50)
