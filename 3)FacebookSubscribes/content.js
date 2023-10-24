
//não foi possível atualizar o script pois havia acabado as trocas

if(document.domain === 'facebook.com'){

	setTimeout(() => {
		$('[aria-label="Ver opções"]').click()
		$('[aria-label="Mais ações"]').click()
	}, getRandomSec222(2));


	setTimeout(() => {
		[...document.querySelectorAll('span')].find(el => el.textContent == "Seguir").click()
}, getRandomSec222(4));

	setTimeout(function(){
		window.close();

		  },getRandomSec222(8)); 



   }else if (document.location.href == 'https://addmefast.com/free_points/facebook_subscribes'){
	execBtnTrigger();

	function execBtnTrigger(){
			setTimeout(function(){

					if(typeof $(".single_like_button.btn3-wrap")[0] !== 'undefined'){
							 $(".single_like_button.btn3-wrap")[0].click();

					}
					execBtnTrigger();

			},getRandomSec222(12));

		}


   }else{console.log('falhou no btn')}
		




function getRandomSec222(sum){
let sec222 = (Math.random() * 4)+sum;
sec222 =  parseFloat(sec222.toFixed(3))*1000;
return sec222;
}



