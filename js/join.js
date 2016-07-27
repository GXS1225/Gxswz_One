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
		xmlHttp=GetXmlHttpObject(stateChangedHint2)
		xmlHttp.open("POST", url , true)
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
			BuildSel(xmlHttp.responseText ,document.getElementById("qu_classid1"))
		}
		else if(document.getElementById("qu_classid"))
		{
			BuildSel(xmlHttp.responseText ,document.getElementById("qu_classid"))
		}
	} 
} 

var addcompanypwd_error_length=error+"<font color=\"red\">对不起,登陆密码6~32位！</font>";
var addcompanyname_error_exist=error+"<font color=\"red\">对不起,此用户名已经存在！</font>";
var addcompanyname_error_length=error+"<font color=\"red\">对不起,用户名3~12位！</font>";
var addchrshop_error_length=error+"<font color=\"red\">对不起,请填写您的商号！</font>";
var addchrshop_error_exist=error+"<font color=\"red\">对不起,此商家已经存在！</font>";
var addchraddress_error_length=error+"<font color=\"red\">对不起,请输入详细地址！</font>";
var addchraddress_right_length='标注后，商家将定位到电子地图上';
var addchrmark_eoor_length='对不起,商家介绍限定在500字内！';
var addxiangmu_error_length =error+"<font color=\"red\">对不起,请输入主营项目,多个请用逗号隔开！</font>";
var addcheckfenlei_error_length=error+"<font color=\"red\">对不起,选择您的行业分类 ！</font>";
var addcheckquyu_error_length=error+"<font color=\"red\">对不起,请选择所在地理区域 ！</font>";
function checkaddshop(o){
	if($$("isLogin").value=="0"){
		MSGwindowShow('company','1','对不起，请登录后再提交加盟申请',nowdomain+'member/login.html?from='+encodeURIComponent(window.location.href),'');
		return false;
	}
	trimspace($$("chrshop"))
	if($$("chrshop").value=="" || $$("chrshop").value.length<3){
		setmsg('checkchrshop','addchrshop_error_length');
		return false;
	}
	if($$("qu_classid").value=="" ){
		setmsg('checkfenlei','addcheckfenlei_error_length');
		return false;
	}
	if($$("chrdiqu").value=="" ){
		setmsg('checkfququ','addcheckquyu_error_length');
		return false;
	}	
	trimspace($$("chraddress"))
	if($$("chraddress").value=="" || $$("chraddress").value.length<3){
		setmsg('checkchraddress','addchraddress_error_length');
		return false;
	}
	
}
function checkchrmarkaa(){
	trimspace($$("chrmark"))
	if($$("chrmark").value.length>500){
		setmsg('chkchrmark','addchrmark_eoor_length');
		return false;
	}
	else{
	setmsg('chkchrmark','okok');
	}
}

function showdididi(aa){
	if($$("chrdiqu1").value=="" ){
		setmsg('checkfququ','addcheckquyu_error_length');
		return false;
	}
	else{
		setmsg('checkfququ','ok');
		return false;
	}
}

function showclassid(aa){
	if($$("qu_classid1").value=="" ){
		setmsg('checkfenlei','addcheckfenlei_error_length');
		return false;
	}
	else{
		setmsg('checkfenlei','ok');
		return false;
	}
}
function checkaddchrshop(){
	trimspace($$("chrshop"))
	if($$("chrshop").value=="" || $$("chrshop").value.length<3){
		setmsg('checkchrshop','addchrshop_error_length');
		return false;
	}
	else{
		setmsg('checkchrshop','waite_chk');
		checkaddshop_exist($$("chrshop").value);	
	}
}
function checkaddchraddressx(){
	trimspace($$("chraddress"))
	if($$("chraddress").value=="" || $$("chraddress").value.length<3){
		setmsg('checkchraddress','addchraddress_error_length');
		return false;
	}
	else{
		setmsg('checkchraddress','addchraddress_right_length');
	}
}
function checkxiangmu(){
	trimspace($$("xiangmu"))
	if($$("xiangmu").value=="" || $$("xiangmu").value.length<3){
		setmsg('checkchrxiangmu','addxiangmu_error_length');
		return false;
	}
	setmsg('checkchrxiangmu','ok');
}


function checkaddcompanyname(){
	trimspace($$("chrname"))
	if($$("chrname").value=="" || $$("chrname").value.length<3){
		setmsg('checkcompanyname','addcompanyname_error_length');
		return false;
	}
	else{
		setmsg('checkcompanyname','ok');
	}
}


function checkaddcompanypwd(){
	trimspace($$("chrpwd"))
	if($$("chrpwd").value=="" || $$("chrpwd").value.length<6){
		setmsg('checkcompanypwd','addcompanypwd_error_length');
		return false;
	}
	else{
		setmsg('checkcompanypwd','ok');
	}
}

function checkaddcompanyname_exist(str)
{ 
	if (str.length > 0)
	{ 
		var url="../request.aspx?action=checkname&chrname="+str
		xmlHttp=GetXmlHttpObject(requestcheckcompanyname_exist)
		xmlHttp.open("POST", url , true)
		xmlHttp.send(null)
	} 
} 
function requestcheckcompanyname_exist() 
{ 
	if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
	{ 
		if(xmlHttp.responseText=="2"){
			setmsg('checkcompanyname','ok');
		}else{
			setmsg('checkcompanyname','addcompanyname_error_exist');
		}
	} 
} 




function checkaddshop_exist(str)
{ 
	if (str.length > 0)
	{ 
		var url="../request.aspx?action=checkshop&chrname="+escape(str);
		xmlHttp=GetXmlHttpObject(requestcheckaddshop_exist)
		xmlHttp.open("POST", url , true)
		xmlHttp.send(null)
	} 
} 
function requestcheckaddshop_exist() 
{ 
	if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
	{ 
		if(xmlHttp.responseText=="2"){
			setmsg('checkchrshop','ok');
		}else{
			setmsg('checkchrshop','addchrshop_error_exist');
		}
	} 
} 
function set_newimage(){
	/*var chraddress=document.getElementById('chraddress').value;
	if(chraddress==""){
		alert("对不起,请先输入详细地址,再进行地图标注");
		document.getElementById('chraddress').focus();
		return false;
	}
	var shop_x=document.getElementById('shop_x').value;
	var shop_y=document.getElementById('shop_y').value;
	var ggmap=document.getElementById('ggmap').value;
 	var url='../ezmarker/index.aspx?city='+escape(chraddress)+'&x='+shop_x+'&y='+shop_y+'&ggmap='+ggmap;
	window.open(url,'newindow','height=600,width=800,top=0,left=0,toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no,status=yes');*/

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

function set_image(){
	var chraddress=document.getElementById('chraddress').value;
	if(chraddress==""){
		alert("对不起,请先输入详细地址,再进行地图标注");
		document.getElementById('chraddress').focus();
		return false;
	}
	var shop_x=document.getElementById('shop_x').value;
	var shop_y=document.getElementById('shop_y').value;
	var ggmap=document.getElementById('ggmap').value;
 	var url='../ezmarker/index.aspx?city='+escape(chraddress)+'&x='+shop_x+'&y='+shop_y+'&ggmap='+ggmap;
	window.open(url,'newindow','height=600,width=800,top=0,left=0,toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no,status=yes');
}