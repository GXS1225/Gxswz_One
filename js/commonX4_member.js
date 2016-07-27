function MSGwindowShow(action,showid,str,url,formcode){
	var sys_tips = '<div class="sys_tips" id="sys_tips" style="display:none;"><div class="hd" id="sys_tips_title"></div><div class="bd"><p id="sys_tips_info"></p><div class="btn"><a href="#" class="btn2" id="sys_tips_submit">确定</a></div></div></div>';
	if(!$('#sys_tips')[0]){
		$('body').append(sys_tips);
	}
	var pay_tips = $('#pay_tips'),sys_tips = $('#sys_tips'),sys_tips_title = $('#sys_tips_title'),sys_tips_info = $('#sys_tips_info'),sys_tips_submit = $('#sys_tips_submit');
	
	if(action === "pay"){
		$('#have_login').hide();
		if(showid=="2"){//正常提交
			if(document.getElementById('formcode')){
				document.getElementById('formcode').value=formcode;//赋值code
				document.forms['submitpay'].submit();//提交支付
				//这里添加支付中信息提示窗口
				pay_tips.show();
				var w_h = $(window).height(),d_h = pay_tips.height(),s_h = $(document).scrollTop(),top_val = (w_h-d_h)/2+s_h;
				pay_tips.css({'top':top_val+'px'});
			}
		}else if(showid=="1"){//成功提示加跳转
			if(!!win){win.close();}
			showConsole('恭喜您！',!0);
		}else if(showid=="0"){//提示不跳转
			if(!!win){win.close();}
			showConsole('温馨提示',!1);
		}else if(showid=="4"){//错误提示不跳转
			if(!!win){win.close();}
			showConsole('出错了',!1);
		}else{//提示加跳转
			if(!!win){win.close();}
			showConsole('温馨提示',!0);
		}
		if(document.getElementById('formcode')){
			document.getElementById('formcode').value="payok";//设置默认值防止二次提交
		}
	}else{
		if(showid=="0"){ //只提示不跳转
			showConsole('提示',false);
		}else if(showid=="1"){ //提示加跳转
			showConsole('提示',true);
		}else if(showid=="2"){ //直接跳转
			windowlocationhref(url);
		}
		else if(showid=="3"){ //错误信息加跳转
			showConsole('出错了',true);
		}else if(showid=="4"){ //错误信息加只提示不跳转
			showConsole('出错了',false);
		}else if(showid=="5"){ //成功并由页面刷上层页面
			showConsole('提示',false);
		}else{
			return false;
		}
	}
	function showConsole(tit,isredirect){
		sys_tips_info.html(str);
		sys_tips_title.html(tit);
		sys_tips_submit.bind('click',function(e){
			e.preventDefault();
			sys_tips.hide();
			isredirect&&windowlocationhref(url);
			if(showid === '5'){
				window.parent.location.href=window.parent.location.href;
			}
		});
		sys_tips.show();
		var w_h = $(window).height(),d_h = sys_tips.height(),s_h = $(document).scrollTop(),top_val = (w_h-d_h)/2+s_h;
		sys_tips.css({'top':top_val+'px'});
	}
}
function windowlocationhref(url){
	if(url.length > 5){window.location.href=url;}
}
function uploadsuccess(sid,surl,num){
	document.getElementById('url'+num).value=surl;
	var tag = $('#for_url_'+num);
	if(tag[0].tagName.toLowerCase() === 'img'){
		tag.attr({'src':surl});
		upload_img_action_X('str2','str1');
	}else{
		upload_img_action_X('str4','str3');
		tag.html(surl);
	}
}
function upload_img_action_X(str1,str2){
	$('#'+str1).hide();
	$('#'+str2).show();
	return false;
}

