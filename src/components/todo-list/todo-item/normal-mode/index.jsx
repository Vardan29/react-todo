import moment from "moment/moment";
import {removeItem} from "../../../../store/action/creators/todoCreators";
import {useDispatch} from "react-redux";

const NormalMode = ({item, setEditMode}) => {
    const dispatch = useDispatch();

    return (
        <div>
            <p>{item.title}</p>
            <p>{item.description}</p>
            <p>{moment(item.dateTime).format('DD.MM.YYYY hh:mm a')}</p>
            <button onClick={() => dispatch(removeItem(item.id))}>Delete</button>
            <button onClick={() => setEditMode(true)}>Edit</button>
        </div>
    )
};

export default NormalMode;
