function getAllUser(){
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/admin",
        success: function (data) {
            let table = document.getElementById("list");
            if (table.style.display === "none"){
                table.style.display = "block"
                document.getElementById("form").style.display= "none"
            }
            document.getElementById("list").innerHTML = displayTable(data)
            console.log(data)
        }
    })
}

function displayTable(data) {
    let result = ""
    result += "<table border='1' width='300px'>"
    result += "<tr>"
    result += "<th>STT</th>"
    result += "<th>User Name</th>"
    result += "<th>User Password </th>"
    result += "<th>Full Name</th>"
    result += "<th>Phone Number</th>"
    result += "<th>Email</th>"
    result += "<th>Date of Birth</th>"
    result += "<th>Address</th>"
    result += "<th>Avatar</th>"
    result += "<th>Hobby</th>"
    result += "<th colspan='2'>Action</th>"
    result += "</tr>"
    for (let i = 0; i < data.length; i++) {
        result += "<tr>"
        result += "<th>" + (i+1) + "</th>"
        result += "<th>" + data[i].userName + "</th>"
        result += "<th>" + data[i].pass + "</th>"
        result += "<th>" + data[i].fullName + "</th>"
        result += "<th>" + data[i].phone + "</th>"
        result += "<th>" + data[i].email + "</th>"
        result += "<th>" + data[i].dateOfBirth + "</th>"
        result += "<th>" + data[i].address + "</th>"
        result += "<th>" + data[i].avatar + "</th>"
        result += "<th>" + data[i].hobby + "</th>"
        result += "<th>" + data[i].blockStatus + "</th>"
        if (data[i].blockStatus === true){
        result += "<th><button onclick='blockUser(" + data[i].id + ")'>Block User</button></th>"}
        else {
            result += "<th><button onclick='blockUser(" + data[i].id + ")'>Unblock User</button></th>"
        }
        result += "</tr>"
    }
    result += "</table>"
    return result
}

let idProduct;

function blockUser(id){
  // let a =  "Do you want to block this user"
  //   if (confirm(a) == true){
  //       alert("account blocked")
  //   }
    $.ajax({
        type: "PUT",
        url: "http://localhost:8080/api/admin/" + id,
        success: function () {
            getAllUser();
        }
    })
}