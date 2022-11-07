var entry= document.getElementById("entry");
entry.addEventListener("click", displayDetails);

var row= 1;

function displayDetails() {
    var name= document.getElementById("response").ariaValueText;
    var name= document.getElementById("age").ariaValueText;

    if(!response ||!age) {
        alert("Please fill all the boxes");
        return;
    }
    var display= document.getElementById("display");

var newRow= display.insertRow(row);

var cell1= newRow.insertCell(0);
var cell2= newRow.insertCell(1);

cell1.innerHTML=response;
cell2.innerHTML=age;

row++;

};
