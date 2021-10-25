import { generateId } from "../Utils/generateId.js";
import { ProxyState } from "../AppState.js";
import { tasksService } from "../Services/TasksService.js";

export class List {
  constructor(data) {

    this.id = data.id || generateId()
    this.listName = data.listName
    this.color = data.color
  }
  get Template() {
    return `
    <div class="col-md-3 mt-3 p-3">
              <div class="row border shadow border-dark rounded ">
              <div class="col-12 text-center rounded"  style="background-color: ${this.color}"alt="lists">
                <div>${this.listName}
                  <div>you have this many tasks 1/4</div>
                </div>
              </div>
              <div class="col-12 bg-primary" >
              <ul>
               <div> hey${this.getTask()}</div>
                  
                  <li>list 2</li>

                </ul>

              </div>
              <form class="bg-warning" onsubmit="app.tasksController.createTask('${this.id}')">
                <div class="col-12 p-1">
                  <div class="form-group">
                    <label for="newTask">Create new task</label>
                    <input type="text" class="form-control" name="taskName" id="taskName" aria-describedby="createNewTask"
                      placeholder="New Task">
                  </div>

                  <button type="submit" class="btn btn-primary"> add task</button>
                </div>
              </form>
            </div>
          </div>
        `
  }

  getTask() {
    const tasks = ProxyState.tasks.filter(t => this.id == t.taskId)
    let template = ''
    // // this.totalTask = 0
    tasks.forEach(t => {
      template += t.Template
      // document.getElementById('tasks').innerHTML = template
    })
    //   //this.totalTask += t.totalTask
    // })
    return template
  }

}

