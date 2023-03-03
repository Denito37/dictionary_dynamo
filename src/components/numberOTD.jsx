import { useState,useEffect } from "react";

export default function NOTD(){
    const [number, setNumber] = useState('')
    const [fact, setFact] = useState('')
    const getNumber = async() =>{
        const obj = await fetch('http://numbersapi.com/random');
        const text = await obj.text();
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
        <section className=" bg-gray-800 col-start-2 p-4 mt-8 mx-auto rounded-2xl w-112 h-52 overflow-y-scroll border-2">
            <h2 className="text-center text-3xl">Number Fact !</h2>
            <h2 className="text-center text-2xl my-2">{number}</h2>
            <p className="text-center">{fact}</p>
        </section>
    )
}