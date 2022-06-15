let board = document.querySelector('.board');

function createDivs (rows, cols)
{
  board.style.setProperty ('--grid-rows', rows);
  board.style.setProperty ('--grid-cols', cols);

  for (let i= 0; i< (rows*cols); i++)
  {
      let divs = document.createElement('div');
      divs.classList.add('divs');

      divs.setAttribute ('style', 'background: white');
      //board.insertAdjacentElement('beforeend', divs);

      board.appendChild(divs);
  }
}

createDivs(16, 16);

let divs = board.querySelectorAll('.divs');


let btnBlack = document.getElementsByClassName('btnBlack');

btnBlack[0].addEventListener('click', function() 
{
  divs.forEach(divs => divs.addEventListener ('mouseover', () => 
  {
    divs.style.backgroundColor = 'black';
  }));
});


let btnRed = document.getElementsByClassName('btnRed');

btnRed[0].addEventListener('click', function() 
{
  divs.forEach(divs => divs.addEventListener ('mouseover', () => 
  {
    divs.style.backgroundColor = 'red';
  }));
});


