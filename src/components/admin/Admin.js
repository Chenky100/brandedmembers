import React from 'react'
import Users from './Users'

export default function Admin(props) {

    return (
        <div className="home-box">
            <h1>Administrator</h1>
            <br/><br/>            <br/><br/>

           
            <div className="dashboard">
                <div className="row dashboard-row">
                    <div className="col-4 db-col">Available products:</div>
                    <div className="col-4 db-col">Registered users:</div>
                    <div className="col-4 db-col">Products in carts:</div>
                </div>
                <div className="row dashboard-row">
                    <div className="col-4 db-col">{props.items.length}</div>
                    <div className="col-4 db-col">{props.users.length}</div>
                    <div className="col-4 db-col">{props.getNumOfProductsInCarts() }</div>
                </div>
            </div>
        </div>
           
    )
}
