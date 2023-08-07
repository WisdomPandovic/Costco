import {Link} from 'react-router-dom';
import Logo2 from '../images/costcoLogoIdentityIntro@3x.png';
import { useState } from "react";
import {useNavigate} from 'react-router-dom';
import axios from "axios";

function Signup(){
    const navigate = useNavigate();
    const [err, setErr] = useState(false);
     const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
     });

     const submitForm = (e) => {
        e.preventDefault();
        const userData = {
            name: user.name,
            phone: user.phone,
            email: user.email,
            password: user.password,
        };
        console.log(userData)

        if ( user.name ==="" || user.email ==="" || user.password ==="" || user.phone ==="" ){
          setErr(true);
        }else {
            axios.post("http://159.65.21.42:9000/register", userData)
            .then((resp) => {
                console.log(resp.data)
                .catch((error) => {console.error(error);})
                let response = resp.data.error
                if (response){
                    alert("User exist")
                }else {
                   alert("Registered Succesfully")
                }
            })
            setUser({
                name: "",
                email: "",
                password: "",
                phone: "",
            });
            setErr(false);
            navigate("/signin");
        }
     };


    return(
        <div>
            <nav className="signup-nav-logo">
                <div className="signup-nav">
                    <div ><img className="logo2" src={Logo2} alt=""/></div>

                </div>
            </nav>
            <div className="create-acct"><p>Create Account</p></div>
            <form onSubmit={submitForm}>
        
            <div className="form-data">

            <div><input type="text" value={user.name} onChange={(e) => setUser({...user, name: e.target.value})} placeholder="Name"/></div>
            {err === true && user.name === "" ? <span>Name required</span> : null}
            
            <div><input type="text" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} placeholder="Email Address"/></div>
            {err === true && user.email === "" ? <span>Email required</span> : null}

            <div><input type="text" value={user.password} onChange={(e) => setUser({...user, password: e.target.value})} placeholder="Password"/></div>
            {err === true && user.password === "" ? <span>Password required</span> : null}

            {/* <div><input type="text" value={user.confirmpassword} onChange={(e) => setUser({...user, confirmpassword: e.target.value})} placeholder="Confirm Password"/></div>
            {err === true && user.confirmpassword === "" ? <span>Confirm Password required</span> : null} */}

            <div><input type="text" value={user.phone} onChange={(e) => setUser({...user, phone: e.target.value})} placeholder="Phone Number"/></div>
            {err === true && user.phone === "" ? <span>Phone Number required</span> : null}

            <div><input type="text" placeholder="Memebership Number (Optional)"/></div>
            <div><Link to=''><p>Where can i find my membership number?</p></Link></div>
            <div className="consent"> 
                <div></div><input type="checkbox" className="checked"/><div></div>
                <div><p >Yes, I would like to receive emails about special 
                    promotions and new product information from Costco. Costco will not rent
                     or sell your email address.
                </p></div>
            </div>

            <div>By creating an account you agree to Costco.com <Link to=''>terms and conditions </Link>
            of use</div>
        

            <div className="signup-btn"><button>Create Account</button></div>
        </div>
        </form>
        </div>
    )
}
export default Signup;