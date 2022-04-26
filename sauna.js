//Grab door handle

// document.addEventListener("click", openDoor);

let door = document.getElementById("door");
let opendoor = document.getElementById("handle");
let greeting = document.getElementById("greeting");
let closedoor = document.getElementById("shutdoor");

opendoor.addEventListener("click", openDoor);
closedoor.addEventListener("click", closeDoor);

function openDoor() {
  door.style.visibility = "hidden";
  opendoor.style.visibility = "hidden";
  greeting.style.visibility = "visible";
  closedoor.style.visibility = "visible";
  return;
}
function closeDoor() {
  door.style.visibility = "visible";
  opendoor.style.visibility = "visible";
  greeting.style.visibility = "hidden";
  closedoor.style.visibility = "hidden";
  return;
}
