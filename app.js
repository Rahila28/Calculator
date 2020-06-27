



 function getNumber(num){
     var result = document.getElementById("result");
     var c = document.getElementById("history-value");
     
    
     c.innerText += num;

    //  result.value += num;
    
}




// function getformattedNumber(num){
//     var n = Number(n);
//     var value = n.toLocaleString("en");
//     return value;
// }
// printOutput("");


function clearResult(){
    var result = document.getElementById("history-value");
    var result1 = document.getElementById("output-value");
    result.innerHTML =""
    result1.innerHTML =""
}


function getResult(){
    var result = document.getElementById("result");
    var c1 = document.getElementById("history-value");
    
    var c = document.getElementById("output-value");
    // result.value =eval(result.value)
     c.innerHTML = eval(c1.innerHTML)


}

function getHistory(){
    return document.getElementById("history-value").innerHTML;

}
// alert( getHistory())












 function printHistory(num){
    document.getElementById("history-value") .innerHTML=num;
 }
//  printHistory("9*9+8");









  function getOutput(){
     return document.getElementById("output-value").innerHTML;

  }
//   function printOutput(num){
//       document.getElementById("output-value").innertext=num;
//   }
//  printOutput("9999")





//  function printOutput(num){
//      if(num==""){
//          document.getElementById("output-value").innerHTML=num;

//      }
     
//      else{
//         document.getElementById("output-value").innerHTML=getformattedNumber(num);
//     }
// }
// function getformattedNumber(num){
//     if(num=="-"){
//         return "";
//     }
//     var n= Number(num);
//     var value = n.toLocaleString("en");
//     return value;


// }


// // function getformattedNumber(num){
// //     var n = Number(num);
// //     var value = n.toLocaleString("en");
// //     return value;
// // }


// function reverseNumberFormat(num){
//     return Number(num.replace(/,/g,''));
// }



// var operator = document.geElementsByClassName("operator");
// for (var i=0 ; i<operator.length;i++){
//     operator[i].addEventListener('click',function(){
//        if(this.id=="clear"){
//         printHistory("");
//         printHistory("");
//        }
//        if(this.id=="backspace"){
//            var output=reverseNumberFormat(grtOutput()).toString();
//            if(output){//if output has a value
//             output= output.substr(0,output.length-1);
//             printOutput(output);

//            }
//        }
//        else{
//            var output=getOutput();
//            var history=getHistory();
//            if(output=""&&history!=""){
//                history=history.substr(0,history,length-1);
//            }
//            if(output!=""|| history!=""){
//                //condition?true:false
//                output=output==""?
//                output=reverseNumberFormat(output);
//                history=history+output;
//                if(this.id==""){
//                    var result=eval(history);
//                    printOutput(result);
//                    printHistory("");
//                }
//                else{
//                    history=history+this.id;
//                    printHistory(history);
//                    printOutput("");
//                }
//            }
//        }
//     });
// }


// var number = document.getElementsByClassName("number");
// for(var i=0; i,number.length;i++){
//     number[i].addEventListener('click' , function(){
//        var output=reverseNumberFormat(getOutput());
//        if(output!=NaN){//if output is a number
//         output=output=this.id;
//         printOutput(output);
    
//     } 
//     });
// }

// var number = document.getElementsByClassName("number");
// for(var i=0; i,number.length;i++){
//     number[i].addEventListener('click', function(){
//         var output=reverseNumberFormat(getOutput());
//         if(output !=NN){//if output is a number
//             output=output+this.id;
//             printOutput(output);


//         }
//     })
// }