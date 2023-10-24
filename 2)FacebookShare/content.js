
if(document.domain === 'facebook.com'){
	console.log("passou pelo domain")
if(document.getElementsByName('__CONFIRM__')[0]){
	console.log("passou pelo boptão de confirmar para Share")
	contadorFacebook() // Function do contador 
	setTimeout(() => {
		if(document.getElementsByName('__CONFIRM__')[0] != null){
		document.getElementsByName('__CONFIRM__')[0].click()
		}
}, getRandomSec222(14));
}else{console.log('falhou no botão Share')}
   }else if(document.location.href == 'https://addmefast.com/free_points/facebook_share'){
	console.log("passou pelo location.href mas nao passou pelo domain")
	execBtnTrigger();
   }else{console.log('falhou no btn por causa do link FacebookShare')}

//abaixo retorna um number aleatorio para setar no setTimeout
function getRandomSec222(sum){
let sec222 = (Math.random() * 4)+sum;
sec222 =  parseFloat(sec222.toFixed(3))*1000;
return sec222;
}

function contadorFacebook(){
let contador = localStorage.getItem('contador');
// Se não houver um contador, inicie-o em 0
if (contador === null) {
contador = 0;
} else {
contador = parseInt(contador); // Converte a string armazenada em um número
}
// Função para aumentar o contador e atualizar o localStorage
function aumentarContador() {
contador++;
localStorage.setItem('contador', contador);
console.log('Contador: ' + contador);
}
// Exemplo de uso: execute aumentarContador() sempre que quiser aumentar o contador
aumentarContador();
// Atenção: ao desativar/ativar a extensão, os dados armazenados anteriormente podem ser perdidos fazendo com que a contagem comece do zero 
}

function execBtnTrigger(){
setTimeout(function(){
		if(typeof $(".single_like_button.btn3-wrap")[0] !== 'undefined'){
				console.log("clicou no btn do Facebook Share")
				 $(".single_like_button.btn3-wrap")[0].click();
		}
		execBtnTrigger();		
},getRandomSec222(50));
}


