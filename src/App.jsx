import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import Todo from './components/Todo.jsx';
import Title from './components/Title.jsx';

function App() {
  return (
    <div>
      <Title />
      
      <Title />
      <Todo />
      <Todo />
      <Todo />
    </div>
  );
}

export default App;
