let title = document.querySelector('#head_logo');
let hinterTitle = document.querySelector('#head_logo_hinter');


window.onload=function logovisible () {
	title.classList.remove("header-logo");
	title.classList.toggle("header-logo-visible");
}

setTimeout(function logoup () {
	title.classList.remove("header-logo-visible");
	title.classList.toggle("header-logo-up");
}, 2000);

setTimeout(function hintervisible () {
	hinterTitle.classList.remove("header_logo_hinter");
	hinterTitle.classList.toggle("header_logo_hinter_visible");
}, 3000);

//вторая секция
// var axe = $('.pic1');
// var wolf = $('.pic2');
// var riffle = $('.pic3');
// var shard = $('.pic4');

// $(window).scroll(function red(){
// 	if ( $(this).scrollTop() > axe.offset().top - 100 ) {
// 		axe.addClass('pic_anim');
// 	}
// });
// анимация в зоне видимости
// $(window).scroll(function(){
//     if ( $(this).scrollTop() > el.offset().top - 200 ) {
//         el.addClass('animation_car8');
//     }
// });



// setTimeout(function() {
//      $('#id1').removeClass('class2').addClass('class1');
// }, 10000);
