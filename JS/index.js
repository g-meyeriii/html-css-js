function clickme1() {

}
let clickme2 = function(){

}
//most current version doesn't allow the value to change which is a good thing
const clickme3 = () => {
    let ctrl = document.getElementById("inp")
    let val = ctrl.value;
    let lblCtrl = document.getElementById("lbl");
    lblCtrl.innerHTML = "<h3>"+val+"</h3>";  //text block space above and below

}
const plus = () => {
    let v1 = document.getElementById("num1");
    let v2 = document.getElementById("num2");
    let val1 = v1.value;
    let val2 = v2.value;
    let totalCtrl = document.getElementById("total");
    totalCtrl.value = +val1+ Number(val2);
    
}
const display =() =>{
    document.getElementById("total2").value = sum;
     
 
     if(sum % 2 ==0){
        document.getElementById("total2").style.color = "red"
    } else{
        document.getElementById("total2").style.color = "black"
    }
    if(sum % 3 == 0){
        document.getElementById("total2").style.color ="green"
    }else{
        document.getElementById("total2").style.color ="black"
    }
} 
let sum =0;
const add = ()=> {
    let v1 = document.getElementById("num1").value;
    sum += +v1
    display();
    
}
const subtract = ()=> {
    let v1 = document.getElementById("num1").value;
    sum -= +v1
    display();
}
const multiply = ()=> {
    let v1 = document.getElementById("num1").value;
    sum *= +v1
    display();
}
const divide = ()=> {
    let v1 = document.getElementById("num1").value;
    sum /= +v1
    display();
}
const clr =() => {
    document.getElementById("num1").value = 0;
    document.getElementById("total2").value = 0;
    display();
}

const convert = () => {
    let cel = + (document.getElementById("cel").value)
    let far = (cel * 9 / 5) + 32
    document.getElementById("far").value = far;
    display();


}
const reset =() => {
    document.getElementById("cel").value = 0;
    document.getElementById("far").value = 0;
    display();
}
const convert2 =() =>{
    let far = +(document.getElementById("far").value)
    let cel = 5/9 * (far - 32)
    document.getElementById("cel").value = cel;
} 
const f = "FIZZ";
const b = "BUZZ";
const fb = f+b;

const fizBuz =() =>{
    for (let num = 1; num <= 100; num ++) {
        if(num % 3 == 0 && num % 5 == 0) {
        out(fb);
        continue; 
        } 
        if(num % 3 == 0){
        out(f);        
        continue;
        }
        if(num % 5 == 0){
        out(b);
        continue;
        }
        out(num);
    }

}
const out = (output) => {
    let pCtrl = document.getElementById("out");
    let color = "black";
    if(output==fb){ color = "purple"; }
    if(output==f){ color = "red"; }
    if(output==b){ color = "blue"; }
    pCtrl.innerHTML +=`<span style="color:${color};">${output}</span>,`;
}
