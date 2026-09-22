
const aluno = "Enzo Ribeiro"
const turma = "Turma Avançada"
const valorMensalidade = 300
const taxaMatricula = 50
const idadeAluno = 9
const possuiConvenio = 0
const valorPago = 350

const valorBase = valorMensalidade + taxaMatricula


let idadeStatus
if (idadeAluno >= 12) {
  idadeStatus = "Idade permitida para a turma avançada"
} else {
  idadeStatus = "Idade não permitida para a turma avançada"
}


let descontoStatus
let valorDesconto

if (possuiConvenio === 1) {
  descontoStatus = "Com desconto"
  valorDesconto = 35
} else {
  descontoStatus = "Sem desconto"
  valorDesconto = 0
}


const valorFinal = valorBase - valorDesconto;


let pagamentoStatus
if (valorPago >= valorFinal) {
  pagamentoStatus = "Matrícula quitada"
} else {
  pagamentoStatus = "Matrícula com saldo pendente"
}


let troco
if (valorPago >= valorFinal) {
  troco = valorPago - valorFinal
} else {
  troco = 0
}


let statusMatricula
if (idadeAluno >= 12) {
  if (valorPago >= valorFinal) {
    statusMatricula = "Matrícula confirmada"
  } else {
    statusMatricula = "Matrícula confirmada com saldo pendente"
  }
} else {
  statusMatricula = "Matrícula não pode ser confirmada: idade não permitida para a turma avançada"
}


const resumo = `
=== RESUMO DA MATRÍCULA ===
Aluno: ${aluno}
Turma: ${turma}
Idade: ${idadeAluno} anos (${idadeStatus})
Valor Base: R$ ${valorBase}
Desconto: ${descontoStatus} (R$ ${valorDesconto})
Valor Final: R$ ${valorFinal}
Valor Pago: R$ ${valorPago}
Status do Pagamento: ${pagamentoStatus}
Troco: R$ ${troco}
Situação Final: ${statusMatricula}
`console.log(resumo)


module.exports = {
  aluno,
  turma,
  valorMensalidade,
  taxaMatricula,
  idadeAluno,
  possuiConvenio,
  valorPago,
  valorBase,
  idadeStatus,
  descontoStatus,
  valorDesconto,
  valorFinal,
  pagamentoStatus,
  troco,
  statusMatricula,
  resumo
}
