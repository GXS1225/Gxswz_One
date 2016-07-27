function checkmodify(){
	/*trimspace($$("email"));
	if($$("email").value==""){
		alert("对不起,请输入电子邮件！");
		$$("email").focus();
		return false;
	}
	if(!isRightEmail($$("email").value)){
		alert("对不起,请正确输入电子邮件！");
		$$("email").select();
		return false;
	}
	trimspace($$("chrqq"));
	if($$("chrqq").value==""){
		alert("对不起,请正确输入腾讯QQ！");
		$$("chrqq").focus();
		return false;
	}*/
	var cname="真实姓名";
	if($$("styleid").value=="1"){
		cname="企业名称";	
	}
	trimspace($$("chrtruename"));
	if($$("chrtruename").value==""){
		alert("对不起,请输入"+cname+"！");
		$$("chrtruename").focus();
		return false;
	}
	if($$("styleid").value=="1"){
		trimspace($$("faren"));
		if($$("faren").value==""){
			alert("对不起,请输入法人代表！");
			$$("faren").focus();
			return false;
		}
		trimspace($$("qiyedizhi"));
		if($$("qiyedizhi").value==""){
			alert("对不起,请输入企业地址！");
			$$("qiyedizhi").focus();
			return false;
		}
		/*trimspace($$("chrtel"));
		if($$("chrtel").value==""){
			alert("对不起,请输入联系电话！");
			$$("chrtel").focus();
			return false;
		}*/
		if($$("qiyexizhi").value==""){
			alert("对不起,请选择企业性质！");
			$$("qiyexizhi").focus();
			return false;
		}
		if($$("hangye").value==""){
			alert("对不起,请选择行业！");
			$$("hangye").focus();
			return false;
		}
	}
}

function set_image(){
	var chraddress=document.getElementById('chraddress').value;
	if(chraddress==""){
		//alert("对不起,请先输入详细地址,再进行地图标注");
		//document.getElementById('chraddress').focus();
		//return false;
	}
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
	
	
	
	
	
	
	
	//window.open(url,'newindow','height=600,width=800,top=0,left=0,toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no,status=yes');
}

function BuildSel(str,sel)
{
/*
*--------------- BuildSel(str,sel) -----------------
* BuildSel(str,sel) 
* 功能:通过str构建Select.
* 参数:str,字符串,由服务端返回的.有特定结构"字符串1|,字符串2,字符串3"
*          也可为"字符串1序号|字符串1文本,字符串2序号|字符串2文本,字符串3序号|字符串3文本",如本例
* 参数:sel,要构建的Select
* 实例:BuildSel(unescape(oBao.responseText),document.all.sel2)
*--------------- BuildSel(str,sel) -----------------
*/
//先清空原来的数据.
sel.options.length=0;
var arrstr = new Array();
arrstr = str.split(",");
//开始构建新的Select.
sel.options.add(new Option( "::请选择::","")); 
if(str.length>0)   
{

for(var i=0;i<arrstr.length-1;i++)
{
//分割字符串
var subarrstr=new Array
subarrstr=arrstr[i].split("|")
//生成下级菜单

sel.options.add(new Option(subarrstr[1],subarrstr[0])); 
}
sel.options[0].selected=true
}

}


function showquyu(str)
{ 
	if (str.length > 0)
	{ 
		var url="../request.aspx?action=quyu&id="+str
		var  Digital=new  Date();
		Digital=Digital+40000;
		url=url+"&k="+Digital;
		xmlHttp=GetXmlHttpObject(stateChangedHint2)
		xmlHttp.open("get", url , true)
		xmlHttp.send(null)
	} 
	else
	{ 
	
	} 
} 
function stateChangedHint2() 
{ 
	if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
	{ 
		if(document.getElementById("qu_classid1")){
			BuildSel(xmlHttp.responseText ,document.getElementById("qu_classid"))
		}
		else if(document.getElementById("qu_classid"))
		{
			BuildSel(xmlHttp.responseText ,document.getElementById("qu_classid"))
		}
	} 
} 


function setfuwu(val){
	if(val==0){
		document.getElementById("fuwu1").style.display="none";	
		//document.getElementById("fuwu1").innerHTML="<bR><br>编辑器加载中，请稍候...";
	}
	else if(val==2){
		document.getElementById("fuwu1").style.display="none";	
		//document.getElementById("fuwu1").innerHTML="<bR><br>编辑器加载中，请稍候...";
	}
	else{
		document.getElementById("fuwu1").style.display="";	
		//document.getElementById("fuwu1").innerHTML="<bR><input type='hidden' id='FckNr1' name='fuwu' value='' /><input type='hidden' id='FckNr___Config1' value='' /><iframe id='FckNr___Frame1' src='../editor/editor/fckeditor.html?InstanceName=FckNr1&amp;Toolbar=Default' width='100%' height='200px' frameborder='no' scrolling='no'></iframe>";
	}
}

