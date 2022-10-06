# 항해 3주차 개인과제 1 : Todo List 만들기 멘토님 예제

목차

## 프로젝트 소개

<p align="justify">
리액트 기본기를 바탕으로 한 TodoList 만들기<br>
제한사항 : <br>
  <li> 예시로 준 동일한 폴더구조를 이용하여 컴포넌트를 나눌 것</li>
  <li> 오로지 useState 훅만을 이용하여 과제를 완성할 것</li>
</p>


## <a href="https://hang-hea-3-a1959f2t1-damin0320.vercel.app/">실제 배포한 TodoList<a>

<br>

## 기술 스택

HTML / CSS / JavaScript / React / git / gitHub
<br>

## 구현 기능

### 기능 1 : input와 button 이용한 TodoList 등록
- 두 개의 input을 한 번에 관리하여 값을 받음
- onChangeHandler 통한 입력값 포착 후 저장
- submit시 전개연산자 및 useState의 상태갑 변경 통한 값 등록

### 기능 2 : 만든 TodoList 삭제
- map과 filter 이용하여 매개변수로 들어온 id와 todoList id 비교하여 값 삭제
- setTodoList로 전개연산자로 된 배열 담기

### 기능 3 : TodoList 완료 및 취소
- map 메서드를 활용하여 item.id와 매개변수 id와 비교 후 삼항 연산자 이용한 등록 및 취소
- filter로 받은 데이터 map으로 다시 돌려서 값 추정

### 기능 4 : 라우터 이용한 home / todolist 페이지 쪼개기

### 빈 칸 입력시 입력 못하게 하기와 엔터키 눌렀을 때 바로 입력되는 기능 추가
<br>

## 배운 점 & 아쉬운 점


배운 점 <br>
- useState 활용법 익힘
- 리액트 기본기 및 자바스크립트 심화 문법(map, filter) 공부

아쉬운 점 <br>
- 컴포넌트 구성 시 값이 오가는 것 잘 이해 못해서 아쉬웠음. 계속 공부 예정.
- 생각보다 javascript 심화 문법이 부족하다는 것 꺠달음.

<p align="justify">

</p>

<br>

## 라이센스

Copyright 2022. hang-hae99 9th W1 team 1. all rights reserved.
