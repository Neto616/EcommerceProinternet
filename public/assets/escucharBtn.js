const optBtn = document.getElementById('optionBtn');
const lista = document.querySelector('#optText');

optBtn.addEventListener('click', actionBtn);

function actionBtn (){
    
    lista.classList.toggle('inactive');

}    
