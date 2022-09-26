const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.getElementById('num1');
const input2 = document.getElementById('num2');
const btn = document.getElementById('btnCalcular');
const pResult = document.getElementById('result');

form.addEventListener('submit', btnClick);
//btn.addEventListener('click', btnClick);
// en addEventListener, la función que se quiere utilizar solamente está siendo
// llamada y no se busca ejecutarla, por tanto, no debe llevar los paréntesis.

function btnClick (event) {
    event.preventDefault();
    let resultado = parseFloat(input1.value) + parseFloat(input2.value);
    pResult.innerHTML = 'La suma es: ' + resultado;
    console.log('La suma es: ' + resultado);
}