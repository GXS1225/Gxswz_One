function createxmlhttp(){var xmlhttp=false;try{xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");}catch (e) {try {xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");}catch(e){xmlhttp = false;}}if (!xmlhttp && typeof XMLHttpRequest!='undefined') {xmlhttp = new XMLHttpRequest();if (xmlhttp.overrideMimeType){xmlhttp.overrideMimeType('text/xml');}}return xmlhttp;}
function xmlhttpget(url,oktext1,okeval1,oktext2,okeval2,noeval,rpteval,yibu,obj)
   {var xmlhttp=createxmlhttp();if(!xmlhttp){alert("你的浏览器不支持XMLHTTP！！");return;}var yibudata = ""; if(yibu=="" || yibu == null){yibu=true}if(url.indexOf("?") > 1){var  Digital=new  Date();Digital=Digital+40000;url=url+"&k="+encMe(Digital);}else{var  Digital=new  Date();Digital=Digital+40000;url=url+"?k="+encMe(Digital);}xmlhttp.onreadystatechange=requestdeletefilet;	xmlhttp.open("GET",url,yibu);	xmlhttp.send(null);
	    function requestdeletefilet(){if(xmlhttp.readyState==4){if(xmlhttp.status==200)
				{
   			 var respos = xmlhttp.responseText;
					if(respos == oktext1 && okeval1 != "")
					{
						eval(okeval1);
					}
					else if(respos == oktext2 && okeval2 != "")
				  {
					 eval(okeval2);
					}
					else  if(noeval != ""){
						eval(noeval);
					}
					else if(rpteval != ""){eval(rpteval);}
				  else if(yibu == false){yibudata = respos;}
					else
					{
					 eval(xmlhttp.responseText);
					}
				}
			}
		}
    if(yibu==false){return yibudata ;}
  }
function chrnum_div(key,numid){xmlhttpget("../request.ashx?action=chrnum&id=" + numid + "&key=" + key,"","","","","","chrnum_div_data(xmlhttp.responseText,'" + numid + "');","","");}
function chrnum_div_data(_str,numid){if(_str != "" && _str.indexOf(",") >0){var arr_str = _str.split(',');var arr_id = numid.split(',');for (var i = 0; i < arr_str.length; i++) {$("#chrnum"+ arr_id[i]).html(arr_str[i]);}}}









function enCodeUrl(obj){
	var txt = '';
	if(!$.isEmptyObject(obj)){$.extend(URLOBJ,obj);}
	if($.isEmptyObject(URLOBJ)){alert('url初始化有误！'); return txt;}
	for(var i in URLOBJ){
		txt+=('_'+i+URLOBJ[i]);
	}
	return 'more'+txt+'.html';
}
function deCodeUrl(url){
	var n_url = url.replace('.html','');
	arr = n_url.split('_');
	var val,key;
	for(var i = 1;i<arr.length;i++){
		val = arr[i].substring(1);
		key = arr[i].substr(0,1);
		URLOBJ[key] = val;
	}
}
function checkSearch(o){
	if(o._key.value === ''){
		alert('请输入关键字！');
		return false;
	}
	return true;
}
/*$.fn.showDropDown = function(){
	var t = $(this),
		btn = t.find('.selected'),
		po = t.find('.po');
	t.hover(function(){
		po.show();
	},function(){
		po.hide();
	});
}*/
function paixu_list(){
	switch(URLOBJ['e']){
		case '1':
		  $('#paixu_jiage').addClass('current').find('.s').removeClass('jiang');
		  $('#paixu_jiage').attr('href',enCodeUrl({'e':'2'}));
		  break;
		case '2':
		  $('#paixu_jiage').addClass('current').find('.s').addClass('jiang');
		  $('#paixu_jiage').attr('href',enCodeUrl({'e':'1'}));
		  break;
		case '3':
		  $('#paixu_xiaoliang').addClass('current').find('.s').addClass('jiang');
		  $('#paixu_xiaoliang').attr('href',enCodeUrl({'e':'4'}));
		  break;
		case '4':
		  $('#paixu_xiaoliang').addClass('current').find('.s').removeClass('jiang');
		  $('#paixu_xiaoliang').attr('href',enCodeUrl({'e':'3'}));
		  break;
		case '6':
		  $('#paixu_zhekou').addClass('current').find('.s').addClass('jiang');
		  $('#paixu_zhekou').attr('href',enCodeUrl({'e':'7'}));
		  break;
		case '7':
		  $('#paixu_zhekou').addClass('current').find('.s').removeClass('jiang');
		  $('#paixu_zhekou').attr('href',enCodeUrl({'e':'6'}));
		  break;
		default:
		  $('#paixu_default').addClass('current');
	}
}
function showdaijin(o){
	var val = $(o).val();
	if(val === '4'){val = '0';}else{val = '4';}
	var url = enCodeUrl({'i':val});
	window.location.href= url;
}
function showmianyuyue(o){
	var val = $(o).val();
	if(val === '1'){val = '0';}else{val = '1';}
	var url = enCodeUrl({'h':val});
	window.location.href= url;
}
function showPrice(){
	var sel_price_txt = '';
	switch(URLOBJ['f']){
		case '0':
		  if(URLOBJ['g'] === '50'){
			  sel_price_txt = '50元以下';
		  }else{
			  sel_price_txt = '全部';
		  }
		  break;
		case '50':
		  sel_price_txt = '50-100元';
		  break;
		case '100':
		  sel_price_txt = '100-200元';
		  break;
		case '200':
		  sel_price_txt = '200-300元';
		  break;
		case '300':
		  sel_price_txt = '300元以上';
		  break;
		default:
		  sel_price_txt = '全部';
	}
	$('#sel_price_txt').html(sel_price_txt);
}