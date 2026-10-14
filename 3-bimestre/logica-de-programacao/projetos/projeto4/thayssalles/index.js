// ==========================================
// RF01 — Registro do pedido
// ==========================================
const cliente = 'Amanda Veloso';
const opcaoMenu = 2;
const quantidade = 4;
const formaPagamento = 'cartao';
const statusPedido = 'pendente';

// ==========================================
// RF02 — Identificação do item
// ==========================================
let prato;

switch (opcaoMenu) {
  case 1:
    prato = 'Pão Francês';
    break;
  case 2:
    prato = 'Bolo de Cenoura';
    break;
  case 3:
    prato = 'Torta Salgada';
    break;
  case 4:
    prato = 'Café com Leite';
    break;
  default:
    prato = 'Opção inválida';
}

// ==========================================
// RF03 — Preço unitário
// ==========================================
let precoUnitario;

switch (opcaoMenu) {
  case 1:
    precoUnitario = 4;
    break;
  case 2:
    precoUnitario = 22;
    break;
  case 3:
    precoUnitario = 30;
    break;
  case 4:
    precoUnitario = 7;
    break;
  default:
    precoUnitario = 0;
}

// ==========================================
// RF04 — Cálculo do subtotal
// ==========================================
const subtotal = precoUnitario * quantidade;

// ==========================================
// RF05 — Frete
// ==========================================
const freteStatus = subtotal >= 40 ? 'Frete grátis' : 'Frete pago';
const frete = subtotal >= 40 ? 0 : 15;

// ==========================================
// RF06 — Mensagem da forma de pagamento
// ==========================================
let pagamentoMensagem;

switch (formaPagamento) {
  case 'pix':
    pagamentoMensagem = 'Pagamento via PIX';
    break;
  case 'cartao':
    pagamentoMensagem = 'Pagamento via cartão';
    break;
  case 'dinheiro':
    pagamentoMensagem = 'Pagamento em dinheiro';
    break;
  default:
    pagamentoMensagem = 'Forma de pagamento inválida';
}

// ==========================================
// RF07 — Desconto e total
// ==========================================
let descontoPercentual;

switch (formaPagamento) {
  case 'pix':
  case 'dinheiro':
    descontoPercentual = 5;
    break;
  case 'cartao':
    descontoPercentual = 0;
    break;
  default:
    descontoPercentual = 0;
}

const desconto = (subtotal * descontoPercentual) / 100;
const total = subtotal - desconto + frete;

// ==========================================
// RF08 — Situação do pedido
// ==========================================
let statusMensagem;

switch (statusPedido) {
  case 'pendente':
    statusMensagem = 'Aguardando pagamento';
    break;
  case 'aprovado':
    statusMensagem = 'Pedido em preparo';
    break;
  case 'enviado':
    statusMensagem = 'Pedido a caminho';
    break;
  case 'cancelado':
    statusMensagem = 'Pedido cancelado';
    break;
  default:
    statusMensagem = 'Status desconhecido';
}

// ==========================================
// RF09 — Resumo do pedido
// ==========================================
const resumo = `
========================================
        PADARIA — RESUMO DO PEDIDO
========================================
Cliente:             ${cliente}
Item selecionado:    ${prato}
Quantidade:          ${quantidade}
Subtotal:            R$ ${subtotal}
Frete:               ${freteStatus} (R$ ${frete})
Forma de Pagamento:  ${pagamentoMensagem}
Desconto Aplicado:   R$ ${desconto} (${descontoPercentual}%)
Total do Pedido:     R$ ${total}
Status do Pedido:    ${statusMensagem}
========================================
`.trim();

console.log(resumo);