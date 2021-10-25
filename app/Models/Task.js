import { generateId } from "../Utils/generateId.js"

export class Task {
    constructor(data) {
        this.id = data.id || generateId()
        this.taskName = data.taskName
        this.taskId = data.taskId
    }
    get Template() {
        return `
        <div>task tested ${this.taskName}</div>
        `
    }
}