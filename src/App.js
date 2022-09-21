import {useReducer} from "react"

function reducer(state,action){
  switch (action.type) {
    case "SET_TODO" :
      return {
        ...state,
        todo: action.value
      }
    case "ADD_TODO":
      return {
        ...state,
        todo:"",
        todos:[
          ...state.todos,
          action.todo

        ]
      }
      

      
  }

}




function App() {
  const [state,dispatch] = useReducer(reducer,{
    todos:[],
    todo: ""
  });

  const submitHandle = (e) => {
    e.preventDefault()
    dispatch({
      type:"ADD_TODO",
      todo:state.todo
    })
    //setTodos([...todos,todo])
    //setTodo("")
  }
  
  const onChange= (e)=>{
    dispatch({
      type : "SET_TODO",
      value:e.target.value
    })
  }


  return (
    <div>
      <h1>TODO APP</h1>
      <form onSubmit={submitHandle}>
        <input type="text" value={state.todo} onChange={onChange}></input>
        <button disabled={!state.todo} type="submit">Ekle</button>
      </form>
      {state.todos.map((todo,index)=>(
        <li key={index}>{todo}</li>
      ))}

      
    </div>
  );
}

export default App;
