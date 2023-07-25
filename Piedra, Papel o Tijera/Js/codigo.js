function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function eleccion(jugada) {
  if (jugada == 1) {
    return "Piedra 🥌";
  } else if (jugada == 2) {
    return "Papel 📄";
  } else if (jugada == 3) {
    return "Tijera ✂️";
  } else {
    return "No esta disponible esta opcion ❌";
  }
}

function combate(jugador, pc) {
  if (jugador == pc) {
    alert("¡EMPATE! 🤼");
    empate++;
  } else if (
    (jugador == 1 && pc == 3) ||
    (jugador == 2 && pc == 1) ||
    (jugador == 3 && pc == 2)
  ) {
    alert("¡GANASTE! 🥳");
    triunfo++;
  } else {
    alert("PERDISTE... 😢");
    perdidas++;
  }
}

let triunfo = 0;
let perdidas = 0;
let empate = 0;
// 1 = Piedra, 2 = Papel, 3 = Tijera
while (triunfo < 3 && perdidas < 3 && empate < 3) {
  let pc = aleatorio(1, 3);
  let jugador = prompt(
    "Elige: 1 para Piedra 🥌, 2 para Papel 📄 o 3 para Tijera ✂️"
  );

  alert("Tu ejiges: " + eleccion(jugador) + "\nPc elige: " + eleccion(pc));
  combate(jugador, pc);
}

alert(
  "🏆Triunfos: " +
    triunfo +
    " veces.\n🚨Perdidas: " +
    perdidas +
    " veces.\n⚖Empates: " +
    empate +
    "veces."
);
