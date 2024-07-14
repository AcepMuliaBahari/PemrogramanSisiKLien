import "./sidebar.scss";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import CategoryIcon from "@mui/icons-material/Category";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  
  const navigate = useNavigate();
  const { dispatch: authDispatch } = useContext(AuthContext);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        authDispatch({ type: "LOGOUT" });
        navigate("/login"); // Redirect to login page after logout
      })
      .catch((error) => {
        console.error("Logout error: ", error);
      });
  };

  
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/">
          <span className="logo">Store</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LIST</p>
          <Link  to="/users">
            <li data-testid="users">
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products">
            <li>
              <CreditCardIcon className="icon" />
              <span>Products</span>
            </li>
          </Link>
          <li>
            <StoreIcon className="icon" />
            <span>Orders</span>
          </li>
          <Link to="/categories">
            <li data-testid="categories">
              <CategoryIcon className="icon" />
              <span>Categories</span>
            </li>
          </Link>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li onClick={handleLogout}>
            <ExitToAppIcon className="icon" />
             <span>Logout</span>
            
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption" onClick = {() => dispatch ({ type : "LIGHT"})} ></div>
        <div className="colorOption" onClick = {() => dispatch ({ type : "DARK"})} ></div>
      </div>
    </div>
  );
};

export default Sidebar;
