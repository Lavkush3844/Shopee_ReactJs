import { ADDITEM, DELITEM } from "../const"

export const addItem = (data) => {
    return {
        type: ADDITEM,
        payload: data
    }
}

export const delItem = (data) => {
    return {
        type: DELITEM,
        payload: data
    }
}
