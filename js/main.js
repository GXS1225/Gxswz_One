function checkanswer(){
	trimspace(document.form1.answer);
	var answer = document.form1.answer.value;
	if (answer=='') {
		setmsg('chkanswer','chkanswer_nothing_error');
		return false;
	}
	setmsg('chkanswer','okok');
}
function checkcode(){
	trimspace(document.form1.code);
	var code = document.form1.code.value;
	if (code.length!=5 && code.length!=6) {
		setmsg('chkcode','code_length_error');
		return false;
	}
	setmsg('chkcode','okok');
}
/*注册检测用户是否合法、以及用户名是否存在*/
var code=/^[0-9]{6}/;
function checkuser(){
	trimspace(document.form1.chrname);
	var username = document.form1.chrname.value.replace(" ","");
	document.form1.chrname.value=username;
	var lent=judgeString(username);
	if (lent<3 || lent>15) {
		setmsg('check','user_length_error');
		return false;
	}
	setmsg('check','waite_chk');
	checkchrname(document.form1.chrname.value);
}
/*注册检测密码是否合法*/
function checkpwd(){
	trimspace(document.form1.chrpwd);
	var pwd=document.form1.chrpwd.value;
	var str="<img src='../template/pc/main/default/images/note_ok.gif'><font color=green > 符合要求!";

 	/*if(pwd.length>=6 && pwd.length<=9)
 		str	=	str+' 密码安全度：低';
 	else if(pwd.length>=10 && pwd.length<=13)
 		str	=	str+' 密码安全度：中';
 	else if(pwd.length>=14 && pwd.length<=16)
 		str	=	str+' 密码安全度：高';
 	str	=	str+'</font>';*/
	
	var pwdStrong = checkStrong(pwd);
	if(pwd==''){
		setmsg('chkpwd','pwd_nothing_error');
		return false;
	}
	if(!pass.test(pwd)){
		setmsg('chkpwd','pwd_length_error');
		return false;
	}
	if(pwdStrong == 1){
		setmsg('chkpwd','pwd_length_error2');
		return false;
	}
	getObj('chkpwd').innerHTML=str;
	return true;
	//pwd=='' ? setmsg('chkpwd','pwd_nothing_error') : (!pass.test(pwd) ? setmsg('chkpwd','pwd_length_error') : getObj('chkpwd').innerHTML=str);

}
/*注册检测二交输入密码是否一致*/
function rcheckpwd(){
	trimspace(document.form1.chrpwd);
	var pwd=document.form1.chrpwd.value;
	var rpwd=document.form1.chrpwd_1.value;
	rpwd=='' ? setmsg('rchkpwd','pwd_insert_align') : (pwd!=rpwd ? setmsg('rchkpwd','pwd_same_error') : setmsg('rchkpwd','ok'));	
}
/*检测邮箱是否合法*/
function test_email() {
	trimspace(document.form1.chremail);
	   var strEmail=document.form1.chremail.value;	   
	   if(strEmail=="" ){
	   	setmsg('chkemail','email_nothing_error')
	   }else{	   	
	   	 checkemail(strEmail);
	   }
      
}
function test_qq11() {
	trimspace(document.form1.chrqq);
	if(document.form1.qqmust.value=="*")
	{
	   var strqq=document.form1.chrqq.value;	   
	   if(strqq.length<5 ){
	   	setmsg('chkqq','qq_nothing_error')
	   }else{	   	
	   	  setmsg('chkqq','ok');
	   }
	}
}
function checkmobile(vale)
{
	return /^(13\d{9}|18\d{9}|14\d{9}|15\d{9}|659\d{7}|658\d{7})$/i.test(vale);	
}
function test_tel() {
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
		setmsg('chktel','tel11_nothing_error')
	   }
	}
}
function checkchrtruename(){
	trimspace(document.form1.chrtruename);
	var strEmail=document.form1.chrtruename.value;	   
	if(strEmail=="" ){
	   setmsg('chkchrtruename','chkchrtruename_nothing_error')
	}else{	   	
	   setmsg('chkchrtruename','ok');
	 }
}
function checkqiyedizhi(){
	trimspace(document.form1.qiyedizhi);
	var strEmail=document.form1.qiyedizhi.value;	   
	if(strEmail=="" ){
	   setmsg('chkqiyedizhi','chkqiyedizhi_nothing_error')
	}else{	   	
	   setmsg('chkqiyedizhi','ok');
	 }
}
function checkfaren(){
	trimspace(document.form1.faren);
	var strEmail=document.form1.faren.value;	   
	/*if(strEmail.length<1 ){
	   setmsg('chkfaren','chkfaren_nothing_error')
	}else{	  */ 	
	   setmsg('chkfaren','ok');
	 /*}*/
}
function checkchrtel(){
	trimspace(document.form1.chrtel);
	var strEmail=document.form1.chrtel.value;	   
	if(strEmail.length<7 || strEmail.length>15){
	   setmsg('chkchrtel','chkchrtel_nothing_error')
	}else{	   	
	   setmsg('chkchrtel','ok');
	 }
}
function test_qq() {
	trimspace(document.form1.chrqq);
	   var strEmail=document.form1.chrqq.value;	   
	   if(strEmail==""){
	   	setmsg('chkqq','chrqq_nothing_error')
	   }else{	   	
	   	 setmsg('chkqq','ok');
	   }
}

function checkchrname(chrname)
{
      	var url="../request.aspx?action=check&chrname="+encodeURIComponent(chrname);
		var  Digital=new  Date();
		Digital=Digital+40000;
		url=url+"&k="+(Digital);
		xmlHttp=GetXmlHttpObject(requestcheckchrname)
		xmlHttp.open("get", url , true)
		xmlHttp.send(null)
}
function requestcheckchrname()
{
	if(xmlHttp.readyState==4)
	{
		if(xmlHttp.status==200)
		{
			if(xmlHttp.responseText==1)
			{
				setmsg('check','user_regist_error');
			}
			else{
				setmsg('check','user_regist_ok');
			}
		}
	}
}


function checkemail(chrname)
{
      	var url="../request.aspx?action=checkemail&chrname="+encodeURIComponent(chrname);
		var  Digital=new  Date();
		Digital=Digital+40000;
		url=url+"&k="+(Digital);
		xmlHttp=GetXmlHttpObject(requestcheckemail)
		xmlHttp.open("get", url , true)
		xmlHttp.send(null)
}
function requestcheckemail()
{
	if(xmlHttp.readyState==4)
	{
		if(xmlHttp.status==200)
		{
			if(xmlHttp.responseText==0)
			{
				setmsg('chkemail','email_nothing_error');
			}
			else if(xmlHttp.responseText==1)
			{
				setmsg('chkemail','email_regist_error');
			}
			else if(xmlHttp.responseText==2)
			{
				setmsg('chkemail','email_error_error');
			}
			else{
				setmsg('chkemail','ok');
			}
		}
	}
}

