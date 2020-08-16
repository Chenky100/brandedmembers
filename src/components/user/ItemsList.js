import React from 'react'
import Item from './Item'

export default function ItemsList(props) {

    if(props.select === "search" && props.search !== ""){
        let lowerCased =props.search.toLowerCase();
        return(
            <div>
                {// sort by price low to high
                    props.items.filter(item => item.name.toLowerCase().includes(lowerCased)).map((item) =>{
                        return(
                            <Item key={item.name} item={item}  addToCart={props.addToCart} />
                            )})
                }
            </div>
        )
    }else
    if(props.select === "price ↑"){
        return(
            <div>
                {// sort by price low to high
                    props.items.sort((a, b) => a.price - b.price).map((item, index) =>{
                        return(
                            <Item key={props.items[index].name} item={props.items[index]} index={index} addToCart={props.addToCart} />
                            )})
                }
            </div>
        )
    }else
    if(props.select === "price ↓"){
        return(
            <div>
                {// sort by price high to low
                    props.items.sort((a, b) => b.price - a.price).map((item, index) =>{
                        return(
                            <Item key={props.items[index].name} item={props.items[index]} index={index} addToCart={props.addToCart} />
                            )})
                }
            </div>
        )
    }else
    if(props.select === "name a-z"){
        return(
            <div>
                {// sort by name a - z
                    props.items.sort((a, b) => a.name > b.name ? 1:-1).map((item, index) =>{
                        return(
                            <Item key={props.items[index].name} item={props.items[index]} index={index} addToCart={props.addToCart} />
                            )})
                }
            </div>
        )
    }else
    if(props.select === "name z-a"){
        return(
            <div>
                {// sort by price low to high
                    props.items.sort((a, b) => a.name < b.name ? 1:-1).map((item, index) =>{
                        return(
                            <Item key={props.items[index].name} item={props.items[index]} index={index} addToCart={props.addToCart} />
                            )})
                }
            </div>
        )
    }else{
        return(
            <div>
            {// sort by price low to high
                props.items.map((item, index) =>{
                    return(
                        <Item key={props.items[index].name} item={props.items[index]} index={index} addToCart={props.addToCart} />
                        )})
            }
        </div>
        )
    }
}
