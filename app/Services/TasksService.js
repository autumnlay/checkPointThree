import { ProxyState } from "../AppState.js"
import { Task } from "../Models/Task.js"

class TasksService {
    constructor() {
        //     console.log('Task service is here')
    }
    createTask(taskData) {
        console.log('task Data in service', taskData)
        const task = new Task(taskData)
        ProxyState.tasks = [...ProxyState.tasks, task]
    }
    removeTask(id) {
        console.log('we tried')
        //ProxyState.lists = ProxyState.lists.filter(l => l.id != id)

        ProxyState.tasks = ProxyState.tasks.filter(t => t.id != id)
        //ProxyState.tasks = ProxyState.tasks.remove(id)
        return ProxyState.tasks
    }
    checkBox(id) {
        const found = ProxyState.tasks.find(c => c.id == id)
        //= ! sets it equal to what it is not. "reverses" the true/false statements
        found.check = !found.check
        //have to make it equal itselft
        ProxyState.tasks = ProxyState.tasks

    }

}

export const tasksService = new TasksService()