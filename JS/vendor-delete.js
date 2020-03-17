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
        method: "DELETE",
        url: "http://localhost:58145/api/vendors/11",
        data: null,
        contentType:"application/json"
       
    })
        .done((res) => {
            console.log(res);
        })
        .fail((err)=>{
            console.error("ERROR:", err);

        });
});