function setfukan(val){
	if(val==0){
		document.getElementById("fukan1").style.display="none";	
		//document.getElementById("fukan1").innerHTML="<bR><br>编辑器加载中，请稍候...";
	}
	else if(val==2){
		document.getElementById("fukan1").style.display="none";	
		//document.getElementById("fukan1").innerHTML="<bR><br>编辑器加载中，请稍候...";
	}
	else{
		document.getElementById("fukan1").style.display="";	
		//document.getElementById("fukan1").innerHTML="<bR><input type='hidden' id='FckNr2' name='fukan' value='' /><input type='hidden' id='FckNr___Config2' value='' /><iframe id='FckNr___Frame2' src='../editor/editor/fckeditor.html?InstanceName=FckNr2&amp;Toolbar=Default' width='100%' height='200px' frameborder='no' scrolling='no'></iframe>";
	}
}
function setpeisong(val){
	if(val==0){
		document.getElementById("peisong1").style.display="none";	
		//document.getElementById("peisong1").innerHTML="<bR><br>编辑器加载中，请稍候...";
	}
	else if(val==2){
		document.getElementById("peisong1").style.display="none";	
		//document.getElementById("peisong1").innerHTML="<bR><br>编辑器加载中，请稍候...";
	}
	else{
		document.getElementById("peisong1").style.display="";	
		//document.getElementById("peisong1").innerHTML="<bR><input type='hidden' id='FckNr3' name='peisong' value='' /><input type='hidden' id='FckNr___Config3' value='' /><iframe id='FckNr___Frame3' src='../editor/editor/fckeditor.html?InstanceName=FckNr3&amp;Toolbar=Default' width='100%' height='200px' frameborder='no' scrolling='no'></iframe>";
	}
}


function setqiyong(val,aabb){
	
	if(val==0){
		document.getElementById("qiyong1").style.display="none";	
		//$("qiyong1").innerHTML="<bR><br>编辑器加载中，请稍候...";
	}
	else{
		document.getElementById("qiyong1").style.display="";	
		document.getElementById("qiyong1").innerHTML="<bR><input type='hidden' id='FckNr3' name='chrcontent' value='' /><input type='hidden' id='FckNr___Config3' value='' /><iframe id='FckNr___Frame3' src='../editor/editor/fckeditor.html?InstanceName=FckNr3&amp;Toolbar=Default' width='100%' height='200px' frameborder='no' scrolling='no'></iframe>";
		document.getElementById("chrcontent").value=aabb;
		
	}
}

function dellive(id)
{
    if ( confirm("该操作将不可逆！\n您确定要删除此条信息吗？"))
    {
      	var url="../member/mylive.aspx?action=del&id="+escape(id);
		var  Digital=new  Date();
		Digital=Digital+40000;
		url=url+"&k="+Digital;
		xmlHttp=GetXmlHttpObject(requestdelmylive)
		xmlHttp.open("get", url , true)
		xmlHttp.send(null)
    }
}

function requestdelmylive()
{
	if(xmlHttp.readyState==4)
	{
		if(xmlHttp.status==200)
		{
			if(xmlHttp.responseText!=1)
			{
				alert(xmlHttp.responseText);	
			}else{
				alert("删除成功！");
				window.location.href="mylive.aspx";
			}
						
		}
	}
}

function delmyvideo(id)
{
    if ( confirm("该操作将不可逆！\n您确定要删除此条信息吗？"))
    {
      	var url="../member/myvideo.aspx?action=del&id="+escape(id);
		var  Digital=new  Date();
		Digital=Digital+40000;
		url=url+"&k="+Digital;
		xmlHttp=GetXmlHttpObject(requestdelmyvideo)
		xmlHttp.open("get", url , true)
		xmlHttp.send(null)
    }
}

function requestdelmyvideo()
{
	if(xmlHttp.readyState==4)
	{
		if(xmlHttp.status==200)
		{
			if(xmlHttp.responseText!=1)
			{
				alert(xmlHttp.responseText);	
			}else{
				alert("删除成功！");
				window.location.href="myvideo.aspx";
			}
						
		}
	}
}



function delmygood(id)
{
    if ( confirm("该操作将不可逆！\n您确定要删除此条商品吗(删除商品此商品的订单将会连同删除)？"))
    {
      	var url="../member/mygood.aspx?action=del&id="+escape(id);
		var  Digital=new  Date();
		Digital=Digital+40000;
		url=url+"&k="+Digital;
		xmlHttp=GetXmlHttpObject(requestdelmygood)
		xmlHttp.open("get", url , true)
		xmlHttp.send(null)
    }
}

function requestdelmygood()
{
	if(xmlHttp.readyState==4)
	{
		if(xmlHttp.status==200)
		{
			if(xmlHttp.responseText!=1)
			{
				alert(xmlHttp.responseText);	
			}else{
				alert("删除成功！");
				window.location.href="mygood.aspx";
			}
						
		}
	}
}
function delgoodrevert(id)
{
    if ( confirm("该操作将不可逆！\n您确定要删除此评论吗？"))
    {
      	var url="mygood.aspx?action=delrevert&id="+escape(id);
		var  Digital=new  Date();
		Digital=Digital+40000;
		url=url+"&k="+Digital;
		xmlHttp=GetXmlHttpObject(requestdelgoodrevert)
		xmlHttp.open("get", url , true)
		xmlHttp.send(null)
    }
}

function requestdelgoodrevert()
{
	if(xmlHttp.readyState==4)
	{
		if(xmlHttp.status==200)
		{
			if(xmlHttp.responseText!=1)
			{
				alert(xmlHttp.responseText);	
			}else{
				alert("删除成功！");
				window.location.href="mygood.aspx?action=revertlist";
			}
						
		}
	}
}

