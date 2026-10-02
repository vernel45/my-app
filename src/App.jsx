import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import Todo from "./components/Todo.jsx";
import Title from "./components/Title.jsx";
import Modal from "./components/modal.jsx";
import Counter from "./components/Counter.jsx";

function App() {
  const [showModal, setShowModal] = useState(false);

  function onTodoDelete () {
    console.log('onTodoDelete()')
  } 

  return (
    <div>
      <h1>My Todo List</h1>
      <Title />
      <div>
        <input
          type="text"
          onChange={(event) => {
            console.log(event.target.value);
          }}
        />
        <button onClick={() => setShowModal(true)}>Add todo</button>
      </div>
      <div className="todo__wrapper">
        <Todo onTodoDelete={onTodoDelete}
          title="Finish Frontend Simplified"
          paragraph="Code along with Frontend Simplified step by step."
        />
        <Todo onTodoDelete={onTodoDelete}
          title="Finish Interview Section"
          paragraph="Finish every interview question in the next 6 weeks."
        />
        <Todo onTodoDelete={onTodoDelete} title="Land a $100k Job" paragraph="Apply to 100 jobs." />
      </div>
      {showModal && <Modal title="Confirm Delete?" />}
    </div>
  );
}

export default App;
