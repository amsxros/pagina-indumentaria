const botonaviso = document.getElementById("cerrar-aviso")
const ventanamodal = document.getElementById("ventana-modal")
const fondomodal = document.getElementById("fondo-modal")


if(!sessionStorage.getitem(ventana-modal-visto)){
    ventanamodal.classList.add("activo")
    fondomodal.classList.add("activo")


}

botonaviso.addEventListener("click",() =>{
ventanamodal.classList.remove("activo")
fondomodal.classList.remove("activo")
sessionStorage.classList.remove


})

