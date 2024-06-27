const inputValue = document.getElementById("input");
const listArea = document.getElementById("list");
const clear = document.getElementById("clearList");
//let li = document.createElement("li");
// on the button click i want to add the value of the textbox to a 
function addToDo(){
    if (inputValue === '') {
        alert("You have to add a To Do");
      } 
      else {
          let li = document.createElement("li");
          li.innerHTML = inputValue.value;
          listArea.appendChild(li);
         
      };

};
function clearList(){
   listArea.innerHTML = "";

};
