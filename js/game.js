
document.addEventListener('DOMContentLoaded',()=>{
	let btn=document.querySelector(".btnGame");
                btn.addEventListener("click",()=>{
					jugar_ahora();
					
					// console.log('clock');
				});

		function jugar_ahora() {

			var max = 11;
			var min = 1;
			var cant_intentos = 3;
			var acerto = false;
			var numero_aleatorio = Math.round(Math.random() * (max - min) + min);
			// var numero_aleatorio=3;
			var numero;

			let name=document.getElementById('nombre').value;

			if(name.trim()===''){
				Swal.fire('Your name is required');
			}else{
				while(cant_intentos>0 && acerto!=true){
				cant_intentos--;
					numero=prompt('ingrese un numero');
					if(numero===''||numero==null ||numero == undefined || isNaN(numero)){
						Swal.fire({
							icon: 'error',
							text: 'Only numbers please!',
						  })
						return;
					}
						if(parseInt(numero)===numero_aleatorio){
							Swal.fire({
								icon: 'success',
								text: 'Congratulations you guessed the number!',
							})
							let audio = document.getElementById("audio");
							audio.play();
							document.getElementById("rdo").innerHTML=`Congratulations! <i style="color:rgb(210, 170, 92)" class="fas fa-fire"></i> <br/> The number was <b> ${numero_aleatorio}</br>`;

							setTimeout(() => {
							document.getElementById('rdo').innerHTML='';
							document.getElementById("rdo").style.display='none';
							}, 5000);
							document.getElementById("rdo").style.display='block';

							acerto=true;
						}
						else if (parseInt(numero)<numero_aleatorio){
							alert('The number is higher');

						}else if (parseInt(numero)>numero_aleatorio){
							alert("The number is low");
						}else{
								alert(`le quedan ${cant_intentos} intentos`);
							}
							
					}
				document.getElementById("rdo").innerHTML=`Congratulations! <i style="color:rgb(210, 170, 92)" class="fas fa-fire"></i> <br/> The number was <b> ${numero_aleatorio}</br>`;
				
			}
		};

});