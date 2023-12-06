// !Creating all html elememts and set attributes.

const title = document.createElement("H1");
title.setAttribute("id", "title");
title.innerHTML = `Calculator`;
document.body.append(title);

const description = document.createElement("p");
description.setAttribute("id", "description");
description.innerHTML = `We can use this app to perform basic calculation`;
document.body.append(description);

const calculator = document.createElement("div");
calculator.classList.add("calc","container");
calculator.classList.add("col-lg-4","col-sm-6")
document.body.append(calculator);

const input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("id", "result");
input.setAttribute("placeholder", "0");
calculator.append(input);

const result=document.getElementById("result");
const clear = document.createElement("button");
clear.setAttribute("id", "clear");
clear.innerText = `CE`;
clear.addEventListener("click",()=>result.value="");

const del = document.createElement("button");
del.innerHTML = `DEL`;
del.addEventListener("click",()=>{
    result.value=result.value.slice(0,-1);

});

const dot = document.createElement("button");
dot.innerHTML= `.`;
dot.addEventListener("click",()=>result.value+=".");

const multi = document.createElement("button");
multi.innerText = `*`;
multi.addEventListener("click",()=>result.value+="*");

const btn7 = document.createElement("button");
btn7.innerText = `7`;
// btn7.setAttribute("onclick", "dispaly.value='7'");
btn7.addEventListener("click",()=>result.value+="7");

const btn8 = document.createElement("button");
btn8.innerText = `8`;
btn8.addEventListener("click",()=>result.value+="8");

const btn9 = document.createElement("button");
btn9.innerText = `9`;
btn9.addEventListener("click",()=>input.value+="9");

const divide = document.createElement("button");
divide.innerText = `/`;
divide.addEventListener("click",()=>input.value+="/");

const btn4 = document.createElement("button");
btn4.innerText = `4`;
btn4.addEventListener("click",()=>input.value+="4");

const btn5 = document.createElement("button");
btn5.innerText = `5`;
btn5.addEventListener("click",()=>input.ivalue+="5");

const btn6 = document.createElement("button");
btn6.innerText = `6`;
btn6.addEventListener("click",()=>input.value+="6");

const subtract = document.createElement("button");
subtract.innerText = `-`;
subtract.addEventListener("click",()=>input.value+="-");
subtract.setAttribute("id", "subtract");

const btn1 = document.createElement("button");
btn1.setAttribute("id", "1");
btn1.innerText = `1`;
btn1.addEventListener("click",()=>input.value+="1");

const btn2 = document.createElement("button");
btn2.setAttribute("id", "3");
btn2.innerText = `2`;
btn2.addEventListener("click",()=>input.value+="2");

const btn3 = document.createElement("button");
btn3.setAttribute("id", "3");
btn3.innerText = `3`;
btn3.addEventListener("click",()=>input.value+="3");

const add = document.createElement("button");
add.setAttribute("id", "add");
add.innerText = `+`;
add.addEventListener("click",()=>input.value+="+");

const btn0 = document.createElement("button");
btn0.innerText = `0`;
btn0.addEventListener("click",()=>input.value+="0");

const btn00 = document.createElement("button");
btn00.innerText = `00`;
btn00.addEventListener("click",()=>input.value+="00");

const equal = document.createElement("button");
equal.setAttribute("id", "equal");
equal.innerText = `=`;
equal.addEventListener("click",()=>{
    const ans=eval(input.value);
    input.value=ans;
   
});
calculator.append(clear, del, dot, multi, btn7, btn8, btn9, divide, btn4, btn5, btn6, subtract, btn1, btn2, btn3, add, btn0, btn00, equal);

clear.setAttribute("class","operator");
del.setAttribute("class","operator");
dot.setAttribute("class","operator");
multi.setAttribute("class","operator");
divide.setAttribute("class","operator");
subtract.setAttribute("class","operator");
add.setAttribute("class","operator");
equal.setAttribute("class","operator");

