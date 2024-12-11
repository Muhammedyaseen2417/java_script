// let a=10
// let b=10
// if (a==b){
//     console.log("eql");
    
// }
// else if(a!=b){
//     console.log("not eql");
    
// }
// function fun1(){
//     let a=parseInt(document.getElementById("a").value)
//     let b=parseInt(document.getElementById("b").value)

//     if (b>=5){
//         console.log(a*0.05);
        
//     }
//     else{
//         console.log("NO Bonus");
        
//     }
// }

function fun2(){
    let a=parseInt(document.getElementById("a").value)
    let h3=document.getElementById("h1")
    d=a%3
    if (d%3==0){
        h3.innerHTML="divisible"

    }
    else{
        h3.innerHTML="not divisble"
    }
}
