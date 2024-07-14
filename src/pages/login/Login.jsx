import "./login.scss"; 
import { useContext,useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { DarkModeContext } from "../../context/darkModeContext";

const Login = () => { 
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate= useNavigate();
  const { dispatch: authDispatch } = useContext(AuthContext); 
  const { dispatch: darkModeDispatch } = useContext(DarkModeContext); 

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        authDispatch({type:"LOGIN" , payload:user});
        
        navigate("/");
        
        
      })
      .catch((error) => {
        setError(true);
      });
  };

  return (
    
    <div className="login">
   
    <form data-testid="form" onSubmit={handleLogin}>
      <input
        id="email"
        type="email"
        placeholder="Masukan Email" 
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        id="password"
        type="password"
        placeholder="Password" 
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" data-testid="submit">Login</button>
      {error && <span>Wrong email or password!</span>}
      <div className="item">
            <DarkModeOutlinedIcon className="icon" 
            onClick = {() => darkModeDispatch ({ type : "TOGGLE"})} />
          </div>
    </form>
    
  </div>
   
    
         
   

 
            
            
        
       
      

 
    
  );
};

export default Login;