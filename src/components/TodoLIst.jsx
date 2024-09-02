import styled from "styled-components";

const Todos =  styled.ul`
    margin-top: 25px;
    display: flex;
    gap: 20px;
    &>li{
        border: 2px solid black;
        border-radius: 15px;
        padding: 10px;
        display: flex;
        gap: 10px;
        align-items: center;
        height: 50px;
    }
`;
const DoTask = styled.input`
    width: 15px;
    height: 15px;
`;
const TodoText = styled.p`
    font-size: 18px;
    font-weight: 500;
`;
const DeleteBut = styled.button`
    display: block;
    width: 100px;
    height: 30px;
    border-radius: 10px;
    background-color: #64d12a;
    transition: all .3s;
    &:hover {
        background-color: #4ebf11;
    }
    &:active{
        background-color: #3f9e0b;
        color: #fff;
    }
`;

export default ({ todoList, deleteTask, completeTask }) => <>
    <Todos>
        {todoList.map(todoItem => <li key={todoItem.id}>
            <DoTask type="checkbox" checked={todoItem.completed} onChange={(e) => completeTask(todoItem.id, !(todoItem.completed))} />
            <TodoText>{todoItem.text}</TodoText>
            <DeleteBut onClick={(e) => deleteTask(todoItem.id)}>Delete</DeleteBut>
        </li>)}
    </Todos>
</>