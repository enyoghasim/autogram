
$(document).ready(function(){
/*$(window).bind('popstate',function(){
		$.ajax({url:location.pathname,
success:function(data){
			$('body').html(data);
		}
	})
		
	});
	
*/	$('a[id="show"]').on('click',function(e){
		e.preventDefault();
		purl = $(this).attr('data-target');
		if (purl == 'show'){
			$('.dropdown-menu').css('display',"inline");
			$(this).attr('data-target','hide');
			return;
		}else if (purl == 'hide'){
			$('.dropdown-menu').css('display',"none");
			$(this).attr('data-target','show');
			return;
		}
		});
/*
$('a[id="url"]').on('click',function(e){
		e.preventDefault();
		purl = $(this).attr('href');
		if (purl == 'modal.show'){
			$('.dropdown-menu').css('display',"inline");
			$(this).attr('href','modal.hide');
			return;
		}else if(purl == 'modal.hide'){
			$('.dropdown-menu').css('display',"none");
			$(this).attr('href','modal.show');
			return;
		}else if(purl == ''){
			$('.dropdown-menu').css('display',"none");
			$(this).attr('href','modal.show');
			return;}

		$.ajax({
			url:purl,
		
			beforeSend:function(){
				$(".kk").show();
				if ($("#loadingbar").length === 0) {
              $("body").append("<div id='loadingbar'></div>")
              $("#loadingbar").addClass("waiting").append($("<dt/><dd/>"));
             
                   $("#loadingbar").width((50 + Math.random() * 30) + "%");
                  
          }
		},
			success:function(response){
				$('body').html(response);
			}
		})
		if(purl !== window.location){
window.history.pushState(null,null,purl)
		}

	});

	
*/	

});