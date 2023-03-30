import { useState, createContext, useContext,useEffect, useRef} from "react";
// import ReactDOM from "react-dom/client";
import './App.css';
import UseEffectFetch from "./useEffectFetch";
//component passing the argument via props .........
function App(props){
  const [color,setColor] = useState('black');//hook useState hook  allows us to track state in a function component.
  return (
    <>
    <h1>hiii.........{props.class.name}</h1>
    <h1>My favorite color is {color}!</h1>
      <button
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button>
      <button
        type="button"
        onClick={() => setColor("red")}
      >Red</button>
      <button
        type="button"
        onClick={() => setColor("pink")}
      >Pink</button>
      <button
        type="button"
        onClick={() => setColor("green")}
      >Green</button>
    </>

  );
}
function Student()
  {
  const studentname= { name: "sadha",section:"12th c" };
  return(
  <>
  <App class={studentname}/>
  <Counter/>
  <One/>
  <Use/>
  <Effect/>
  <Usecunt/>
  <Timer/>
   <UseEffectFetch/>

 
  </>
  );
}
///##################  useEffect *************
function Counter() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2);
  },[count]); // <- add the count variable here

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Calculation: {calculation}</p>
    </>
  );
}
//##########   useContext  *****************
const UserName = createContext();
function One(){
  const [name , setName] = useState("sadhasivam");
  return(
    <>
    <UserName.Provider value={name}>
      <h1> {`CLASS ONE USER NAME IS ${name}`}</h1>
      <button
        type="button"
        onClick={() => setName("vishnavi")}
      >Blue</button>
        <button
        type="button"
        onClick={() => setName("saritha")}
      >change</button>
      <Component2/>
    </UserName.Provider>
    </>
  );
}

function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <h1>Component 3</h1>
      <Component5/>
     
    </>
  );
}
function Component5() {
  const user = useContext(UserName);

  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    
    </>
  );
}
// #############  ......<useRef>....  *************
function Use(){
  const [inputValue,setValue]= useState ('');// empty value stored first
  const count = useRef(0);//    count = useRef()  > {current :0}
  useEffect(()=>{
    count.current = count.current + 1; // 
    // console.log(count.current)
  });

  return(

    <>
    <input 
    type="text" 
    value={inputValue}
    onChange = {((e)=>setValue(e.target.value))}
    />
    <h1>Render Count: {count.current}</h1>
    </>
  );
}
 
function Effect(){
  const [details,reDetails]  = useState({name:'sadha',
  class:'10c',
  age:23,
  address:'kallakarai'});
  const changeDetails = function (){
    reDetails({
      ...details,
      name:'sivakumar',
      age:"29"
    });
    
  };
  return(
 <>
    <h1>{details.name}</h1>
    <h1>{details.class}</h1>
    <h1>{details.age}</h1>
    <h1>{details.address}</h1>
    <button onClick={changeDetails}>change</button>
</>
  );
}

 function Usecunt(){
  const [value,setCount] = useState(0);
  const [cunt,setCunt]= useState(0);
  
  useEffect(()=>{
    setCunt(()=>cunt+1)

    },[cunt])
  
  
  const changeValue = function (){
    console.log('clicked');
    setTimeout ( ()=>{
      setCount (()=> value + 1);

    },1000)
  }
    
 
 
  return(
    <>
     <h2>{value}</h2>
   <button onClick={changeValue}>click me </button>
   <h1>count time{cunt}</h1>
   </>
  
  
  );
 }

  function Timer(){
    const [time,setTime]= useState(0)
    useEffect(()=>{
    let timer = setTimeout (()=>{setTime ((count)=> count + 1)},1000);
    return ()=> clearTimeout (timer)},[]);
    return(
      <>
      <h1>hii this is {time}</h1>

      </>
    );
  }
  // export default One;
 export default Student;
