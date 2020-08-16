import React,{useState} from 'react'
import UsersList from './UsersList'

export default function Users(props) {
  

    const [sortBy, setSortBy] = useState("age ↓")
    const [minAge, setMinAge] = useState(0)
    
    const handleMinAge = (e) =>{
        if(isNaN(e)){
            setMinAge(0)
            return ;
        }else if(e >0){
            setMinAge(e);
        }
        setMinAge(0)


        
    }


    return (
        <div className="home-box">
            <h1>Users</h1>
            <br/>

            <div className="sort-box">
                
                Sort by: 
                <select class="custom-select" onChange={ (e)=>{setSortBy(e.target.value) }} >
                    <option>age ↑</option>
                    <option >age ↓</option>
                </select>
                <br/>
                <br/>
                olderThan:
                <input onChange={ (e) =>{setMinAge(e.target.value)} }  type="text" class="form-control" id="search"  aria-label="Username" aria-describedby="addon-wrapping"/>
            
            </div>

            <div className="items-list-box">
            
            
            <div className="row item-table-head">
                <div className="col-3">Username</div>
                <div className="col-3">Age</div>
                <div className="col-3">Cart</div>
                <div className="col-3"></div>
            </div>
            <UsersList sortBy={sortBy} minAge={minAge} users={props.users} deleteUser={props.deleteUser} userItemCount={props.userItemCount} />
            

        </div>
        </div>
    )
}
