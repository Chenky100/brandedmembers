import React from 'react'
import User from './User'

export default function UsersList(props) {
    
    let age = props.minAge;
    if(isNaN(props.minAge)){
        age = 0
    }

    if(props.sortBy === "age ↑" ){
        console.log(age)
        return(
        
            <div>
                {// sort by age low to high
                    props.users.filter(user => Math.floor(((Date.now() - user.birthday) /31536000000)) > age ).sort((a, b) => a.birthday - b.birthday).map((user) =>{
                        return(
                            <User key={user.username} user={user}  deleteUser={props.deleteUser} userItemCount={props.userItemCount} />
                            )})
                }
            </div>
        )
    }else
    if(props.sortBy === "age ↓" ){
        return(
            <div>
                {// sort by age low to high
                    props.users.filter(user => Math.floor(((Date.now() - user.birthday) /31536000000)) > age ).sort((a, b) => b.birthday - a.birthday).map((user) =>{
                        return(
                            <User key={user.username} user={user}  deleteUser={props.deleteUser} userItemCount={props.userItemCount} />
                            )})
                }
            </div>
        )
    }else{
    
        return(
            <div>
                {// sort by age low to high
                    props.users.map((user) =>{
                        return(
                            <User key={user.username} user={user}  deleteUser={props.deleteUser} userItemCount={props.userItemCount} />
                            )})
                }
            </div>
        )
    }
      
}
