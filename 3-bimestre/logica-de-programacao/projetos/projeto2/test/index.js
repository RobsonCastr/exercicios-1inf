const cliente = "Lucas Almeida"
const produto = "Notebook Gamer"
const preco = 4500
const quantidade = 2
const estoque = 10
const valorPago = 9000

const subtotal = preco * quantidade

let desconto = "0%"
let valorDesconto = 0

if (subtotal >= 1000) {
  desconto = "10%"
  valorDesconto = subtotal * 0.10
} else {
  desconto = "10%"
  valorDesconto = 0
}

const valorFinal = subtotal - valorDesconto

let situacaoEstoque = ""
let situacaoPedido = ""

if (quantidade <= estoque) {
  situacaoEstoque = "Estoque disponível"
  situacaoPedido = "Pedido disponível para finalização"
} else {
  situacaoEstoque = "Estoque indisponível"
  situacaoPedido = "Pedido não pode ser finalizado por falta de estoque"
}

let situacaoPagamento = ""
let troco = 0

if (valorPago >= valorFinal) {
  situacaoPagamento = "Pagamento aprovado"
  troco = valorPago - valorFinal
} else {
  situacaoPagamento = "Pagamento insuficiente"
  troco = 0;
}

console.log("Cliente:", cliente)
console.log("Produto:", produto)
console.log("Preço: R$", preco)
console.log("Quantidade:", quantidade)
console.log("Subtotal: R$", subtotal)
console.log("Desconto:", desconto)
console.log("Valor do Desconto: R$", valorDesconto)
console.log("Valor Final: R$", valorFinal)
console.log("Situação do Estoque:", situacaoEstoque)
console.log("Valor Pago: R$", valorPago)
console.log("Situação do Pagamento:", situacaoPagamento)
console.log("Troco: R$", troco)
console.log("Situação do Pedido:", situacaoPedido)

module.exports = {
  cliente,
  produto,
  preco,
  quantidade,
  estoque,
  valorPago,
  subtotal,
  desconto,
  valorDesconto,
  valorFinal,
  situacaoEstoque,
  situacaoPagamento,
  troco,
  situacaoPedido
}