var add=document.getElementById("add ToDo");
var input=document.getelementById("Inputfield");
var toDoContainer=document.getElementById("toDoContainer");
add.addEventListener('click',additem);
input.addEventListener('keypress', function(e){
    if(e.key="Enter"){
        additem();
    }
})

function additem(e){
    const item_value=input.value;
    //console.log(item_value);
    const item=document.createElement('div');
    item.classList.add('item');

    const item_content=document.createElement('div');
    item_content.classList.add('content');
    item.appendChild(item_content);

    const input_item=document.createElement('input');
    input_item.classList.add('text');
    input_item.type= 'text';
    input_item.value= item_value;
    input_item.setAttribute('readonly','readonly');
}

