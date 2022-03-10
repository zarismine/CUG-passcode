// alert(TimeCounter(2022,3,10,10,44,10))
window.onload=function (){
    TimeCounter();
}
function Change(){
    var name=document.getElementsByClassName("fontclass");
    name[0].innerHTML="洪爽 20201004083";
}
function ShowTab(tab){
    var line=document.getElementsByClassName("headline");
    line[0].style.display="none";line[1].style.display="none";
    line[tab].style.display="block";
    var tap=document.getElementsByClassName("headtap");
    tap[0].style.color="#000000";tap[1].style.color="#000000";
    tap[tab].style.color="#52C7CA";
    var tapgras=document.getElementsByClassName("bodycontext");
    tapgras[0].style.display="none";
    tapgras[1].style.display="none";
    tapgras[tab].style.display="block";
}
function TimeCounter(){
    var oSpan=document.getElementById("time");
    var date1= new Date();
    var date2 = new Date(2022,2,12,10,15,10);
    var date3=date2.getTime()-date1.getTime();
    //if(date3==0) return;
    var days=Math.floor(date3/(24*3600*1000));

    var leave1=date3%(24*3600*1000);
    var hours=Math.floor(leave1/(3600*1000));

    var leave2=leave1%(3600*1000);
    var minutes=Math.floor(leave2/(60*1000));

    var leave3=leave2%(60*1000);
    var seconds=Math.round(leave3/(1000));
    // return date3;
    if(date3>0){
        oSpan.innerHTML=days+"天"+ addZero(hours) + ':' + addZero(minutes) + ':' + addZero(seconds);
        var timeout=setTimeout(TimeCounter,500);
    }
    else{
        clearTimeout(timeout);
    }
}
function addZero(s) {
    return s < 10 ? ('0' + s) : s;
}


