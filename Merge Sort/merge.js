let res = document.getElementById('res')
let res2 = document.getElementById('res2')
let num_array_original = []
let num_array = []

function randomize(){
    let random= Math.floor(Math.random() * (50 - 1 + 1) + 1)
     return random
 }
 function inserir(){
     res.innerHTML=''
     num_array=[]
     let min = 1
     let max= 10
     for(i=0;i<max;i++){
         let geral = randomize(min,max)
         num_array_original.push(geral)
         res.innerHTML='Valores aleatórios = '+num_array_original
     }
 }
 function merge(esquerdo,direito){
    let resultado = []
    let indiceEsquerdo = 0, indiceDireito = 0

    while(indiceEsquerdo < esquerdo.length && indiceDireito < direito.length){
        if(esquerdo[indiceEsquerdo]<direito[indiceDireito]){
            resultado.push(esquerdo[indiceEsquerdo])
            indiceEsquerdo++
        }else{
            resultado.push(direito[indiceDireito])
            indiceDireito++
        }
    }
    return resultado.concat(esquerdo.slice(indiceEsquerdo)).concat(direito.slice(indiceDireito))

}

function mergeRecursiva(vetor){
    if(vetor.length <= 1){
        return vetor
    }
    let meio = Math.floor(vetor.length/2) 
    let meioEsquerdo = vetor.slice(0, meio)
    let meioDireito = vetor.slice(meio)

    return merge(mergeRecursiva(meioEsquerdo),mergeRecursiva(meioDireito))

}

function mergeSort(){
    num_array = mergeRecursiva(num_array_original)
    res2.innerHTML = `[ ${num_array} ]`
}
