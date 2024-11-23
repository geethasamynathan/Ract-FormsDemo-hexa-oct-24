import logo from "./logo.svg";
import "./App.css";
import LoginForm from "./components/controlledform";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sample from "./components/sample";
import FormWithHook from "./components/formwithhook";
import RegistrationForm from "./components/UseFormWithDynamicFields";
import RegistrationFromWithDynamicFiedls from "./components/UseFormWithDynamicFields1";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<RegistrationFromWithDynamicFiedls />} />
          <Route path="/sample" element={<Sample />} />
        </Routes>
      </Router>
      <div className="App"></div>
    </>
  );
}

export default App;
