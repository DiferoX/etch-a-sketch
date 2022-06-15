function createDivs (rows, cols)
{
  let board = document.querySelector('.board');
  board.style.setProperty ('--grid-rows', rows);
  board.style.setProperty ('--grid-cols', cols);
  //board.style.gridTemplateColumns = 'repeat (${x} , 1fr)';
  //board.style.gridTemplateRows = 'repeat (${X}, 1fr)';

  for (let i= 0; i< (rows*cols); i++)
  {
      let divs = document.createElement('div');
      //divs.classList.add('divs');
      divs.setAttribute ('style', 'background: red');
      board.insertAdjacentElement('beforeend', divs);
      //board.style.gridTemplateColumns = 'repeat (${i}, 1fr)';
      //board.style.gridTemplateRows = 'repeat (${i}, 1fr)';

      //board.appendChild(divs);
  }
}

createDivs(16, 16);