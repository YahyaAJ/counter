var x = 0;
var min = document.getElementById('min');
var reset = document.getElementById('reset')
var plus = document.getElementById('plus');

angka.innerHTML = `<h1>${x}</h1>`;
min.onclick = function () {
    x--;
    angka.innerHTML = `<h1>${x}</h1>`
}
reset.onclick  = function (){
    x = 0;
    angka.innerHTML = `<h1>${x}</h1>`
}
plus.onclick = function () {
    x++;
    angka.innerHTML = `<h1>${x}</h1>`
}