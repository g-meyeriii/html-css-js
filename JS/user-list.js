

let saved_users = null;

$().ready(() => {//load jQuery and JS in between the brackets

    console.log("Before getJSON call.");

    $.getJSON("http://localhost:58145/api/users")
        .done((users) => {
            saved_users = users;
            display();
            console.log("Users:", users);
        })
        .fail((err) => {
            console.error("ERROR:", err);
        });
    console.log("After getJSON call.")

});

const display = () => {
    console.log("in display function");
    let tbody = $("#usertbody");
    tbody.html('');
    for(let user of saved_users){
        let tr = $("<tr></tr>");
        let tdId =`<td>${user.id}</td>`;
        let tdName =`<td>${user.firstName} ${user.lastName}</td>`;
        let tdPhone =`<td>${user.phone}</td>`;
        let tdEmail =`<td>${user.email}</td>`;
        tr.html(tdId + tdName + tdPhone + tdEmail);
        tbody.append(tr);
    };
};