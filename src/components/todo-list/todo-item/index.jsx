import {useDispatch} from "react-redux";
import {removeItem, toggleItemDone} from "../../../store/action/creators/todoCreators";
import moment from "moment";
import {useState} from "react";
import NormalMode from "./normal-mode";
import EditMode from "./edit-mode";

const TodoItem = ({item}) => {
    const dispatch = useDispatch();

    const [editMode, setEditMode] = useState(false);

    const cancel = () => {

    }

    const save = () => {

    }

    return <div className={'todo-item-container'}>
        <input type="checkbox" checked={item.done} onChange={() => dispatch(toggleItemDone(item.id))}/>
        {
            editMode
                ? <EditMode
                    item={item}
                    cancel={cancel}
                    save={save}
                />
                : <NormalMode item={item} setEditMode={setEditMode}/>
        }
    </div>;
};

export default TodoItem;