const horas = document.getElementById('horas') // pegando a id 'horas' para armazenar info
const minutos = document.getElementById('minutos') // pegando a id 'minutos' para armazenar info
const segundos = document.getElementById('segundos') // pegando a id 'segundos' para armazenar info

const relogio = setInterval(function time() {

    let dateToday = new Date(); // criando a variavél data de hoje
    let hr = dateToday.getHours(); // pegando hora
    let min = dateToday.getMinutes(); // pegando minutos
    let s = dateToday.getSeconds(); // pegando segundos

    if (hr < 10) hr = '0' + hr //colocando o 0 antes
    if (min < 10) min = '0' + min //colocando o 0 antes
    if (s < 10) s = '0' + s //colocando o 0 antes

    horas.textContent = hr; // atribuindo ao html 
    minutos.textContent = min; // atribuindo ao html 
    segundos.textContent = s; // atribuindo ao html 
})