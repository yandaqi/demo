window.onload=function(){
    /* if(!localStorage.getItem('visitnum'))
    {
        localStorage.setItem('visitnum',JSON.stringify({new1:189,new2:359,new3:1659,new4:1526,new5:880,new6:1349,new7:869,new8:627,new9:446,new10:284,new11:398,new12:273,new13:548,new14:772}))}
    else{
        var visitnum=JSON.parse(localStorage.getItem('visitnum'))
        for(var k in visitnum){
            if(k==location.href.substring(location.href.lastIndexOf('/')+1,location.href.lastIndexOf('.'))){
                visitnum[k]+=1
                localStorage.setItem('visitnum',JSON.stringify(visitnum))
            document.querySelector('.content .next .cen .i3').innerHTML=visitnum[k]+'次'
            }
        }
    } */
    document.querySelector('.navbar .collapse .about').onclick=function(){
        location.href='index1.html';
        localStorage.setItem('skip','guanyuour');
    }
    document.querySelector('.navbar .collapse .xiananli').onclick=function(){
        location.href='index1.html';
        localStorage.setItem('skip','xiananli');
    }
    document.querySelector('.foot .xiananli').onclick=function(){
        location.href='index1.html';
        localStorage.setItem('skip','xiananli');
    }
    document.querySelector('.navbar .collapse .lianxiour').onclick=function(){
        location.href='index1.html';
        localStorage.setItem('skip','lianxiour');
    }
}