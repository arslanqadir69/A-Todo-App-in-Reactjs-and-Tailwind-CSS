
import React, {useState} from 'react'
import TodoList from './TodoList';

function TodoForm() {
    const [todo, setTodo]= useState('');
    const [todos, setTodos]=useState([]);
    const handlChange=(val)=>{
        setTodo(val.target.value);
    }
     
    const handlTodos=()=>{
        setTodos((oldTodos)=>{
            return [...oldTodos, todo];
        })
     setTodo('');
    }

    const deleteTodo=(id)=>{
        setTodos((oldTodos)=>{
            return oldTodos.filter((todoEle, index)=>{
                return index !== id;
            })
        })
    }
    return (
        <div className="w-60 h-80   bg-gray-600 justify-center items-center m-auto border-4   mt-10  ">
            <div className="   bg-red-600 "><h1 className="justify-center text-lg  font-bold items-center font-sans  pl-20  ">Todo App</h1></div>

            <input type="text" placeholder="Add Your Todo" value={todo} onChange={handlChange} className="mt-6 ml-3  bg-gray-600 border-b-2  
              placeholder-black-700  "/>
            <button onClick={handlTodos} className="bg-blend-saturation bg-blue-700 rounded-3xl  ml-2 mt-2   box-border text-white
              text-3xl hover:bg-red-700   ">+</button>
            <ol>
                {
                    todos.map((itemval, index)=>{
                      return   <TodoList key={index} id={index} text={itemval}
                      onSelect={deleteTodo}/>
                    })
                }
            </ol>
        </div>
    )
}

export default TodoForm;
