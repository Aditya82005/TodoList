
import './App.css';
import Navbar from './components/navbar';
import Todos from './components/todos';
import Addtodo from './components/addtodo';
import { useState } from 'react';




function App() {
   const [todos, settodos] = useState([]);

  return (
    <>
    <Navbar title="To Dos"/>
    <Addtodo todos={todos} settodos={settodos}/>
    <Todos todos={todos} settodos={settodos}/>
    </>
  );
}

export default App;
