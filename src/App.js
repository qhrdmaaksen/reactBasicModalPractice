import React, { useState } from "react";
import Todo from "../src/Todo";

function App(props) {


  return (
    <div>
      <h1>내 스케쥴</h1>
        <Todo text="2021년 할일" onRemoveClick={props.onRemoveClick} />
        <Todo text="2022년 할일" onRemoveClick={props.onRemoveClick} />
        <Todo text="2023년 할일" onRemoveClick={props.onRemoveClick} />
    </div>
  );
}

export default App;
