import React,{useState} from 'react'

export default function Products(props) {

    const [name, setName] = useState("")
    const [price, setPrice] = useState("")

    const handleRemove = (name) =>{
        props.removeProduct(name)
    }
    const handleAdd = () =>{
        if(name.length < 2){
            alert("name must be 4 or more characters")
            return;
        }
        if(isNaN(price) || price < 0){
            alert("price must be a positive number")
            return;
        }

        props.addProduct(name,price)

    }

    return (
        <div>
            <h1>Products</h1>
            <br/>
            <br/>

            <h3> Add Product</h3>
            <br/>

            <div className="form-add-product">
                <div class="form-row align-items-center">
                    <div class="col-sm-6 my-1">
                        <label class="sr-only" for="inlineFormInputName">Name</label>
                        <input onChange={(e)=>{setName(e.target.value)}} type="text" class="form-control" id="inlineFormInputName" placeholder="Product name"/>
                    </div>
                    <div class="col-sm-5 my-1">
                        <label class="sr-only" for="inlineFormInputGroupUsername">Username</label>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <div class="input-group-text">$</div>
                            </div>
                            <input onChange={(e)=>{setPrice(e.target.value)}}type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="Price"/>
                        </div>
                    </div>
                    <div class="col-sm-1 my-1">
                        <button type="submit" onClick={handleAdd} class="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
            <br/>
            <br/>

            <h3>Remove Product</h3>
            
            <div className="items-list-box">
            
            
            <div className="row item-table-head">
                <div className="col-4">Name</div>
                <div className="col-4">Price</div>
                <div className="col-4"></div>
            </div>
        
            {
               props.items.map((item)=>{
                    return(
                        <div> 
                            <div className="row item-table-row">
                                <div className="col-4"> {item.name} </div>
                                <div className="col-4"> {item.price}$ </div>
                                <div className="col-4"> <button onClick={ ()=>{handleRemove(item.name)} } className="btn btn-dark ">  remove</button>  </div>
                            </div>
                        </div>
                    )
                })
            }

        </div>
        <br/><br/>

        </div>
    )
}
