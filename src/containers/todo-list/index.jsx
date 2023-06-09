import {useSelector} from "react-redux";
import {listSelector} from "../../store/selectors/todoSelectors";
import TodoItem from "../../components/todo-list/todo-item";
import AddRow from "../../components/todo-list/add-row";

const TodoList = () => {
    const list = useSelector(listSelector);

    return (
      <div className={'todo-container'}>
          <AddRow/>

          {list.map((item) => <TodoItem key={item.id} item={item}/>)}
      </div>
    );
};

export default TodoList;