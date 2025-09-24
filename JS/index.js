//console.log("Hello World");
// var a;
// console.log("a="+a);
// var a=23;
// let a=40;
//  if(a>10){
//     let a=300;
//     console.log("a inside:"+a);
//  }
//  else{
// console.log("else condition");
//  }
// console.log("a outside:"+a);
// let a="20";
// if(a===20){
//     console.log("Equal data");
// }
// else{
// console.log("not equal");
// }
// 
//  function msg(name){
//     return name+"Welcome to JS";
//  }
// const myname="Rahul";
// const data=`hello''${myname}`;
// console.log(data);
// const data=msg("Ram");
// console.log(data);
// function as an expression
// const data=function msg(name){
//     return name+"Welcome to JS";
//   }
//   const msg=data("Rahul");
//   console.log(msg);

// Arrow Function
// const data=(myname)=>{
//     // console.log("hii...hello"+myname)
//     return "hii...hello"+myname;
// }
// const result=data("Ram");
// console.log(result)

//single line
// const data=msg=>"Hii........"+msg;
// console.log(data("Greetings....."));

//IIFE
// 
// (()=>{
//     console.log("Welcome to ABES")
// })();
// setTimeout(()=>{
// console.log("hii...i am using timeout")
// },1000);

// setInterval(()=>{
// console.log("hiiiiiiii.........how r u")
// },1000)

// function greetings(msg="welcome"){
//     console.log("Hii"+msg);
// }
// greetings("rimjhim");


function selectlanguage(lang){
let data;
if(lang=='java'){
    function javaCompiler(){
        return "Java compiler selected";
    }
    data=javaCompiler();
}else if(lang=='C'){
    function cCompiler(){
        return "C compiler selected";
    }
    data=cCompiler();
}
else{
    data="no such compiler available"
}
return data;
 }
 console.log(selectlanguage('Django'));