function delwangzhi(id)
{
    if ( confirm("该操作将不可逆！\n您确定要删除此网址吗？"))
    {
      	var url="mydaohang.aspx?action=del&id="+escape(id);
		var  Digital=new  Date();
		Digital=Digital+40000;
		url=url+"&k="+Digital;
		xmlHttp=GetXmlHttpObject(requestdelwangzhi)
		xmlHttp.open("get", url , true)
		xmlHttp.send(null)
    }
}

function requestdelwangzhi()
{
	if(xmlHttp.readyState==4)
	{
		if(xmlHttp.status==200)
		{
			if(xmlHttp.responseText!=1)
			{
				alert(xmlHttp.responseText);	
			}else{
				alert("删除成功！");
				window.location.href="mydaohang.aspx";
			}
						
		}
	}
}
function delarticle(id)
{
    if ( confirm("该操作将不可逆！\n您确定要删除此篇文章吗？"))
    {
      	var url="myarticle.aspx?action=del&id="+escape(id);
		var  Digital=new  Date();
		Digital=Digital+40000;
		url=url+"&k="+Digital;
		xmlHttp=GetXmlHttpObject(requestdelwangzhi)
		xmlHttp.open("get", url , true)
		xmlHttp.send(null)
    }
}

function requestdelwangzhi()
{
	if(xmlHttp.readyState==4)
	{
		if(xmlHttp.status==200)
		{
			if(xmlHttp.responseText!=1)
			{
				alert(xmlHttp.responseText);	
			}else{
				alert("删除成功！");
				window.location.href="myarticle.aspx";
			}
						
		}
	}
}

function delvote(id)
{
    if ( confirm("该操作将不可逆！\n您确定要删除吗？"))
    {
      	var url="myvote.aspx?action=del&id="+escape(id);
		var  Digital=new  Date();
		Digital=Digital+40000;
		url=url+"&k="+Digital;
		xmlHttp=GetXmlHttpObject(requestdelvote)
		xmlHttp.open("get", url , true)
		xmlHttp.send(null)
    }
}

function requestdelvote()
{
	if(xmlHttp.readyState==4)
	{
		if(xmlHttp.status==200)
		{
			if(xmlHttp.responseText!=1)
			{
				alert(xmlHttp.responseText);	
			}else{
				alert("删除成功！");
				window.location.href="myvote.aspx";
			}
						
		}
	}
}
function delyouhui(id)
{
    if ( confirm("该操作将不可逆！\n您确定要删除此优惠券吗？"))
    {
      	var url="myyouhui.aspx?action=del&id="+escape(id);
		var  Digital=new  Date();
		Digital=Digital+40000;
		url=url+"&k="+Digital;
		xmlHttp=GetXmlHttpObject(requestdelyouhui)
		xmlHttp.open("get", url , true)
		xmlHttp.send(null)
    }
}

function requestdelyouhui()
{
	if(xmlHttp.readyState==4)
	{
		if(xmlHttp.status==200)
		{
			if(xmlHttp.responseText!=1)
			{
				alert(xmlHttp.responseText);	
			}else{
				alert("删除成功！");
				window.location.href="myyouhui.aspx";
			}
						
		}
	}
}
function delmyce(id)
{
    if ( confirm("该操作将不可逆！\n您确定要删除此相册吗,删除相册将会删除此相册下面所有的相片？"))
    {
      	var url="myce.aspx?action=del&id="+escape(id);
		window.location.href=url;
    }
}
function setclick(aa,bb){
	if(parseInt(aa)==parseInt(bb.value)){
			
	}	
	else{
		if(aa=="2")
		{
			$$("styleid").value=aa;
			$$("SignFrame").style.display="none";
			$$("SignFrame_").style.display="";
		}
		else
		{
			$$("SignFrame").style.display="";
			$$("SignFrame_").style.display="none";
			var tt =parseInt($$("count").value);
			$$("styleid").value=aa;
			$$("count").value="0";
			for(var mm=1;mm<=tt;mm++)
			{
				DeleteSignRow("SignItem"+mm);
			}
			$$("total").value="0";
			addphotorow();
		}
	}
}
function DeleteSignRow(rowid){
	var signFrame = findObj("SignFrame",document);
	var signItem = findObj(rowid,document);
	//获取将要删除的行的Index
	if(signItem){
		var rowIndex = signItem.rowIndex;
		//删除指定Index的行
		signFrame.deleteRow(rowIndex);
	}
	if($$("total")){
		$$("total").value = parseInt($$("total").value)-1;	
	}
}
function addphotorow(){
	if(parseInt($$("total").value)>=10){
		alert("对不起,一次只能上传十张相片!");
		return false;
	}
	var txtTRLastIndex = findObj("count",document);
	var rowID = parseInt(txtTRLastIndex.value);
	var signFrame = findObj("SignFrame",document);
	//添加行
	var ab = rowID+1;
	var newTR = signFrame.insertRow(signFrame.rows.length);
	newTR.id = "SignItem" + ab;
	//添加列:付款时间
	var newNameTD=newTR.insertCell(0);
	//添加列内容
	var styleid=$$("styleid").value;
	if(styleid=="0"){
		newNameTD.innerHTML = "<input type=\"file\" class='text' name=\"file\" style=\"width:320px;\"  onchange=\"setupload('"+ab+"',this.value);\"/> 描述：<input type=\"text\"  class='text' style=\"width:200px;\" name=\"chrmark\" />  <a href=\"javascript:DeleteSignRow('SignItem"+ab+"')\">删除</a>";
	}
	else{
		newNameTD.innerHTML = "<input type=\"text\" class='text' name=\"url_"+ab+"\" style=\"width:320px;\"  value='http://' /> 描述：<input type=\"text\"  style=\"width:200px;\" class='text' name=\"urlmark_"+ab+"\" /> <a href=\"javascript:DeleteSignRow('SignItem"+ab+"')\">删除</a>";
	}
	//将行号推进下一行
	$$("count").value = (rowID + 1).toString() ;
	$$("total").value = parseInt($$("total").value)+1;
}

