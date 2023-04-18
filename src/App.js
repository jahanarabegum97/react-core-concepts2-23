import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
 return (
    <div className="App">
      {/* <Counter></Counter> */}
      {/* users */}
      {/* <ExternalUser></ExternalUser> */}
      {/* posts */}
      <Posts></Posts>
    </div>
  );
}


function Posts(){
   const [posts, setPosts] = useState([])
   useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res=> res.json())
      .then(data => setPosts(data))
   },[])

  return(
    <div>
      <h1>Posts</h1>
      <p>{posts.length}</p>
      {
        posts.map(post => <Post key={post.id} title={post.title} body={post.body}></Post>)
      }
    </div>
  )
}


function Post(props){
  return(
    <div>
      <h2>Title: {props.title}</h2>
      <p>Body: {props.body}</p>
    </div>
  )
}





// users

function ExternalUser(){
  const [users, setUsers] = useState([])
  // name function 
  // const myFunc () =>{

  // }

// anonymous  function
  useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res =>res.json())
      .then(data => setUsers(data))
  },[])

  return(
    <div>
       <h2>External User</h2>
       <p>{users.length}</p>
       {
        users.map(user=><User name={user.name} email={user.email}></User>)
       }
    </div>
  )
}

function User(props){
  return (
    <div style={{border: "2px solid red",margin:'30px' }}>
      <h3>Name: {props.name}</h3>
      <p>Email: {props.email}</p>
    </div>
  )
}


// counter
function Counter(){
  // const abc = useState(33);
  // console.log(abc)

    const [count,setCount] = useState(55);
    
    const increaseCount =()=>{
      setCount(count + 1)
    }

    const decreaseCount =()=>setCount(count - 1)
   
  // const increaseCount=()=>{
  //   const newCount = count + 1
  //  setCount(newCount);
  // }
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}


//  ager video er
/*
 const products =[
    {name: 'laptop',price: 152000},
    {name: 'Phone',price: 70390},
    {name: 'Watch',price: 700},
    {name: 'Tablet',price: 75000},
  ]
{
        products.map(product => <Product name={product.name} price={product.price}></Product>)
      }
     <Product name="laptop" price="47000"></Product>
    <Product name ="Phone" price="75000"></Product>
    <Product name ="Watch" price="5000"></Product> 
*/

// function Product(props){
//   return(
//     <div className='product'>
//       <h1>Name: {props.name}</h1>
//       <p>Price: {props.price}</p>
//     </div>
//   )
// }

export default App;
