// Global constants
const URL = './data/data.json';
const $searchField = document.getElementById('search-field');
const $searchBtn = document.getElementById('search-btn');
const $orderInfo = document.querySelectorAll('.data'); // Array <section class='data'/>
const $errorScreen = document.querySelector('.error');

// Global variables
let orderCode = '';

// Requisita o pedido para base de dados
async function fetchOrder(orderCode) {
  const response = await fetch('./data/data.json');
  const data = await response.json();

  const {encomendas} = data;

  for (const order of encomendas) {
    let {numero} = order;
    
    if (numero.toLowerCase() === orderCode.toLowerCase()) {
      return order;
    }
  }

  return undefined
}

// Exibe os dados do pedido pesquisado
async function displayOrder() {
  const order = await fetchOrder(orderCode);

  if (!order) {
    $errorScreen.hidden = false;
    return;
  } else {
    $errorScreen.hidden = true;
  }

  const {valor, entregue, data, cliente:{nome, id}} = order;
  
  let count = 0;

  $orderInfo.forEach(section => {
    section.hidden = false;

    const h2 = section.getElementsByTagName('h2')[0];
    const p = section.getElementsByTagName('p')[0];

    if (section.id === 'client-id') {
      h2.textContent = `${id} - ${nome}`;
      p.textContent = `Número de ordem e nome do cliente`;
    } else if (section.id === 'price') {
      h2.textContent = `R$ ${valor}`;
      p.textContent = `Valor do produto`;
    } else if (section.id === 'status') {
      h2.textContent = entregue ? 'Entregue' : 'Entregar';
      p.textContent = `Situação da encomenda`;
    } else if (section.id === 'date') {
      h2.textContent = formatDate(data);
      p.textContent = `Data do pedido`;
    }
  });
}

// Formata a data para modelo DD/MM/AAAA
function formatDate(date) {
  const dateFormated = new Date(date).toLocaleString('pt-br');
  return dateFormated.substr(0, dateFormated.indexOf(' '));
}

$searchBtn.addEventListener('click', (e) => {
  e.preventDefault();
  orderCode && displayOrder(orderCode);
});

$searchField.addEventListener('input', (e) =>{
  orderCode = e.target.value;
});

window.onload = () => $searchField.value = '';