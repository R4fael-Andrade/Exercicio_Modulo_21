document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const faq = document.querySelectorAll('[data-faq-movies]');
    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;

    window.addEventListener('scroll', function() {
        const posicaoAtual = window.scrollY;

        if (posicaoAtual < alturaHero) {
            ocultarHeader();
        }else{
            exibirHeader();
        }
    })

    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao){
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            escondeTodasAbas();
            aba.classList.add('shows__list--is-active');
            removeBotaoAtivo();
            botao.target.classList.add('shows__tabs__button--is-active');
        })
    }

    for(let i = 0; i < faq.length; i++) {
        faq[i].addEventListener('click', abrirFecharSinopses);
    }
})

function escondeTodasAbas() {
    const tabContainer = document.querySelectorAll('[data-tab-id]');
    for (let i = 0; i < tabContainer.length; i++) {
        tabContainer[i].classList.remove('shows__list--is-active');
    }
}

function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    for (let i = 0; i < buttons.length; i ++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}

function abrirFecharSinopses(elemento) {
    const classe = 'faq__movies__item--is-active';
    const elementoPai = elemento.target.parentNode;
    elementoPai.classList.toggle(classe);
}

function ocultarHeader() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function exibirHeader() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}