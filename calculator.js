let tally ="0"
let splits;
let opperatorTally=[];
let numberTally=[];
document.getElementById("screen").innerText = "0";

document.getElementById("One").onclick = function()
{
    
    if(tally=="0"){
        tally="1"
    }else{
        tally = tally + "1"
    }    
    document.getElementById("screen").innerText = tally;    
}
document.getElementById("Two").onclick = function()
{
    
        if(tally=="0"){
            tally="2"
        }else{
            tally = tally + "2"
        }    
        document.getElementById("screen").innerText = tally;
        
}
document.getElementById("Three").onclick = function()
{
    if(tally=="0"){
        tally="3"
    }else{
        tally = tally + "3"
    }    
    document.getElementById("screen").innerText = tally;
}
document.getElementById("Four").onclick = function()
{
    if(tally=="0"){
        tally="4"
    }else{
        tally = tally + "4"
    }    
    document.getElementById("screen").innerText = tally;
}
document.getElementById("Five").onclick = function()
{
    if(tally=="0"){
        tally="5"
    }else{
        tally = tally + "5"
    }    
    document.getElementById("screen").innerText = tally;
}
document.getElementById("Six").onclick = function()
{
    if(tally=="0"){
        tally="6"
    }else{
        tally = tally + "6"
    }    
    document.getElementById("screen").innerText = tally;
}
document.getElementById("Seven").onclick = function()
{
    if(tally=="0"){
        tally="7"
    }else{
        tally = tally + "7"
    }    
    document.getElementById("screen").innerText = tally;
}
document.getElementById("Eight").onclick = function()
{
    if(tally=="0"){
        tally="8"
    }else{
        tally = tally + "8"
    }    
    document.getElementById("screen").innerText = tally;
}
document.getElementById("Nine").onclick = function()
{
    if(tally=="0"){
        tally="9"
    }else{
        tally = tally + "9"
    }    
    document.getElementById("screen").innerText = tally;
}
document.getElementById("Zero").onclick = function()
{
    if(tally!="0"&&tally!=""){
        tally = tally + "0" 
        document.getElementById("screen").innerText = tally;
    }    
}
document.getElementById("Point").onclick = function()
{    
    if(tally==""){
        tally = tally + "0"+ ".";
        document.getElementById("screen").innerText = tally;
    }
    if((tally.split(".").length-1)<=opperatorTally.length&&!tally.endsWith("+")&&!tally.endsWith("-")&&!tally.endsWith("*")&&!tally.endsWith("/")){
        tally = tally + ".";
        document.getElementById("screen").innerText = tally;
    }              
}
document.getElementById("Del").onclick = function()
{
    if(tally=="0."){
        tally = tally.slice(0,tally,length-2)
    }    
    if(tally.length>1){
        tally = tally.slice(0,tally.length-1);        
    }  
    else if(tally.length=1||tally=="0"){
        tally="0"      
    }    
    document.getElementById("screen").innerText = tally;
}
document.getElementById("Negative").onclick = function()
{

    if(tally=="0"){
        tally="-"
        document.getElementById("screen").innerText = tally;
    }
    if(!tally.endsWith("-")&&!tally.endsWith(".")&&isNaN(tally.substring(tally.length-1))){
        tally = tally + "-"
        document.getElementById("screen").innerText = tally;  
    }    
}
document.getElementById("Divide").onclick = function()
{
    if(tally!="0"&&tally!=""&&!tally.endsWith("+")&&!tally.endsWith("-")&&!tally.endsWith("*")&&!tally.endsWith("/")&&!tally.endsWith(".")){
        opperatorTally.push("/")
        tally = tally + "/" 
        document.getElementById("screen").innerText = tally;
    }    
}
document.getElementById("X").onclick = function()
{
    if(tally!="0"&&tally!=""&&!tally.endsWith("+")&&!tally.endsWith("-")&&!tally.endsWith("*")&&!tally.endsWith("/")&&!tally.endsWith(".")){
        opperatorTally.push("*")
        tally = tally + "*"
        document.getElementById("screen").innerText = tally;
    }    
}
document.getElementById("Minus").onclick = function()
{
    if(tally!="0"&&tally!=""&&!tally.endsWith("+")&&!tally.endsWith("-")&&!tally.endsWith("*")&&!tally.endsWith("/")&&!tally.endsWith(".")){
        opperatorTally.push("-")
    tally = tally + "-" 
    document.getElementById("screen").innerText = tally;
    }    
}
document.getElementById("Plus").onclick = function()
{
    if(tally!="0"&&tally!=""&&!tally.endsWith("+")&&!tally.endsWith("-")&&!tally.endsWith("*")&&!tally.endsWith("/")&&!tally.endsWith(".")){
        opperatorTally.push("+")
        tally = tally + "+"
        document.getElementById("screen").innerText = tally;
    }    
}
document.getElementById("C").onclick = function()
{
    tally = "0";  
    document.getElementById("screen").innerText = tally;  
}
document.getElementById("Equals").onclick = function()
{   
    if(tally.endsWith("+")||tally.endsWith("-")||tally.endsWith("*")||tally.endsWith("/")||tally.endsWith(".")){
        tally = tally.slice(0,(tally.length-1))
        opperatorTally.pop();
    }
    if(tally.startsWith("-")){
        tally = tally.replace("-","_")
    }
    tally = tally.replace(/\+-/g,"+_")
    tally = tally.replace(/\--/g,"-_")
    tally = tally.replace(/\*-/g,"*_")
    tally = tally.replace(/\/-/g,"/_")
    console.log(tally)
    splits = tally.split(/[+]|[-]|[*]|[/]/)        
    
    for(i=0;i<splits.length;i++){
        if(splits[i].includes("_")){
           splits[i] = splits[i].replace("_","-") 
        }
    }            
    for(i=0;i<splits.length;i++){        
        splits[i] = Number(splits[i])             
    } 
    console.log(splits)         
    for(i=0;i<opperatorTally.length;i++){
        if(opperatorTally[0]=="+"){
            splits[1] = splits[0]+splits[1]
            splits.shift()
            opperatorTally.shift()                       
        }if(opperatorTally[0]=="-"){
            splits[1] = splits[0]-splits[1]
            splits.shift()
            opperatorTally.shift()                                   
        }if(opperatorTally[0]=="*"){
            splits[1] = splits[0]*splits[1]
            splits.shift()
            opperatorTally.shift()                                  
        }if(opperatorTally[0]=="/"){
            splits[1] = splits[0]/splits[1]
            splits.shift()
            opperatorTally.shift()                                   
        }
    }
    tally=String(Math.round(splits[0]*100000000)/100000000)    
    document.getElementById("screen").innerText = tally;        
}         