
let saved_vendor =null;

$().ready(()=>{
    console.log("Before getJSON call");
    
    $.getJSON("http://localhost:58145/api/vendors/8")
        .done((vendor)=>{
            saved_vendor = vendor;
            console.log("Vendor:", vendor);
            display();
        })
        .fail((err)=>{
            console.error("ERROR:", err);
        });
        console.log("After getJSON call.");
});
const display = () => {
    console.log("in display function");
    $("#tid").text(saved_vendor.id);
    $("#tcode").text(saved_vendor.code);
    $("#tname").text(saved_vendor.name);
    $("#taddress").text(saved_vendor.address);
    $("#tcity").text(saved_vendor.city);
    $("#tstate").text(saved_vendor.state);
    $("#tzip").text(saved_vendor.zip);
    $("#tphone").text(saved_vendor.phone);
    $("#temail").text(saved_vendor.email);
};