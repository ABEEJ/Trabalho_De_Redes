let res = document.getElementById("res");
let res2 = document.getElementById("res2");
let res3 = document.getElementById("res3");
let res4 = document.getElementById("res4");
let res5 = document.getElementById("res5");
let res6 = document.getElementById("res6");
let res7 = document.getElementById("res7");
let num_array_original = [];
let num_array2 = [];
let num_array_original2 = [];
let num_array = [];

function randomize() {
  let random = Math.floor(Math.random() * (50 - 1 + 1) + 1);
  return random;
}
function inserir() {
  res.innerHTML = "";
  num_array_original = [];
  let min = 1;
  let max = 10;
  for (i = 0; i < max; i++) {
    let geral = randomize(min, max);
    num_array_original.push(geral);
    res.innerHTML = "Números do Array =  " + num_array_original + "  ";
  }
}
function merge(esquerdo, direito) {
  let resultado = [];
  let indiceEsquerdo = 0,
    indiceDireito = 0;

  while (indiceEsquerdo < esquerdo.length && indiceDireito < direito.length) {
    if (esquerdo[indiceEsquerdo] < direito[indiceDireito]) {
      resultado.push(esquerdo[indiceEsquerdo]);
      indiceEsquerdo++;
    } else {
      resultado.push(direito[indiceDireito]);
      indiceDireito++;
    }
  }
  return resultado
    .concat(esquerdo.slice(indiceEsquerdo))
    .concat(direito.slice(indiceDireito));
}

function mergeRecursiva(vetor) {
  if (vetor.length <= 1) {
    return vetor;
  }
  let meio = Math.floor(vetor.length / 2);
  let meioEsquerdo = vetor.slice(0, meio);
  let meioDireito = vetor.slice(meio);

  return merge(mergeRecursiva(meioEsquerdo), mergeRecursiva(meioDireito));
}

function mergeSort() {
  num_array = mergeRecursiva(num_array_original);
  res2.innerHTML = `[ ${num_array} ]`;
}
function gerador() {
  res3.innerHTML = "";
  num_array_original2 = [];
  let min = 0;
  let max = 10;
  for (i = 0; i < max; i++) {
    let geral = randomize(max, min);
    num_array_original2.push(geral);
    res3.innerHTML = "Números do Array =  " + num_array_original2 + "  ";
  }
}
function quickRecursiva(vetor) {
  if (vetor.length <= 1) {
    return vetor;
  }
  let pivot = vetor[0];
  const left = [];
  const right = [];
  for (let i = 1; i < vetor.length; i++) {
    if (vetor[i] < pivot) {
      left.push(vetor[i]);
    } else {
      right.push(vetor[i]);
    }
  }
  return quickRecursiva(left).concat([pivot], quickRecursiva(right));
}
function quickSort() {
  num_array2 = quickRecursiva(num_array_original2);
  res4.innerHTML = `[ ${num_array2} ]`;
}
function soma(){
 //media = ((num1*3)+(num2*3)+(num3*4))/10;
  let divi = 0
  let num1 = Number(document.getElementById('num1').value)
  let num2 = Number(document.getElementById('num2').value)
  let num3 = Number(document.getElementById('num3').value)
  let resposta = document.getElementById('escreva')
  resp  = num1 + num2 +num3
  divi = resp/3
 // pond = 
res5.innerHTML = 'A soma é = ' + resp
res6.innerHTML = 'A média artimédica é = ' + divi
res7.innerHTML = 'A média ponderada é = ' + media
}