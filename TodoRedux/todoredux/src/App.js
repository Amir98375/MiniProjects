import './App.css'
import { TodoInput } from "./components/TodoInput";
import { ShowData } from './components/TodoShow';

function App() {
  return (
    <div className="App">
     <TodoInput/>
     <ShowData/>
    </div>
  );
}

export default App;
