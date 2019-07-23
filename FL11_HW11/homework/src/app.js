let btn = document.getElementById('add_btn');
let inputTask = document.getElementById('new-task');
console.log(inputTask);
let tasks = document.getElementById('list-to-do');
document.getElementsByTagName
function createNewElement(task){
    let listItem = document.createElement('li');
    listItem.className = 'to-do-item';
    listItem.setAttribute('draggable','true');
    let container = document.createElement('div');
    container.className = 'wrap'; 
    let checkbox = document.createElement('button');
    checkbox.className ='checkbox'
    checkbox.innerHTML="<i class='material-icons'>check_box_outline_blank</i>";
    checkbox.type = 'button';
    let label = document.createElement('label');
    label.innerText=task;
    label.className = 'item-text'; 
    let editBtn = document.createElement('button');
    editBtn.className ='edit';
    editBtn.type = 'button';
    editBtn.innerHTML="<i class='material-icons'>edit</i>";
    let delBtn = document.createElement('button');
    delBtn.className ='delete'
    delBtn.innerHTML="<i class='material-icons'>delete</i>";
    delBtn.type = 'button'
    listItem.appendChild(container);
    container.appendChild(checkbox);
    container.appendChild(label);
    container.appendChild(editBtn);
    listItem.appendChild(delBtn);

    return listItem; 
}
function dtry(){
    console.log('dsad');
}
function addTask(){
    let magicNine = 9; 
    let ListItems = document.querySelectorAll('.to-do-item');
    if(inputTask.value && ListItems.length<=magicNine){

        let listItem =createNewElement(inputTask.value);
        tasks.appendChild(listItem);
        bindTaskIvent(listItem);
        inputTask.value = '';
    } else if(ListItems.length>magicNine){
        setSpecial('heading');
        inputTask.value = '';
    }
}
function setSpecial(id){
     document.getElementById(id).setAttribute('special', '1'); 
    }
btn.addEventListener('click',addTask);
function deleteItem(){
    let listItem =this.parentNode;
    let ul = listItem.parentNode;
    ul.removeChild(listItem);
}
function editItem(){

    let listItem = this.parentNode;
    let input = document.createElement('input');
    input.type = 'text';
    input.className = 'reright';
    let saveBtn = document.createElement('button');
    saveBtn.className ='save'
    saveBtn.innerHTML="<i class='material-icons'>save</i>";
    saveBtn.type = 'button';
    let ul = listItem.parentNode;
    console.log(ul);
    let container = ul.querySelector('.wrap');
    ul.removeChild(container);
    ul.appendChild(input);
    ul.removeChild(ul.querySelector('.delete'));
    ul.appendChild(saveBtn);
    saveBtn.addEventListener('click',save);
    
}
function save(){
    let listItem = this.parentNode;
    let li = listItem.parentNode;
    let inputRight = li.querySelector('input.reright');
    if(inputRight.value){
        let listItem =createNewElement(inputRight.value);
        tasks.appendChild(listItem);
        bindTaskIvent(listItem);
        inputTask.value = '';
    }
    li.removeChild(listItem);
}
function checkBoxEvent(){
    let listItem = this.parentNode;
    let checkbox = listItem.querySelector('button.checkbox');
    checkbox.innerHTML = "<i class='material-icons'>check_box</i>";

}

function bindTaskIvent(listItem){
let checkbox = listItem.querySelector('button.checkbox');
let editBtn = listItem.querySelector('button.edit');
let delBtn = listItem.querySelector('button.delete');

checkbox.onclick = checkBoxEvent;
editBtn.addEventListener('click',editItem);
delBtn.addEventListener('click',deleteItem);

}
