import React,{useState} from 'react'
import './Home.css'
import {Link,useNavigate} from 'react-router-dom';

const validateEmail = new RegExp('^[A-Za-z0-9_]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$');

const Home = () => {
    const [uname, setUser] = useState("");
    const [password,setPass] = useState("");
    const [emailerr,seterr] = useState(false);
    //testing Regexp
    const navigate = useNavigate(); // To navigate place the useNavigate inside React function
    //console.log('REGEX' + validateEmail.test(mail));


    const handleUname = (e) => {
        if(validateEmail.test(e.target.value) == true){
            ; 
            
        }
        else{
            setUser(e.target.value)
        }    
        


    }
    const handlePass = (e) => {
        setPass(e.target.value);
    }
    const handleSubmit = (e) => {
        navigate('\home');
        e.preventDefault();
    }
   
    const handleReset=()=>{
        alert("Reset");
        }
    return (
        <div className='login'>
            <h1>Login</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label className='label'>Email : </label> &nbsp;
                <input type="text" onChange={(e)=>handleUname(e)} value={uname} required /><br />
                <label className='label'>Password : </label> &nbsp;
                {emailerr}
                <input type="password" onChange={(e)=>handlePass(e)} required /><br /><br />
                
                <button type="submit">Login</button>
                
            </form>
            
        </div>
    )
}

export default Home
