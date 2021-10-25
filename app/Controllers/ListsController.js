import { ProxyState } from "../AppState.js";
import { listsService } from "../Services/ListsService.js";
import { loadState, saveState } from "../Utils/LocalStorage.js"


function _drawLists() {
    const lists = ProxyState.lists
    let template = ''
    lists.forEach(l => template += l.Template)
    document.getElementById('lists').innerHTML = template
}

export class ListsController {
    constructor() {
        ProxyState.on('lists', _drawLists)
        ProxyState.on('lists', saveState)
        ProxyState.on('tasks', _drawLists)
        ProxyState.on('tasks', saveState)
        console.log('controller is working')
        loadState()
        _drawLists()
    }

    createList() {
        window.event.preventDefault()
        const form = window.event.target
        const ogList = {
            listName: form.listName.value,
            color: form.color.value
        }
        console.log(ogList)

        listsService.createList(ogList)
        form.reset()
    }

    removeList(id) {
        window.confirm(),
            listsService.removeList(id)

    }

}