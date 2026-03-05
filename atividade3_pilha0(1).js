// Exercício 3 — Validador de Parênteses
// Enunciado
// Verifique se uma expressão possui parênteses balanceados:
// ((a+b)*c) => (())

function validarBalanceamentoConstante(expressao) {
    const pilha = [];
    let topoPilha = 0 // expectativa é que no fim
    const pares = {
        ")": "(",
        "]": "[",
        "}": "{"
    }
    const quemAbre = new Set(["(", "[", '{'])

    for (const caractere of expressao) {
        if (quemAbre.has(caractere)) {
            pilha[topoPilha] = caractere
            topoPilha++ 
        }
        else if (caractere in pares) {
            if (pilha.length === 0) return false
            const topo = pilha[topoPilha-1]
            pilha[topoPilha] = undefined
            topoPilha--
            if (topo !== pares[caractere]) return false
        }
    }
    return topoPilha === 0;

}
// console.log(validarBalanceamentoConstante("((a+b)*c)"))
console.log(validarBalanceamentoConstante("{[(a+b) * (c-d))]}"))