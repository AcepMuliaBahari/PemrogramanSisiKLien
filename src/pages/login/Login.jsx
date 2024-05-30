import "./login.scss"; 
import { useContext,useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";


const Login = () => { 
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navitage= useNavigate();
  const {dispatch} = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch({type:"LOGIN" , payload:user});
        // console.log(user);
        navitage("/");
      })
      .catch((error) => {
        setError(true);
      });
  };

  return (
    <div className="container">    
            <input type="checkbox" id="chk" aria-hidden="true" />


            <div className="login">
                <form onSubmit={handleLogin}>
                    <label htmlFor="chk" aria-hidden="true">Login</label>
                    <input 
                        type="email" 
                        placeholder="Email" 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                    <input 
                        type="password" 
                        name="pswd" 
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                    <button type="submit">Login</button>
                    {error && <span>Wrong email or password!</span>}
                </form>
            </div>

            <div className="signup">
                <form>
                    <label htmlFor="chk" aria-hidden="true">Sign up</label>
                    <input type="text" name="txt" placeholder="User name" required />
                    <input type="email" name="email" placeholder="Email" required />
                    <input type="password" name="pswd" placeholder="Password" required />
                    <button type="submit">Sign up</button>
                </form>
            </div>

            
        </div>
    


 
    
  );
};

export default Login;