function set_image(){
	var chraddress=document.getElementById('chraddress').value;
	var shop_x=document.getElementById('shop_x').value;
	var shop_y=document.getElementById('shop_y').value;
	if(document.getElementById('ggmap')){
		var ggmap=document.getElementById('ggmap').value;
	}
	else{
		var ggmap=document.getElementById('shop_z').value;
	}
	var url='../ezmarker/index.aspx?city='+escape(chraddress)+'&x='+shop_x+'&y='+shop_y+'&ggmap='+ggmap;
	var wrap_node = document.createElement('div');
	wrap_node.setAttribute('class','map_iframe');
	wrap_node.id='map_iframe';
	wrap_node.style.display='none';

	var myiframe = '<iframe src="'+url+'" scrolling="no" frameBorder="0" width="700" height="500"></iframe>';
	if(document.getElementById('map_iframe')){
		document.getElementById('map_iframe').style.display='block';
		return false;
	}
	wrap_node.innerHTML=myiframe;	
	document.getElementsByTagName('body')[0].appendChild(wrap_node);
	document.getElementById('map_iframe').style.display='block';
	return false;
}
function showquyu(str,nowcc){
	if (str.length > 0){
		var url="../request.aspx?action=quyu&id="+str;
		var  Digital=new Date();
		Digital=Digital+40000;
		url=url+"&k="+encodeURIComponent(Digital);
		$.ajax({url:url,success: function(data){
			var sel=document.getElementById("qu_classid");
			var val="::请选择::";
			sel.options.length=0;
			var arrstr = [];
			arrstr = data.split(",");
			sel.options.add(new Option( val,""));
			if(data.length>0){
				for(var i=0;i<arrstr.length-1;i++){
					//分割字符串
					var subarrstr=[];
					subarrstr=arrstr[i].split("|");
					//生成下级菜单
					sel.options.add(new Option(subarrstr[1],subarrstr[0])); 
					if(nowcc==subarrstr[0]){
						sel.options[i+1].selected=true;
					}
				}
			}
		}});		
	} 
}
function BuildSel(str,sel){
	sel.options.length=0;
	var arrstr = [];
	arrstr = str.split(",");
	//开始构建新的Select.
	sel.options.add(new Option( "::请选择::","")); 
	if(str.length>0){
		for(var i=0;i<arrstr.length-1;i++){
			var subarrstr=[];
			subarrstr=arrstr[i].split("|")
			//生成下级菜单
			sel.options.add(new Option(subarrstr[1],subarrstr[0])); 
		}
		sel.options[0].selected=true
	}
}
function showhangyecategory(str){ 
	if (str.length > 0){
		var url="../request.aspx?action=quyu&id="+str;
		var  Digital=new Date();
		Digital=Digital+40000;
		url=url+"&k="+encodeURIComponent(Digital);
		$.ajax({url:url,success: function(data){
			BuildSel(data ,$("#categoryid")[0])
		}});
	} 
}
function showTgCategory(pdid,str,docId,nowcc){
	var url="../request.ashx?action=category&id="+pdid;
	var  Digital=new  Date();
	Digital=Digital+40000;
	url=url+"&k="+encodeURIComponent(Digital);
	var data;
	jQuery.ajax({url:url,success: function(d){
		for(var i=0;i<d.MSG.length;i++){
			if(d.MSG[i].id === str){
				data = d.MSG[i].arr;
				break;
			}
		}
		var sel=document.getElementById(docId);
		var val="::请选择::";
		var k=0;
		sel.options.length=0;
		sel.options.add(new Option( val,""));
		sel.options[0].selected=true;
		for(var i in data){
			k++;
			sel.options.add(new Option(data[i],i)); 
			if(nowcc==i){
				sel.options[k].selected=true;
			}
		}
	}});
}
function showTgQuyu(str,docId,nowcc){
	var url="../request.aspx?action=quyu&id="+str;
	var  Digital=new  Date();
	Digital=Digital+40000;
	url=url+"&k="+encodeURIComponent(Digital);
	jQuery.ajax({url:url,success: function(data){
		var sel=document.getElementById(docId);
		var val="::请选择::";
		var str =data;
		sel.options.length=0;
		var arrstr = [];
		arrstr = str.split(",");
		sel.options.add(new Option( val,"")); 
		if(str.length>0){
			for(var i=0;i<arrstr.length-1;i++){
				var subarrstr=[];
				subarrstr=arrstr[i].split("|");
				sel.options.add(new Option(subarrstr[1],subarrstr[0])); 
				if(nowcc==subarrstr[0]){
					sel.options[i+1].selected=true;
				}
			}
		}
	}});
}
function CheckAll(form){
    for (var i=0;i<form.elements.length;i++)    {
        var e = form.elements[i];
        if (e.type=="checkbox" && e.id != 'chkall') e.checked = form.chkall.checked;
    }
}
function loginout(siteUrl){
	var url = siteUrl+"request.ashx?action=loginout&json=1&jsoncallback=?&date=" + new Date();
	$.getJSON(url,function(data){
		if(data[0].islogin === '0'){
			if(data[0].bbsopen === "open"){
				var f=document.createElement("IFRAME");
				f.height=0;   
				f.width=0;   
				f.src=data[0].bbsloginurl;
				if (f.attachEvent){
					f.attachEvent("onload", function(){
						window.location.reload();
					});
				} else {
					f.onload = function(){
						window.location.reload();
					};
				}
				document.body.appendChild(f);
			}else{
				window.location.reload();
			}
		}else{
			alert("对不起，操作失败！");
		}
	}).error(function(){alert("对不起，操作失败！");});
}
function Show_TabADSMenu(tabadid_num,tabadnum,tabNums){
	for(var i=0;i<tabNums;i++){document.getElementById("tabadcontent_"+tabadid_num+i).style.display="none";}
	for(var i=0;i<tabNums;i++){document.getElementById("tabadmenu_"+tabadid_num+i).className="";}
	document.getElementById("tabadmenu_"+tabadid_num+tabadnum).className="cur";
	document.getElementById("tabadcontent_"+tabadid_num+tabadnum).style.display="block";
}
function is_login(siteUrl,tplPath){
	var url = siteUrl+"request.ashx?action=islogin&json=1&jsoncallback=?&date=" + new Date();
	if(typeof siteUrl !== 'undefined'){window['siteUrl'] = siteUrl;}
	if(typeof tplPath !== 'undefined'){window['tplPath'] = tplPath;}
	$.getJSON(url,function(data){
		if(data[0].islogin==="1"){
			loadWEBmessage();
			/*if(parseInt(data[0].shopid)>0 && data[0].getnewmyorder==='0'){
				orderPolling();
			}
			if(parseInt(data[0].shopid)>0 && data[0].getnewmyorder==='1'){
				hasNewOrder();
			}*/
		}
	});
}
var orderPollingFrame = (function(){       
	return function(callback,speed){       
		window.setTimeout(callback, speed);       
	};       
})();   
function orderPolling(notplay){
	orderPollingFrame(orderPolling,60000);
	
	//轮询处       
	var url = window['siteUrl']+'request.ashx?action=getnewmyorder&jsoncallback=?&timer='+Math.random();
	$.getJSON(url,function(data){
		if(data[0].islogin === '1'){
			
			hasNewOrder(notplay);
		}else{
			$('#newOrderId:visible').hide();
		}
	}); 
}
function orderPagePolling(){
	var url = window['siteUrl']+'request.ashx?action=getnewmyorder&jsoncallback=?&timer='+Math.random();
	
	$.getJSON(url,function(data){
		if(data[0].islogin === '1'){
			hasPageNewOrder();
		}else{
			$('#newOrderId:visible').hide();
		}
	}); 
}
function hasPageNewOrder(notplay){
	var newOrderId='newOrderId';
	var node = $("#reload_order");
	var newOrderNode = '<a href="#" class="'+newOrderId+'" style="display:none;" id="'+newOrderId+'">您有未处理的新订单，请点击查看</a>';
	if(!$('#'+newOrderId)[0]){
		$.ajax({url:window['tplPath']+"js/jquery.jplayer.min.js",dataType:'script'}).done(function(){
			setTimeout(function(){
				$('body').append('<div id="jquery_jplayer"></div>');
				window['my_jPlayer'] = $("#jquery_jplayer");
				
				my_jPlayer.jPlayer({
						ready: function (event) {
							$(this).jPlayer("setMedia",{mp3: window['tplPath']+'images/message.mp3'});
							if(typeof notplay === 'undefined'){window['my_jPlayer'].jPlayer('play');}
						},
						swfPath: window['tplPath']+"js", // jquery.jplayer.swf 文件存放的位置
						supplied: "mp3",
						wmode: "window"
				});
				
			},200);
		});
		node.addClass('po_re').append(newOrderNode);
		
		$('#'+newOrderId).show().bind('click',function(event){
			event.preventDefault();
			$(this).hide();
			//加载新订单
			getNewOrder();
		});
	}else{
		$('#'+newOrderId).show();
		if(typeof notplay === 'undefined'){window['my_jPlayer'].jPlayer('play');}
	}
}
function hasNewOrder(notplay){
	var newOrderId='newOrderId';
	var node = $("#login_info");
	var newOrderNode = '<a href="'+window['siteUrl']+'member/manage_order.aspx" target="_blank" class="'+newOrderId+'" style="display:none;" id="'+newOrderId+'"><span class="arrow"></span>有新订单</a>';
	if(!$('#'+newOrderId)[0]){
		$.ajax({url:window['tplPath']+"js/jquery.jplayer.min.js",dataType:'script'}).done(function(){
			setTimeout(function(){
				$('body').append('<div id="jquery_jplayer"></div>');
				window['my_jPlayer'] = $("#jquery_jplayer");
				
				my_jPlayer.jPlayer({
						ready: function (event) {
							$(this).jPlayer("setMedia",{mp3: window['tplPath']+'images/message.mp3'});
							if(typeof notplay === 'undefined'){window['my_jPlayer'].jPlayer('play');}
						},
						ended:function(){
							
						},
						swfPath: window['tplPath']+"js", // jquery.jplayer.swf 文件存放的位置
						supplied: "mp3",
						wmode: "window"
				});
				
			},200);
		});
		node.addClass('po_re').append(newOrderNode);
		$('#'+newOrderId).show().bind('click',function(){$(this).hide();setTimeout(function(){orderPolling(!0);},2000);});
	}else{
		$('#'+newOrderId).show();
		if(typeof notplay === 'undefined'){window['my_jPlayer'].jPlayer('play');}
	}
}


