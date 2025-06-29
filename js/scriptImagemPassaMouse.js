const links = document.querySelectorAll('nav ul li a');
const imagempreview = document.getElementById('imagem-preview');


links.forEach(link =>{
    link.addEventListener('mouseover',()=>{
        const imagem =link.getAttribute('data-img');
        imagempreview.src = imagem;
        imagempreview.style.display = 'block';
    });

    link.addEventListener('mouseout',()=>{
        imagempreview.style.display ='none';
        imagempreview.src = '';
    });
});