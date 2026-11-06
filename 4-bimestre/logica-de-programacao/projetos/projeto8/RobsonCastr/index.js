const prompt = require("prompt-sync")()


const precoUnitario = Number(prompt("Preço unitário: "))
const quantidade = Number(prompt("Quantidade: "))
const formaPagamento = prompt("Forma de pagamento: ")


const calcularSubtotal = (preco, quantidade) => {
    return preco * quantidade
}

const calcularFrete = (subtotal) => {
    if (subtotal >= 100) {
        return 0
    } else {
        return 10
    }
}


const calcularDesconto = (subtotal, formaPagamento) => {
    let percentual = 0

    switch (formaPagamento.toLowerCase()) {
        case "pix":
        case "dinheiro":
            percentual = 5
            break
        case "cartao":
            percentual = 0
            break
        default:
            percentual = 0
    }

    return (subtotal * percentual) / 100
}

const calcularTotal = (preco, quantidade, formaPagamento) => {
    const sub = calcularSubtotal(preco, quantidade)
    const freteVal = calcularFrete(sub)
    const descVal = calcularDesconto(sub, formaPagamento)

    return sub - descVal + freteVal
}

const subtotal = calcularSubtotal(precoUnitario, quantidade)
const frete = calcularFrete(subtotal)
const desconto = calcularDesconto(subtotal, formaPagamento)
const total = calcularTotal(precoUnitario, quantidade, formaPagamento)


const resumo = `--- RESUMO DO PEDIDO ---
Subtotal: R$ ${subtotal.toFixed(2)}
Frete: R$ ${frete.toFixed(2)}
Desconto: R$ ${desconto.toFixed(2)}
Total a pagar: R$ ${total.toFixed(2)}`

console.log(resumo)

module.exports = {
    precoUnitario,
    quantidade,
    formaPagamento,
    calcularSubtotal,
    calcularFrete,
    calcularDesconto,
    calcularTotal,
    subtotal,
    frete,
    desconto,
    total,
    resumo
}