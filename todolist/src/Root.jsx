import React, { useReducer, useRef, useState } from "react";
import Title from "./components/Title";
import Globalstyle, { Wrapper } from "./style/Globalstyle";
import { Info } from "./style/StyleContainer";
import TodoList from "./components/TodoList";
import TabsMenu from "./components/TabsMenu";
import CreateTodo from "./components/CreateTodo";

export const TodoContext = React.createContext();

const mockdata = [
  {
    id: 0,
    isDone: false,
    title: "리액트 공부하기",
    date: new Date().toLocaleDateString(),
  },
  {
    id: 1,
    isDone: false,
    title: "스크립트 공부하기",
    date: new Date().toLocaleDateString(),
  },
  {
    id: 2,
    isDone: false,
    title: "공부하기",
    date: new Date().toLocaleDateString(),
  },
  {
    id: 3,
    isDone: false,
    title: "집가서 공부하기",
    date: new Date().toLocaleDateString(),
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE": {
      return [action.newItem, ...state];
    }
    case "ISDONE": {
      return state.map((it) =>
        it.id === action.targetId ? { ...it, isDone: !it.isDone } : it
      );
    }
    case "EDIT": {
      return state.map((it) =>
        it.id === action.targetId ? { ...it, title: action.newTitle } : it
      );
    }
    case "DELETE": {
      return state.filter((it) => it.id !== action.targetId);
    }
    default:
      return state;
  }
};

const Root = () => {
  const [todo, dispatch] = useReducer(reducer, mockdata);
  const [selectedTab, setSelectedTab] = useState(0);
  const idRef = useRef(4);

  const handleAddTodo = (title) => {
    if (title.trim() === "") return alert("할 일을 입력해주세요");
    const newItem = {
      id: idRef.current,
      title,
      date: new Date().toLocaleDateString(),
    };
    idRef.current += 1;
    dispatch({ type: "CREATE", newItem });
  };

  const handleEditTodo = (targetId, newTitle) => {
    dispatch({ type: "EDIT", targetId, newTitle });
  };

  const handleToggleDone = (targetId) => {
    dispatch({ type: "ISDONE", targetId });
  };

  const handleDeleteTodo = (targetId) => {
    dispatch({ type: "DELETE", targetId });
  };

  return (
    <Wrapper>
      <Globalstyle />
      <Title />
      <TodoContext.Provider
        value={{
          todo,
          dispatch,
          handleAddTodo,
          handleEditTodo,
          handleDeleteTodo,
          handleToggleDone,
          selectedTab,
          setSelectedTab,
        }}
      >
        <TabsMenu />
        <CreateTodo />
        <Info>
          <p>*할 일을 더블클릭하면 수정할 수 있어요</p>
        </Info>
        <TodoList />
      </TodoContext.Provider>
    </Wrapper>
  );
};

export default Root;
