//javascript file

document.addEventListener('DOMContentLoaded', function() {
document.querySelector("#new-task").onsubmit = function() {
    
    const li = document.createElement('li');
    let new_task_html = "";
    
    let task_text = document.querySelector('#task').value;
    let task_status = document.querySelector('#task-status');
    let task_priority = document.querySelector('#task-priority').value;
    if(task_status.value == 'completed') {
        task_status.checked = false; 
        new_task_html = `
                            <span style="text-decoration:line-through"> ${task_text} </span>
                            <span style="text-decoration:line-through"> ${task_priority} </span>
                            <button class="remove"> Remove </button>
                      `;
    } else if( task_status.value == 'pending' {
              task_status.checked = false;
              new_task_html = `
                            <span> ${task_text} </span>
                            <span> ${task_priority} </span>
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
 })
});
