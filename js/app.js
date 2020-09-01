/*                                  Scroll nav                          */
document.addEventListener('DOMContentLoaded',()=>{
let ubicacionPrincipal  = window.pageYOffset;

setTimeout(() => {
    document.querySelector('.hero').classList.remove('animate__animated', 'animate__fadeIn','animate__slow')
}, 300);

let UrlActual = window.location;
let exathpath=UrlActual.pathname;
let exathFilter=exathpath.split('/').slice();
exathFilter.find((element=>{
    if(element==='index.html'){
        let separateEl=element.split('.');
        console.log(separateEl[0]);
        document.getElementById("index").href = "#!";
        document.getElementById('index').addEventListener('click',()=>{
        document.querySelector('.hero').classList.add('animationOut');
            scroll('#start');
        })
    }
    return;
}))


window.onscroll = function() {
    let Desplazamiento_Actual = window.pageYOffset;
    if(ubicacionPrincipal >= Desplazamiento_Actual){
        document.querySelector('.navbar').style.top = '0';    

        setTimeout(() => {
            let whatsapp=document.querySelector('.whatsapp');
            whatsapp.style.left='0';
            whatsapp.classList.add('whatsappShow')
        }, 600);
    }
    else{
        document.querySelector('.navbar').style.top = '-130px';
        document.querySelector('.whatsapp').style.left='-400px';
    }
    ubicacionPrincipal = Desplazamiento_Actual;
}

/* internal scroll functional component*/

const scroll = (component) => {
    if(component){
        const section = document.querySelector( component );
        if(section){
            section.scrollIntoView( { behavior: 'smooth', block: 'start'} );
            const ready=document.querySelector(component);
            ready.classList.add('animate__animated', 'animate__fadeIn','animate__slow');
            setTimeout(() => {
                ready.classList.remove('animate__animated', 'animate__fadeIn','animate__slower')
            }, 3000);
        }
    };
};

/*                              ---------Any Scroll selector----------                           */

let aboutUs=document.querySelector('#aboutUs');
    aboutUs.addEventListener('click',()=>{
        scroll('#mision');
    })



/*                              -----------Rotate nav-------------------                        */
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