var limiteContador = 3
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
		if(contadorLocal < limiteContador){
			setTimeout(() => {
				[...document.querySelectorAll('span')].find(el => el.textContent == "Curtir").click(); //www.facebook
				console.log('Clicado')
				aumentarContador();
					}, getRandomSec222(3));
			setTimeout(function(){
				window.close();
					},getRandomSec222(10)); 
				}else{console.log("o contador chegou ao limite: "+contadorLocal)}
	   }else if(document.location.href === 'https://addmefast.com/free_points/facebook_post_like'){
	   console.log("não passou pelo domain mas passou pelo location.href PostLike")
		execBtnTrigger();
	   }else(console.log('Não passou pelo location.href PostLike'))

function getRandomSec222(sum){
let sec222 = (Math.random() * 4)+sum;
sec222 =  parseFloat(sec222.toFixed(3))*1000;
return sec222;
}

// Função para aumentar o contador e atualizar o localStorage
function aumentarContador() {
	contadorLocal += 1;
	localStorage.setItem('contador', contadorLocal);
	console.log('Contador: ' + contadorLocal);
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

