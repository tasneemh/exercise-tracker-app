import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ExercisesList from "./components/ExercisesList";
import CreateExercise from "./components/CreateExercise";
import CreateUser from "./components/CreateUser";
import {useState} from "react";

function App() {
  const [startDate, setStartDate] = useState(new Date());
  const [users, setUsers] = useState([]);
  const [exercises, setExercises] = useState([]);
  const [count, setCount] = useState(0);
  
  return (
    <Router>
      <Navbar />
      <Route exact path="/" >
        <ExercisesList 
        exercises={exercises}
        setExercises={setExercises} 
        count={count} 
        setCount={setCount}
        />
      </Route>
      <Route path="/create" >
        <CreateExercise 
        startDate={startDate}
        setStartDate={setStartDate}
        users={users}
        setUsers={setUsers}
        />
      </Route>
      <Route path="/user">
        <CreateUser />
      </Route>
    </Router>
  );
}

export default App;
