import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  var person={
    name:"Eng Atiqur Rahman",
    age:24,
    job:"Student"
  }
  var mystyle={
    color:"black",
    backgroundColor:'red'
  }

  let nayoks=['manna','shakib','omorsani','atiqur']
  let nayka=['purnima','bubli','bobita']
  let products=[
    {name:"photoshop",price:90},
    {name:"instutor",price:70},
    {name:"psd",price:20},
  ]


 
  // for(let i=0;i<nayoks.length;i++){
  // }

  return(
    <div className="App">
      <header className="App-header">
       
       <MovieCounter> </MovieCounter>
      

        <Atiqur nayokname='salman khan ' naykaname='dipika'> </Atiqur>
        <Atiqur nayokname={nayoks[0]} naykaname={nayka[0]}> </Atiqur>
         <ul>
          {nayoks.map(nayok => <li>{nayok}</li> )}
         </ul>
        <Atiqur nayokname={products[0].name} naykaname={products[0].price}> </Atiqur>
        <Atiqur product={products[1]}> </Atiqur>


        
        <h2 style={{backgroundColor:'black'}}> this  line {1+2} </h2>






        {
          products.map(pd=> <Product product={pd} ></Product>)
        }




      </header>
    </div>
  );
}

function MovieCounter(){
  let [count,setCount]=useState(0)

  let IncreaseHandelar = () => {
    setCount(count+1)
  }
  let DecreaseHandelar = () => setCount(count-1)
  // or 
  // function IncreaseHandelar(){
  //   let newcount=count+1
  //   setCount(newcount)
  // }

  return(
    <div>
      <button onClick={IncreaseHandelar}> add movie </button>
      {/* or  */}
      {/* <button onClick={()=>setCount(count+1)}> add movie </button> */}

      <button onClick={DecreaseHandelar}> delete movie </button>

      <h2>Number of  Move : {count} </h2>
      <MovieDisplay movie={count}></MovieDisplay>
      <MovieDisplay movie={count +5}></MovieDisplay>
      <MovieDisplay movie={count +10 }></MovieDisplay>
      <MovieDisplay movie={count +15}></MovieDisplay>

    </div>
  )
}

function MovieDisplay(props){
  return (
    <div>
      <h3> Movies I Have acted {props.movie} </h3>
    </div>
  );

}
function Atiqur(props){
  var personStyle={
    color:"black",
    backgroundColor:'yellow',
    border:"1px solid red",
    margin:"5px"
  }
  
  return (
    <div style={personStyle}>
      <p> atiqur rahman  </p>
      <h1>Nayok : {props.nayokname} </h1>
      <h1>Nayka : {props.naykaname}  </h1>
    </div>
  );
}


function Product(props){
  var productStyle={
    color:"black",
    backgroundColor:'lightgray',
    border:"1px solid gray",
    borderRadius:'5px',
    hight:'250px',
    width:'300px',
  }
  return (
    <div style={productStyle}>
      <h1> {props.product.name} </h1>
      <h2>price: {props.product.price}</h2>
      <button> click me </button>
    </div>
  );

}

export default App;
