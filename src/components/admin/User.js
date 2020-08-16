import React from 'react'

export default function User(props) {
    return(
        <div> 
            <div className="row item-table-row">
                <div className="col-3"> {props.user.username} </div>
                <div className="col-3"> {Math.floor(((Date.now() - props.user.birthday) /31536000000))}  </div>
                <div className="col-3"> {props.userItemCount(props.user.username)} items  </div>
                <div className="col-3"> <button onClick={ ()=>{props.deleteUser(props.user.username)} } className="btn btn-dark "> remove</button>  </div>
            </div>
        </div>
    )
}
