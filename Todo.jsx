import React, { useState, useRef } from "react"
import styled, { css } from "styled-components";

const Todo = () => {
  const [text, setText] = useState("");
  const [todoList, setTodoList] = useState([]);
  const nextId = useRef(0);

  const handleAddTodo = () => {
    setTodoList((prevTodo) => [
      ...prevTodo,
      {id : nextId.current, text: text, isDone: false, isEdit: false}
    ]);
    setText("");
    nextId.current += 1;
  };

  const toggleEdit = (id) => {
    const newTodoList = todoList.map((todo) =>
      todo.id === id ? {...todo, isEdit: !todo.isEdit} : todo
    );

    setTodoList(newTodoList);
  };

  const handleEdit = (e, id) => {
    const newTodoList = todoList.map((todo) =>
      todo.id === id ? {...todo, text: [e.target.value]} : todo
    );

    setTodoList(newTodoList);
  };

  const handleDelete = (id) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddTodo();
  };

  const handleIsDone = (e, id) => {
    const isDone = e.target.checked;
    const newTodoList = todoList.map((todo) =>
      todo.id === id ? { ...todo, isDone } : todo
    );

    setTodoList(newTodoList);
  };

  return (
    <Container>
      <Title>일정관리</Title>
      <form onSubmit={handleSubmit}>
        <InputWrapper>
          <InputText
            required
            onChange={(e) => setText(e.target.value)}
            value={text} />
          <BtnSubmit>추가</BtnSubmit>
        </InputWrapper>
      </form>
      <List>
        {todoList.map(({ id, text, isDone, isEdit }) => (
          <Item key={id} >
            <label>
              <Checkbox
                type="checkbox"
                checked={isDone}
                onChange={(e) => handleIsDone(e, id)}
              />
              {isEdit
              ?
                <InputText
                  onChange={(e) => handleEdit(e, id)}
                  value={text}
                />
              :
                <Content isDone={isDone}>{text}</Content>
              }
            </label>
            <button onClick={() => toggleEdit(id)}>{isEdit ? "수정완료" : "수정"}</button>
            <button onClick={() => handleDelete(id)}>삭제</button>
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

const Content = styled.div`
  /* color: ${({ isDone }) => isDone && "#ddd"};
  text-decoration: ${({ isDone }) => isDone && "line-through"}; */

  ${({ isDone }) =>
    isDone &&
    css`
      color: #ddd;
      text-decoration: line-through;
    `
  }

`;
const button = styled.button``;



export default Todo;