const barc = {
  'goleiro': 'Lamine Yamal',
  'zag': 'Griezman',
  'zag-2': 'Ronald',
  'atacante': 'Levandowski',
  'mc': 'fernebache'
}

const real = {
  'goleiro': 'Cortoa',
  'zag': 'Arnold',
  'zag-2': 'Valverde',
  'atacante': 'Mbappe',
  'mc': 'Carvahal'
}

let escolhido = ''
let escolhid = document.getElementsByName('escolhid')

function escolherr() {
  escolhido = 'real'
  escolhid.innerHTML = `Você escolheu o Real Madrid`
}

function escolherb() {
  escolhido = 'barc'
}