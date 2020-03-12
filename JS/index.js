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