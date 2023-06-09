import {Provider} from "react-redux";
import TodoList from "./containers/todo-list";
import {PersistGate} from "redux-persist/integration/react";
import useStore from "./store";

function App() {
    const {store, persistor} = useStore();

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <div className="App">
                    <TodoList/>
                </div>
            </PersistGate>
        </Provider>
    );
}

export default App;
