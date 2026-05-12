let sel = document.getElementById('slc')
let nm = document.getElementById('num')
let res = document.getElementById('res')
let numeros = []

function adicionar() {
  let n = Number(nm.value)
  
  if (nm.value.length == 0) {
    alert('Por favor, digite um número!')
    return 
  } else if (numeros.includes(n)) {
    alert('Sem numeros iguais!')
    return
  }
  
  let opt = document.createElement('option')
  opt.text = `Valor ${n} adicionado.`
  
  sel.appendChild(opt)
  numeros.push(n)
  
  nm.value = ''
  nm.focus()
  res.innerHTML = ''
}

function finalizar() {
  
  let total = numeros.length
  let maior = numeros[0]
  let menor = numeros[0]
  let soma = 0
  for (let pos in numeros) {
    soma += numeros[pos]
    if (numeros[pos] > maior) {
      maior = numeros[pos]
    }
    if (numeros[pos] < menor) {
      menor = numeros[pos]
    }
  }
  let media = soma / total
  res.innerHTML = `Ao todo foram digitados ${total} numeros.`
  res.innerHTML += `<br/>A soma deles sao ${soma}`
  res.innerHTML += `<br/>A media deles e ${media}`
  res.innerHTML += `<br/>O menor e ${menor}`
  res.innerHTML += `<br/>O maior e ${maior}`
}