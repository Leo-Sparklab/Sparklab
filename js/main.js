$(document).ready(function() {
 
	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:10,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:false
			},
			576:{
				items:3,
				nav:false
			},
			992:{
				items:5,
				nav:true,
				loop:false
			}
		}
	})
 
});

