import {ADD_ITEM, TOGGLE_ITEM_DONE, REMOVE_ITEM} from "../types/todoTypes";

export const addItem = (item) => ({
    type: ADD_ITEM,
    payload: item
});

export const removeItem = (id) => ({
    type: REMOVE_ITEM,
    payload: id
});

export const toggleItemDone = (id) => ({
    type: TOGGLE_ITEM_DONE,
    payload: id
});
