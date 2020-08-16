import React from 'react'

export default function Item(props) {
    return (
        <div>
            <div className="row item-table-row">
                <div className="col-4"> {props.item.name} </div>
                <div className="col-4"> {props.item.price}$ </div>
                <div className="col-4"> 
                    
                    <button onClick={()=>{ props.addToCart(props.item.name) }} class="btn btn-primary" >Add to cart</button>

                  
                </div>
            </div>
        </div>
    )
}
