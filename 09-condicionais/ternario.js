console.log("Início do programa:");

const hora = new Date().getHours();
const minutos = new Date().getMinutes();

let horaCompleta = "";

if (hora < 10 && minutos < 10) {
  horaCompleta = `0${hora}:0${minutos}`;
} else {
  horaCompleta = `${hora}:${minutos}`;
}

const manha = horaCompleta < "12:00" ? "Bom dia" : "Boa tarde";

console.log(`Hora atual: ${horaCompleta} -> ${manha}`);
