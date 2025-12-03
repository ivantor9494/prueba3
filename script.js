// JavaScript Document

const btnAbrirPopup = document.getElementById('btn-abrir-popup');
const overlay = document.getElementById('overlay');
const btnCerrarPopup = document.getElementById('btn-cerrar-popup');

btnAbrirPopup.addEventListener('click', () => {
  overlay.classList.remove('hidden');
});

btnCerrarPopup.addEventListener('click', () => {
  overlay.classList.add('hidden');
});