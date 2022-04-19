import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import AboutUs from "./views/AboutUs";
import TaskDetail from "./views/TaskDetail";
import TaskListPage from "./views/TaskListPage";

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/"
            element={<TaskListPage/>}
          />
        </Routes>
        <Routes>
          <Route path="/detail"
            element={<TaskDetail/>}
          />
        </Routes>
        <Routes>
          <Route path="/about-us"
            element={<AboutUs/>}
          />
        </Routes>
    </BrowserRouter>
  );
}