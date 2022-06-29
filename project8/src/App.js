
import './App.css';
import { useState } from 'react'
function App() {

  const [data,setData] = useState("");
  const calcBtns = [];
  [9,8,7,6,5,4,3,2,1,".","%","+","-"].forEach(item=>{
    calcBtns.push(
      <button onClick={e=>{
        setData(data + e.target.value)
      }}
      value={item}
      key={item}>
        {item}
      </button>
    )
  })
  const [res,setres]=useState()
  return(<>
  Это Простой калькулятор!
  
  
  
  <div className='wrapper'>
    <div className='show'>
      <div className='show-input'>
        {data}
      </div>
      

      <div className='digits flex'>
        <div className=' flex'>
          <button onClick={()=>{setData(data.substr(0,data.length - 1))
          }}>Clear</button>
          <button onClick={()=>{
            setData("")
        }}>AC</button>
        </div>
      
        {calcBtns}
      </div>
      <div className='modifiers grid'>
      </div>
      <button onClick={()=>setres(eval(data))}>=</button>
      <p className='res'>{res}</p>
    </div>
  </div></>);
 
}

export default App;
