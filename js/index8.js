var ary = location.href.split("&");
jQuery(".focus").slide({mainCell:".bd ul",autoPlay:true,trigger:"click",easing:"easeOutBounce",delayTime:1000});
$(document).ready(function(){
	/*鼠标移过，左右按钮显示*/
	$(".focus").hover(function(){
		$(this).find(".prev,.next").fadeTo("show",1);
	},function(){
		$(this).find(".prev,.next").hide();
	})
});
jQuery(".wonde_bottom").slide({mainCell:".bd ul",autoPage:true,effect:"topLoop",autoPlay:true,vis:4});
jQuery(".slideTxtBox").slide({});jQuery(".slideTxtBox1").slide({});
jQuery(".tab_bd").slide({mainCell:".bd ul",autoPage:true,effect:"topLoop",autoPlay:true,vis:4});
jQuery(".tab_bd1").slide({mainCell:".bd ul",autoPage:true,effect:"topLoop",autoPlay:true,vis:4});
jQuery(".slideTxtBox2").slide();
jQuery(".picMarquee").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"left",autoPlay:true,scroll:10,vis:10,delayTime:1000});
jQuery(".rencaiScroll").slide({mainCell:".bd ul",autoPage:true,effect:"topLoop",autoPlay:true,scroll:1,vis:3,delayTime:1000});
//tab切换

/***
* 回到顶部插件 
* hujing
*20150819
***/
jQuery(function (){
var kefu_type=['0','0'];
manhuatoTop = function(option) {
	var options = {};
	options.showHeight = option.showHeight || 150;
	options.speed = option.speed || 1000;
	var gotoplocal;
	
	var top = jQuery("#iGo2Top");
	jQuery(window).scroll(function(){
		var scrolltop=jQuery(this).scrollTop();
		if(scrolltop>=options.showHeight){
			top.css({"display":"block"});
		}else{
			top.hide();
		}
	});
	jQuery(".tbtnclass").hover(function(){
		$(this).css({"textIndent":"2px"});
	},function(){
		$(this).css({"textIndent":"-999px"});
	})
	top.click(function(){
		jQuery("html,body").animate({scrollTop: 0}, options.speed);
	});
    jQuery(".tbtnclass").hover(function(){
		jQuery(this).addClass("hover");
	},function(){
		jQuery(this).removeClass("hover");
	});
	jQuery("#wx_down").hover(function(){
      jQuery("#wx_app").css({"top":jQuery(this).position().top-250,"left":jQuery(this).position().left-jQuery("#wx_app").width()}).show();},function(){jQuery("#wx_app").hide();});

  jQuery("#app_down").hover(function(){
      jQuery("#app_app").css({"top":jQuery(this).position().top-250,"left":jQuery(this).position().left-jQuery("#app_app").width()}).show();
	},function(){jQuery("#app_app").hide();});
};
manhuatoTop({
showHeight : 100,//设置滚动高度时显示
speed : 500 //返回顶部的速度以毫秒为单位
});
});