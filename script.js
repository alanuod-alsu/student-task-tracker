function addTask() {
  let taskName = document.getElementById("taskName").value;
  let priority = document.getElementById("priority").value;
  let status = document.getElementById("status").value;

  if (taskName === "" || priority === "" || status === "") {
    alert("Please fill all fields");
    return;
  }

  let table = document.getElementById("taskTable");
  let row = table.insertRow();

  row.insertCell(0).innerText = taskName;
  row.insertCell(1).innerText = priority;
  row.insertCell(2).innerText = status;

  let actionCell = row.insertCell(3);
  let deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.className = "delete-btn";

  deleteButton.onclick = function() {
    table.deleteRow(row.rowIndex - 1);
  };

  actionCell.appendChild(deleteButton);

  document.getElementById("taskName").value = "";
  document.getElementById("priority").value = "";
  document.getElementById("status").value = "";
}