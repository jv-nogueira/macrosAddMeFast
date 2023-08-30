




       if(document.domain === 'facebook.com'){
		    if (window.opener && window.opener !== window){
document.querySelectorAll('._59k._2rgt._1j-f._2rgt').forEach((item, index) => {
  setTimeout(() => {
		if(item.innerText == 'Curtir') {
        	item.click();      	
		}

		setTimeout(function(){
           window.close();

             },getRandomSec222(6)); 

  }, getRandomSec222(3));

});
	   }
	   }else{
		execBtnTrigger();

		function execBtnTrigger(){
				setTimeout(function(){
	
						if(typeof $(".single_like_button.btn3-wrap")[0] !== 'undefined'){
								 $(".single_like_button.btn3-wrap")[0].click();
						}
						execBtnTrigger();
	
				},getRandomSec222(12));
	
			}


	   }
		    




function getRandomSec222(sum){
let sec222 = (Math.random() * 4)+sum;
sec222 =  parseFloat(sec222.toFixed(3))*1000;
return sec222;
}



