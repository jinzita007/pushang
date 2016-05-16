
$(function(){
	$('.arrbox').hover(function(){
		$(this).siblings().removeClass('show');
		if($(this).hasClass('show'))					 
			$(this).removeClass('show');
		else
			$(this).addClass('show');
	},function(){
		$('.arrbox').removeClass('show');
	})
	$('ul.nav>li').hover(function(){
		var _this=$(this).find('>a')    ;					  
		_this.html(_this.attr('t2'));
       
	},function(){
		var _this=$(this).find('>a')	;					  
		_this.html(_this.attr('t1'));
	})
	
	//判断代码浏览器
	var Sys = {};
	var ua = navigator.userAgent.toLowerCase();
	var s;
	(s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] :
	(s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] :
	(s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] :
	(s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] :
	(s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;
	if (Sys.safari) $('.searchbtn').css('vertical-align',-3)
})
