import { useState, useEffect } from "react";

function MyUseEffect() {
  
    const [num, setNum] = useState(0);
    const [result, setResult] = useState(0);
    useEffect(() => {
        setResult(num*num);
    },[num]); // Run on the first render and any time variable num update
    // If pass [] -> Run only the first render
    // If not pass list value, useEffect(() => { setResult(num); }); -> Run on every render
    return (
        <>
            <h1> Result is {result}</h1>
            <button type="button" onClick={() => setNum(num+1)}>Inc</button>
        </>
    );
        
}
export default MyUseEffect;