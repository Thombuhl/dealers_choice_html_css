let opensesame = document.getElementById("handle");
let shut = document.getElementById("shutdoor");
let enterance = document.getElementById("enter");
let exit = document.getElementById("exit");
let heat = document.getElementById("fadein");

opensesame.addEventListener("click", openDoor);
shut.addEventListener("click", closeDoor);

// reset default property
exit.style.display = "none";

//Hide glass door and present option to close.
function openDoor() {
  enterance.style.display = "none";
  exit.style.display = "inline";

  return;
}
//revert back to original setting.
function closeDoor() {
  enterance.style.display = "inline";
  exit.style.display = "none";
  return;
}
