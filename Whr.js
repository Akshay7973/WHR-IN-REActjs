import React,{useState} from 'react'

function Whr() {
    const[waist,setWaist]=useState("")
    const[hip,setHip]=useState("")
    const[whr,setWhr]=useState("")

const Calculate=(e)=>{
    e.preventDefault();
    const formValid = waist > 0 && hip > 0;
    if(!formValid) { return}
    const whr= waist/hip;
    setWhr(whr); 
}
    return (
        <form onSubmit={Calculate}> 
        <h2>Whr of person is:{whr}</h2>
        <div>
            <label>Waist Circumstace</label>
            <input type="number" value={waist} onChange={(e)=>setWaist(e.target.value)}></input>
        </div>
        <div>
            <label>Hip Circumstace</label>
            <input type="number" value={hip} onChange={(e)=>setHip(e.target.value)}></input>
        </div>
        <button type="submit">Calculate</button>
        </form>
    )
}
export default Whr;