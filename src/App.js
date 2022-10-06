import logo from './logo.svg';
import './common.css';
import {Route, Routes} from "react-router-dom"
import TodoList from "./components/TodoList"
import Home from "./pages/Home"

// 1. react-router-dom 설치 확인
// 2. index.js 에서 browserRouter 세팅 되어 있는지 확인하기
// 3. 실제 라우팅될 경로와 컴포넌트 정해주기


function App() {
  

  return (
    <>
    <Routes>
    <Route path="/" element = {<Home />} />
    <Route path="/todoList" element = {<TodoList />} />
    </Routes>
    </>
  );
}

export default App;
            