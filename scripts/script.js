document.addEventListener('DOMContentLoaded', iniciarPagina);

function iniciarPagina() {
    const title = document.querySelector('h1');
    title.textContent = 'Recyclonauts';

    title.addEventListener('mouseenter', destacarTitulo);
    title.addEventListener('mouseleave', resetarTitulo);

    alert('Welcome to Recyclonauts!');
}

function destacarTitulo() {
    this.style.color = '#b84a39';
    this.style.transition = 'color 0.3s';
}

function resetarTitulo() {
    this.style.color = '#fff';
}
