function checar() {
  var um = document.getElementById('num')
  var num = Number(um.value)
  var slc = document.getElementById('slc')
  if (um.value.length == 0) {
    alert("[ERRO] Digite um número")
  } else {
      slc.innerHTML = ''
      for (var c = 1; c <= 10; c++) {
        var opt = document.createElement('option')
        var tab = num * c
        opt.text = `${num} * ${c} = ${tab}`
        slc.appendChild(opt)
    }
  }
}