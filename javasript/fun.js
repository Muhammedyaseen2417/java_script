function add(){
    let a=parseInt(document.getElementById("a").value)
    let b=parseInt(document.getElementById("b").value)
    console.log(a+b);
    let h3=document.getElementById("h3")
    h3.innerHTML=a+b
}

function sub(){
    let a=parseInt(document.getElementById("a").value)
    let b=parseInt(document.getElementById("b").value)
    console.log(a-b);
    let h3=document.getElementById("h3")
    h3.innerHTML=a-b

   
}
function mul(){
    let a=parseInt(document.getElementById("a").value)
    let b=parseInt(document.getElementById("b").value)
    console.log(a*b);
    let h3=document.getElementById("h3")
    h3.innerHTML=a*b
}

function div(){
    let a=parseInt(document.getElementById("a").value)
    let b=parseInt(document.getElementById("b").value)
    console.log(a/b);
    let h3=document.getElementById("h3")
    h3.innerHTML=a/b
}
function mod(){
    let a=parseInt(document.getElementById("a").value)
    let b=parseInt(document.getElementById("b").value)
    console.log(a%b);
    let h3=document.getElementById("h3")
    h3.innerHTML=a%b
}