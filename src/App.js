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
import ManageStudentsView from "./Components/Home/Manage-Students/Manage-Students-View";
import ManageStudentsEdit from "./Components/Home/Manage-Students/Manage-Student-Edit";
import { Sidebar } from "./Components/Home/Sidebar/Sidebar";

function App() {
  const { user } = useContext(AuthContext);
  let flag;
  if (user) {
    flag = (
      <div className="sidebar-place">
        <div className="bar1">
          <Sidebar></Sidebar>
        </div>
        <div className="bar2">
          <AddStudent />
        </div>
      </div>
    );
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
          element: (
            <div className="sidebar-place">
              <div className="bar1">
                <Sidebar></Sidebar>
              </div>
              <div className="bar2">
                {" "}
                <ManageStudents></ManageStudents>
              </div>
            </div>
          ),
        },
        {
          path: "/manage/view/:id",
          element: (
            <div className="sidebar-place">
              <div className="bar1">
                <Sidebar></Sidebar>
              </div>
              <div className="bar2">
                {" "}
                <ManageStudentsView></ManageStudentsView>
              </div>
            </div>
          ),
        },
        {
          path: "/manage/edit/:id",
          element: (
            <div className="sidebar-place">
              <div className="bar1">
                <Sidebar></Sidebar>
              </div>
              <div className="bar2">
                {" "}
                <ManageStudentsEdit></ManageStudentsEdit>
              </div>
            </div>
          ),
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
