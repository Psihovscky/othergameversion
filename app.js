const board = document.querySelector('#board')
const colors = ['cyan', 'silver', 'olive', 'orange', 'darkblue', 'red', 'indigo', 'lime']
const SQUARES_NUMBER = 330

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseleave', () => 
    setColor(square))

    square.addEventListener('mouseleave', () => 
    removeColor(square))

    board.append(square)
}

document.getElementById('board').addEventListener('touchleave', function(ev) {
    document.write('Touch points removed: ' + ev.changedTouches.length)
    document.write('Touch points left on element: ' + ev.targetTouches.length)
    document.write('Touch points left on document: ' + ev.touches.length)
}, false)



function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}