function addmypicrow(){
	if(parseInt($$("total").value)>=10){
		alert("对不起,一次只能上传十张展示图!");
		return false;
	}
	var txtTRLastIndex = findObj("count",document);
	var rowID = parseInt(txtTRLastIndex.value);
	var signFrame = findObj("SignFrame",document);
	//添加行
	var ab = rowID+1;
	var newTR = signFrame.insertRow(signFrame.rows.length);
	newTR.id = "SignItem" + ab;
	//添加列:付款时间
	var newNameTD=newTR.insertCell(0);
	//添加列内容
	newNameTD.innerHTML = "<input type=\"file\" class='text' name=\"file\" style=\"width:320px;\"  onchange=\"setupload('"+ab+"',this.value);\"/> 描述(13个字内)：<input type=\"text\" name=\"chrmark\" size=\"30\" class=\"text\" title=\"若不填，则前台显示“未添加描述” \" maxlength=20> <a href=\"javascript:DeleteSignRow('SignItem"+ab+"')\">删除</a>";
	//将行号推进下一行
	$$("count").value = (rowID + 1).toString() ;
	$$("total").value = parseInt($$("total").value)+1;
}
// Example: obj = findObj("image1");
function findObj(theObj, theDoc){var p, i, foundObj;if(!theDoc) theDoc = document;if( (p = theObj.indexOf("?")) > 0 && parent.frames.length){    theDoc = parent.frames[theObj.substring(p+1)].document;    theObj = theObj.substring(0,p);}if(!(foundObj = theDoc[theObj]) && theDoc.all) foundObj = theDoc.all[theObj];for (i=0; !foundObj && i < theDoc.forms.length; i++)     foundObj = theDoc.forms[i][theObj];for(i=0; !foundObj && theDoc.layers && i < theDoc.layers.length; i++)     foundObj = findObj(theObj,theDoc.layers[i].document);if(!foundObj && document.getElementById) foundObj = document.getElementById(theObj);return foundObj;}

function showphotocategory(str)
{ 
	if (str.length > 0)
	{ 
		var xmlhttp=createxmlhttp();
		if(!xmlhttp)
		{
			alert("你的浏览器不支持XMLHTTP！！");
			return;
		}
		var url="../request.aspx?action=addphoto&id="+str;
		var  Digital=new  Date();
		Digital=Digital+40000;
		url=url+"&k="+Digital;
		xmlhttp.onreadystatechange=requestdataquyu;
		xmlhttp.open("GET",url,true);
		xmlhttp.send(null);
		function requestdataquyu()
		{
			if(xmlhttp.readyState==4)
			{
				if(xmlhttp.status==200)
				{
					BuildSel_tt(xmlhttp.responseText ,document.getElementById("classid"),"请选择相册")
				}
			}
		}
	} 
	
} 

function setupload(aa,val){
	var tt=base_name(val);
	obj=document.form1.chrmark[(parseInt(aa)-1)]
	if(obj){
		
	}
	else{
		obj=document.form1.chrmark;
	}
	if(obj){
		if(obj.value=="")
		{
			if(tt.lastIndexOf(".")!=-1){
				tt=tt.substring(0,tt.lastIndexOf("."));
			}
			obj.value = tt;
		}
	}
}
function base_name(pFilePath){
	var temp_win = pFilePath.lastIndexOf("\\");
	var temp_unix = pFilePath.lastIndexOf("/");
	if (temp_win>0)
	{
		temp = temp_win;
	}
	else if (temp_unix>0)
	{
		temp = temp_unix;
	}
	else
	{
		temp = -1;    
	}
	file_name = pFilePath.substr(temp+1);
	return(file_name);
}

function delmyphoto(id)
{
    if ( confirm("该操作将不可逆！\n您确定要删除吗？"))
    {
        location.href = "myphoto.aspx?action=del&ID=" + id
     }
}
function delgoodrevert(id)
{
    if ( confirm("该操作将不可逆！\n您确定要删除吗？"))
    {
        location.href = "mygood.aspx?action=delrevert&ID=" + id
     }
}
function delshoprevert(id)
{
    if ( confirm("该操作将不可逆！\n您确定要删除吗？"))
    {
        location.href = "myshop.aspx?action=delrevert&ID=" + id
     }
}
function delmyzhiwei(id)
{
    if ( confirm("该操作将不可逆！\n您确定要删除吗？"))
    {
        location.href = "myzhiwei.aspx?action=del&ID=" + id
     }
}

function delmypic(id)
{
    if ( confirm("该操作将不可逆！\n您确定要删除吗？"))
    {
        location.href = "myshop.aspx?action=picdel&ID=" + id
     }
}

