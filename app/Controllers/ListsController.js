import { ProxyState } from "../AppState.js"
import { listsService } from "../Services/ListsService.js"

function _drawLists() {
    const lists = ProxyState.lists
    let template = ''
    lists.forEach(l => template += l.Template)
    document.getElementById('lists').innerHTML = template
}

export class ListsController {
    constructor() {
        ProxyState.on('lists', _drawLists)
        ProxyState.on('tasks', _drawLists)
        console.log('controller is working')
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
        this.removeList(id)
    }
    // showList() {
    //     _drawLists()
    //     document.getElementById('list').innerHTML = listData()
    // }
}