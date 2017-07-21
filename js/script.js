/* navgation.html js控制*/
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