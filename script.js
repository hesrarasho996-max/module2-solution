function getRes(){
    var txt = document.getElementById("txt-field").value;
    //console.log(txt);
    var res=txt*1000
    //console.log(res);
    if(isNaN(res))//is Not a Number
        res = "error";
    //console.log(res);
    document.getElementById("res").value = res;
}


function textValidator(){
    var txt = document.getElementById("password").value;
    // console.log(txt);
    if(txt.length < 8 || txt.length>10){
        document.getElementById("pass-res").innerText = "Password Length less than 8 chars or more than 10 chars..";
        document.getElementById("pass-res").style.color = "red";
        return;
    }
    
    var num=0, upper=0, lower=0;
    
    for(var i=0; i<txt.length; i++){
     //   var txt1 = txt.charAt(i);//
        var txt1 = txt[i]
        if(!isNaN(txt1)){
            num++}
        else if(txt1==txt1.toLowerCase()){
                lower++;}
                else{
                    upper++;
                }
            
        }
    //	console.log(num)
    //	console.log(upper)
    //	console.log(lower)
    
    if(num>0 && lower>0 && upper>0){
        document.getElementById("pass-res").innerText = "Your Password is OK!";
        document.getElementById("pass-res").style.color = "green";
        return;
    }
    else{
        var res = "Your Password :";
        if(num == 0 ){
            res = res + "\n should contains numbers";
        }
        if(upper == 0){
            res = res + "\n should contains upperCase Letters";
        }
        if(lower == 0){
            res = res + "\n should contains lowerCase Letters";
        }
    }
    document.getElementById("pass-res").innerText = res;
    document.getElementById("pass-res").style.color = "red";
}