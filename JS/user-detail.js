
let saved_user =null;

$().ready( ()=> { 
    console.log("Before getJSON call.");

    $.getJSON("http://localhost:58145/api/users/5")
        .done((user) => {
            saved_user = user;
            console.log("User:", user);
            display();
        })
        .fail((err ) => { 
            console.error("ERROR:", err);
        });
    console.log("After getJSON call.");
});
const display = () => {
    console.log("in display function");
    $("#tid").text(saved_user.id);
    $("#tname").text(`${saved_user.firstName} ${saved_user.lastName}`);
    $("#tphone").text(saved_user.phone);
    $("#temail").text(saved_user.email);
};
