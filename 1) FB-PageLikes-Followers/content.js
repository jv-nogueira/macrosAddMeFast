var limiteContador = 2

if(document.domain === 'facebook.com'){
	console.log("passou pelo domain")
// Verifique se o contador já está armazenado no localStorage
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
	if(contador <= limiteContador){
		console.log("passou pelo contador")
  setTimeout(() => {
	if( $("[aria-label='Curtir']") != null ){
		console.log("passou pelo curtir")
		aumentarContador();
	$("[aria-label='Curtir']").click()
	}else{console.log("não passou pelo curtir")}
	setTimeout(() => {
           window.close();
        },getRandomSec222(4)); 
  }, getRandomSec222(3));
}else{
	console.log("oChegou ao limite")
		setTimeout(() => {
           window.close();
        },getRandomSec222(7)); 
}	
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
let contadorBtn = 0;
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
    if (contadorBtn >= limiteContador) {
		console.log("Chegou ao limite");
	setTimeout(() => {
		$("[href='/free_points/facebook_share']")[0].click()
	}, getRandomSec222(10));
    } else {
      execBtnTrigger();
    }
  }, getRandomSec222(20));
}