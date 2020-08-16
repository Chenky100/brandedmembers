import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {HashRouter as Router, Switch, Route,Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Shop from './components/user/Shop';
import Register from './components/Register';
import Cart from './components/user/Cart';
import Admin from './components/admin/Admin';
import Products from './components/admin/Products';
import Users from './components/admin/Users';
import Footer from './components/Footer';

function App() {
  const history = useHistory();

  const [loggedIn, setloggedIn] = useState({bool:false, userName: ""})
  
  const [items, setItems] = useState(
    
      [
        {
          name:"Phone",
          price: 500
         },
         {
          name:"TV",
          price: 800
         },
         {
          name:"Bluetooth Speaker",
          price: 15
         },
         {
          name:"laptop",
          price: 30
         },
         {
          name:"xbox",
          price: 300
         },
    ]
  )

  const [users, setUsers] = useState(
    [
      {
       username:"user",
       password:"12345",
       birthday: new Date(2000,0,1),
       items:[
        {
          name:"Phone",
          quantity: 1,
          price: 500
         },
         {
          name:"TV",
          quantity: 2,
          price: 800
         },
         {
          name:"Bluetooth Speaker",
          quantity: 3,
          price: 15
         },
         {
          name:"laptop",
          quantity: 4,
          price: 30
         },
         {
          name:"xbox",
          quantity: 0,
          price: 300
         },
        
       ]
     },
     {
       username:"bob",
       password:"12345",
       birthday: new Date(1980,11,1),
       items:[
        {
          name:"Phone",
          quantity: 1,
          price: 500
         },
         {
          name:"TV",
          quantity: 2,
          price: 800
         },
         {
          name:"Bluetooth Speaker",
          quantity: 3,
          price: 15
         },
         {
          name:"laptop",
          quantity: 4,
          price: 30
         },
         {
          name:"xbox",
          quantity: 0,
          price: 300
         },
        
       ]
     },
     ]
  );

  const addItemToCart = (userName, itemName) =>{
    let userIndex = -1;
    let itemIndex = -1;
    for (let i = 0; i < users.length; i++) {
      if(userName == users[i].username){
        userIndex = i;
        break;
      }
    }
    for (let j = 0; j < users[userIndex].items.length; j++) {
      if(users[userIndex].items[j].name == itemName){
        itemIndex = j;
        break;
      }     
    }
    
    users[userIndex].items[itemIndex].quantity +=1;
    setUsers(users);
    return;
  }
  
  const removeItemFromCart = (userName, itemName) =>{
    let userIndex = -1;
    let itemIndex = -1;
    for (let i = 0; i < users.length; i++) {
      if(userName == users[i].username){
        userIndex = i;
        break;
      }
    }  
      
    for (let j = 0; j < users[userIndex].items.length; j++) {
      if(users[userIndex].items[j].name == itemName){
        itemIndex = j;
        break;
      }     
    }
    users[userIndex].items[itemIndex].quantity = 0;
    setUsers(users);
  }

  const removeOneFromCart = (userName, itemName) =>{
    let userIndex = -1;
    let itemIndex = -1;
    for (let i = 0; i < users.length; i++) {
      if(userName == users[i].username){
        userIndex = i;
        break;
      }
    }  
      
    for (let j = 0; j < users[userIndex].items.length; j++) {
      if(users[userIndex].items[j].name == itemName){
        itemIndex = j;
        break;
      }     
    }
    if (users[userIndex].items[itemIndex].quantity > 0) {
      users[userIndex].items[itemIndex].quantity -= 1;
      setUsers(users);
    }

  }

  const userItemCount = (userName) =>{
    let count = 0;
    let userIndex = -1;
    for (let i = 0; i < users.length; i++) {
      if(userName == users[i].username){
        userIndex = i;
        break;
      }
    }
    for (let j = 0; j < users[userIndex].items.length; j++) {
      count += users[userIndex].items[j].quantity;
    }
    return count;
  }

  const checkUser = (name , pass) =>{
    if(name === "admin" && pass === "12345"){
      logInUpdate(true, name);
      return true;
    }
    for (let i = 0; i < users.length; i++) {
      if(users[i].username === name && users[i].password === pass){
        logInUpdate(true, users[i].username);
        return true;
      }
    }
    return false;
  }
  
  const logInUpdate = (bool,name) =>{
    setloggedIn({bool:bool, userName: name});
  }
  
  const signOut=()=>{
    logInUpdate(false, "");
  }

  const checkNameAvailability = (name) =>{
    for (let i = 0; i < users.length; i++) {
      if(users[i].username === name){
        return false;
      }
    }
    return true;
  }

  const totalCartPrice = (userName) =>{
    let count = 0;
    let userIndex = -1;
    for (let i = 0; i < users.length; i++) {
      if(userName == users[i].username){
        userIndex = i;
        break;
      }
    }
    for (let j = 0; j < users[userIndex].items.length; j++) {
      count += users[userIndex].items[j].quantity * users[userIndex].items[j].price;
    }
    return count;

  }
  const register = (name, password,bday) =>{
    console.log(bday);
    setUsers( [...users,{
       username:name,
       password:password,
       birthday: bday,
       items:[
        {
          name:"Phone",
          quantity: 0,
          price: 500
         },
         {
          name:"TV",
          quantity: 0,
          price: 800
         },
         {
          name:"Bluetooth Speaker",
          quantity: 0,
          price: 15
         },
         {
          name:"laptop",
          quantity: 0,
          price: 30
         },
         {
          name:"xbox",
          quantity: 0,
          price: 300
         }
        
       ]
     }])
  }

  const getNumOfProductsInCarts = () =>{
    let sum = 0;
    for (let i = 0; i < users.length; i++) {
      for (let j = 0; j < users[i].items.length; j++) {
        sum += users[i].items[j].quantity;
      }
    }
    return sum;
  }

  const removeProduct = (name) =>{
    let productIndex = -1;
    let newItems=[];
    let counter = 0;
    for (let i = 0; i < items.length; i++) {
      if(!(items[i].name === name)){
        newItems[counter++] = {name:items[i].name,price:items[i].price};
        
      }
    }
    updateUsersProductRemove(name);

    setItems(newItems);
  }
  
  const addProduct = (n,p) =>{
    handleAdd(n,p);
    for (let i = 0; i < users.length; i++) {
      users[i].items = [...users[i].items, {name:n,price:p,quantity:0}]
    }
    setUsers(users);

  }
  const handleAdd = (n,p) =>{
    setItems([ {name:n,price:p},...items])

  }
  const updateUsersProductRemove = (name) =>{
    for (let i = 0; i < users.length; i++) {
      for (let j = 0; j < users[i].items.length; j++) {
        if((users[i].items[j].name === name)){
          removeItemFromCart(users[i].username, users[i].items[j].name)          
        }
      }     
    }
  }

  const deleteUser = (username) =>{
    let newUsers = [];
    for (let i = 0; i < users.length; i++) {
      if(users[i].username === username){
        continue;
      }
      newUsers = [...newUsers, {
        username:users[i].username,
        password:users[i].password,
        birthday: users[i].birthday,
        items:[...users[i].items]
      }]
    }
    setUsers(newUsers);
  }
  return (
    <div className="App">

      <Router>
        <Header loggedIn={loggedIn} signout={signOut}  />

        <Switch>
          <Route exact path={'/'} component={ ()=>{return <Home loggedIn={loggedIn}/>}  } />
          <Route exact path={'/login'} component={ ()=>{return <Login checkUser={checkUser}  />}  } />
          <Route exact path={'/register'} component={ ()=>{return <Register checkUser={checkUser} register={register} checkUserName={checkNameAvailability} />}  } />

          
          {
            users.map( (user, index)=>{
              return(
                <Route key={user.username} exact path={'/' + users[index].username  } component={ ()=>{return  <Shop  userItemCount={userItemCount}  key={user.username} users={users} index={index} items={items} addItemToCart={addItemToCart} /> }  } />

              )
            } )
          }
          {
            users.map( (user, index)=>{
              return(
                <Route key={user.username} exact path={'/' + users[index].username +'/cart'  } component={ ()=>{return  <Cart userItemCount={userItemCount} totalCartPrice={totalCartPrice} userItemCount={userItemCount} key={user.username} users={users} index={index}  addItemToCart={addItemToCart} removeItemFromCart={removeItemFromCart} removeOneFromCart={removeOneFromCart} /> }  } />

              )
            } )
          }
          <Route exact path={'/admin'} component={ ()=>{return  <Admin items={items} users={users} getNumOfProductsInCarts={getNumOfProductsInCarts}  /> }  } />
          <Route exact path={'/admin/products'} component={ ()=>{return  <Products items={items} removeProduct={removeProduct} addProduct={addProduct} /> }  } />
          <Route exact path={'/admin/users'} component={ ()=>{return  <Users users={users} deleteUser={deleteUser} userItemCount={userItemCount} /> }  } />



          <Admin />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
