var right="<img src='../template/pc/main/default/images/note_ok.gif'>";
var error="<img src='../template/pc/main/default/images/note_error.gif'>";
var errorold="<img src='template/pc/main/default/images/note_error.gif'>";
var rightold="<img src='template/pc/main/default/images/note_ok.gif'>";
var okok="";
var okokok=rightold+"<font color=green > 符合要求!</font>";
var ok=right+"<font color=green > 符合要求!</font>";
var shopcomment_error_name=error+"<font color=\"red\">对不起,请填写您的昵称！</font>";
var shopcomment_error_pwd=error+"<font color=\"red\">对不起,请填写您的密码！</font>";
var shopcomment_error_code=error+"<font color=\"red\">对不起,请填写验证码！</font>";
var shopcomment_error_chrmark=error+"<font color=\"red\">对不起,请填写内容！</font>";
var shopcomment_error_chrmark1=error+"<font color=\"red\">对不起,内容仅限300汉字！</font>";
var user_length_error=error+"<font color=\"red\"> 昵称长度错误,3-15字符内！</font>";
var user_regist_ok=right+"<font color=\"green\">恭喜您，该昵称还未被注册，您可以使用这个昵称！</font>";
var user_regist_error=error+"<font color=\"red\"> 该登录名已经被注册。</font>";
var waite_chk="检测中，请稍等...";
var pwd_nothing_error=error+"<font color=red > 请输入密码!</font>";
var pwd_length_error=error+"<font color=red > 密码不合法!密码长度6-16位(英文字母、数字)，区分大小写</font>";
var pwd_length_error2=error+"<font color=red > 密码必须有数字和字母混合组成</font>";
var pwd_insert_align=error+"<font color=red > 请再一次输入遍您上面输入的密码</font>";
var pwd_same_error=error+"<font color=red > 两次密码不符，请重新输入</font>";
var email_nothing_error=error+"<font color=red > 请输入您的登录名</font>";
var email_error_error=error+"<font color=red > 请输入正确的邮箱地址</font>";
var email_regist_error=error+'<font color=red > 该电子邮件地址已被注册!</font>';
var code_length_error=error+"<font color=red > 请正确输入验证码</font>";
var chrqq_nothing_error=error+"<font color=red > 请正确输入您的QQ号码</font>";
var chkanswer_nothing_error=error+"<font color=red > 请正确输入验证问题答案</font>";
var chkchrtruename_nothing_error=error+"<font color=red > 请正确输入您的企业名称</font>";
var chkqiyedizhi_nothing_error=error+"<font color=red > 请正确输入您的经营办公地址</font>";
var chkfaren_nothing_error=error+"<font color=red > 请正确输入法人代表名称</font>";
var chkchrtel_nothing_error=error+"<font color=red > 请正确输入您的联系电话</font>";
var mysq_error_chraddress=error+"<font color=red > 请正确输入面试地点</font>";
var qq_nothing_error=error+"<font color=red > 请输入您的联系QQ</font>";
var tel11_nothing_error=error+"<font color=red > 请输入正确的手机号码</font>";
var pass=/^[^#&/*<>'", \\\r\t\n]{6,16}$/;

function isRightEmail(email) {
   var re="^[\s]*[a-zA-Z0-9._%-]+@[a-zA-Z0-9._%-]+\.[a-zA-Z0-9]{2,4}[\s]*$";
   if(email.match(re)==null)
       return false;
   else
       return true;
}
function isRightTel(value){
	return /^(13\d{9}|17\d{9}|18\d{9}|14\d{9}|15\d{9}|659\d{7}|658\d{7})$/i.test(value);
}
function getByteLen(val){
	var len = 0;            
	for (var i = 0; i < val.length; i++) {
		var a = val.charAt(i);   
		if (a.match(/[^\x00-\xff]/ig) != null){
			len += 2;             
		}else{      
			len += 1;             
		}        
	}            
	return len;
}
function test_email2() {
	trimspace(document.form1.chremail);
	var strEmail=document.form1.chremail.value;
	var lent = getByteLen(strEmail);
	
	if(document.form1.ismember.value=="1"){
		if(!!isRightEmail(strEmail)){
			setmsg('chkemail','okok');
		}else{
			setmsg('chkemail','email_error_error');
			return false;
		}
	}else if(document.form1.ismember.value=="2"){
		if(!!isRightTel(strEmail)){
			setmsg('chkemail','okok');
		}else{
			setmsg('chkemail','tel11_nothing_error');
			return false;
		}
	}else{   
		if(!!isRightEmail(strEmail)||!!isRightTel(strEmail)){
			setmsg('chkemail','okok');
		}else{
			if (lent<3 || lent>15) {
				setmsg('chkemail','user_length_error');
				return false;
			}else{
				setmsg('chkemail','okok');
				
			}
		}
	}
	var url="../request.ashx?action=chkchrname&chrname="+encodeURIComponent(strEmail);
	var  Digital=new Date();
	Digital=Digital+40000;
	url=url+"&k="+encodeURIComponent(Digital);
	$.ajax({url:url,success:function(data){
		if(data.islogin==='0'){
			user_regist_error=error+"<font color=\"red\"> "+data.error+"</font>";
			setmsg('chkemail','user_regist_error');
			$('#allok').val('0');
		}else{
			setmsg('chkemail','ok');
			$('#allok').val('1');
		}
	}});
	return true;
}

function setmsg(obj,id){
	document.getElementById(obj).innerHTML = eval(id);
}
function doc(ob)
{
	var value=document.getElementById(ob).value;
	value=value.replace(/(^\s)|(\s$)/g,'');
	return value;
}
function getObj(ob)
{
	var obj=document.getElementById(ob);
	return obj;
}

//用于处理注册用户
function checkregister(){
	delCookie("floatregister");
	setCookie("floatregister","");
	if(document.form1.checkxieyi){
		if(!document.form1.checkxieyi.checked){
			alert("请先阅读接受会员注册协议!");
			document.form1.checkxieyi.focus();
			return false;
		}
	}
	trimspace(document.form1.chrname);
	if(document.form1.chrname.value==""){
		setmsg('check','user_length_error');
		document.form1.chrname.focus();
		return false;
	}
	checkpwd();
	trimspace(document.form1.chrpwd);
	if(document.form1.chrpwd.value==""){
		setmsg('chkpwd','pwd_length_error');
		return false;
	}
	trimspace(document.form1.chrpwd_1);
	if(document.form1.chrpwd_1.value==""){
		setmsg('rchkpwd','pwd_insert_align');
		return false;
	}
	if(document.form1.chrpwd_1.value!=document.form1.chrpwd.value){
		setmsg('rchkpwd','pwd_same_error');
		return false;
	}
	trimspace(document.form1.chremail);
	if(document.form1.chremail.value==""){
	   	setmsg('chkemail','email_nothing_error')
		return false;
	}
	if(!isRightEmail(document.form1.chremail.value)){
	   	setmsg('chkemail','email_regist_error')
		return false;
	}
	trimspace(document.form1.chrtel);
	if(document.form1.telmust.value=="*")
	{
		var strtel=document.form1.chrtel.value;	  
	    if(checkmobile(strtel) && strtel.length>0)
	    {
		   setmsg('chktel','ok');
		}
		else
		{	 
		   setmsg('chktel','chkchrtel_nothing_error')
		   return false;
		}
	}
	
	/*   var strEmail=document.form1.chrqq.value;	   
	   if(strEmail==""){
	   	setmsg('chkqq','chrqq_nothing_error')
		return false;
	   }else{	   	
	   	 setmsg('chkqq','okok');
	   }*/
	 if(document.form1.styleid.value=="2"){
			trimspace(document.form1.chrtruename);
			var strEmail=document.form1.chrtruename.value;	   
			if(strEmail=="" ){
			   setmsg('chkchrtruename','chkchrtruename_nothing_error')
			   return false;
			}else{	   	
			   setmsg('chkchrtruename','ok');
			 }
			trimspace(document.form1.qiyedizhi);
			var strEmail=document.form1.qiyedizhi.value;	   
			if(strEmail=="" ){
			   setmsg('chkqiyedizhi','chkqiyedizhi_nothing_error')
			   return false;
			}else{	   	
			   setmsg('chkqiyedizhi','ok');
			 }
			trimspace(document.form1.faren);
			var strEmail=document.form1.faren.value;	   
			/*if(strEmail.length<1 ){
			   setmsg('chkfaren','chkfaren_nothing_error')
			   return false;
			}else{	  */ 	
			   setmsg('chkfaren','ok');
			 /*}*/
			trimspace(document.form1.chrtel);
			var strEmail=document.form1.chrtel.value;
			/*if(strEmail.length<7  || strEmail.length >15){
			   setmsg('chktel','chkchrtel_nothing_error')
			   return false;
			}else{	   	
			   setmsg('chktel','ok');
			 }*/
	}
	trimspace(document.form1.code);
	if(document.form1.code.value.length!=5 && document.form1.code.value.length!=6){
	   	setmsg('chkcode','code_length_error')
		return false;
	}
	var detailsid="",answer="";
	if(document.form1.detailsid)
	{
		detailsid = document.form1.detailsid.value;
		answer = document.form1.answer.value;
	}
	var chrtruename="",qiyedizhi="",faren="";
	var chrtel=chrtel = document.form1.chrtel.value;
	if(document.form1.styleid.value=="2")
	{
		chrtruename = document.form1.chrtruename.value;
		qiyedizhi = document.form1.qiyedizhi.value;
		faren = document.form1.faren.value;
	}
	addregister(document.form1.chrname.value,document.form1.chrpwd.value,document.form1.chrpwd_1.value,document.form1.chremail.value,document.form1.code.value,document.form1.chrqq.value,detailsid,answer,chrtruename,qiyedizhi,faren,chrtel,document.form1.styleid.value);
	return false;
}
function checkregister2(){
	delCookie("floatregister");
	setCookie("floatregister","");
	
	trimspace(document.form1.chremail);
	if(!test_email2()){ return false;}
	if($('#allok').val()==='0'){return false;}
	trimspace(document.form1.chrpwd);
	if(!checkpwd()){ return false;}
	
	if(document.form1.chrpwd.value==""){
		setmsg('chkpwd','pwd_length_error');
		return false;
	}
	trimspace(document.form1.chrpwd_1);
	if(document.form1.chrpwd_1.value==""){
		setmsg('rchkpwd','pwd_insert_align');
		return false;
	}
	if(document.form1.chrpwd_1.value!=document.form1.chrpwd.value){
		setmsg('rchkpwd','pwd_same_error');
		return false;
	}
	var strtel="",strqq="";
	if(document.form1.ismember.value=="2"){
		strtel = document.form1.chremail.value;
	}
	var detailsid="",answer="";
	if(document.form1.detailsid){
		detailsid = document.form1.detailsid.value;
		answer = document.form1.answer.value;
		
		if(answer==''){
			 setmsg('chkanswer','chkanswer_nothing_error');
		     return false;
		}
	}
	trimspace(document.form1.code);
	if(document.form1.code.value.length!=5 && document.form1.code.value.length!=6){
	   	setmsg('chkcode','code_length_error')
		return false;
	}
	var chrtruename="",qiyedizhi="",faren="",styleid='1';
	styleid = $('input[name="styleid"]:checked').val();
addregister(document.form1.chremail.value,document.form1.chrpwd.value,document.form1.chrpwd_1.value,document.form1.chremail.value,document.form1.code.value,strqq,detailsid,answer,chrtruename,qiyedizhi,faren,strtel,styleid);
	return false;
}
function addregister(chrname,chrpwd,chrpwd_1,chremail,code,chrqq,detailsid,answer,chrtruename,qiyedizhi,faren,chrtel,styleid)
{
		if($("#have_login").length>0)
		{
			$("#have_login").show();
		}
      	var url="../request.aspx?action=register&json=1&jsoncallback=?&chrname="+encodeURIComponent(chrname);
		url =url+"&chrpwd="+encodeURIComponent(chrpwd)+"&chrpwd_1="+encodeURIComponent(chrpwd_1)+"&chremail="+encodeURIComponent(chremail)+"&code="+encodeURIComponent(code)+"&chrqq="+encodeURIComponent(chrqq)+"&detailsid="+encodeURIComponent(detailsid)+"&answer="+encodeURIComponent(answer)+"&chrtruename="+encodeURIComponent(chrtruename)+"&qiyedizhi="+encodeURIComponent(qiyedizhi)+"&faren="+encodeURIComponent(faren)+"&chrtel="+encodeURIComponent(chrtel)+"&styleid="+encodeURIComponent(styleid);
		var  Digital=new  Date();
		Digital=Digital+40000;
		url=url+"&k="+encodeURIComponent(Digital);
		
		var success_txt='恭喜您，注册成功了！';
		var jump_url = $.cookie('reg_jump_url');
		if(jump_url =='' || jump_url == null){
			jump_url= nowdomain;
		}else{
			jump_url = decodeURIComponent(jump_url);
		}
		function reload_go(){
			MSGwindowShow('reg','1',success_txt,jump_url,'');
		}
		var jqxhr = $.getJSON(url,function(data){
			
			var d = data[0];
			if(d.islogin === '1'){
				$('#have_login').hide();
				if(d.bbsopen === 'open'){
					var f=document.createElement("IFRAME")   
					f.height=0;   
					f.width=0;   
					f.src=d.bbsloginurl;
					if (f.attachEvent){
						f.attachEvent("onload", function(){
							reload_go();
						});
					} else {
						f.onload = function(){
							reload_go();
						};
					}
					document.body.appendChild(f);
				}else{
					reload_go();
				}
			}else if(d.islogin === '3'){
				MSGwindowShow('reg','1','恭喜您，注册成功了！您好，您的账户需要激活才能登录！',d.checkurl,'');
			}else{
				$('#have_login').hide();
				alert(d.error);
			}
		}).error(function(){
			$('#have_login').hide();
			alert("error");
		})
}

function requestaddregister()
{
	if(xmlHttp.readyState==4)
	{
		if(xmlHttp.status==200)
		{
			if(xmlHttp.responseText==1)
			{
				var   f=document.createElement("IFRAME")   
				f.height=0;   
				f.width=0   
				f.src="../other.aspx?action=login"  
				document.body.appendChild(f) ;
				setTimeout("registeroutput()",2500);
			}
			else if(xmlHttp.responseText==2)
			{
				window.location.href="../member/checkusers.aspx?action=s1&chrname="+encodeURIComponent(document.form1.chrname.value)+"&chremail="+document.form1.chremail.value;
			}
			else if(xmlHttp.responseText==3)
			{
				window.location.href="../member/checkusers.aspx?action=s2&chrname="+encodeURIComponent(document.form1.chrname.value)+"&chrtel="+document.form1.chrtel.value;
			}
			else{
				if($("#have_login").length>0)
				{
					$("#have_login").hide();
				}
				alert(xmlHttp.responseText);	
			}
		}
	}
}
function registeroutput(){
	//alert("恭喜您,注册成功并登陆成功!");
	if($("#have_login").length>0)
	{
		$("#have_login").hide();
	}
	var tt = getCookie("floatregister");
	var nextcookiest= getCookie("nextcookie");
	delCookie("nextcookie");
	if(tt){
		parent.LoginHide();
		if(nextcookiest.indexOf("2,")!=-1){
			nextcookiest = nextcookiest.replace("2,","");
			parent.showwybaoming(nextcookiest);
		}
		else if(nextcookiest.indexOf("1,")!=-1){
			nextcookiest = nextcookiest.replace("1,","");
			parent.showorder(nextcookiest);
		}
	}
	else{
		window.location.href=nowdomain+"member/over.aspx";//有注册提示页面了
		/*var sss=getCookie("registergoto");
		if(sss)
		{
			window.location.href=sss;
		}
		else{
			window.location.href="../";
		}*/
	}	
}
function checkfloatregister(){
	trimspace($$("chrname"));
	if($$("chrname").value==""){
		alert("对不起,昵称长度错误,3-15字符内！");
		$$("chrname").focus();
		return false;
	}
	trimspace($$("chrpwd"));
	if($$("chrpwd").value.length<6){
		alert("对不起,密码不合法!密码长度6-16位(英文字母、数字)，区分大小写!");
		$$("chrpwd").focus();
		return false;
	}
	trimspace($$("chrpwd_1"));
	if($$("chrpwd_1").value==""){
		alert("对不起,请输入确认密码!");
		$$("chrpwd_1").focus();
		return false;
	}
	if($$("chrpwd_1").value!=$$("chrpwd").value){
		alert("对不起,两次输入的密码不一致!");
		$$("chrpwd_1").focus();
		return false;
	}
	trimspace($$("chremail"));
	if($$("chremail").value==""){
	   	alert("对不起,请输入电子邮件!");
		$$("chremail").focus();
		return false;
	}
	if(!isRightEmail($$("chremail").value)){
	   	alert("对不起,请正确输入电子邮件!");
		$$("chremail").focus();
		return false;
	}
	trimspace($$("code"));
	  var strEmail=doc('code');	   
	   if(strEmail==""){
	   	alert("对不起,请输入验证码!");
		$$("code").focus();
		return false;
	   }
	 if(document.form1.styleid[1].checked){
			trimspace($$("chrtruename"));
			var strEmail=doc('chrtruename');	   
			if(strEmail=="" ){
				alert("对不起,请正确输入企业名称!");
				$$("chrtruename").focus();
			   return false;
			}
			trimspace($$("qiyedizhi"));
			var strEmail=doc('qiyedizhi');	   
			if(strEmail=="" ){
				alert("对不起,请正确输入企业地址!");
				$$("qiyedizhi").focus();
			   return false;
			}
			trimspace($$("faren"));
			var strEmail=doc('faren');	   
			if(strEmail.length<3 ){
				alert("对不起,请正确输入法人代表!");
				$$("faren").focus();
			   return false;
			}
			trimspace($$("chrtel"));
			var strEmail=doc('chrtel');	   
			if(strEmail.length<7 || strEmail.length >15){
				alert("对不起,请正确输入联系电话!");
				$$("chrtel").focus();
			   return false;
			}
	}
	var chrtruename="",qiyedizhi="",faren="",chrtel="",styleid="1";
	if(document.form1.styleid[1].checked)
	{
		styleid="2"
		chrtruename = $$("chrtruename").value;
		qiyedizhi = $$("qiyedizhi").value;
		faren = $$("faren").value;
		chrtel = $$("chrtel").value;
	}
	delCookie("floatregister");
	setCookie("floatregister","1");
	addregister($$("chrname").value,$$("chrpwd").value,$$("chrpwd_1").value,$$("chremail").value,$$("code").value,$$("chrqq").value,"agan","",chrtruename,qiyedizhi,faren,chrtel,styleid);
	return false;
}
function addqqregister(chrname,chrpwd,chremail,styleid){
      	var url="?action=qqlogin&chrname="+encodeURIComponent(chrname)+"&chrpwd="+(chrpwd)+"&chremail="+(chremail)+"&styleid="+(styleid);
		var  Digital=new  Date();
		Digital=Digital+40000;
		url=url+"&k="+(Digital);
		
		var jump_url = purl().param('from');
		if(jump_url =='' || jump_url == null){
			jump_url= nowdomain;
		}else{
			jump_url = decodeURIComponent(jump_url);
		}
		function reload_go(){
			alert('恭喜您！注册成功！');
			window.location.href=jump_url;
		}
		
		var jqxhr = $.get(url,function(data){
			reload_go();
		}).error(function(){
			alert("error");
		})
			
		/*var jqxhr = $.getJSON(url,function(data){
			var success_txt='恭喜您，注册成功了！';
			var d = data[0];
			if(d.islogin === '1'){
				$('#have_login').hide();
				if(d.bbsopen === 'open'){
					var f=document.createElement("IFRAME")   
					f.height=0;   
					f.width=0;   
					f.src=d.bbsloginurl;
					if (f.attachEvent){
						f.attachEvent("onload", function(){
							alert(success_txt);
							window.location.href= nowdomain;
						});
					} else {
						f.onload = function(){
							alert(success_txt);
							window.location.href= nowdomain;
						};
					}
					document.body.appendChild(f);
				}else{
					alert(success_txt);
					window.location.href= nowdomain;
				}
			}else if(d.islogin === '2'){
				alert('恭喜您，注册成功了！您好，您的账户需要邮件激活才能登录！');
				window.location.href= nowdomain+'member/checkusers.aspx?action=s2&name='+encodeURIComponent(chrname);
			}
			else if(d.islogin === '3'){
				alert('恭喜您，注册成功了！您好，您的账户需要短信激活才能登录！');
				window.location.href= nowdomain+'member/checkusers.aspx?action=s3&name='+encodeURIComponent(chrname);
			}else{
				$('#have_login').hide();
				alert(d.error);
			}
		}).error(function(){
			$('#have_login').hide();
			alert("error");
		})*/
}
function checkqqregister(){
	
	trimspace($$("chrname"));
	if($$("chrname").value==""){
		alert("对不起,请输入您的昵称！");
		$$("chrname").focus();
		return false;
	}
	/*var d = document.getElementById("chrname").value;
	var f = d.replace(/[^\x00-\xff]/g, "**");
	if(f.length<3||f.length>15){
		alert("对不起,昵称长度错误,3-15字符内！");
		$$("chrname").focus();
		return false;
	}*/
	trimspace($$("chrpwd"));
	if($$("chrpwd").value==''){
		alert("对不起，请输入密码！");
		$$("chrpwd").focus();
		return false;
	}
	/*trimspace($$("chremail"));
	if($$("chremail").value==""){
	   	alert("对不起,请输入电子邮件!");
		$$("chremail").focus();
		return false;
	}
	if(!isRightEmail($$("chremail").value)){
	   	alert("对不起,请正确输入电子邮件!");
		$$("chremail").focus();
		return false;
	}
	var styleid="1";
	if(document.form1.styleid[1].checked)
	{
		styleid="2"
	}*/
	
	//addqqregister($$("chrname").value,$$("chrpwd").value,$$("chremail").value,styleid);
	return true;
}

function findsumit(o){
	var c_name = $$("chrname");
	if(c_name.value==""){
		alert("请输入昵称/邮箱地址/手机号码！");
		c_name.focus();
		return false;
	}
	var url="request.aspx?action=find&chrname="+encodeURIComponent(c_name.value);
	var  Digital=new  Date();
	Digital=Digital+40000;
	url=url+"&k="+(Digital);
	$.get(url,function(data){
		if(data.islogin=="1"){
			alert(data.MSG);
			window.location.href= window.location.href;
		}else{
			alert(data.error);
		}	
	});
	return false;
}