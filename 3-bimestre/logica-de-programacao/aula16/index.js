// CRIE SUA SOLUÇÃO ABAIXO ================
const estoque = 10
let mensagem

if (estoque > 0) {
  mensagem = "Produto disponível"
} else {
  mensagem = "Produto esgotado"
}

console.log(mensagem)

module.exports = { mensagem }





// === FIM DO CÓDIGO =======================
// === NÃO FAZER NADA ABAIXO DESSA LINHA ===
module.exports = mensagem