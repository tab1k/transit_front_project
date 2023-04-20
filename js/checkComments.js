const arrow = document.querySelector('.arrow');
const block = document.querySelector('.arrow-block');
arrow.addEventListener('click', () => {
  arrow.classList.toggle('up'); /* переключение класса на стрелке */
  if (arrow.classList.contains('up')) {
    block.style.height = '80px'; /* изменение высоты блока */
  } else {
    block.style.height = '40px';
  }
});
