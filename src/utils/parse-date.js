// Formata a data para modelo DD/MM/AAAA
function parseDate(date) {
  const parsedDate = new Date(date).toLocaleString('pt-br');
  return parsedDate.substr(0, parsedDate.indexOf(' '));
}

export default parseDate;