import { generateId } from "../Utils/generateId.js";
import { ProxyState } from "../AppState.js";
import { tasksService } from "../Services/TasksService.js";

export class List {
  constructor(data) {

    this.id = data.id || generateId()
    this.listName = data.listName
    this.color = data.color
    this.total = 0

  }
  get Template() {
    return `
    <div class="col-md-4 mt-3 p-3">
              <div class="row border shadow border-dark rounded ">
              <div class="col-12 text-center rounded"  style="background-color: ${this.color}"alt="lists">
              <button class="btn btn-info" onclick="app.listsController.removeList('${this.id}')">X</button>
                <div>${this.listName}
                  <div>${this.getCount()}</div>
                </div>
              </div>
              <div class="bg-primary" >
              <div>
              <ul>
              <div> Tasks:</div>
               <div class="col-12">${this.getTask()}</div>
              
               </div>
                  

                </ul>
              </div>
              </div>
              <form class="bg-warning" onsubmit="app.tasksController.createTask('${this.id}')">
                <div class="col-12 p-1">
                  <div class="form-group">
                    <label for="newTask">Create new task</label>
                    <input type="text" class="form-control" name="taskName" id="taskName" aria-describedby="createNewTask"
                      placeholder="New Task" required minlength="3" maxlength="50">
                  </div>

                  <button  class="btn btn-primary"> add task</button>
                </div>
              </form>
            </div>
          </div>
        `
  }

  getTask() {
    const tasks = ProxyState.tasks.filter(t => this.id == t.taskId)
    let template = ''
    this.total = 0
    tasks.forEach(t => {
      //Template = document.getElementById('tasks').innerHTML = `<div>${this.taskName}`
      template += t.Template
      // document.getElementById('tasks').innerHTML = template
      this.task += t.task
    })
    //   //this.total += t.total
    // })
    return template
  }

  getCount() {
    //we have this.id
    //look at jonesys vending machine example,?? 
    //this is for completed vs uncompleted
    //NOTE give us all the tasks that belong to this list
    const allChecks = ProxyState.tasks.filter(c => this.id == c.taskId)

    const completedTasks = allChecks.filter(c => c.check == true)

    return `${completedTasks.length} / ${allChecks.length}`
  }

}

