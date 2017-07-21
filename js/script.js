/* navgation.html js控制*/
/**
 * 左边导航栏，显示专业列表下面的子选项
 * @param list
 */
 function showList(list) {
            try{
               if(document.getElementById('majorInstruct').style.display!= "block"){
                   document.getElementById('majorInstruct').style.display="block";
                   list.getElementsByTagName('span')[0].innerText="-";
               }else{
                   document.getElementById('majorInstruct').style.display="none";
                   list.getElementsByTagName('span')[0].innerText="+";
                }
            }catch (e){
                console.log(e);
            }
 }

/*login.html js控制*/
/**
 * 处理登录操作
 */
document.getElementById("login-submit").onclick=function(){
    var request=new XMLHttpRequest();
    request.open('GET'," ");
    request.send();
    request.onreadystatechange=function() {
        if (request.readyState === 4) {
            if (request.status === 200) {

            } else {
                alert('something error!')
            }
        }
    }
    alert("submit successful!")
}

/**
 * 点击注册，跳转到注册页面
 */
document.getElementById("login-regist").onclick=function(){
    document.location.assign("register.html")
    /*window.location.href="register.html";*/
}


/*register.html js控制*/
/**
 * 处理提交注册的操作
 */
document.getElementById('regist-submit').onclick=function(){
    var request=new XMLHttpRequest();
    request.open('GET'," ");
    request.send();
    request.onreadystatechange=function(){
        if(request.readyState===4){
            if(request.status===200){

            }else {
                alert('something error!')
            }
        }
    }
    alert("submit successful");
}
