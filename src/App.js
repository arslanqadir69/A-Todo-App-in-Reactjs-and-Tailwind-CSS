import logo from './logo.svg';
import './App.css';
import TodoNav from './components/TodoNav';
import TodoForm from './components/TodoForm';

function App() {
  return (
    <div className="backgroundColor='red'  ">
      <TodoNav/>
      <TodoForm/>
    </div>
  );
}

export default App;
