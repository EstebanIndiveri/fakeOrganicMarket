
document.addEventListener('DOMContentLoaded',()=>{

        btn=document.querySelector(".btnGame");
                btn.addEventListener("click",()=>{
                    // jugar_ahora();
                    console.log('clock');
                    document.querySelector('.customAlert').classList.add('visibleAlert');
                    // document.querySelector('.customAlert').innerHTML='Ingresa tu nombre para jugar';
                });

		function jugar_ahora() {

			var max = 11;
			var min = 1;
			var cant_intentos = 3;
			var acerto = false;
			var numero_aleatorio = Math.round(Math.random() * (max - min) + min);
			var numero;

			let name=document.getElementById('nombre').value;

			if(name.trim()===''){
				alert('ingrese un nombre');
			}else{
				while(cant_intentos>0 && acerto!=true){
				cant_intentos--;
					numero=parseInt(prompt('ingrese un numero'));
					if(numero===numero_aleatorio){
						alert('correcto');
						acerto=true;
					}else if(numero<numero_aleatorio){
						alert('pista es mayor');
					}else if(numero>numero_aleatorio){
						alert('es menor');
					}
					else{
						alert(`le quedan ${cant_intentos} intentos`);
					}
				}
				document.getElementById("rdo").innerHTML=`El nùmero era <b> ${numero_aleatorio}</b>`;
			}


		};
		
		
});