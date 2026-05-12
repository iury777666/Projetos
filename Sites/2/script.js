function checar() {
  // Adicionado .value para pegar o conteúdo do input
  var inicio = Number(document.getElementById('inicio').value)
  var fim = Number(document.getElementById('fim').value)
  var passo = Number(document.getElementById('passo').value)
  var res = document.getElementById('res')

  // Limpa o resultado anterior antes de começar
  res.innerHTML = 'Contando: <br>'

  // Correção: c += passo para atualizar a variável
  for (var c = inicio; c <= fim; c += passo) {
    res.innerHTML += ` ${c} \u{1F232} ` // O += concatena os números
  }
}
