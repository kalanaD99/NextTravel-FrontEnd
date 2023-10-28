let cId = $('#txtCustomerId').val();
let name = $('#txtName').val();
let email =$('#txtEmail').val();
let address = $('#txtAddress').val();
let nic = $('#txtNic').val();
let userName =$('#txtUsername').val();
let password = $('#txtPassword').val();
let profilePic = $('#profilePic').val();



function save(){
    $.ajax({
        type:"POST",
        url:"",
        data:{customerID:cId,name:name,email:email,address:address,nic:nic,
            username:userName,password:password,profilepic:profilePic
        },
        success:(response)=>{
            console.log(response)
            getAll()
        },
        error:function (error){
            console.log(error)
        }
    })
}

function update(){
    function save(){
        $.ajax({
            type:"PUT",
            url:"",
            data:{customerID:cId,name:name,email:email,address:address,nic:nic,
                username:userName,password:password,profilepic:profilePic
            },
            success:(response)=>{
                console.log(response)
                getAll()
            },
            error:function (error){
                console.log(error)
            }
        })
    }
}

function search(){
    let cusId = $('#txtCustomerId').val();
    $.ajax({
        type:"GET",
        url:""+cusId,
        success:function (response){
        $('#customerId').val(response.customerID);
        $('#name').val(response.name);
        $('#email').val(response.email);
        $('#address').val(response.address);
        $('#nic').val(response.nic);
        $('#username').val(response.username);
        $('#password').val(response.password);
        $('#profilePic').val(response.profilepic);
        },
        error:(error) =>{
            console.log(error)
            $('#customerId').val("");
            $('#name').val("");
            $('#email').val("");
            $('#address').val("");
            $('#nic').val("");
            $('#username').val("");
            $('#password').val("");
            $('#profilePic').val("");
            alert("Customer Not Found..!");
        }
    })
}


function Delete(){
    $.ajax({
        type: "DELETE",
        url: "" + cId,
        success: (response) => {
            alert("Delete Success..!")
            getAll()
        },

        error: function (error) {
            alert("Id not found or can't delete Customer")
        }
    })
}

function getAll(){
    $('#tBody').empty();
    $.ajax({
        type: "Get",
        url: "",
        success: (response) => {
            response?.map(
                (data) => {
                    let row = `<tr><td>${data.customerID}</td><td>${data.name}</td><td>${data.address}</td><td>${data.email}</td><td>${data.address}</td><td>${data.nic}</td>
                                        <td>${data.username}</td><td>${data.password}</td><td>${data.profilepic}</td></tr>`;
                    $('#tBody').append(row);
                }
            )
        },

        error: function (error) {
            alert("Guide Not Found..")
        }
    })
}