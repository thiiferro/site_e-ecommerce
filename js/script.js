const barraBuscar = document.querySelector("#buscar");
const buttonSearch = document.querySelector(".buttonSearch");


// Funções

function showOrHide(){
    barraBuscar.classList.toggle("hiden");
};



// Eventos
buttonSearch.addEventListener("click", () =>{
    showOrHide();
})