$.fn.show_more = function(){
	var t = $(this),inner = t.find('.inner');
	t.hover(function(){
		t.toggleClass('open');
	});
}
$.fn.showNav = function(){
	var data = $('#nav_sub_data'),
		datas = data.html(),
		nav_sub = $('#nav_sub');
	if(datas !== ''){
		data.remove();
		nav_sub[0]&&nav_sub.html(datas);
		
	}else{
		$('#nav_index_0').addClass('cur');
	}
}
$.fn.TabADS = function(){
	var obj = $(this);
	var currentClass = "selected";
	var tabs = obj.find(".tab-hd").find("li");
	var conts = obj.find(".tab-cont");
	var t;
	tabs.eq(0).addClass(currentClass);
	conts.hide();
	conts.eq(0).show();
	tabs.each(function(i){
		$(this).bind("mouseover",function(){
			 t = setTimeout(function(){
				conts.hide().eq(i).show();
				tabs.removeClass(currentClass).eq(i).addClass(currentClass);
			},300);
		}).bind("mouseout",function(){
			clearTimeout(t);
		});
	});
}
function checkViewPage(shopid){
	if(shopid === '0'){
		MSGwindowShow('page','1','您还没有开通店铺，或您的店铺正在审核中，暂时无法使用店铺相关功能','myshop.aspx')
	}
	return;
}

