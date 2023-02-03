import { Link, useNavigate } from "react-router-dom";
import "./sidebar.css";
import { AiOutlineUsergroupDelete, AiOutlineOrderedList } from "react-icons/ai";
import { Button } from "@mui/material";
import { getAuth, signOut } from "firebase/auth";
import { auth } from "../../../Firebase/firebase-config";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="sidebar">
      <div>
        <Link to="/" style={{ textDecoration: "none" }}>
          <AiOutlineUsergroupDelete /> Add a Student
        </Link>
      </div>
      <div>
        <Link to="/manage" style={{ textDecoration: "none" }}>
          <AiOutlineOrderedList /> Manage Students
        </Link>
      </div>
      <div>
        <Button
          variant="outlined"
          color="error"
          onClick={() => {
            signOut(auth)
              .then(() => {
                console.log("Logged out");
                navigate("/");
              })
              .catch((error) => {
                console.log(error);
              });
          }}
        >
          Logout
        </Button>
      </div>
    </div>
  );
};

export { Sidebar };
