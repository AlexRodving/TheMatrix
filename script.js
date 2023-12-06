const texts = [
    "Wake up, Neo...",
    "The Matrix has you...",
    "Follow the white rabbit.",
    "Knock, knock, Neo."
]

let index = 0
let textElement = document.getElementById('text')

function typeWriter(text, i, cb) {
    textElement.innerHTML = text.slice(0, i)

    if (i <= text.length) {
      setTimeout(()=>{ typeWriter(text, i + 1, cb);}, 100)
    } else {
      setTimeout(cb, 1000)
    }
}

function displayNextText() {
    if (index < texts.length) {
      typeWriter(texts[index], 0, displayNextText)
      index++
    } else {
      textElement.innerHTML += '<span class="cursor"></span>'
    }
}

displayNextText()

document.addEventListener('dblclick', function() {
    window.location.href = 'main.html'
})

document.addEventListener('touchstart', function() {
  window.location.href = 'main.html';
});