let total = 0;

$().ready(function(){

    console.log("jquery is ready!");

    $("div").css("text-align","center");

    display();

    $("#1").click(function (){
        total--;
        
        display();
        
    });
    $("#3").click(function(){
        total++
        
        display();
    });
  
});
const display = ()=>{
    $("#2").text(total)
                .css("color", "black")
                .css("font-style", "normal")
                .css("font-weight", "normal");
    if(total % 2 ==0) $("#2").css("color", "red"); 
    if(total % 3 ==0) $("#2").css("font-style", "italic");
    if(total % 5 ==0) $("#2").css("font-weight", "bold");     
}