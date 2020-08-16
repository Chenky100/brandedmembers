import React,{useState} from 'react';
import {HashRouter as Router, Switch, Route,Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom';


export default function Login(props) {
    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();

    const history = useHistory();

    const enter = () =>{
        if(userName === "admin" && props.checkUser(userName,password)){
            history.push('/admin');
            return;
        }else
        if(props.checkUser(userName,password)){
            history.push('/'+userName);

        }else{
            alert("username or password you entered dont match");
        }
    }

    return (
        <div className="home-box">
             <h3>Sign In</h3>
            <br/>
            <br/>

            <form className="form-signin">
                <div class="form-group">
                    <label for="userName1">Username</label>
                    <input onChange={ (e) =>{setUserName(e.target.value)} } type="text" class="form-control" id="userName1"  aria-label="Username" aria-describedby="addon-wrapping"/>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input onChange={ (e) =>{setPassword(e.target.value)} } type="password" class="form-control" id="exampleInputPassword1"/>
                </div>
                <br/>

                <button type="submit" class="btn btn-primary" onClick={enter}>Submit</button> 
                
            </form>   
            <br/>
        
            <small id="emailHelp" class="form-text text-muted"> Dont have an account? <Link className="small-link" to="/register">Sign Up Now </Link></small>

            
        </div>
        
    )
}
