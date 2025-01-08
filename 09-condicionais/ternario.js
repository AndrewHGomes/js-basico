console.log("Início do programa:");

let hora = new Date().getHours();
let minutos = new Date().getMinutes();

let horaCompleta = "";

if (hora < 10) {
  hora = `0${hora}`;
} else {
  hora;
}

if (minutos < 10) {
  minutos = `0${minutos}`;
} else {
  minutos;
}

horaCompleta = `${hora}:${minutos}`;

let horario = "";

if (horaCompleta < "12:00") {
  horario = "Bom dia";
} else if (horaCompleta < "18:00") {
  horario = "Boa tarde";
} else {
  horario = "Boa noite";
}

console.log(`Hora atual: ${horaCompleta} -> ${horario}`);