function delcuxiao(id)
{
    if ( confirm("该操作将不可逆！\n您确定要删除吗？"))
    {
        location.href = "mycuxiao.aspx?action=del&ID=" + id
     }
}
function delnotice(id)
{
    if ( confirm("该操作将不可逆！\n您确定要删除？"))
    {
        location.href = "notice.aspx?action=del&ID=" + id
    }
}
function addcategory(){
	if(document.form1.chrcategory.value==""){
		alert("对不起,请输入分类名称!");
		document.form1.chrcategory.focus();
		return false;
	}
	var aa=document.form1.chrcategory.value;
	var xmlhttp=createxmlhttp();
	if(!xmlhttp)
	{
		alert("你的浏览器不支持XMLHTTP！！");
		return;
	}
	var url="myshop.aspx?action=addcategory&chrcategory="+escape(aa);
	var  Digital=new  Date();
	Digital=Digital+40000;
	url=url+"&k="+Digital;
	xmlhttp.onreadystatechange=requestdataaddcategoryid;
	xmlhttp.open("GET",url,true);
	xmlhttp.send(null);
	function requestdataaddcategoryid()
	{
		if(xmlhttp.readyState==4)
		{
			if(xmlhttp.status==200)
			{
				if(xmlhttp.responseText=="1"){
					loadcategoryid();
					loadcategoryidselect();
					return false;
				}
				else{
					alert(xmlhttp.responseText);	
					return false;
				}
			}
		}
	}
	
}

function loadcategoryid(){
	var xmlhttp=createxmlhttp();
	if(!xmlhttp)
	{
		alert("你的浏览器不支持XMLHTTP！！");
		return;
	}
	var url="myshop.aspx?action=showvalue&styleid=2";
	var  Digital=new  Date();
	Digital=Digital+40000;
	url=url+"&k="+Digital;
	xmlhttp.onreadystatechange=requestdatashopcategoryid;
	xmlhttp.open("GET",url,true);
	xmlhttp.send(null);
	function requestdatashopcategoryid()
	{
		if(xmlhttp.readyState==4)
		{
			if(xmlhttp.status==200)
			{
				document.getElementById("listcategoryshow").innerHTML=xmlhttp.responseText;
			}
		}
	}
}
function editcategory(){
	if(document.form1.editchrcategory.value==""){
		alert("对不起,请输入分类名称!");
		document.form1.editchrcategory.focus();
		return false;
	}
	var aa=document.form1.editchrcategory.value;
	var bb=document.form1.editcategoryid.value;
	var xmlhttp=createxmlhttp();
	if(!xmlhttp)
	{
		alert("你的浏览器不支持XMLHTTP！！");
		return;
	}
	var url="myshop.aspx?action=editcategory&categoryid="+bb+"&chrcategory="+escape(aa);
	var  Digital=new  Date();
	Digital=Digital+40000;
	url=url+"&k="+Digital;
	xmlhttp.onreadystatechange=requestdataeditcategoryid;
	xmlhttp.open("GET",url,true);
	xmlhttp.send(null);
	function requestdataeditcategoryid()
	{
		if(xmlhttp.readyState==4)
		{
			if(xmlhttp.status==200)
			{
				if(xmlhttp.responseText=="1"){
					loadcategoryid();
					loadcategoryidselect();
					document.getElementById("editchrcategory").value="";
					document.getElementById("editcategoryid").value="";
					document.getElementById("editcategory").style.display='none';
					return false;
				}
				else{
					alert(xmlhttp.responseText);	
					return false;
				}
			}
		}
	}
	
}

function loadcategoryidselect(id){
	var xmlhttp=createxmlhttp();
	if(!xmlhttp)
	{
		alert("你的浏览器不支持XMLHTTP！！");
		return;
	}
	var url="myshop.aspx?action=showvalue&styleid=1";
	var  Digital=new  Date();
	Digital=Digital+40000;
	url=url+"&k="+Digital;
	xmlhttp.onreadystatechange=requestdatashopcategoryidselect;
	xmlhttp.open("GET",url,true);
	xmlhttp.send(null);
	function requestdatashopcategoryidselect()
	{
		if(xmlhttp.readyState==4)
		{
			if(xmlhttp.status==200)
			{
				BuildSel(xmlhttp.responseText ,document.getElementById("categoryid"))
			}
		}
	}
}
function deletecategoryid(categoryid){
	if (!confirm("您确定要删除此分类名称吗？此分类名称下面的展示图片也会一起删除!"))
	{
		return false;
	}
	var xmlhttp=createxmlhttp();
	if(!xmlhttp)
	{
		alert("你的浏览器不支持XMLHTTP！！");
		return;
	}
	var url="myshop.aspx?action=showvalue&styleid=3&categoryid="+categoryid;
	var  Digital=new  Date();
	Digital=Digital+40000;
	url=url+"&k="+Digital;
	xmlhttp.onreadystatechange=requestdatashopcategoryiddelete;
	xmlhttp.open("GET",url,true);
	xmlhttp.send(null);
	function requestdatashopcategoryiddelete()
	{
		if(xmlhttp.readyState==4)
		{
			if(xmlhttp.status==200)
			{
				if(xmlhttp.responseText=="1"){
					loadcategoryid();
					loadcategoryidselect();
					return false;
				}
				else{
					alert(xmlhttp.responseText);	
					return false;
				}
			}
		}
	}
}
function seteditcategory(categoryid,chrcategory){
	document.getElementById("editchrcategory").value=chrcategory;
	document.getElementById("editcategoryid").value=categoryid;
	document.getElementById("editcategory").style.display='';
}

