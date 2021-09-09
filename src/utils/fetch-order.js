import json from '../data/data.json';

// Requisita o pedido para base de dados
async function fetchOrder(orderCode) {
  const response = await fetch(json);
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

export default fetchOrder;