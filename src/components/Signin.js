import Logo2 from '../images/costcoLogoIdentityIntro@3x.png';
import {Link} from 'react-router-dom';
import { useState } from "react";
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

function Signin(){
    const navigate = useNavigate()
    const [err, setErr] = useState(false);
    const [user, setUser] = useState({
       email: "",
       password: "",
    });
    let login = user;
    
    const submitForm =(e) => {
        e.preventDefault();
        if ( user.email ==="" || user.password ==="" ){
          setErr(true);
        }else {
            axios.post("http://159.65.21.42:9000/login", login)
                  .then((resp) => {
                       if(resp.data.error){
                        alert(resp.data.error)
                       }else {
                        alert ("Successful logged in")
                        navigate("/");
                    }
                  })

                  .catch((error) => console.log(error));
            
        }
     };

    return(
        <div>
            <nav className="signup-nav-logo">
                <div className="signup-nav">
                    <div ><img className="logo2" src={Logo2} alt=""/></div>

                </div>
            </nav>

            <div className="create-acct"><p>Sign In</p></div>
            <form onSubmit={submitForm}>
        
                <div className="form-data">
            
                    <div><input type="text" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} placeholder="Email Address"/></div>
                    {err === true && user.email === "" ? <span>Email required</span> : null}

                    <div><input type="text" value={user.password} onChange={(e) => setUser({...user, password: e.target.value})} placeholder="Password"/></div>
                    {err === true && user.password === "" ? <span>password required</span> : null}
            
                    <div><Link to=''><p>Forgot Password?</p></Link></div>
                    <div className="consent"> 
                        <div></div><input type="checkbox" className="checked"/><div>

                    </div>
                    <div><p className="signup-p3">Keep me signed in</p></div>
                
                </div>

                <div>Check this box only when on a private device.</div>
        

                <div className="signup-btn"><button>Sign In</button></div>
                <div><p>New to Costco?</p></div>
                <div className="signup-btn2"><button>Create Account</button></div>
                </div>
            </form>
        </div>

        
    )
}
export default Signin;