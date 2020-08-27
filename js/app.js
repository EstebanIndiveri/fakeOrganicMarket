/**
 * Scroll nav
 */
let ubicacionPrincipal  = window.pageYOffset;
window.onscroll = function() {
    let Desplazamiento_Actual = window.pageYOffset;
    if(ubicacionPrincipal >= Desplazamiento_Actual){
        document.querySelector('.navbar').style.top = '0';
    }
    else{
        document.querySelector('.navbar').style.top = '-100px';
    }
    ubicacionPrincipal = Desplazamiento_Actual;
}
/**
 * Rotate nav
 */
window.onload=function(){
    var cosito=document.querySelector('.navbar-toggler');
    cosito.addEventListener("click", handler);
    function handler() {
        if(cosito.classList.contains('rotate')){
            cosito.classList.remove('rotate');
        }else{
            cosito.classList.add('rotate');
        }
    }
    
}