//信息推送系统
var message_pid="-1";
var message_isstop = false;//页面是否丢失服务权
var message_isforced = false;//是否被强制拉回服务权页面,被丢失时又强制拉回权时,完全停止弱探测
function loadWEBmessage(){
	var url = window['siteUrl']+'api/request.ashx?pid=' +message_pid + '&jsoncallback=?';
	$.getJSON(url,function(data){
		if(data[0].islogin === '1'){WebMessageShow(data);}
		if(data[0].islogin === '1' || data[0].islogin === '0'){
			/*if( message_pid != '-1' &&  message_pid != data[0].pid){
		  		$('#message_show').html('活动页面丢失,被重新找回连接权');
		    }*/
			message_pid=data[0].pid;
			window.setTimeout(function(){loadWEBmessage()},200);//高速探测:间隔时间短100-200毫秒,弱探测:间隔1-2分钟以上
		}else{
			/*$('#message_show').html('信息获取被另一页面取代，本页面抓取信息进入弱探测');*/
			message_isstop = true;
			if(message_isforced){
				message_isforced=false;
			}else{
				if( message_pid === '-1' )message_pid='0';
			    window.setTimeout(function(){loadWEBmessage()},1*60000);////被取代后每2分钟尝试一次连接,检测活动页面是否丢失
			}
		}
	}).error(function(err){//失败2分钟后尝试一次
		window.setTimeout(function(){loadWEBmessage()},2*60000);
	});
	/* 
	data[0].islogin:0无信息,1:有信息MSG,2:停止高速探测,改为弱探测区别是间隔时间.
	*/
	/*$(window).blur(function(){
		RunOnunload();
	});
	$(window).focus(function(){
		newloadWEBmessage();
	});*/
}
function newloadWEBmessage(){
	//当页面发生任何刷新或鼠标动作或任意操作时,表示前活动页面已经不是焦点页面,当前页面重新初始参数强行抓回信息获取权
	//问题:如何防止本页面并行执行loadWEBmessage(),自动执行一次,强制执行一次.
	if(message_isstop){
	  	message_isstop = false;
		message_isforced =true;
    	message_pid="-1";
	    loadWEBmessage();
    }
}
function RunOnunload(){//当前页面关闭时执行,将程序里当前链接关闭,无需返回任何数据
	var url = '/api/request.ashx?action=close&pid=' +message_pid + '&jsoncallback=?';
	$.getJSON(url,function(data){});
}
function WebMessageShow(data){
	var idata = data[0]['MSG'];
	var newOrderId='webMessage';
	function countItem(){
		var len = $('#'+newOrderId).find('.item').length;
		$('#WebMessageNum').html(len);
		if(len === 0){
			$('#'+newOrderId).hide();	
		}
	}
	if(typeof idata['mp3'] !== 'undefined' && idata['mp3'] !==''){
		WebMessageMusic(idata['mp3']);
	}
	if(!$('#'+newOrderId)[0]){
		var divs = document.createElement('div');
		divs.id = newOrderId;
		$('body').append(divs);
		divs.innerHTML = '<div class="hd">您有<span id="WebMessageNum">0</span>条新信息</div><div class="bd" id="WebMessageInner"></div><a href="#" class="close">收起</a><a href="#" class="remove">移除</a>';
		$('#'+newOrderId).find('.close').click(function(e){
			e.preventDefault();
			$('#WebMessageInner').slideToggle();
			$(this).toggleClass('open');
		}).end().find('.remove').click(function(e){
			e.preventDefault();
			$('#'+newOrderId).hide();
		}).end().on( "click", ".view", function(e){
			if(typeof idata['notViewCloseALL'] !=='undefined' && idata['notViewCloseALL'] === '1'){//点击查看移除全部同类型消息
				$(this).parent().parent().remove();
			}else{
				$('#'+newOrderId).find('.tplid_'+$(this).attr('data-tplid')).remove();
			}
			countItem();
		}).on( "click", ".del", function(e){
			e.preventDefault();
			$(this).parent().parent().remove();
			countItem();
		});
	}else{
		$('#'+newOrderId).show();
		$('#WebMessageInner').slideDown();
	}
	var txt = $('<div class="item tplid_'+idata.tplid+'">'+idata.title+'<p class="date">'+idata.dtappenddate+'</p><span class="panel"><a href="'+idata.smsurl+'" class="view" data-tplid="'+idata.tplid+'" target="content">查看详细</a> <a href="#" class="del">忽略</a></span><s class="s"></s></div>');
	var WebMessageInner = $('#WebMessageInner');
	setTimeout(function(){WebMessageInner.append(txt);WebMessageInner[0].scrollTop = WebMessageInner[0].scrollHeight;},50);
	$('#WebMessageNum').html(parseInt($('#WebMessageNum').html())+1);
}
function WebMessageMusic(file){
	if(typeof window['my_jPlayer'] === 'undefined'){
		$.ajax({url:window['tplPath']+"js/jquery.jplayer.min.js",dataType:'script'}).done(function(){
			setTimeout(function(){
				$('body').append('<div id="jquery_jplayer"></div>');
				window['my_jPlayer'] = $("#jquery_jplayer");
				my_jPlayer.jPlayer({
					ready: function (event) {
						$(this).jPlayer("setMedia",{mp3: file});
						if(typeof notplay === 'undefined'){window['my_jPlayer'].jPlayer('play');}
					},
					swfPath: window['tplPath']+"js", // jquery.jplayer.swf 文件存放的位置
					supplied: "mp3",
					wmode: "window"
				});
			},200);
		});
	}else{
		window['my_jPlayer'].jPlayer("setMedia",{mp3: file});
		window['my_jPlayer'].jPlayer('play');
	}
	return false;
}