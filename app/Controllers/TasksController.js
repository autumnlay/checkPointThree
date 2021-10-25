import { ProxyState } from "../AppState.js";
import { tasksService } from "../Services/TasksService.js";

// function _drawTasks() {
//     const tasks = ProxyState.tasks
//     let template = ''
//     tasks.forEach(t => template += t.Template)
//     document.getElementById('tasks').innerHTML = template
// }

export class TasksController {
    constructor() {
        // ProxyState.on('tasks', _drawTasks)
        // _drawTasks()
        // console.log('task is here')
    }

    createTask(lId) {
        window.event.preventDefault()
        const form = window.event.target
        const taskData = {
            taskName: form.taskName.value,
            taskId: lId
        }
        tasksService.createTask(taskData)
        //form.reset()
    }

    removeTask(id) {
        tasksService.removeTask(id)
    }
}