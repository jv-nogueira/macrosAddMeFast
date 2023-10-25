var limiteContador = 1
var limiteContadorBtn = 10

if(document.domain === 'facebook.com'){
	console.log("passou pelo domain")

// Verifique se o contador já está armazenado no localStorage
var contadorLocal = localStorage.getItem('contador');

// Se não houver um contador, inicie-o em 0
if (contadorLocal === null) {
	contadorLocal = 0;
} else {
	contadorLocal = parseInt(contadorLocal); // Converte a string armazenada em um número
}
console.log("Contador: "+contadorLocal)
console.log("O limite é: "+limiteContador)
setTimeout(() => {
	if(contadorLocal < limiteContador){
		console.log("passou pelo contador")
  setTimeout(() => {
	if( [...document.querySelectorAll('span')].find(el => el.textContent == "Seguir") == undefined ){
		console.log("passou a Curtir")
		aumentarContador();
	$("[aria-label='Curtir']").click()
	setTimeout(() => {
		window.close();
	 },getRandomSec222(7)); 
	}else(console.log('não passou pelo curtir'))
	
	if( [...document.querySelectorAll('span')].find(el => el.textContent != "Seguir" ) ){
		console.log("passou a Seguir")
		aumentarContador();
		setTimeout(() => {
		[...document.querySelectorAll('span')].find(el => el.textContent == "Seguir").click();
		$("[aria-label='Seguir']").click()
	}, getRandomSec222(3));
	setTimeout(() => {
		window.close();
	 },getRandomSec222(7)); 
	}else{console.log("não passou pelo seguir")} 
  }, getRandomSec222(3));
}else{
	console.log("Chegou ao limite: "+contadorLocal)
}
},getRandomSec222(2));	
	   }else if(document.location.href == "https://addmefast.com/free_points/facebook_likes"){
		console.log("não passou pelo domain ou passou pelo link (location.href)")
		execBtnTrigger();
	   }else{console.log("não passou pelo link (location.href)")}

// Função para gerar um número aleatório 
function getRandomSec222(sum){
let sec222 = (Math.random() * 4)+sum;
sec222 =  parseFloat(sec222.toFixed(3))*1000;
return sec222;
}

// Variável para manter o contador
var contadorBtn = 0;
// Função para executar o clique no botão e contar
function execBtnTrigger() {
  setTimeout(function () {
    if (typeof $(".single_like_button.btn3-wrap")[0] !== 'undefined') {
      console.log("Clicou no botão de LikesFollowers");
      $(".single_like_button.btn3-wrap")[0].click();
      contadorBtn += 0.5; 
	  console.log("Contador: "+contadorBtn)
    } else {
      console.log("Não clicou no botão de LikesFollowers");
    }
    // Verifica se o contador atingiu o limite
    if (contadorBtn >= limiteContadorBtn) {
		console.log("Chegou ao limite: "+limiteContadorBtn);
	setTimeout(() => {
		$("[href='/free_points/facebook_share']")[0].click()
	}, getRandomSec222(10));
    } else {
      execBtnTrigger();
    }
  }, getRandomSec222(20));
}

// Função para aumentar o contador e atualizar o localStorage
function aumentarContador() {
	contadorLocal += 1;
	localStorage.setItem('contador', contadorLocal);
	console.log('Contador: ' + contadorLocal);
}
