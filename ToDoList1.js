function addRow() {

    var table = document.getElementById("myTable");
	var row= document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var td5 = document.createElement("td");
	var checkbox = document.createElement("INPUT");
    checkbox.type = "checkbox";


	td1.innerHTML = document.createElement("date").innerHTML = Date();
    td2.innerHTML  = document.getElementById("description").value;
    td3.innerHTML  = document.getElementById("category").value;
	td5.innerHTML  = document.getElementById("due").value;

    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
	row.appendChild(td4);
	td4.appendChild(checkbox);
	row.appendChild(td5);

    table.children[0].appendChild(row);
	
}

/*Template used from W3 Schools: https://www.w3schools.com/howto/howto_js_sort_table.asp*/
function sortTable(n) 
{
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("myTable");
  switching = true;
  dir = "asc"; 
  while (switching) 
  {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) 
	{
    shouldSwitch = false;
    x = rows[i].getElementsByTagName("TD")[n];
    y = rows[i + 1].getElementsByTagName("TD")[n];

    if (dir == "asc") 
	{
        if(x.querySelector("input[type=checkbox]") !== null) 
		{
            shouldSwitch = (x.querySelector("input[type=checkbox]").checked > y.querySelector("input[type=checkbox]").checked);
        } else 
		{
            shouldSwitch= x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase();
        }

    } else if (dir == "desc") 
	{
        if(x.querySelector("input[type=checkbox]") !== null) 
		{
            shouldSwitch = (x.querySelector("input[type=checkbox]").checked < y.querySelector("input[type=checkbox]").checked);
        } else 
		{
            shouldSwitch= x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase();
        }

    }
    if (shouldSwitch) 
	{
        break;
    }
}
    if (shouldSwitch) 
	{
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount ++; 
    } else 
	{
      if (switchcount == 0 && dir == "asc") 
	  {
        dir = "desc";
        switching = true;
      }
    }
  }
}