let user ={
    id : 9,
    username: "XX",
    password: "xx",
    firstName: "Joe",
    lastName:  "Smith",
    phone: "513-123-4567",
    email: "student@maxtrain.com",
    isReviewer: false,
    isAdmin: false
}
$ ().ready (() => {

    $.ajax({
        method: "DELETE",
        url: "http://localhost:58145/api/users/9",
        data: null,
        contentType:"application/json"

    })
        .done((res) => {
            console.log(res);
    })
        .fail((err) => {
            console.error("ERROR:", err);
    });
});