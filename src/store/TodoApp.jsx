import { useState } from "react";
import { useGetTodoQuery, useGetTodosQuery } from "./apis";

export const TodoApp = () => {

  const [todoId, setTodoId] = useState(1);
  const { data: todo, isLoading } = useGetTodoQuery( todoId );

  const prevTodo = () => {
    if(todoId ===1 ) return;
    setTodoId( todoId - 1);
  }
  const nexTodo = () => {
    setTodoId( todoId + 1);
  }

  return (
    <>
        <h1> Todo - RTK Query</h1>
        <hr />
        <h4> IsLoading { isLoading ? 'True' : 'False' } </h4>

        <pre> { JSON.stringify( todo )} </pre>
        
                <button className="mx-2 btn btn-secondary" onClick={ prevTodo }>
                      Prev Todo
                </button>
        
                <button className="mx-2 btn btn-secondary" onClick={ nexTodo }>
                      Next Todo
                </button>

        {/* <ul>
            { todos.map( ({ completed, title,id }) => (
               <li key={ id }> <strong>{ completed ? 'DONE' : 'Pending' }</strong> {title} </li> 
            ))}
        </ul> */}
    </>
  )
}
