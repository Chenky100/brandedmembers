import React from 'react';
import {HashRouter as Router, Switch, Route,Link} from 'react-router-dom';


export default function Header(props) {
    if(props.loggedIn.bool){
        if(props.loggedIn.userName ==="admin"){
            return (
                <div className="header"> 
                      <Link className="logo" to='/admin'>  <span className="logo1"> Branded. </span>  <span className="logo2"> Members</span></Link>
                      <Link className="nav-button" to='/' onClick={()=>{props.signout()}}> Sign Out</Link>
                      <Link className="nav-button" to={'/admin/users'} > Users</Link>
                      <Link className="nav-button" to={'/admin/products'}  > Products  </Link>
    
    
        
                        <div></div>
                </div>
            )
        }else{
            return (
                <div className="header"> 
                      <Link className="logo" to='/'>  <span className="logo1"> Branded. </span>  <span className="logo2"> Members</span></Link>
                      <Link className="nav-button" to='/' onClick={()=>{props.signout()}}> Sign Out</Link>
                      <Link className="nav-button" to={'/' + props.loggedIn.userName} > Shop</Link>
                      <Link className="nav-button" to={'/' + props.loggedIn.userName+ '/cart'}  > Cart  </Link>
    
    
        
                        <div></div>
                </div>
            )
        }   
    }else{
        return (
            <div className="header"> 
                  <Link className="logo" to='/'>  <span className="logo1"> Branded. </span>  <span className="logo2"> Members</span></Link>
                  <Link className="nav-button" to='/login'> Log In</Link>
                  
    
                    <div></div>
            </div>
        )
    }

}
