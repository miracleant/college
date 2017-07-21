/* navgation.html js控制*/
/**
 * 左边导航栏，显示专业列表下面的子选项
 * @param list
 */
 function showlist(list) {
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
