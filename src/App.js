import "./App.css";
import Navbar from "./components/navbar";
import Todos from "./components/todos";
import Addtodo from "./components/addtodo";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import About from "./components/about";

function App() {
  const [todos, settodos] = useState([]);

  return (
    <>
      <Navbar title="To Dos" />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Addtodo todos={todos} settodos={settodos} />
              <Todos todos={todos} settodos={settodos} />
            </>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
