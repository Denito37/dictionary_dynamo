import { useState, useEffect } from "react";

export default function FOTD(){
    const [fact,setFact] = useState('')
    const getFact = async() =>{
        let obj = await fetch('https://uselessfacts.jsph.pl/random.json?language=en');
        let text = await obj.json();
        setFact(text.text)
    }
    useEffect(() =>{
        getFact()
    },[])
    return(
        <div className=" bg-green-600 p-4 my-4 mx-auto border-2 rounded-2xl w-96">
            <h1 className=" text-center text-3xl">Fact Of The Day !</h1>
            <p className=" text-center text-lg my-2">{fact}</p>
        </div>
    )
}