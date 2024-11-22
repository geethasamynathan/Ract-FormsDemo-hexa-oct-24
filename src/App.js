import logo from "./logo.svg";
import "./App.css";
import LoginForm from "./components/controlledform";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sample from "./components/sample";
import FormWithHook from "./components/formwithhook";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<FormWithHook />} />
          <Route path="/sample" element={<Sample />} />
        </Routes>
      </Router>
      <div className="App"></div>
    </>
  );
}

export default App;
