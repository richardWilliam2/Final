const imagemPrincipal = document.querySelector('.imagem-principal');

const miniaturas = document.querySelectorAll('.miniaturas img')

miniaturas.forEach(miniaturas => 
    {miniaturas.addEventListener('click', () => {
        imagemPrincipal.src = miniatura.scr;
    });
});