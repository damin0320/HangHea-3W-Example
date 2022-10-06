import React from 'react'
import {Link} from "react-router-dom"

const Home = () => {
  return (
    <div>
      <h1>Todo App에 오신 걸 환영합니다.</h1>
      <Link to="/todoList">링크로 이동하기</Link>

    </div>
  )
}

export default Home