function checkaddchuzhu(o){
	if(o.chrtitle.value==""){
		alert("对不起,请输入标题!");
		o.chrtitle.focus();
		return false;
	}
	/*if(o.R1[0].checked){
		if(o.CommId.value=="" || o.CommId.value=="0"){
			alert("对不起,请输入小区!");
			o.xiaoqu.focus();
			return false;
		}
	}
	else{
		if(o.zidingyi.value=="" ){
			alert("对不起,请输入自定小区名称!");
			o.zidingyi.focus();
			return false;
		}	
	}
	*/
	if(o.loupancategory.value==""){
		alert("对不起,请选择区域!");
		o.loupancategory.focus();
		return false;
	}
	if(o.qu_classid.value==""){
		alert("对不起,请选择地段!");
		o.qu_classid.focus();
		return false;
	}
	if(o.chraddress.value==""){
		alert("对不起,请输入地址!");
		o.chraddress.focus();
		return false;
	}
	if(o.leixing.value==""){
		alert("对不起,请选择类型!");
		o.leixing.focus();
		return false;
	}
	if(o.shi.value==""){
		alert("对不起,请输入房型!");
		o.shi.focus();
		return false;
	}
	if(o.wei.value==""){
		alert("对不起,请输入房型!");
		o.wei.focus();
		return false;
	}
	if(o.ting.value==""){
		alert("对不起,请输入房型!");
		o.ting.focus();
		return false;
	}
	if(o.chrsize.value==""){
		alert("对不起,请输入面积!");
		o.chrsize.focus();
		return false;
	}
	if(o.zhuangxiu.value==""){
		alert("对不起,请选择装修!");
		o.zhuangxiu.focus();
		return false;
	}
	if(o.price.value==""){
		alert("对不起,请输入租金！");
		o.price.focus();
		return false;
	}
	if(o.chrtel.value==""){
		alert("对不起,请输入联系电话！");
		o.chrtel.focus();
		return false;
	}
}

function getKeyWord()
{
    var obj = $$("xiaoqu");   //获取文本域对象
    var top=0;
    var left=0;
    while(obj)
	{
	    //此循环得到文件域对象在页面中的绝对位置
        top += obj["offsetTop"];
        left += obj["offsetLeft"];
        obj = obj.offsetParent;
	}
	var  Digital=new  Date();
	Digital=Digital+40000;
	left = left-27;
    $$("keytishi").style.display = "";  //设置提示层的位置,左
    $$("keytishi").style.left = left + "px";  //设置提示层的位置,左
    $$("keytishi").style.top = (top + 25) + "px";  //设置提示层的位置,上
    $$("keytishi").style.display = "block";  //设置提示层可见
    $$("listComm").src="../request.aspx?action=xiaoqu&search="+($$("xiaoqu").value)+"&tt="+(Digital);
}
function setfilevalue(val,obj){
	document.getElementById("imgview_apf_id_8_"+val).src=loadingsrc ;
	setTimeout("pre("+val+",'"+obj.name+"')",500);
}
function pre(val,obj){
	getPath(document.getElementById(obj),document.getElementById("imgview_apf_id_8_"+val),document.getElementById("image_file"+val),"")
	//alert(val);
	//var ip = new ImagePreview( document.getElementById("image_file"+val), document.getElementById("imgview_apf_id_8_"+val), {maxWidth: 120, maxHeight: 120, action: "ImagePreview.ashx",number:val
	//});
	//ip1.img.src = ImagePreview.TRANSPARENT;
	//ip.preview();	
}
var getPath=function(obj,img,fileQuery,transImg){ 
	if(window.navigator.userAgent.indexOf("MSIE")>=1){ 
		obj.select(); 
		var path=document.selection.createRange().text; 
		img.removeAttribute("src"); 
		img.setAttribute("src",path	); 
		img.style.filter=   
		"progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+path+"', sizingMethod='scale');";  
	} 
	else{ 
		var file =fileQuery.files[0];  
		var reader = new FileReader();  
		reader.onload = function(e){ 
			img.setAttribute("src",e.target.result) 
		} 
		reader.readAsDataURL(file);  
	} 
} 
function delfilevalue(val){
	if (!confirm("您确定要删除上传的这张图片吗？此操作不可逆!"))
	{
		
	}
	else{
		var xmlhttp=createxmlhttp();
		if(!xmlhttp)
		{
			alert("你的浏览器不支持XMLHTTP！！");
			return;
		}
		var delfile=document.getElementById("filesrc"+val);
		var url="../request.aspx?action=delfile&id="+val+"&delfile="+(delfile.value);
		var  Digital=new  Date();
		Digital=Digital+40000;
		url=url+"&k="+(Digital);
		delfile.value="";
		xmlhttp.onreadystatechange=requestdeletefilet;
		xmlhttp.open("GET",url,true);
		xmlhttp.send(null);
		function requestdeletefilet()
		{
			if(xmlhttp.readyState==4)
			{
				if(xmlhttp.status==200)
				{
					document.getElementById("setfile"+val).innerHTML=xmlhttp.responseText;
				}
			}
		}
	}
}

