import { generateId } from "../Utils/generateId.js"

export class Task {
    constructor(data) {
        this.id = data.id || generateId()
        this.taskName = data.taskName
        this.total = 1
        this.taskId = data.taskId
    }
    get Template() {
        return `
        <div>
        <input type="checkbox" aria-label="Checkbox for following text input">
        ${this.taskName}
        <button class="btn btn-info" onclick="app.tasksController.removeTask('${this.id}')" data-toggle="modal" data-target="#exampleModal" >X</button></div>
        `
    }
}