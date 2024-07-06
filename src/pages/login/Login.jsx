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
        
        navigate("/");
        
        
      })
      .catch((error) => {
        setError(true);
      });
  };

  return (
    <>
    <p>Login: Email = admin@store.com  || Password= 123456</p>
    <div className="coba">    
            <input type="checkbox" id="chk" aria-hidden="true" />


            <div className="login">
                <form data-testid="form" onSubmit={handleLogin}>
                    <label className="lbl" htmlFor="chk" aria-hidden="true">Login</label>
                    <input className="inpt" 
                        id="email"
                        type="email" 
                        placeholder="Masukan Email" 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                    <input className="inpt" 
                        id="password"
                        type="password" 
                        name="pswd" 
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                    <button className="btn" type="submit" data-testid="submit">Login</button>
                    {error && <span>Wrong email or password!</span>}
                    
                </form>
            </div>

            <div className="signup">
                <form>
                    <label className="lbl" htmlFor="chk" aria-hidden="true">Sign up</label>
                    <input className="inpt" type="text" name="txt" placeholder="User name" required />
                    <input className="inpt" type="email" name="email" placeholder="Email" required />
                    <input className="inpt" type="password" name="pswd" placeholder="Password" required />
                    <button className="btn" type="submit">Sign up</button>
                </form>
            </div>

            
        </div>
        
        </>

 
    
  );
};

export default Login;