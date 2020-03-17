let vendor ={
    id : 0,
    code: "XX",
    name: "XX",
    address: "XX",
    city: "XX",
    state: "XX",
    zip: "XX",
    phone: null,
    email: null
}
$().ready (() => {

    $.ajax({
        method: "POST",
        url: "http://localhost:58145/api/vendors",
        data: JSON.stringify(vendor),
        contentType:"application/json"
       
    })
        .done((res) => {
            console.log(res);
        })
        .fail((err)=>{
            console.error("ERROR", err);

        });
});