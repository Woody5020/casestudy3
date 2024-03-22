$(function(){
	var swiper = new Swiper(".mainSwiper", {
pagination: {
el: ".swiper-pagination",
},
loop:true,
autoplay: {
delay:5000,
}
});
$("#gnb > ul > li").hover(
	function(){
		$(".bottom").addClass("active");
	},
	function(){
		$(".bottom").removeClass("active");
	}
)
});