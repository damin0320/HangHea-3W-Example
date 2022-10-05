import React from 'react'

const TodoItem = ({todo, todoList, setTodoList}) => {
  const handleClickRemoveTodo = (id) => {
    setTodoList(todoList.filter((todo) => {
      return todo.id !== id
    }));
    // 삭제된 나머지 값, filter
  }
  
  const handleClickDoneTodo = (id) => {
    setTodoList(todoList.filter((todo) => {
      if(todo.id === id){
        todo.isDone = !todo.isDone
      }
      return todo
      // filter 사용한 todoDone check
    }))
  }


  return (
    <div>
      <li className="todo-item">
                <strong className="todo-title">
                  {todo.title}
                </strong>
                <p className="todo-content">
                  {todo.content}
                </p>
                <div className="btn-group">
                <button type="button" className="remove-btn" onClick={()=>handleClickRemoveTodo(todo.id)}>삭제</button>
                <button type="button" className={todo.isDone? "cancel-btn" :"done-btn"} onClick={()=>handleClickDoneTodo(todo.id)}>{todo.isDone? "취소" : "완료"}</button>
                {/* 바로 실행되지 않게 콜백함수 */}
                {/*삼항연산자 이용한 class, onclick 상태 변경*/}
                </div>
              </li>               
    </div>
  )
}

export default TodoItem