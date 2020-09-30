


function fetchTask(){
//create an get ajax req to /api/tasks
//console log the  response form the server
        $.ajax({
            type: 'GET',
            url:'/api/tasks',
            success: (res) =>
            {
                console.log(res);
                for(let i=0;i<res.length;i++)
                {
                    displayTask(res[i]);
                }
            },
            error:function(details)
            {
                console.log("Error: ", details);
            }
        });
}


function displayTask(task)
{
    var container = $("#tasks");
  //  var syntax = `<label> ${task.title}</label>`;
  /*var syntax = `
  
  <div class='task'>
            <div class = 'card'>
                <div>
                        <i class="far fa-circle ic-check"></i>
                </div>
                <div class='task-content'>
                        <h5 class='task-title'>${task.title}</h5>
                        <label class='task-notes'>${tasks.notes}</label>
                </div>

                <div>
                        <i class='fas fa-star ic-start important'></i>
                </div>
            </div>
  </div>
  `;
*/
var syntax = `
<div class="card task">
    <div class="item-body">
        <div>
            <i class="far fa-circle check ic-check"></i>
        </div>
        <div class="task-content">
            <h5 class="task-title">${task.title}</h5>
            <label class="task-notes">${task.notes}</label>
        </div>
        <div>
            <i class="fas fa-star ic-star"></i>
        </div>
    </div>
</div>
`;

  container.append(syntax);
}

function init(){
    console.log("MyCalendar page");
    fetchTask();
}

window.onload = init;