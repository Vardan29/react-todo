import {ADD_ITEM, TOGGLE_ITEM_DONE, REMOVE_ITEM} from "../action/types/todoTypes";

const initialState = {
    list: [],
};

const reducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case ADD_ITEM: {
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        ...payload,
                        done: false,
                        id: state.length ? state.list.at(-1).id + 1 : 0
                    }
                ]
            };
        }

        case REMOVE_ITEM: {
            return {
                ...state,
                list: state.list.filter((el) => el.id !== payload)
            };
        }

        case TOGGLE_ITEM_DONE: {
            return {
                ...state,
                list: state.list.map((el) => {
                    if (el.id !== payload) return el;
                    el.done = !el.done;
                    return el;
                })
            }
        }

        default:
            return state;
    }
}

export default reducer;