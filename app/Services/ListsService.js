import { ProxyState } from "../AppState.js"
import { List } from "../Models/List.js"

class ListsService {
    constructor() {
        console.log('service is here)')
    }
    createList(listData) {
        const list = new List(listData)
        ProxyState.lists = [list, ...ProxyState.lists]
    }

}

export const listsService = new ListsService()