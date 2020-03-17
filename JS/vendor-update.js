let vendor ={
    id : 11,
    code: "XX",
    name: "XX",
    address: "XX",
    city: "XX",
    state: "XX",
    zip: "11111",
    phone: null,
    email: null
}
$().ready (() => {

    $.ajax({
        method: "PUT",
        url: "http://localhost:58145/api/vendors/11",
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