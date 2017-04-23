$(document).ready(function() {

		$('.custom').owlCarousel({
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    items:1,
    dots:false,
    autoplay:true,
    margin:30,
    stagePadding:0,
    loop:true,
    smartSpeed:450
});

	$('.slide-one').owlCarousel({
	    loop:true,
	    dots:false,
	    margin:5,
	    navText:["&laquo;","&raquo;"],
	    responsiveClass:false,
	    responsive:{
	        0:{
	            items:1,
	            nav:false
	        },
	        300:{
	            items:2,
	            nav:false
	        },
	        600:{
	            items:3,
	            nav:true
	        },
	        1000:{
	            items:5,
	            nav:true,
	            loop:false
	        }
	    }
	})

	$('.slide-two').owlCarousel({
	    loop:true,
	    dots:false,
	    margin:10,
	    navText:["<img src=\"img/carousel-left.png\">","<img src=\"img/carousel-right.png\">"],
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	            nav:false
	        },
	        300:{
	            items:2,
	            nav:false
	        },
	        600:{
	            items:3,
	            nav:true
	        },
	        1000:{
	            items:4,
	            nav:true,
	            loop:false
	        }
	    }
	})

});