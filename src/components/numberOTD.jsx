import { useState,useEffect } from "react";

export default function NOTD(){
    const [number, setNumber] = useState('')
    const [fact, setFact] = useState('')
    const getNumber = async() =>{
        let obj = await fetch('http://numbersapi.com/random');
        let text = await obj.text();
        let numArray = text.split(' ')
        setNumber(numArray[0])
        numArray.shift()
        let theFact = numArray.join(' ')
        setFact(theFact)
    }
    useEffect(() =>{
        getNumber()
    },[])
    return(
        <div className="bg-red-400 p-4 my-4 mx-auto rounded-2xl w-96 h-52 overflow-y-scroll border-2">
            <h1 className="text-center text-3xl">Number Of The Day !</h1>
            <h2 className="text-center text-2xl my-2">{number}</h2>
            <p className="text-center">{fact}</p>
        </div>
    )
}