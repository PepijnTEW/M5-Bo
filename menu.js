const button = document.getElementById("button");
const menulist = document.getElementById("menu_list");
let isButtonPressed = false;

button.onclick = function () {
    console.log("Menu Clicked")
    if (isButtonPressed == false) {
        isButtonPressed = true;
        menulist.style.display = "block";
    }
    else if (isButtonPressed == true) {
        isButtonPressed = false;
        menulist.style.display = "none";
    }
}