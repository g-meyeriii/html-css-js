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
const add = ()=> {
    let v1 = document.getElementById("num1").value;
    sum += +val
    display();
    
}
const add = ()=> {
    let v1 = document.getElementById("num1").value;
    sum -= +val
    display();
}
const clr =() => {
    document.getElementById("num1").value = 0;
    document.getElementById("total2").value = 0;
    display();
}


    