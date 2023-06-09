import {useDispatch} from "react-redux";
import {useState} from "react";
import {addItem} from "../../../store/action/creators/todoCreators";

const AddRow = () => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dateTime, setDateTime] = useState();

    const add = () => {
        dispatch(addItem({
            title,
            description,
            dateTime,
        }))
    };

    return (
        <div className={'add-row'}>
            <input
                type="text"
                value={title}
                placeholder={'title'}
                onChange={({target: {value}}) => setTitle(value)}
            />
            <input
                type="text"
                value={description}
                placeholder={'description'}
                onChange={({target: {value}}) => setDescription(value)}
            />
            <input
                type="datetime-local"
                value={dateTime}
                placeholder={'description'}
                onChange={({target: {value}}) => setDateTime(value)}
            />
            <button onClick={add}>
                Add
            </button>
        </div>
    );
};

export default AddRow;