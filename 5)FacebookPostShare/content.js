

if(document.domain === 'facebook.com'){
	console.log("passou pelo domain")
 setTimeout(() => {
	 [...document.querySelectorAll('div')].find(el => el.textContent == "Compartilhar").firstElementChild.click()	
 }, getRandomSec222(2));

 setTimeout(() => {
	 [...document.querySelectorAll('span')].find(el => el.textContent == "Compartilhar agora (Amigos)").click()
 }, getRandomSec222(4));

 /* setTimeout(() => {
	[...document.querySelectorAll('button')].find(el => el.textContent == "Publicar").click();
}, getRandomSec222(4));

[...document.querySelectorAll('button')].find(el => el.textContent == "Publicar").addEventListener('click',window.close);
*/

 setTimeout(function(){
	 window.close();
	   },getRandomSec222(15)); 

}else if (document.location.href == 'https://addmefast.com/free_points/facebook_post_share'){
	console.log("não passou pelo domain mas passou pelo location.href")
 execBtnTrigger();
}else{console.log('falhou no location.href')}

function getRandomSec222(sum){
let sec222 = (Math.random() * 4)+sum;
sec222 =  parseFloat(sec222.toFixed(3))*1000;
return sec222;
}


function execBtnTrigger(){
	setTimeout(function(){

			if(typeof $(".single_like_button.btn3-wrap")[0] !== 'undefined'){
			   console.log("passou no btn PostShare")
					 $(".single_like_button.btn3-wrap")[0].click();
			}else(console.log("não passou no btn PostShare"))
			execBtnTrigger();
	},getRandomSec222(25));
}



