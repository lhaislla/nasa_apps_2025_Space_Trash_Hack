document.addEventListener('DOMContentLoaded', iniciarPagina);

function iniciarPagina() {
    const title = document.querySelector('h1');
    title.textContent = 'Nasa Space Trash Hack';

    title.addEventListener('mouseenter', destacarTitulo);
    title.addEventListener('mouseleave', resetarTitulo);

    alert('Bem-vindo ao Nasa Space Trash Hack!');
}

function destacarTitulo() {
    this.style.color = '#b84a39';
    this.style.transition = 'color 0.3s';
}

function resetarTitulo() {
    this.style.color = '#fff';
}
