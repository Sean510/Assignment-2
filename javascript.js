//javascript file

document.addEventListener('DOMContentLoaded', function() {
document.querySelector("#new-task").onsubmit = function() {
    
    const li = document.createElement('li');
    let new_task_html = "";
    var itemArray = new Array();
    
    let task_text = document.querySelector('#task').value;
    let task_completed = document.querySelector('#task-completed');
    let task_pending = document.querySelector('#task-pending');
    let task_priority = document.querySelector('#task-priority').value;
    if(task_completed.checked == true) {
        task_completed.checked = false;
        itemArray.push(task_text);
        new_task_html = `
                            <span style="text-decoration:line-through"> ${task_text} </span>
                            <span style="text-decoration:line-through"> ${task_priority} </span>
                            <button class="remove"> Remove </button>
                      `;
    } else {
        task_pending.checked = false;
        itemArray.push(task_text);
        new_task_html = `
                            <span> ${task_text} </span>
                            <span> ${task_priority} </span>
                            <button class="mark"> Completed </button>
                            <button class="remove"> Remove </button>
                      `;
    }
    console.log(new_task_html);
    li.innerHTML = new_task_html
    
    document.querySelector("#task_list").appendChild(li);
    document.querySelector("#task").value = '';
    
    return false;
}
  
 
    
  document.addEventListener('click', function(event) {
    element = event.target;
    if(element.className === 'remove') {
      element.parentElement.remove();
    }
      
    if(element.className === 'mark') {
      element.parentElement.style.textDecoration = "line-through";
    }
 })
});
