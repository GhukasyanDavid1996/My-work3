$(document).ready(function(){
var flag = false;
			$('.a8').click(function(){
				if(!flag){
					$('.dropdown').slideDown(400);
					$('.dropdown').css({"position":"absolute","display":"block"})
				}else{
					$('.dropdown').slideUp();
				}
				flag = !flag;
			});
		})