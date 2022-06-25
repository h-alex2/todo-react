import React, { useState, useRef } from "react"
import styled from "styled-components"


const Todo = () => {
  const [text, setText] = useState("");
  const [todoList, setTodoList] = useState([]);
  const nextId = useRef(1);

  const handleAddTodo = () => {
    if (text === "") return;
    const newList = [...todoList, { id: nextId, text: text }];
    setTodoList(newList);
    setText("");
    nextId.current++;
  }

  const handleDelete = (id) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  }

  return (
    <Container>
      <Title>일정관리</Title>
      <InputWrapper>
        <InputText onChange={(e) => setText(e.target.value)} value={text} />
        <BtnSubmit onClick={handleAddTodo}>추가</BtnSubmit>
      </InputWrapper>
      <List>
        {todoList.map((todo) => (
          <Item key={todo.id} >
            <label>
              <Checkbox type="checkbox" />
              <Content>{todo.text}</Content>
            </label>
            <BtnDelete onClick={() => handleDelete(todo.id)}>삭제</BtnDelete>
          </Item>
        ))
        }
      </List>
    </Container>
  )
}

const Container = styled.div`
  width: 500px;
  margin: 10px auto;
  border: 1px solid black;
`;
const Title = styled.div`
  background: black;
  color: white;
  text-align: center;
  font-weight: bold;
  padding: 10px 0;
  border-bottom: 1px solid black;
`;
const InputWrapper = styled.div`
  display: flex;
  align-items:center;
  padding: 10px
`;
const InputText = styled.input`
  flex: 1;
  margin-right: 10px;
`;
const BtnSubmit = styled.button``;
const List = styled.ul``;
const Item = styled.li`
  display: flex;
  padding: 10px;
  label {
    flex: 1;
    display: flex;
    align-items: center;
  }
  & + & {
    border-top: 1px solid black;
  }
`;
const Checkbox = styled.input``;
const Content = styled.div``;
const BtnDelete = styled.button``;



export default Todo;