function newPLUploadImg(){
	KindEditor.ready(function(K) {
		var editor = K.editor({
			uploadJson : imgURL,
			afterBlur: function(){this.sync();},
			fileManagerJson : '/kindeditor/file_manager_json.ashx',
			allowFileManager : true,width : '100%',height : '500px'
		});
		K('#J_selectImage').click(function() {
			editor.loadPlugin('multiimage', function() {
				editor.plugin.multiImageDialog({
					clickFn : function(urlList){
						showMyImage(urlList);
						editor.hideDialog();
					}
				});
			});
		});
	});
}
function showMyImage(o){
	var txt='',node = jQuery('#J_imageView');
	for(var i=0;i<o.length;i++){
		txt='<div class="my_prop_imgitem">'+
			'<div  style="border:1px solid #cccccc; margin-bottom:5px;"><img src="'+o[i]["smallurl"]+'" width="120"  height="120" style="vertical-align:middle;"/></div>'+
			'<a href="javascript:" onclick="delfile(this,\''+o[i]["id"]+'\')">删除</a>'+
			'<a href="#" onclick="return set_FM(this,\''+o[i]["url"]+'\');" class="set_FM">设为封面</a>'+
			'<a href="#" onclick="return move_PrevNext(this,0,0,\''+o[i]["id"]+'\');" class="move_prev">前移</a>'+
			'<a href="#" onclick="return move_PrevNext(this,1,0,\''+o[i]["id"]+'\');" class="move_next">后移</a>'+
			'</div>';
		node.append(jQuery(txt));
	}
	reset_moveBtn();
}
//图片排序
function set_FM(o,imgURL){
	$('#url0').val(imgURL);
	$('#J_imageView').find('.set_FM').html('设为封面');
	$(o).html('已设封面');
	return false;	
}
$.fn.compareFM = function(selector){
	function replaceJPG(txt){
		var newstr=txt.replace(".jpg","");
		return newstr;
	}
	var fenmianurl = replaceJPG($('#url0').val());
	fenmianurl = fenmianurl.substring(fenmianurl.length-1,0)
	$(selector+' img').each(function(){
		if(replaceJPG($(this).attr('src')) == fenmianurl){
			$(this).parent().parent().find('.set_FM').html('已设封面');
		}					
	});
}
function delfile(o,sid){
	if ( confirm("该操作将不可逆！\n您确定要删除吗？")){
		var url = '/request.ashx?action=delpic&id='+sid+'&table_id='+table_id+window['state'];
		var Digital=new  Date();
		Digital=Digital+40000;
		url=url+"&k="+encodeURIComponent(Digital);
		
		jQuery.ajax({url:url,success:function(data){
			if(data.islogin == '1'){
				alert('删除成功！');
				jQuery(o).parent().remove();
			}else{
				alert(data['error']);
			}
		}});
	}
}
function reset_moveBtn(){
	var node = jQuery('#J_imageView');
	if(node.length<1){return;}
	node.find('.move_next,.move_prev').show();
	node.find('.move_next').css({'left':'41px'});
	node.find('.my_prop_imgitem:last .move_next').hide();
	node.find('.my_prop_imgitem:first .move_prev').hide();
	node.find('.my_prop_imgitem:first .move_next').css({'left':'0'});
}
reset_moveBtn();
function move_PrevNext(o,index,sortval,picid){
	var url = siteUrl+'request.ashx?action=picmove&pn='+index+'&id='+picid+'&intorder='+sortval+'&table_id='+table_id+window['state'];
	var Digital=new  Date();
	Digital=Digital+40000;
	url=url+"&k="+encodeURIComponent(Digital);
	var ht = jQuery(o).parent(),ht2 = '';
	jQuery.ajax({url:url,success:function(data){
		if(data.islogin == '1'){
			
			if(index === 0){
				ht2 = ht.prev();
				ht.detach().insertBefore(ht2);
			}else{
				ht2 = ht.next();
				ht.detach().insertAfter(ht2);
			}
			reset_moveBtn();
		}else{
			alert(data['error']);
		}
	}});
	return false;
}