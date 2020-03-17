let user ={
    id : 0,
    username: "XX",
    password: "xx",
    firstName: "xx",
    lastName:  "xx",
    phone: null,
    email: null,
    isReviewer: false,
    isAdmin: false
}
$ ().ready (() => {

    $.ajax({
        method: "POST",
        url: "http://localhost:58145/api/users",
        data: JSON.stringify(user),
        contentType:"application/json"

    })
        .done((res) => {
            console.log(res);
    })
        .fail((err) => {
            console.error("ERROR", err);
    });
});