function hasClassAtt(){
  const btnElem = document.querySelector('.js-button');

    if(btnElem.classList.contains('js-button'))
  document.querySelector('p').innerHTML = true;
}

function turnButtonColor(){
  const btnElem = document.querySelector('.js-gaming-btn');

  if(!btnElem.classList.contains('is-toggled')){
    btnElem.classList.add('is-toggled');
  }
  else{
    btnElem.classList.remove('is-toggled');
  }
}

function changeButtonColor(selector){
  const btnElem = document.querySelector(selector);

  if(!btnElem.classList.contains('is-toggled-btn')){
    turnOffPreviousButton();
    btnElem.classList.add('is-toggled-btn');
  }else{
    btnElem.classList.remove('is-toggled-btn');
  }

}

function turnOffPreviousButton(){
  const previousButton = document.querySelector('.is-toggled-btn');
  if (previousButton) {
    previousButton.classList.remove('is-toggled-btn');
  }
}
