import React, {useState} from "react"
import {v4 as uuidv4} from "uuid"
// 난수를 지정하는 id
import TodoItem from "./TodoItem"
import {Link} from "react-router-dom"
const TodoList = () => {
  const todoInitialState = {title: "", content:""}
  const [todo, setTodo] = useState(todoInitialState)
  const [todoList, setTodoList] = useState([{
    id: uuidv4(),
    title : '운동',
    content:'스쿼트 10회',
    isDone : false
  },
  {
    id: uuidv4(),
    title : '공부',
    content:'자바스크립트 공부',
    isDone : false
  },
  {
    id: uuidv4(),
    title : '면접',
    content:'카카오 원격면접',
    isDone : true
  }
])

  const handleClickAddTodo = () => {
    if(todo.title === "" || todo.content === "") {
      return alert("빈값을 등록 할 수 없습니다.")
    }
    setTodoList([...todoList, {...todo, id:uuidv4(), isDone : false}])
  setTodo(todoInitialState)
  }

  const handleChangeInput = (event) =>{
  setTodo( {
    ...todo,
    // 원래 있던 값 전개
   [event.target.name] : event.target.value,
   // 리스트로 들어오는 값 computed property로 값 매칭해주기
   // setTodo(...~, todo)와 비슷한데 두 개를 한 번에 넣어준다. => 객체로 맞춰서
  })
}

const handlePressEnter = (event) => {
  if(event.key !== "Enter") return;
  // 엔터키 누르면 바로 전송될 수 있게 하는 로직

  if(todo.title === "" || todo.content === "") {
    return alert("빈값을 등록 할 수 없습니다.")
  }
  setTodoList([...todoList, {...todo, id:uuidv4(), isDone : false}])
  setTodo(todoInitialState)
}
  return (
    <div>
      <section>
      <h1 className="app-title">Todo App</h1>
      <Link to="/">뒤로가기</Link>

      <hr />

      <div className="todo-container">

        <div className="box-area">
          <h2>ADD Todo</h2>

          <div className="input-controls">
            <label htmlFor="todo-title-input">
              제목
            </label>
            <input id="todo-title-input" type="text" value={todo.title} name="title" placeholder="제목을 입력하세요" onChange={handleChangeInput} onKeyUp={handlePressEnter}/>
          </div>

          <div className="input-controls">
            <label htmlFor="todo-content-input">
              내용
            </label>
            <input id="todo-content-input" type="text" value={todo.content} name="content" placeholder="내용을 입력하세요" onChange={handleChangeInput} onKeyUp={handlePressEnter}/>
          </div>

        <button type="button" className="add-btn" onClick={handleClickAddTodo}>등록</button>
        </div>

        <div className="box-area">
          <h2>Working</h2>
          <ul className="todo-list">

            {todoList.filter((todo) => !todo.isDone).map((todo) => {
              return (
                <TodoItem
                key = {todo.id} 
                todo = {todo}
                todoList = {todoList}
                setTodoList = {setTodoList}/>
                
              )
            })}

            
          </ul>
        </div>

        <div className="box-area">
          <h2>Done</h2>
          {todoList.filter((todo) => todo.isDone).map((todo) => {
            return (                
            <TodoItem
            key = {todo.id}  
              todo = {todo}
              todoList = {todoList}
              setTodoList = {setTodoList}/>)
          })}
          </div>  

      </div>
    </section>
    </div>
  )
}

export default TodoList
