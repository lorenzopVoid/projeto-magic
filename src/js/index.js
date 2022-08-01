/*
Objetivo 1 - ao clicar na seta avançar temos que passar para o proximo card da lista.
    passo 1: pegar o elemento HTML da seta avançar;
    passo 2: identificar o clique do usuário na seta avançar;
    passo 3: aparecer o proximo card da lista;
    passo 4: buscar o cartão selecionado e esconder.

Objetivo 2 - ao clicar na seta voltar temos que mostrar o card anterior da lista.
    passo 1: pegar o elemento HTML da seta voltar;
    passo 2: identificar o clique do usuário na seta voltar;
    passo 3: aparecer o card anterior da lista;
    passo 4: buscar o cartão selecionado e esconder.
*/
// OBJETIVO1:
// pega o elemento HTML da seta avançar:
const btnAvancar = document.getElementById('btnAvancar');

// pegar o elemento HTML da seta voltar
const btnVoltar = document.getElementById('btnVoltar');

// aparecer o proximo cartao da lista:
const cartoes = document.querySelectorAll('.cartao');

let cartaoAtual = 0;

function esconderCartaoSelecionado(){
    const cartaoSelecionado = document.querySelector('.selecionado');
    cartaoSelecionado.classList.remove('selecionado');
}
function mostrarCartao(indiceCartao){
    cartoes[indiceCartao].classList.add('selecionado');
}

// identificar o clique do usuário na seta avançar:

btnAvancar.addEventListener('click', function(){
    
    if(cartaoAtual === cartoes.length - 1) return;  
    // buscar cartao selecionado e esconder:
    esconderCartaoSelecionado();
    cartaoAtual++;
    mostrarCartao(cartaoAtual);
});

// OBJETIVO2:
// identificar o clique do usuário na seta voltar:

btnVoltar.addEventListener('click', function(){

    if(cartaoAtual === 0) return;
    esconderCartaoSelecionado();
    cartaoAtual--;
    mostrarCartao(cartaoAtual);
});
