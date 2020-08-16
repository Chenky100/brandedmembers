import React,{useState} from 'react'
import Item from './Item'
import ItemsList from './ItemsList'
import {HashRouter as Router, Switch, Route,Link} from 'react-router-dom';


export default function Shop(props) {
    const [selectOrder, setSelectOrder] = useState("name a-z");
    const [itemCount, setitemCount] = useState(props.userItemCount(props.users[props.index].username))
    const [search, setSearch] = useState("")
    

    const addToCart = (itemName) =>{
        props.addItemToCart(props.users[props.index].username, itemName)
        setitemCount(props.userItemCount(props.users[props.index].username));
    }

    return (
        <div className="home-box" >
            <h2 className="hello"> Hello {props.users[props.index].username}</h2> <br/>
            <p className="hello">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas faucibus nibh sed eros sodales tristique eget vitae mi. Aenean rhoncus nisi in turpis tincidunt, congue.</p>
            <br/>
            <div className="sort-box">
                <div className="link-to-cart">            
                    <Link to={'/' + props.users[props.index].username+"/cart"}><p>Items In Cart: {itemCount}</p></Link>
                </div>

                Sort by: 
                <select class="custom-select" onChange={ (e)=>{ setSelectOrder(e.target.value) }} >
                    <option>name a-z </option>
                    <option>name z-a </option>
                    <option>price ↑ </option>
                    <option >price ↓  </option>
                </select>
                <br/>
                <br/>
                Search:
                <input onChange={ (e) =>{setSearch(e.target.value); setSelectOrder("search")} }  type="text" class="form-control" id="search"  aria-label="Username" aria-describedby="addon-wrapping"/>
            </div>
            <div className="items-list-box">
            
            
                <div className="row item-table-head">
                    <div className="col-4">Name</div>
                    <div className="col-4">Price</div>
                    <div className="col-4"> Add to cart</div>
                </div>
                <ItemsList items={props.items} search={search} select={selectOrder} addToCart={addToCart}/>
                
                
            </div>
            
        </div>
    )
}
