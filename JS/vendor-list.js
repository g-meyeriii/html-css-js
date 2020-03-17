

let saved_vendors = null;

$().ready(()=>{

    console.log("Before getJSON call.");

    $.getJSON("http://localhost:58145/api/vendors")
        .done((vendors)=>{
            saved_vendors = vendors;
            display();
            console.log("Vendors:", vendors);
        })
        .fail((err)=> {
            console.error("ERROR:", err);
        });
    console.log("After getJSON call.")
});

const display =() => {
    console.log("in display function");
    let tbody = $("#vendortbody");
    tbody.html('');
for(let vendor of saved_vendors){
    let tr = $("<tr></tr>");
    let tdId = `<td>${vendor.id}</td>`;
    let tdCode = `<td>${vendor.code}</td>`;
    let tdName = `<td>${vendor.name}</td>`;
    let tdAddress = `<td>${vendor.address}</td>`;
    let tdCity = `<td>${vendor.city}</td>`;
    let tdState = `<td>${vendor.st}</td>`;
    let tdZip = `<td>${vendor.zip}</td>`;
    let tdPhone = `<td>${vendor.phone}</td>`;
    let tdEmail = `<td>${vendor.email}</td>`;
    tr.html(tdId + tdCode + tdName + tdAddress + tdCity 
        + tdState + tdZip + tdPhone + tdEmail);
        tbody.append(tr);
    };

};
