function pedir() {
  // Pegamos os valores (.value) dos inputs
  let opc1 = document.getElementById('opcao1').value
  let opc2 = document.getElementById('opcao2').value
  let res = document.getElementById('res')

  // Verificação simples: se um dos campos estiver vazio, avise o usuário
  if (opc1 === '' || opc2 === '') {
    res.innerHTML = "Preencha as duas opções primeiro!"
    return
  }

  const opcoes = [opc1, opc2]
  const escolhida = opcoes[Math.floor(Math.random() * opcoes.length)]
  
  res.innerHTML = `Faça <strong>${escolhida}</strong>`
}
