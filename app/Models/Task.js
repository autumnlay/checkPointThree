import { generateId } from "../Utils/generateId.js"

export class Task {
    constructor(data) {
        this.id = data.id || generateId()
        this.taskName = data.taskName
        this.total = 1
        this.taskId = data.taskId
        this.check = data.check || false
    }

    //onclick to render the action, then the ? to compare
    get Template() {
        return `
        <div>
        <input type="checkbox" onclick="app.tasksController.checkBox('${this.id}')" aria-label="Checkbox for following text input" ${this.check == true ? "checked" : ""}>
        ${this.taskName}
        <button class="btn btn-info" onclick="app.tasksController.removeTask('${this.id}')" data-toggle="modal" data-target="#exampleModal" >X</button></div>
        `
    }

}