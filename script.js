const avanca= document.querySelector('.btn-proximo')
avanca.forEach(button=> {
      button.addEvertListener('click', function(){
     const atual=document.querySelector('.ativo');
     const proximoPasso= 'passo-' + this. getAttribute('data-proximo')

          atual.classList.remove('ativoi');
document.getElementById(proximopassso).classList.add('ativo');
      })
})