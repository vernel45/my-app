import './Todo.css'

function Todo({ title, onTodoDelete }) {
    

  return (
    <div className="todo">
      <p>{ title }</p>
      <button onClick={() => onTodoDelete(title)}>Delete</button>
    </div>
  );
}

export default Todo;