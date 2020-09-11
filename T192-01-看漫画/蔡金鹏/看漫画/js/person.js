$(function(){
	$(".master>div").mouseover(function(){
		$(this).css("background-position","0 -15px")
	}).mouseout(function(){
		$(this).css("background-position","0px")
	})
})