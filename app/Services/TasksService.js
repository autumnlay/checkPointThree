import { ProxyState } from "../AppState.js"
import { Task } from "../Models/Task.js"

class TasksService {
    // constructor() {
    //     console.log('Task service is here)')
    // }
    createTask(taskData) {
        console.log('task Data in service', taskData)
        const task = new Task(taskData)
        ProxyState.tasks = [...ProxyState.tasks, task]
    }

}

export const tasksService = new TasksService()