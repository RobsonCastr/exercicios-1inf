
const nome = "Robson Castro"
const idade = 23
const categoria = "comum"
const possuiIngresso = true
const impedido = false
const valorIngresso = 45
const valorPago = 60


let idadeStatus
if (idade >= 18) {
    idadeStatus = "Idade permitida"
} else {
    idadeStatus = "Idade não permitida"
}


let nivelAcesso
if (categoria === "organizador" || categoria === "staff") {
    nivelAcesso = "Acesso administrativo liberado"
} else {
    nivelAcesso = "Acesso comum"
}

let acessoStatus
if (idade >= 18 && possuiIngresso && !impedido) {
    acessoStatus = "Acesso liberado"
} else {
    acessoStatus = "Acesso negado"
}


let pagamentoStatus
if (valorPago >= valorIngresso) {
    pagamentoStatus = "Pagamento aprovado"
} else {
    pagamentoStatus = "Pagamento insuficiente"
}


let troco
if (valorPago >= valorIngresso) {
    troco = valorPago - valorIngresso;
} else {
    troco = 0
}


let statusPartida
if (acessoStatus === "Acesso liberado" && pagamentoStatus === "Pagamento aprovado") {
    statusPartida = "Entrada na partida confirmada"
} else {
    statusPartida = "Entrada na partida não confirmada"
}


const resumo = `
========================================
    ESTÁDIO ARENA NORTE - RESUMO
========================================
Torcedor: ${nome}
Categoria: ${categoria} (${nivelAcesso})
Valor do Ingresso: R$ ${valorIngresso}
Valor Pago: R$ ${valorPago}
Troco: R$ ${troco}
----------------------------------------
Situação do Acesso: ${acessoStatus}
Situação do Pagamento: ${pagamentoStatus}
----------------------------------------
SITUAÇÃO FINAL: ${statusPartida}
========================================
`console.log(resumo)

module.exports = {
    nome,
    idade,
    categoria,
    possuiIngresso,
    impedido,
    valorIngresso,
    valorPago,
    idadeStatus,
    nivelAcesso,
    acessoStatus,
    pagamentoStatus,
    troco,
    statusPartida,
    resumo
}
