let res = document.getElementById('res')
let res2 = document.getElementById('res2')
let num_array_original = []
let num_array = []

function randomize(max,min){
    let random = Math.floor(Math.random() * 10)
    console.log('Resposta Aleatória = '+ random)
    return random
}
function gerador(){
    res.innerHTML = ''
    let min = 0
    let max = 10
    for(i=0; i<max; i++){
        let geral = randomize(max,min)
        num_array_original.push(geral)
    res.innerHTML = "Números do Array = [ " + num_array_original + ' ] '
    }
}   
function quickRecursiva(vetor){
    if(vetor.length <= 1){
        return vetor
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
    return quickRecursiva(left).concat([pivot], quickRecursiva(right))
}
function quickSort(){
    num_array = quickRecursiva(num_array_original)
    res2.innerHTML = `[ ${num_array} ]`
}
