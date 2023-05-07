import { BrowserRouter as Router } from "react-router-dom";
import { useEffect , useState } from "react";
import { useDispatch } from "react-redux";
import { fetchAllQuestions } from "./actions/question";
import { fetchAllUsers } from "./actions/users";

import AllRoutes from "./AllRoutes";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";


function App() {
  // const [isOpen, setIsOpen] = useState(false)
  // const [isVerified, setIsVerified] = useState(false)
  const dispatch = useDispatch() 


  useEffect(() => {
    dispatch (fetchAllQuestions())
    dispatch(fetchAllUsers())
}, [dispatch])

  return (
    <div className="App">
      <Router>
        <Navbar />
        <AllRoutes /> 
      </Router>
    </div>
  );
}

export default App;
