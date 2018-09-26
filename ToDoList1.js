/*function myFunction()
{
	var x = document.getElementById('myTable');
	var row = x.insertRow(1);
	var m=row.insertCell(0);
	var n=row.insertCell(1);
	var p=row.insertCell(2);
	var s=row.insertCell(3);
	var t=row.insertCell(4);
	m.innerHTML="";
	n.innerHTML="";
	p.innerHTML="";
	s.innerHTML="";
	t.innerHTML="";

function checkInputText(value, msg) { 
   if (value == null || value == "") { 
       alert(msg); 
     return true; 
   } 
      return false; 
 } */
 
 function addRow() {
   "use strict";

    var table = document.getElementById("myTable");
	var row= document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var td5 = document.createElement("td");
	var checkbox = document.createElement("INPUT");
    checkbox.type = "checkbox";


    /*td1.innerHTML = document.getElementById("date").value;*/
	td1.innerHTML = document.createElement("date").innerHTML = Date();
    td2.innerHTML  = document.getElementById("description").value;
    td3.innerHTML  = document.getElementById("category").value;
	/*td4.innerHTML  = document.getElementById("check").value;*/
	td5.innerHTML  = document.getElementById("due").value;

    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
	row.appendChild(td4);
	td4.appendChild(checkbox);
	row.appendChild(td5);

    table.children[0].appendChild(row);
	
}

function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("myTable");
  switching = true;
  // Set the sorting direction to ascending:
  dir = "asc"; 
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /* Loop through all table rows (except the
    first, which contains table headers): */
    for (i = 1; i < (rows.length - 1); i++) {
    shouldSwitch = false;
    x = rows[i].getElementsByTagName("TD")[n];
    y = rows[i + 1].getElementsByTagName("TD")[n];

    if (dir == "asc") {
        if(x.querySelector("input[type=checkbox]") !== null) { // checkbox case
            shouldSwitch = (x.querySelector("input[type=checkbox]").checked > y.querySelector("input[type=checkbox]").checked);
        } else {
            shouldSwitch= x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase();
        }

    } else if (dir == "desc") {
        if(x.querySelector("input[type=checkbox]") !== null) {
            shouldSwitch = (x.querySelector("input[type=checkbox]").checked < y.querySelector("input[type=checkbox]").checked);
        } else {
            shouldSwitch= x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase();
        }

    }
    if (shouldSwitch) {
        break;
    }
}
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      // Each time a switch is done, increase this count by 1:
      switchcount ++; 
    } else {
      /* If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again. */
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}