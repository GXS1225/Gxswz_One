function setOrderAddress(orderid,sid,node){
	var url = siteUrl+'request.ashx?action=editmyorder&id='+orderid+'&styleid=0&addressid='+sid+'&remark=&jsoncallback=?&timer='+Math.random();
	$.getJSON(url,function(data){
		if(data[0].islogin === '1'){
			node.find('.inneraddress').html(data[0].MSG);
		}else{
			MSGwindowShow('shopping','0',data[0].error,'','');
		}
	});
}
function delMyOrder(o,orderid){
	if(!window.confirm('您确定要取消该订单吗？')){return false;}
	var url = siteUrl+'request.ashx?action=delmyorder&id='+orderid+'&remark=&jsoncallback=?&timer='+Math.random();
	$.getJSON(url,function(data){
		if(data[0].islogin === '1'){
			MSGwindowShow('shopping','0','取消订单成功！','','');
			$(o).parents('.item').remove();
		}else{
			MSGwindowShow('shopping','0',data[0].error,'','');
		}
	});
}
function getMyAddress(node,tonode){
	var url=siteUrl+'request.ashx?action=getmyaddress&delid=&ishtml=1&jsoncallback=?&timer='+Math.random();
	$.getJSON(url,function(data){
		if(data[0].islogin === '1'){
			node.html(data[0].MSG).attr('data-isok','1');
			tonode.parent().append(node.parent().detach());
			node.parent().slideDown();
			$('#addressid').val($('input[name="sleAdress"]:checked').val());
		}else{
			MSGwindowShow('shopping','0',data[0].error,'','');
		}
	});
}
function changeAddress(o,sid){
	$('#changeAddressId').val(sid);
	var node = $('#changeAddressNode'),$o=$(o),addressList=$('#addressList');
	if(addressList.attr('data-isok') !== '1'){
		getMyAddress(addressList,$o);
		$('#changeAddressSubmit').click(function(){
			if($('#addressid').val()===''){MSGwindowShow('shopping','0','请先选择一个地址！','',''); return false;}
			setOrderAddress($('#changeAddressId').val(),$('#addressid').val(),$o.parent());
		});
		$('#changeAddressColse').click(function(){
			node.slideUp();
		});
	}else{
		$o.parent().append(node.detach());
		node.slideDown();
	}
}
function countdown(){
	var i_switch = $('#countdownswitch'),countdown = $('#countdown'), i_timer = null,sec = 11;
	
	function settimer(){
		i_timer = window.setInterval(function(){
			countdown.html(--sec);
			if(sec === 0){
				sec = 11
				orderPagePolling();
			}
		},1000);
	}
	i_switch.bind('click',function(){
		if(!$(this).prop('checked')){
			clearInterval(i_timer);
		}else{
			settimer();
		}
	});
	if(!!i_switch.prop('checked')){settimer();}
}
//模板:2：admin_order_div.html   0：myorder_div.html
function getNewPageSplit(KeyValJson,HtmlSplitDivID,callback){
	$.getJSON(siteUrl+'request.ashx?jsoncallback=?',KeyValJson,function(data){
		if(data[0].islogin === '1'){
			$('#'+HtmlSplitDivID).html(data[0].MSG);
			callback&&setTimeout(function(){callback.call();},100);
		}else{
			MSGwindowShow('shopping','0',data[0].error,'','');
		}
    });
}
function getNewPage(NewPageNo){
	var iskill = $('#iskill').val(),
		skill = $('#skill').val(),
		startdate = $('#startdate').val(),
		enddate = $('#enddate').val(),
		colname = $('#colname').val(),
		payid = $('#payid').val();
	var _keyValJson={"action":"pagemyorder","isadmin":"2","iskill":iskill,'skill':skill,'startdate':startdate,'enddate':enddate,'colname':colname,'payid':payid,"keyword":"","PageNo":NewPageNo};
		
	getNewPageSplit(_keyValJson,"orderAjaxNode",getInitTime);
}
function getNewOrder(){
	var _keyValJson={"action":"pagemyorder","isadmin":"2","iskill":'','skill':'','startdate':'','enddate':'','colname':'','payid':'',"keyword":'',"PageNo":'1','neworder':'1'};
	getNewPageSplit(_keyValJson,"orderAjaxNode",getInitTime);
}