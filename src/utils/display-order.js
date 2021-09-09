// Utils
import fetchOrder from './fetch-order';
import parseDate from './parse-date';

// Exibe os dados do pedido pesquisado
async function displayOrder(orderCode) {
  const $orderInfo = document.querySelectorAll('.data'); // Array <section class='data'/>
  const $errorScreen = document.querySelector('.error');
  const order = await fetchOrder(orderCode);

  if (!order) {
    $errorScreen.hidden = false;
    return;
  } else {
    $errorScreen.hidden = true;
  }

  const {valor, entregue, data, cliente:{nome, id}} = order;

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
      h2.textContent = parseDate(data);
      p.textContent = `Data do pedido`;
    }
  });
}

export default displayOrder;