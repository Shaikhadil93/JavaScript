var selectedRow = null;

//Add data to table
function addData() {
    var formData = readFormData();
    if (selectedRow == null) {
        insertNewRecord(formData);
    } else {
        updateRecord(formData);
    }
    clearInput(formData);
};


//reading data from Form
function readFormData(){
   var formData = {};
   formData["nameInput"]=document.getElementById("nameInput").value; 
   formData["emailInput"]=document.getElementById("emailInput").value;
   formData["numberInput"]=document.getElementById("numberInput").value;
   formData["addressInput"]=document.getElementById("addressInput").value;
   
   console.log(formData["nameInput"]);
   console.log(formData["emailInput"]);
   console.log(formData["numberInput"]);
   console.log(formData["addressInput"]);
   
   return formData;
}

//insert new record to table
function insertNewRecord(data){
    var table = document.getElementById("tableShow").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);

    console.log(newRow);

    cell1=newRow.insertCell(0);
    // cell1.innerHTML=i;
    cell2=newRow.insertCell(1);
    cell2.innerHTML = data.nameInput;
    cell3=newRow.insertCell(2);
    cell3.innerHTML = data.emailInput;
    cell4=newRow.insertCell(3);
    cell4.innerHTML = data.numberInput;
    cell5=newRow.insertCell(4);
    cell5.innerHTML = data.addressInput;
    cell6=newRow.insertCell(5);
    cell6.innerHTML=`<button onclick= "editData(this)")"> Edit </button>` +
            `<button onclick= "deleteData(this)"> Delete </button>`
}


//Edit table data 
function editData(Button) {
    selectedRow = Button.parentNode.parentNode;
    document.getElementById("nameInput").value=selectedRow.cells[1].innerHTML;
    document.getElementById("emailInput").value=selectedRow.cells[2].innerHTML;
    document.getElementById("numberInput").value=selectedRow.cells[3].innerHTML;
    document.getElementById("addressInput").value=selectedRow.cells[4].innerHTML;
}

//Update table data
function updateRecord(formData){
    selectedRow.cells[1].innerHTML=formData.nameInput;
    selectedRow.cells[2].innerHTML=formData.emailInput;
    selectedRow.cells[3].innerHTML=formData.numberInput;
    selectedRow.cells[4].innerHTML=formData.addressInput;
}


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
    selectedRow=null;
}