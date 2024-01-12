function addData() {

    let name = document.getElementById("nameInput").value;
    let email = document.getElementById("emailInput").value;
    let number = document.getElementById("numberInput").value;
    let address = document.getElementById("addressInput").value;

    let table = document.getElementById("tableShow");
    let newRow = table.insertRow(table.rows.length);

    newRow.insertCell(0).innerHTML = "";
    newRow.insertCell(1).innerHTML = name;
    newRow.insertCell(2).innerHTML = email;
    newRow.insertCell(3).innerHTML = number;
    newRow.insertCell(4).innerHTML = address;
    newRow.insertCell(5).innerHTML = `<button onclick= "editData(this)")"> Edit </button>` +
        `<button onclick= "deleteData(this)"> Delete </button>`

    clearInput();
}

function editData(Button) {
    let row = Button.parentNode.parentNode;

    let nameCell = row.cells[1];
    let emailCell = row.cells[2];
    let numberCell = row.cells[3];
    let addressCell = row.cells[4];

    let nameInput = document.getElementById("nameInput");
    let emailInput = document.getElementById("emailInput");
    let numberInput = document.getElementById("numberInput");
    let addressInput = document.getElementById("addressInput");

    nameInput.value = nameCell.innerHTML;
    emailInput.value = emailCell.innerHTML;
    numberInput.value = numberCell.innerHTML;
    addressInput.value = addressCell.innerHTML; 


    // nameCell.value= nameInput1.innerHTML;
    // emailCell.value= emailInput1.innerHTML;
    // numberCell.value= numberInput1.innerHTML;
    // addressCell.value= addressInput1.innerHTML;
}

let button = document.getElementById("button");    
button.addEventListener("change", changeData);
function changeData(){
    alert("change")
}





function deleteData(Button) {
    let row = Button.parentNode.parentNode;

    row.parentNode.removeChild(row);
}

function clearInput() {
    document.getElementById("nameInput").value = "";
    document.getElementById("emailInput").value = "";
    document.getElementById("numberInput").value = "";
    document.getElementById("addressInput").value = "";
}