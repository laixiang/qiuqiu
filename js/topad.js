$(function(){
	//设置延时函数
	function adsUp(){
		$('.TopAd').animate({
			height:'100px'						 
		},1000,function(){
			$(this).find('.ad-up').addClass('ad-down').removeClass('ad-up');
		});	
	}
	//自动收起
	var t = setTimeout(adsUp,3000);
	//点击收起
	$('.TopAd a.ad-up').live('click',function(){
		clearTimeout(t);
		$('.TopAd').animate({
			height:'100px'						 
		},function(){
			$(this).find('.ad-up').addClass('ad-down').removeClass('ad-up');
		});	 
	});	
	
	//点击下拉
	$('.TopAd a.ad-down').live('click',function(){
		$(this).css({
			opacity:'0'	,
			filter:'alpha(opacity=0)'
		});
		$('.TopAd').animate({
			height:'535px'
		},function(){
			$(this).find('.ad-down').addClass('ad-up').removeClass('ad-down').css({opacity:'1',filter:'alpha(opacity=100)'});
		});	 
	});
});