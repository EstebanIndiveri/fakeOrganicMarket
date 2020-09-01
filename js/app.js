/**
 * Scroll nav
 */
document.addEventListener('DOMContentLoaded',()=>{
let ubicacionPrincipal  = window.pageYOffset;
window.onscroll = function() {
    let Desplazamiento_Actual = window.pageYOffset;
    if(ubicacionPrincipal >= Desplazamiento_Actual){
        document.querySelector('.navbar').style.top = '0';
    }
    else{
        document.querySelector('.navbar').style.top = '-130px';
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


/*hero*/
const imgHero=document.querySelector('.hero');
    let i=0;
    let tiempo=0

    const imagenes=['fondo.png','alternative.png'];

    setInterval(() => {
        // imgHero.style.backgroundPositionY='-'+tiempo+'px';
        if(tiempo>60){
            tiempo=0;
            imgHero.style.backgroundImage='url(../assets/'+imagenes[i]+')';
            if(i===imagenes.length - 1){
                i=0;
                imgHero.classList.remove('animate__animated');

            }
            else{
                i++
                imgHero.classList.remove('animate__animated');
            }

        }
        tiempo++;
        // imgHero.classList.remove('animate__animated','animate__fadeIn');
    }, 100);
});