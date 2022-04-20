import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./views/AboutPage";
import TaskDetailPage from "./views/TaskDetailPage";
import TaskEditPage from "./views/TaskEditPage";
import TaskListPage from "./views/TaskListPage";


function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/detail" element={<TaskDetailPage />} />
        <Route path="/edit/:id" element={<TaskEditPage />} />
        <Route path="/" element={<TaskListPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
