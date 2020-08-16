import React from 'react'
import {HashRouter as Router, Switch, Route,Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom';


export default function Home(props) {
    const history = useHistory();
    const join = () =>{
        if(props.loggedIn.bool){
            history.push("/"+props.loggedIn.userName)
        }else{
            history.push("/register")
        }
    }
    return (
        <div className="home-box">
            <div className="welcome-box">
                <h2>Welcome</h2>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean laoreet pharetra urna. Nunc ultrices elementum facilisis. Duis efficitur ullamcorper ligula, non sodales leo mollis non. Pellentesque luctus tellus quis volutpat tempus. Proin varius, neque quis bibendum cursus, dui massa vestibulum.</p>                
                
                <button onClick={join} className="join-button">Join</button> <br></br>
                
            </div>
         </div>
    )
}
