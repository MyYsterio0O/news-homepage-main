const menu = document.querySelector('#burger')
const exitmenu = document.querySelector('#closeimgg')

let openmenu = () => {
    let expand = document.querySelector('.nav')
    expand.classList.remove('burgermenu')
    console.log('ho')
}
let closemenu = () => {
    let narrow = document.querySelector('.nav')
    narrow.classList.add('burgermenu')
    console.log('hi')
}

menu.addEventListener('click', openmenu)
exitmenu.addEventListener('click', closemenu)