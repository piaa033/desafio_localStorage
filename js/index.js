const guardar = document.getElementById("buttonText")

guardar.addEventListener('click',function(){
    var texto = document.getElementById("inputText").value
    if(texto != ""){
        localStorage.setItem("input_value",texto.trim())
        document.getElementById("inputText").value = ""
    }
    else{
        alert('Debes ingresar un texto para guardar!')
    };
})