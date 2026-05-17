// Selecionando os elementos HTML
const pt = document.getElementById('pts');
const btn = document.getElementById('btn');
const div = document.getElementById('but')
const temp = document.getElementById('tim')

// Variável para guardar os pontos
let timerID;
let pontos = 0;

// Escutando o evento de "click" no botão
btn.addEventListener('click', function() {
  pontos++; // Aumenta 1 ponto
  pt.textContent = pontos; // Atualiza na tela
  clearTimeout(timerID);
  rand()
  time()
});

function rand() {
  let hor = Math.floor(Math.random() * window.innerWidth - 40)
  let ver = Math.floor(Math.random() * window.innerHeight - 50)
  div.style.top = ver + 'px'
  div.style.left = hor + 'px'
}

function time() {
  timerID = setTimeout(() => {
    pontos = 0
    pt.textContent = 0
    let hor = Math.floor(Math.random() * window.innerWidth - 40)
    let ver = Math.floor(Math.random() * window.innerHeight - 50)
    div.style.top = ver + 'px'
    div.style.left = hor + 'px'
  }, 1000)
}