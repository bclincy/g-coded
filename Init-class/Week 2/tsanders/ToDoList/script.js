var add = document.getElementById("addToDo");
var input = document.getElementById("inputField");
var toDoContainer = document.getElementById("toDoContainer");
add.addEventListener('click', addItem);
input.addEventListener('keypress', function (e) {
    if (e.key == "Enter") {
        addItem();
    }
})

function addItem(e) {
    debugger
    const item_value = input.value;
    console.log(item_value);
}