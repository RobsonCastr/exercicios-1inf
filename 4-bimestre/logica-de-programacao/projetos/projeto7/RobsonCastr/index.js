const prompt = require("prompt-sync")()


const limiteEstoqueBaixo = Number(prompt("Limite de estoque baixo: "))
const qtdProdutos = Number(prompt("Quantidade de produtos: "))

const catalogo = []

for (let i = 0; i < qtdProdutos; i++) {
    const nome = prompt(`Produto ${i + 1} - nome: `)
    const preco = Number(prompt(`Produto ${i + 1} - preço: `))
    const estoque = Number(prompt(`Produto ${i + 1} - estoque: `))
    
    catalogo.push({
        nome: nome,
        preco: preco,
        estoque: estoque
    })
}


const nomeProdutoReajuste = prompt("Reajuste - nome do produto: ")
const valorAumento = Number(prompt("Reajuste - aumento: "))

for (let i = 0; i < catalogo.length; i++) {
    if (catalogo[i].nome === nomeProdutoReajuste) {
        catalogo[i].preco += valorAumento
    }
}


let produtoMaisCaro = ""
let maiorPreco = -Infinity

for (let i = 0; i < catalogo.length; i++) {
    if (catalogo[i].preco > maiorPreco) {
        maiorPreco = catalogo[i].preco
        produtoMaisCaro = catalogo[i].nome
    }
}

let estoqueTotal = 0
for (let i = 0; i < catalogo.length; i++) {
    estoqueTotal += catalogo[i].estoque
}


let produtosComEstoqueBaixo = 0
for (let i = 0; i < catalogo.length; i++) {
    if (catalogo[i].estoque <= limiteEstoqueBaixo) {
        produtosComEstoqueBaixo++
    }
}


const resumo = `Produto mais caro: ${produtoMaisCaro} | Estoque total: ${estoqueTotal} | Produtos com estoque baixo: ${produtosComEstoqueBaixo}`


module.exports = {
    catalogo,
    limiteEstoqueBaixo,
    produtoMaisCaro,
    estoqueTotal,
    produtosComEstoqueBaixo,
    resumo
}