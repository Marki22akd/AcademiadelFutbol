const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar-wrapper');
const container = document.getElementById('container2');
const tablas = document.getElementById('tablas');
menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('show');
    if(tablas){
    tablas.classList.toggle('hidden');
    }
    if(container){
    container.classList.toggle('hidden');
    }
});