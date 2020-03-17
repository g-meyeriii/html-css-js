let user ={
    id : 9,
    username: "XX",
    password: "xx",
    firstName: "Joe",
    lastName:  "Smith",
    phone: null,
    email: "student@maxtrain.com,
    isReviewer: false,
    isAdmin: false
}
$ ().ready (() => {

    $.ajax({
        method: "PUT",
        url: "http://localhost:58145/api/users/9",
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