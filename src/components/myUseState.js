import { useState } from "react";

function MyUseState() {
  
    const [company, setCompany] = useState("FPT");
    const [people, setPeople] = useState({
        name: "Toan",
        school: "UET"
    });
    const updateName = (newName) => {
        setPeople(previousState => {
            return {...previousState, name: newName}
        });
    };
    return (
        <>
            <h1>My favorite company is {company}!</h1>
            <p> I am {people.name}. I learn at {people.school} </p>
            <button type="button" onClick={() => setCompany("TCB")}>TCB</button>
            <button type="button" onClick={() => updateName("Tung Duong")}>Update Name</button>
        </>
    );
        
}
export default MyUseState;