function delfilevalue2(id,val,table_id){
	if (!confirm("您确定要删除上传的这张图片吗？此操作不可逆!"))
	{
		
	}
	else{
		var xmlhttp=createxmlhttp();
		if(!xmlhttp)
		{
			alert("你的浏览器不支持XMLHTTP！！");
			return;
		}
		var delfile=document.getElementById("url"+val);
		//var url="request.aspx?action=delfile&id="+val+"&bigid="+id+"&table_id="+table_id+"&delfile="+encMe(delfile.value);
		var url="../request.aspx?action=delfile&id="+val+"&bigid="+id+"&table_id="+table_id+"&delfile="+(delfile.value);
		var  Digital=new  Date();
		Digital=Digital+40000;
		url=url+"&k="+(Digital);
		delfile.value="";
		xmlhttp.onreadystatechange=requestdeletefilet;
		xmlhttp.open("GET",url,true);
		xmlhttp.send(null);
		function requestdeletefilet()
		{
			if(xmlhttp.readyState==4)
			{
				if(xmlhttp.status==200)
				{
					document.getElementById("url"+val).value="";
					document.getElementById("setfile"+val).innerHTML=xmlhttp.responseText;
				}
			}
		}
	}
}



function checkaddshoulou(o){
	if(o.chrtitle.value==""){
		alert("对不起,请输入标题!");
		o.chrtitle.focus();
		return false;
	}
	/*if(o.R1[0].checked){
		if(o.CommId.value=="" || o.CommId.value=="0"){
			alert("对不起,请输入小区!");
			o.xiaoqu.focus();
			return false;
		}
	}
	else{
		if(o.zidingyi.value=="" ){
			alert("对不起,请输入自定小区名称!");
			o.zidingyi.focus();
			return false;
		}	
	}*/
	if(o.loupancategory.value==""){
		alert("对不起,请选择区域!");
		o.loupancategory.focus();
		return false;
	}
	if(o.qu_classid.value==""){
		alert("对不起,请选择地段!");
		o.qu_classid.focus();
		return false;
	}
	/*if(o.chraddress.value==""){
		alert("对不起,请输入地址!");
		o.chraddress.focus();
		return false;
	}*/
	if(o.leixing.value==""){
		alert("对不起,请选择类型!");
		o.leixing.focus();
		return false;
	}
	if(o.shi.value==""){
		alert("对不起,请输入房型!");
		o.shi.focus();
		return false;
	}
	if(o.wei.value==""){
		alert("对不起,请输入房型!");
		o.wei.focus();
		return false;
	}
	if(o.ting.value==""){
		alert("对不起,请输入房型!");
		o.ting.focus();
		return false;
	}
	if(o.chrsize.value==""){
		alert("对不起,请输入面积!");
		o.chrsize.focus();
		return false;
	}
	if(o.zhuangxiu.value==""){
		alert("对不起,请选择装修!");
		o.zhuangxiu.focus();
		return false;
	}
	if(o.price.value==""){
		alert("对不起,请输入售价！");
		o.price.focus();
		return false;
	}
	if(o.chrtel.value==""){
		alert("对不起,请输入联系电话！");
		o.chrtel.focus();
		return false;
	}
}

function delfangyuan(url)
{
    if ( confirm("该操作将不可逆！\n您确定要删除此房源吗？"))
    {
      	var url="../member/"+url;
		var  Digital=new  Date();
		Digital=Digital+40000;
		url=url+"&k="+(Digital);
		xmlHttp=GetXmlHttpObject(requestdelfangyuan)
		xmlHttp.open("get", url , true)
		xmlHttp.send(null)
    }
}

function requestdelfangyuan()
{
	if(xmlHttp.readyState==4)
	{
		if(xmlHttp.status==200)
		{
			if(xmlHttp.responseText.length!=1)
			{
				$('body').append(xmlHttp.responseText);	
			}else{
				alert("删除成功！");
				window.location.href="manage_chuzhu.aspx?key="+xmlHttp.responseText;
			}
						
		}
	}
}
function setbianhao(obj){
	var xmlhttp=createxmlhttp();
	if(!xmlhttp)
	{
		alert("你的浏览器不支持XMLHTTP！！");
		return;
	}
	var url="../request.aspx?action=bianhao";
	var  Digital=new  Date();
	Digital=Digital+40000;
	url=url+"&k="+(Digital);
	xmlhttp.onreadystatechange=requestsetbianhao;
	xmlhttp.open("GET",url,true);
	xmlhttp.send(null);
	function requestsetbianhao()
	{
		if(xmlhttp.readyState==4)
		{
			if(xmlhttp.status==200)
			{
				obj.value=xmlhttp.responseText;
			}
		}
	}
}

