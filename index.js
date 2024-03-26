let cards = document.getElementById('containerCard');
let card1 = document.getElementById('containerCard1');
let some = document.getElementById('voltar1');
let aparece = document.getElementById('avancar')

aparece.addEventListener('click', function(){
    cards.classList.add('esconde');
})

some.addEventListener('click', function(){
    cards.classList.remove('esconde');   
    
})



