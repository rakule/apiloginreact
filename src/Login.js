import axios from "axios";
import { useNavigate } from "react-router-dom";
import react, {useState} from "react";

const Login=()=>{
    let navigate = useNavigate();
    const[user, setUser]=useState({email:'',password:''})
const hadleChandge=(e)=>{
    setUser({...user, [e.target.name]: e.target.value});
}


const submitForm=(e)=>{
    e.preventDefault();
    const sendData = {
        
        email:user.email,
        password:user.password,
    }
    //console.log(sendData);

    axios.post('http://localhost/loginregister/back/login.php',sendData)
    .then((result)=>{
        if (result.data.Status === '200'){
            window.localStorage.setItem('email',result.data.Email);
            window.localStorage.setItem('useName',result.data.first_name+' '+result.data.first_name);
        }
        else {
            //props.history.push('Dasboard)
            //props.history.push('Dasboard) Redirect
            navigate(`/dasboard`);
            alert('Invalid user');
        }
    })
}


    return(
        <form onSubmit={submitForm}>
        <div className="main-box">
            <div className="row">
                <div className="col-md-12 text-center"> <h1>Login Page</h1></div>
            </div>
            <div className="row">
                <div className="col-md-6">Email:</div>
                <div className="col-md-6"><input typs="email" name="email" onChange={hadleChandge} value={user.email}/></div>
            </div>
            <div className="row">
                <div className="col-md-6">Password:</div>
                <div className="col-md-6"><input typs="password" name="password" onChange={hadleChandge} value={user.password}/></div>
            </div>

            <div className="row">
                <div className="col-md-12 text-center">
                <input type="submit" name="submit" className="btn btn-success" value="please log"/>
                </div>
                
            </div>
        </div>
        </form>
    )
}

export default Login;