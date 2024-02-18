import { Route, Router, Routes } from "react-router";
import "./App.css";
import Task1 from "./routes/task1/Task1";
import Task2 from "./routes/task2/Task2";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Task1 />}></Route>
        <Route path="/task2" element={<Task2 />}></Route>
      </Routes>
    </>
  );
}

export default App;
