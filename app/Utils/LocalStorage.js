import { ProxyState } from "../AppState.js"
import { List } from "../Models/List.js"
import { Task } from "../Models/Task.js"


export function saveState() {
    // Save the current proxy state into local storage
    // JSON.Stringiy turns the data into a special version of a string
    localStorage.setItem('ListApp', JSON.stringify({
        lists: ProxyState.lists,
        tasks: ProxyState.tasks
    }))
}

export function loadState() {
    let data = JSON.parse(localStorage.getItem('ListApp'))
    console.log('loaded data', data)
    //will error otherwise
    // if (data != null) {
    //     // the data gets saved as POJOs so has to be turned back into pizza classes
    //     ProxyState.lists = data.lists.map(p => new List(l))
    //     ProxyState.tasks = data.tasks.map(t => new Task(t))
    // }
}