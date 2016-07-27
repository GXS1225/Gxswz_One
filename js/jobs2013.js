$.fn.showDialog = function(){
	var $t = $(this),t;
	var dialog = $('#dialog_temp');
	var img = dialog.find('.img');
	var inner= dialog.find('.inner');
	var url = nowdomain+'request.ashx?action=qiyejob&json=1&jsoncallback=?';
	var id = '',id_arr=[];
	$t.find('.item').each(function(){
		id_arr.push($(this).attr('data-id'));
	});
	id = id_arr.join(',');
	url=url+'&id='+id;
	$.getJSON(url,function(data){
		$('body').data('jobs',data);
	});
	$t.find('.item').mouseenter(function(){
		var that = $(this),
			qy_name = $('#qy_name'),
			qy_info = $('#qy_info'),
			qy_zw = $('#qy_zw'),
			qy_more = $('#qy_more'),
			id = that.attr('data-id'),
			d = $("body").data("jobs"),
			t_data=null,
			po = that.position(),
			txt='';
		t = setTimeout(function(){
			for(var i=0;i<d.length;i++){
				if(!!d[i][id]){
					t_data = d[i][id][0];
					qy_name.html(t_data.chrtruename);
					qy_info.html(t_data.content);
					dialog.css({'top':Math.ceil(po.top)-2+'px','left':Math.ceil(po.left)-2+'px'}).show();
					for(var k in t_data.zhiweiarr[0]){
						txt+='<li><a href="'+zpurl+'zhiwei_'+k+'.html" target="_blank">'+t_data.zhiweiarr[0][k]+'</a></li>';
					}
					qy_zw.html(txt);
					qy_more.attr('href',zpurl+'company_'+id+'.html');
					img.html(that.html());
					inner.slideDown();
				}
			}
		},500);
	}).mouseleave(function(){
		clearTimeout(t);
	});
	dialog.mouseleave(function(){
		dialog.find('.inner').hide();
		dialog.hide();
	});
}
$.fn.showSelect = function(ipt_id,ks){
	var that = $(this);
	var ipt = $('#'+ipt_id);
	var w_h = $(document).height();
	var mask = $('#mask');
	var btn = that.find('.btns');
	var inner_s = that.find('.inner_s');
	function hide_all(){
		inner_s.hide();
		mask.hide();
		that.removeClass('zindex');
	}
	mask.css({'height':Math.ceil(w_h)+'px'});
	mask.bind('click',function(){
		hide_all();
	});
	btn.bind('click',function(){
		mask.trigger('click');
		that.addClass('zindex');
		if(!!ks){
			if(!$('#s_hangye').val() || $('#s_hangye').val() === '0'){
				alert('请先选择行业类别！');
				return false;
			}
				var t_id = $('#s_hangye').val();
				inner_s.empty();
				var url = nowdomain+'request.ashx?action=category&id=9&json=1&jsoncallback=?';
				var txt='<li><a href="zhiwei.html?tt=0" class="link cur" data-id="0" target="_blank">不限制岗位</a></li>';
				var arr = [];
			
				$.getJSON(url,function(data){
					var msg = data[0]['MSG'];
					for(var i=0;i<msg.length;i++){
						if(msg[i].id === t_id){
							//console.info(msg[i].arr);
							for(var k in msg[i]['arr']){
								txt+='<li><a href="zhiwei.html?tt='+k+'" class="link" data-id="'+k+'" target="_blank">'+msg[i]['arr'][k]+'</a></li>';
							}
						}
						
						
						
					}
					inner_s.html(txt);
					is_load = !1;
				});
		}
		inner_s.show();
		mask.show();
	});
	inner_s.delegate('.link','click',function(e){
		e.preventDefault();
		ipt.val($(this).attr('data-id'));
		btn.html($(this).html());
		that.find('.link').removeClass('cur');
		$(this).addClass('cur');
		if(ipt.attr('id') === 's_hangye'){
			$('#s_gangwei').val('0');
			$('#form_2').find('.btns').html('不限制岗位');
		}
		hide_all();
	});
}
$.fn.getGangwei = function(id){
	var url = nowdomain+'request.ashx?action=category&id=9&json=1&jsoncallback=?';
	var btns = $(this).find('.btns');
	$.getJSON(url,function(data){
		
		//btns.html(data[0].Chrcategory);
	});
}
$.fn.jobUrl = function(){
	var current_host = window.location;
	var url_obj = $.url(current_host).param();
	var that = $(this),txt_obj = {};
	
	for(var i in url_obj){
		$('#'+i+url_obj[i]).parent().addClass('cur');
	}
	that.find('a').each(function(i,item){
		var txt='?';
		var txt_now = $(item).attr('href');
		var txt_obj_now = $.url(txt_now).param();
		txt_obj = $.extend({},url_obj,txt_obj_now);
		
		for(var v in txt_obj){
			txt = txt+v+'='+txt_obj[v]+'&';
		}
		$(item).attr('href',txt);
	});	
}