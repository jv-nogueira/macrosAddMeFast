


var contador = 1;

       if(document.domain === 'facebook.com'){
	if(document.getElementsByName('__CONFIRM__')[0]) {
		setTimeout(() => {
			document.getElementsByName('__CONFIRM__')[0].click()
	}, getRandomSec222(3));

	}else{console.log('falhou no curtir')}

	   }else if(document.location.href == 'https://addmefast.com/free_points/facebook_share'){
		execBtnTrigger();

		function execBtnTrigger(){
				setTimeout(function(){
	
						if(typeof $(".single_like_button.btn3-wrap")[0] !== 'undefined'){
								 $(".single_like_button.btn3-wrap")[0].click();

								 
						contador+=0.5;
						console.log('Clicou'+contador)
						}
						execBtnTrigger();


						if(contador == 11.5){
							document.getElementsByClassName('menu_item_sub')[2].childNodes[3].click()
						}
						
	
				},getRandomSec222(12));
	
			}


	   } else {console.log('falhou btn')}
		    




function getRandomSec222(sum){
let sec222 = (Math.random() * 4)+sum;
sec222 =  parseFloat(sec222.toFixed(3))*1000;
return sec222;
}



