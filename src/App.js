import "./App.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import { AuthContext } from "./Context/UserContext";
import { useContext } from "react";
import AddStudent from "./Components/Home/Add-Student";
import Main from "./Layout/Layout";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import ManageStudents from "./Components/Home/Manage-Students/Manage-Students";

function App() {
  const { user } = useContext(AuthContext);
  let flag;
  if (user) {
    flag = <AddStudent />;
  } else {
    flag = <Login />;
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: flag,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/manage",
          element: <ManageStudents></ManageStudents>,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
