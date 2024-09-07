const texto = localStorage.getItem('input_value')
const insertar = document.getElementById('data')

document.addEventListener('DOMContentLoaded',function(){
    if(texto){
        insertar.innerHTML = texto
    }
    else{
        alert('No ha ingresado ningún texto al localStorage!')
    }
})