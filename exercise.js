const altura = 1.1
const acompanhada = true

function podeSubir(altura, acompanhada) {
  if (altura >= 1.4 && altura <= 2) {
    console.log("Acesso autorizado")
  } else if ((altura < 1.4 && altura >= 1.2) && acompanhada) {
    console.log("Acesso autorizado com acompanhante")
  } else {
    console.log("Acesso negado")
  }
}

podeSubir(altura, acompanhada)