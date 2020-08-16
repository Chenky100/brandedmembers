import React,{useState} from 'react'
import CartItem from './CartItem'


export default function Cart(props) {
    const [totalPrice, settotalPrice] = useState(props.totalCartPrice(props.users[props.index].username))
    const [itemCount, setitemCount] = useState(props.userItemCount(props.users[props.index].username))

    const updatePrice = () =>{
        updateCount();
        settotalPrice(props.totalCartPrice(props.users[props.index].username));

    }
    const updateCount = () =>{
        setitemCount(props.userItemCount(props.users[props.index].username));
    }
    
    return (
        <div className="home-box" >
           <h2>Cart</h2> 

           <div className="items-list-box">
            
            
                <div className="row item-table-head">
                    <div className="col-3">name</div>
                    <div className="col-3">price</div>
                    <div className="col-3"></div>
                    <div className="col-3"></div>

                </div>
            
                {
                    props.users[props.index].items.map((item)=>{
                        return(
                            <div> 
                            <CartItem updatePrice={updatePrice} users={props.users} index={props.index} item={item} addItemToCart={props.addItemToCart} removeItemFromCart={props.removeItemFromCart} removeOneFromCart={props.removeOneFromCart} />

                            </div>
                        )
                    })
                }

                   
                <div className="row item-table-head">
                    <div className="col-8"></div>
                    


                    <div className="col-4">{itemCount} items</div>

                </div>
                <div className="row item-table-head">
                    <div className="col-8"></div>
                

                    <div className="col-4">Total: {totalPrice}$</div>
                </div>
                <div className="row item-table-head button-box ">
                   


                   <button className="join-button checkout"> CheckOut</button>
                </div>
            </div>


        </div>
    )
}
