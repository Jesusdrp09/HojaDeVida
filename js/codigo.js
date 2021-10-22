function ocultar() {
    let informacionPersonal = document.getElementById("informacion-personal");
    if(informacionPersonal.getAttribute("hidden")){
        informacionPersonal.removeAttribute("hidden");    
    }else{
        informacionPersonal.setAttribute("hidden", "true");
    }
    
}