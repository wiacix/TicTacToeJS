var who = true;
var how_much = 0;
var last = "";

function check(){
    var pom = "a";
    for(var i=1;i<=3;i++){
        if(document.getElementById("a"+i).innerHTML == document.getElementById("b"+i).innerHTML && 
        document.getElementById("a"+i).innerHTML == document.getElementById("c"+i).innerHTML && 
        document.getElementById("c"+i).innerHTML != "") return true;
        if(document.getElementById(pom+"1").innerHTML == document.getElementById(pom+"2").innerHTML && 
        document.getElementById(pom+"1").innerHTML == document.getElementById(pom+"3").innerHTML && 
        document.getElementById(pom+"1").innerHTML != "") return true;
        if(i==1) pom = "b";
        else pom = "c";
    }
    if(document.getElementById("a"+1).innerHTML == document.getElementById("b"+2).innerHTML && 
    document.getElementById("a"+1).innerHTML == document.getElementById("c"+3).innerHTML && 
    document.getElementById("c"+3).innerHTML != "") return true;
    if(document.getElementById("a"+3).innerHTML == document.getElementById("b"+2).innerHTML && 
    document.getElementById("a"+3).innerHTML == document.getElementById("c"+1).innerHTML && 
    document.getElementById("c"+1).innerHTML != "") return true;
}

function set(position){
    if(document.getElementById(position).innerHTML == "o" || document.getElementById(position).innerHTML == "x") alert("Zajęta pozycja!!!");
    else{
        if(who){
            document.getElementById(position).innerHTML = "o";
            who = false;
            how_much++;
            last = "o";
            document.getElementById("move").innerHTML = "X to move";
        }else{
            document.getElementById(position).innerHTML = "x";
            who = true;
            how_much++;
            last = "x";
            document.getElementById("move").innerHTML = "O to move";
        }
    }
    if(how_much>=5){
        if(check()){
            if(last=="o") alert("Ciężko bój wygrało kółko!!!");
            else alert("Ciężko bój wygrał krzyżyk!!!");
        }
    }
}

function reset(){
    who = true;
    how_much = 0;
    last = "";
    document.getElementById("a1").innerHTML = "";
    document.getElementById("a2").innerHTML = "";
    document.getElementById("a3").innerHTML = "";
    document.getElementById("b1").innerHTML = "";
    document.getElementById("b2").innerHTML = "";
    document.getElementById("b3").innerHTML = "";
    document.getElementById("c1").innerHTML = "";
    document.getElementById("c2").innerHTML = "";
    document.getElementById("c3").innerHTML = "";
    document.getElementById("move").innerHTML = "O to move";
}