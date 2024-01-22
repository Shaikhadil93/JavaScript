//Array of object 
const personal = [
    // {
    //     name: "",
    //     email: "",
    //     phone: "",
    //     adress: "",
    // },
];

//console.log(personal);


//Add data to table
function addData() {
    //get value from the innput field
    let nameInput = document.getElementById("nameInput").value;
    let emailInput = document.getElementById("emailInput").value;
    let numberInput = document.getElementById("numberInput").value;
    let addressInput = document.getElementById("addressInput").value;

    //append data to the array 
    personal.push(nameInput);
    // personal.push(emailInput.email);
    // personal.push(numberInput.number);
    // personal.push(addressInput.address);

    let perdata = [];
    for (var i = 0; i < personal.length; i++) {
        perdata = perdata + personal[i];
        let table = document.getElementById("tableShow");
        var newRow = table.insertRow(table.rows.length);
    }
    newRow.insertCell(0).innerHTML = i;
    newRow.insertCell(1).innerHTML = perdata;
    newRow.insertCell(2).innerHTML = perdata;
    newRow.insertCell(3).innerHTML = perdata;
    newRow.insertCell(4).innerHTML = perdata;
    newRow.insertCell(5).innerHTML = `<button onclick= "editData(this)")"> Edit </button>` +
        `<button onclick= "deleteData(this)"> Delete </button>`

    //     //diplay array data in table
    //     // document.getElementById("sNO").innerHTML=perdata.name; 
    //     document.getElementById("tName").innerHTML = perdata.name;
    //     document.getElementById("tEmail").innerHTML = perdata.email;
    //     document.getElementById("tNumber").innerHTML = perdata.number;
    //     document.getElementById("tAddress").innerHTML = perdata.address;
    //     document.getElementById("action").value =

    clearInput();
};


// function addData() {

//     let name = document.getElementById("nameInput").value;
//     let email = document.getElementById("emailInput").value;
//     let number = document.getElementById("numberInput").value;
//     let address = document.getElementById("addressInput").value;

//     let table = document.getElementById("tableShow");
//     var newRow = table.insertRow(table.rows.length);

//     newRow.insertCell(0).innerHTML = "";
//     newRow.insertCell(1).innerHTML = name;
//     newRow.insertCell(2).innerHTML = email;
//     newRow.insertCell(3).innerHTML = number;
//     newRow.insertCell(4).innerHTML = address;
//     newRow.insertCell(5).innerHTML = `<button onclick= "editData(this)")"> Edit </button>` +
//         `<button onclick= "deleteData(this)"> Delete </button>`

//     clearInput();
// }

// function editData(Button) {
//     let row = Button.parentNode.parentNode;

//     let nameCell = row.cells[1];
//     let emailCell = row.cells[2];
//     let numberCell = row.cells[3];
//     let addressCell = row.cells[4];

//     let nameInput = document.getElementById("nameInput");
//     let emailInput = document.getElementById("emailInput");
//     let numberInput = document.getElementById("numberInput");
//     let addressInput = document.getElementById("addressInput");

//     nameInput.value = nameCell.innerHTML;
//     emailInput.value = emailCell.innerHTML;
//     numberInput.value = numberCell.innerHTML;
//     addressInput.value = addressCell.innerHTML;


//     // nameCell.value= nameInput1.innerHTML;
//     // emailCell.value= emailInput1.innerHTML;
//     // numberCell.value= numberInput1.innerHTML;
//     // addressCell.value= addressInput1.innerHTML;
// }

// function changeData(){
//     alert("change")
// }


//Delete data from table 
function deleteData(Button) {
    let row = Button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}


//clear data from input fields
function clearInput() {
    document.getElementById("nameInput").value = "";
    document.getElementById("emailInput").value = "";
    document.getElementById("numberInput").value = "";
    document.getElementById("addressInput").value = "";
}