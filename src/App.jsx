import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Todo from './components/Todo.jsx'

function App() {
   return (
    <div>
   <h1>My Todo List</h1>
   <todo></todo>
   <div>
   <h2>Finish Frontend Simplified</h2>
   <span>Description</span>
   <button>Delete</button>
   </div>
   <div>
   <h2>Finish the interview section</h2>
   <button>Delete</button>
   </div>
   <div>
   <h2>Land $100k Job</h2>
   <button>Delete</button>
   </div>
      </div>
  );
}

export default App
