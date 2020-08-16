import React,{useState} from 'react'

export default function CartItem(props) {
    const [itemCount, setitemCount] = useState(props.item.quantity);


    const handleRemove = () =>{
        props.removeItemFromCart(props.users[props.index].username, props.item.name )
        setitemCount(props.item.quantity);
        props.updatePrice();
    }
    const handleRemoveOne = () =>{
        props.removeOneFromCart(props.users[props.index].username, props.item.name )
        setitemCount(props.item.quantity);
        props.updatePrice();
   }
   const handleAdd = () =>{
        props.addItemToCart(props.users[props.index].username, props.item.name )
        setitemCount(props.item.quantity);
        props.updatePrice();
    }

    if(itemCount >0){
        return (
         
            <div className="row item-table-row ">
                <div className="col-3"> {props.item.name} </div>
                <div className="col-3"> {props.item.price}$ </div>
                <div className="col-3">   <span onClick={ handleRemoveOne } >-</span> {itemCount }  <span onClick={ handleAdd }>+</span>  </div>
                <div className="col-3"> <button onClick={ handleRemove } class="btn btn-dark "> Remove</button>  </div>

            </div> 
        
        
        )
    }else{
       return( <div>
            
        </div>)
    }
}
/// artItem item={item} addItemToCart={props.addItemToCart} removeItemFromCart={props.removeItemFromCart} removeOneFromCart={props.removeOneFromCart} />
