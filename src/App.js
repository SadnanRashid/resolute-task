import "./App.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import { AuthContext } from "./Context/UserContext";
import { useContext } from "react";
import AddStudent from "./Components/Home/Add-Student";

function App() {
  const { user } = useContext(AuthContext);
  if (user) {
    return <AddStudent />;
  }
  return (
    <div>
      <Navbar></Navbar>
      <Login></Login>
    </div>
  );
}

export default App;
