// Exercício 9 — Busca Binária Recursiva
// Atividades Estrutura de dados 5
// Complexidade Esperada
// Tempo: O(log n)
// Espaço (pilha recursiva): O(log n)
// [1,2,3,4,5,6,7,8,9]

function buscaBinariaRecursiva(array, numeroBuscado, inicio = 0, fim = array.length - 1) {
    console.log("chamou a funcao")
    if (inicio > fim) return -1
    const meio = inicio + Math.floor((fim - inicio) / 2)
    if(array[meio] === numeroBuscado) return meio

    if(array[meio] < numeroBuscado) return buscaBinariaRecursiva(array, numeroBuscado, meio+1, fim)

    return buscaBinariaRecursiva(array, numeroBuscado, inicio, meio - 1)
}

console.log(buscaBinariaRecursiva([1,2,3,4,5,6,7,8,9], 9))