function checkaddloupan(o){
	if(o.chrloupan.value==""){
		alert("对不起,请输入楼盘名称!");
		o.chrloupan.focus();
		return false;
	}
	if(o.loupancategory.value==""){
		alert("对不起,请选择区域!");
		o.loupancategory.focus();
		return false;
	}
	if(o.qu_classid.value==""){
		alert("对不起,请选择地段!");
		o.qu_classid.focus();
		return false;
	}
	/*if(o.chraddress.value==""){
		alert("对不起,请输入地址!");
		o.chraddress.focus();
		return false;
	}*/
	if(o.file.value==""){
		//alert("对不起,请选择楼盘图片!");
		//o.file.focus();
		//return false;
	}
	if(o.biaoyu.value==""){
		alert("对不起,请输入特色标语!");
		o.biaoyu.focus();
		return false;
	}
	if(o.avgprice.value==""){
		alert("对不起,请输入当前均价!");
		o.avgprice.focus();
		return false;
	}
	if(o.typeid[1].checked){
		o.url13.value = document.getElementById('filepath2wap').value;
	}
	if(o.typeid[2].checked){
		o.url13.value = document.getElementById('filepath3wap').value;
	}
}

function checkhousehuxing(o){
	if(o.shi.value==""){
		alert("对不起,请输入房型!");
		o.shi.focus();
		return false;
	}
	if(o.wei.value==""){
		alert("对不起,请输入房型!");
		o.wei.focus();
		return false;
	}
	if(o.ting.value==""){
		alert("对不起,请输入房型!");
		o.ting.focus();
		return false;
	}
	if(o.chrsize.value==""){
		alert("对不起,请输入面积!");
		o.chrsize.focus();
		return false;
	}
	if(o.file.value==""){
		alert("对不起,请上传房型图!");
		o.file.focus();
		return false;
	}
}
function deletehuxing(id,tt){
	if ( confirm("该操作将不可逆！\n您确定要删除吗？"))
	{
		var xmlhttp=createxmlhttp();
		if(!xmlhttp)
		{
			alert("你的浏览器不支持XMLHTTP！！");
			return;
		}
		var url="loupan.aspx?action=delhuxing&id="+id;
		if(tt=="2"){
			url="xiaoqu.aspx?action=delhuxing&id="+id;
		}
		var  Digital=new  Date();
		Digital=Digital+40000;
		url=url+"&k="+(Digital);
		xmlhttp.onreadystatechange=requestdeletehuxing;
		xmlhttp.open("GET",url,true);
		xmlhttp.send(null);
		function requestdeletehuxing()
		{
			if(xmlhttp.readyState==4)
			{
				if(xmlhttp.status==200)
				{
					if(xmlhttp.responseText.length=="1"){
						alert("删除成功！");
						window.location.href=window.location.href;
						return false;
					}
					else{
						alert(xmlhttp.responseText);	
						return false;
					}
				}
			}
		}
	}
}
function checkxiangce(o){
	if(o.filett.value==""){
		alert("对不起,请上传图片!");
		o.filett.focus();
		return false;
	}
}
function deletepic(id,tt){
	if ( confirm("该操作将不可逆！\n您确定要删除吗？"))
	{
		var xmlhttp=createxmlhttp();
		if(!xmlhttp)
		{
			alert("你的浏览器不支持XMLHTTP！！");
			return;
		}
		var url="loupan.aspx?action=delpic&id="+id;
		if(tt=="2"){
			url="xiaoqu.aspx?action=delpic&id="+id;
		}
		var  Digital=new  Date();
		Digital=Digital+40000;
		url=url+"&k="+(Digital);
		xmlhttp.onreadystatechange=requestdeletepic;
		xmlhttp.open("GET",url,true);
		xmlhttp.send(null);
		function requestdeletepic()
		{
			if(xmlhttp.readyState==4)
			{
				if(xmlhttp.status==200)
				{
					if(xmlhttp.responseText.length=="1"){
						alert("删除成功！");
						window.location.href=window.location.href;
						return false;
					}
					else{
						alert(xmlhttp.responseText);	
						return false;
					}
				}
			}
		}
	}
}
function deletexinxi(id,tt){
	if ( confirm("该操作将不可逆！\n您确定要删除吗？"))
	{
		var xmlhttp=createxmlhttp();
		if(!xmlhttp)
		{
			alert("你的浏览器不支持XMLHTTP！！");
			return;
		}
		var url="loupan.aspx?action=delxx&id="+id;
		var  Digital=new  Date();
		Digital=Digital+40000;
		url=url+"&k="+(Digital);
		xmlhttp.onreadystatechange=requestdeletexinxi;
		xmlhttp.open("GET",url,true);
		xmlhttp.send(null);
		function requestdeletexinxi()
		{
			if(xmlhttp.readyState==4)
			{
				if(xmlhttp.status==200)
				{
					if(xmlhttp.responseText.length=="1"){
						alert("删除成功！");
						window.location.href=window.location.href;
						return false;
					}
					else{
						alert(xmlhttp.responseText);	
						return false;
					}
				}
			}
		}
	}
}
function checkaddxiaoqu(o){
	if(o.chrloupan.value==""){
		alert("对不起,请输入小区名称!");
		o.chrloupan.focus();
		return false;
	}
	if(o.loupancategory.value==""){
		alert("对不起,请选择区域!");
		o.loupancategory.focus();
		return false;
	}
	if(o.qu_classid.value==""){
		alert("对不起,请选择地段!");
		o.qu_classid.focus();
		return false;
	}
	if(o.chraddress.value==""){
		alert("对不起,请输入地址!");
		o.chraddress.focus();
		return false;
	}
	if(o.avgprice.value==""){
		alert("对不起,请输入小区二手房均价价!");
		o.avgprice.focus();
		return false;
	}
}
