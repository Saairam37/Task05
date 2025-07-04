import { useEffect, useState } from "react";
import TodoList from "./TodoList";
import CartList from "./CartList";


function App() {
  
  const [todos, setTodos] = useState([]);
  const [carts, setCarts] = useState([]);

  useEffect(()=>{

    fetch("https://fakestoreapi.com/products").then(response=>response.json()).then(data=>setTodos(data));
    const noList=document.createElement("div");
    noList.classList.add("md:w-[400px]", "w-[250px]" ,"h-[100px]","text-center","nolists","items-self-center");    
    noList.textContent="No Items"
    document.getElementById("cartListu").appendChild(noList);
    document.querySelector(".showw").style.display="flex";
    document.querySelector(".hidee").style.display="none";

  },[])

  useEffect(()=>{
    if(carts.length == 0){
      document.querySelector(".nolists").style.display="block";
    }
    else{
      document.querySelector(".nolists").style.display="none";
    }
  })

  function renderList(list){
      if(carts.includes(list)){
        alert("You have already added this item to cart")
      }
      else{
      setCarts([...carts, list]);}
  }

function showHid() {
  document.getElementById("cartListu").style.display="grid";  
  document.querySelector(".hidee").style.display="flex";
}

function hidCart(){
  document.getElementById("cartListu").style.display="none"; 
  document.querySelector(".hidee").style.display="none";
}

function deleteList(listID){
    const indexxx = carts.indexOf(listID);
    let newCart =[...carts];
    if(indexxx>-1){
    newCart.splice(indexxx, 1);}
    else{
      newCart.shift();
    }
    setCarts(newCart);
}

  

  return (
    <><h1 className="fixed z-20 font-bold text-[30px] font-sans w-full px-[30px] text-[#ffcc00] bg-linear-180 from-[#000000] via-[#000000aa] to-[#0000ff00] ">ADD TO CART</h1>
    <div className="relative"><div className=" relative bg-gray-200 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-[20px] px-[20px] py-[50px]">
      {todos.map(todo=>
        <TodoList
          data={todo}
          key={todo.id}
          renderList={renderList}
          carts={carts}
          showHid={showHid}
        />
      )}
    </div>
    <div id="cartListu" className="fixed overflow-y-scroll max-h-[500px] top-[40px] right-[40px] z-10 bg-blue-200 hidden grid-cols-1 gap-[20px] px-[20px] py-[50px] rounded-[15px] shadow-2xl">
        {carts.map(tarID=> {
           const found = todos.find(obj => obj.id === tarID);
           console.log(found);
            return <CartList
              found={found}
              deleteList={deleteList}
              key={found.id}
            />
          }
        )}
    </div>
    <div className="fixed z-20 top-[30px] md:right-[450px] right-[300px] bg-red-600 font-bold rounded-full h-[30px] w-[30px] justify-center hidee"><button onClick={()=>{hidCart()}}>X</button></div>
    <div className="fixed z-20 top-[30px] right-[30px] bg-green-500 font-bold rounded-full h-[30px] w-[60px] flex-col showw"><button onClick={()=>{showHid()}}><img className="w-[20px] inline" src="/cart.png"/>     <span>{carts.length}</span></button></div>

    </div>
    </>
  )
}

export default App
