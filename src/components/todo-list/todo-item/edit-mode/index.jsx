import {useState} from "react";

const EditMode = ({item, cancel, save}) => {
    const [localTitle, setLocalTitle] = useState(item.title);
    const [localDescription, setLocalDescription] = useState(item.description);
    const [localDate, setLocalDate] = useState(item.dateTime);

    return <div>
        <input
            type="text"
            value={localTitle}
            placeholder={'title'}
            onChange={({target: {value}}) => setLocalTitle(value)}
        />
        <input
            type="text"
            value={localDescription}
            placeholder={'description'}
            onChange={({target: {value}}) => setLocalDescription(value)}
        />
        <input
            type="datetime-local"
            value={localDate}
            placeholder={'description'}
            onChange={({target: {value}}) => setLocalDate(value)}
        />
        <button onClick={save}>Save</button>
        <button onClick={cancel}>Cancel</button>
    </div>
};

export default EditMode;