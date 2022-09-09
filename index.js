var price=0;

function g(){

    if(document.getElementById("c").checked=== true){
        price+=5
    }

    if(document.getElementById("t").checked=== true){
        price+=3
    }

    if(document.getElementById("o").checked=== true){
        price+=2
    }
}

function size(){
    if(document.getElementById("m").checked===true){
        price=20;
    }else if(document.getElementById("l").checked===true){
        price=30;
    }else if(document.getElementById("xl").checked===true){
        price=35;
    }


}

function bs() {
    if (document.getElementById("bs").checked===true){
        price+=15;
    }

}

function myFunctoin(){


    size()
    g()
    bs()
    if(document.getElementById("m").checked===true||document.getElementById("l").checked===true||document.getElementById("xl").checked===true) {
        alert("אתה צריך לשלם " + price)
    }else {
        alert("קודם בחר גודל מגש")
    }
    price=0;
}