const prompt = require("prompt-sync")()


const nomeTurno = prompt("Turno: ")
const meta = Number(prompt("Meta: "))
const producaoInicial = Number(prompt("Produção inicial: "))
const pecasPorCaixa = Number(prompt("Itens por caixa: "))


let producaoFinal = producaoInicial
while (producaoFinal < meta) {
    producaoFinal++
}


let caixasNecessarias = 0
let itensRestantes = producaoFinal

do {
    caixasNecessarias++
    itensRestantes -= pecasPorCaixa
} while (itensRestantes > 0)

const situacaoMeta = producaoFinal >= meta ? "Meta atingida" : "Meta não atingida"


const resumo = `
========================================
           RESUMO DO TURNO
========================================
 Turno: ${nomeTurno}
 Produção Final: ${producaoFinal} unidades
 Caixas Necessárias: ${caixasNecessarias} caixas
 Situação da Meta: ${situacaoMeta}
========================================`

console.log(resumo)


module.exports = {
    nomeTurno,
    meta,
    producaoInicial,
    pecasPorCaixa,
    producaoFinal,
    caixasNecessarias,
    situacaoMeta,
    resumo
}