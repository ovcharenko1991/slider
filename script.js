let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
	showSlides(slideIndex += n);
}

function currentSlide(n){
	showSlides(slideIndex = n);
}

function showSlides(n){
	let i;
	let slides = document.getElementsByClassName("mySlides");
	let dots = document.getElementsByClassName("num");
	
	if(n > slides.length){
		slideIndex = 1;	
	}	
	if(n < 1){
		slideIndex = slides.length;
	}	
	for(i = 0; i < slides.length; i++){
		slides[i].style.display = "none";
	}	
	for(i = 0; i < dots.length; i++){
		dots[i].className = dots[i].className.replace("active","");
	}
	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className+= " active";	
}

function slideTime(n){
 	n = 1;
 	showSlides(slideIndex += n);
}

let play = document.getElementsByClassName("play");
play.addEventListener('click', function() {
	play.value.toggle('play');
    play.value.toggle('pause');
    
	if (true) {
        setInterval(slideTime, 1000);
    } else {
        clearInterval(interval);
    }
})

// setInterval(slideTime, 1000);﻿




















