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

      board.appendChild(divs);
  }
}

createDivs(16, 16);

function deleteDivs()
{
  while (board.firstChild)
  {
    board.removeChild (board.lastChild);
  }
};

let btnSize = document.getElementsByClassName('btnSize');
btnSize[0].addEventListener('click', function()
{
  let divs = board.querySelectorAll('.divs');
  divs.forEach(divs => divs.classList.remove('permahover'));
  deleteDivs();
  let x = prompt('How many rows you want?');
  createDivs (x, x);
 
});



let btnBlack = document.getElementsByClassName('btnBlack');
btnBlack[0].addEventListener('click', function() 
{
  let divs = board.querySelectorAll('.divs');
  divs.forEach(divs => divs.addEventListener ('mouseover', () => 
  {
    divs.style.backgroundColor = 'black';
  }));
});


let btnRed = document.getElementsByClassName('btnRed');
btnRed[0].addEventListener('click', function() 
{
  let divs = board.querySelectorAll('.divs');
  divs.forEach(divs => divs.addEventListener ('mouseover', () => 
  {
    divs.style.backgroundColor = 'red';
  }));
});


let btnRGB = document.getElementsByClassName('btnRGB');
btnRGB[0].addEventListener('click', function() 
{
  let divs = board.querySelectorAll('.divs');
  divs.forEach(divs => divs.addEventListener ('mouseover', () => 
  {
    let R = Math.floor(Math.random() * 255);
    let G = Math.floor(Math.random() * 255);
    let B = Math.floor(Math.random() * 255);
    divs.style.backgroundColor = 'rgb('+R+','+G+','+B+')';
  }));
});


let btnGray = document.getElementsByClassName('btnGray');
btnGray[0].addEventListener('click', function() 
{
  let divs = board.querySelectorAll('.divs');
  divs.forEach(divs => divs.addEventListener ('mouseover', () => 
  {
    let R = Math.floor(Math.random() * 255);
    divs.style.backgroundColor = 'rgb('+R+','+R+','+R+')';
  }));
});


let btnWhite = document.getElementsByClassName('btnWhite');
btnWhite[0].addEventListener('click', function() 
{
  let divs = board.querySelectorAll('.divs');
  divs.forEach(divs => divs.addEventListener ('mouseover', () => 
  {
    divs.style.backgroundColor = 'white';
  }));
});






