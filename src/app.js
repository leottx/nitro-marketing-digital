// Utils
import displayOrder from "./utils/display-order";

// Styles
import './main.scss';

// Global constants
const $searchField = document.getElementById('search-field');
const $searchBtn = document.getElementById('search-btn');

// Global variables
let orderCode = '';

$searchBtn.addEventListener('click', (e) => {
  e.preventDefault();
  orderCode && displayOrder(orderCode);
});

$searchField.addEventListener('input', (e) =>{
  orderCode = e.target.value;
});

window.onload = () => $searchField.value = '';