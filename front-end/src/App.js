import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ExercisesList from "./components/ExercisesList";
import EditExercise from "./components/EditExercise";
import CreateExercise from "./components/CreateExercise";
import CreateUser from "./components/CreateUser";
import {useState} from "react";

function App() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <Router>
      <Navbar />
      <Route exact path="/" >
        <ExercisesList />
      </Route>
      <Route exact path="/edit/:id" >
        <EditExercise />
      </Route>
      <Route path="/create" >
        <CreateExercise 
        startDate={startDate}
        setStartDate={setStartDate}
        />
      </Route>
      <Route path="/user">
        <CreateUser />
      </Route>
    </Router>
  );
}

export default App;
