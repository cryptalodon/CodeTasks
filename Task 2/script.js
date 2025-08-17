///bali 90+ olanlar birbasa imtahani kececek
///bali 90-dan kicik amma qayibi max 30 olanlar 2ci sans elde edecek
///bali 50-den az ve 30-dan cox qayibi olanlar kesilecek

// let scholar = {
//     name: "Sukuve",
//     score: 10,
//     absence: 10
// }

// function results(scholar,score,absence){
//     if (scholar.score >= 90){
//         console.log(`You Passed`);
//     }
//     else if (scholar.score < 90 && scholar.score >= 50 && scholar.absence <= 30) {
//         console.log(`You are expected to have another exam`)
//     } else {
//         console.log(`FAILED! https://youtube.com/shorts/HgMEQsqPByM?si=R3nS5uzK4A--KUnX`)
//     }

// }
// results(scholar)


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///
const theForm = document.querySelector('form')
const theInput = document.querySelector('input')
const addButton = document.querySelector('.add')
const theList = document.querySelector('.list')

addButton.disabled = !theInput.value.trim()
theInput.addEventListener('input', function(){
    addButton.disabled = !theInput.value.trim()
})

theForm.addEventListener('submit', function(e){
    e.preventDefault()
    if(!theInput.value.trim()){
        addButton.disabled = true
        return
    }
    const newNote = document.createElement("li")
    const PRG = document.createElement("a")
    const xBTN = document.createElement("button")
    newNote.append(PRG)
    newNote.append(xBTN)
    theList.append(newNote)
    PRG.innerText = theInput.value
    xBTN.innerText = "X"
    xBTN.addEventListener('click', function(){
        newNote.remove()
    })
    theInput.value = ''
    addButton.disabled = true
})
///