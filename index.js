function addData() {
    let name = document.getElementById("nameInput").value;
    let email = document.getElementById("emailInput").value;
    let number = document.getElementById("numberInput").value;
    let address = document.getElementById("addressInput").value;

    let table = document.getElementById("tableShow");
    let newRow = table.insertRow(table.rows.length);

    newRow.insertCell(0).innerHTML = name;
    newRow.insertCell(1).innerHTML = email;
    newRow.insertCell(2).innerHTML = number;
    newRow.insertCell(3).innerHTML = address;
    newRow.insertCell(4).innerHTML = `<button onclick= "editData(this)"> Edit </button>` +
        `<button onclick= "deleteData(this)"> Delete </button>`

    clearInput();
}



function editData(Button) {
    let row = Button.parentNode.parentNode;

    let nameCell = row.cells[0];
    let emailCell = row.cells[1];
    let numberCell = row.cells[2];
    let addressCell = row.cells[3];

    let nameInput =
        prompt("Enter the updated name:",
            nameCell.innerHTML);
    let emailInput =
        prompt("Enter the updated email:",
            emailCell.innerHTML);
    let numberInput =
        prompt("Enter the updated mobile details:",
            numberCell.innerHTML
        );
    let addressInput =
        prompt("Enter the updated address:",
            addressCell.innerHTML
        );

    nameCell.innerHTML = nameInput;
    emailCell.innerHTML = emailInput;
    numberCell.innerHTML = numberInput;
    addressCell.innerHTML = addressInput;
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