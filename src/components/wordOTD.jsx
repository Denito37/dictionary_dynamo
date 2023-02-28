import { useState, useEffect } from "react";

export default function WOTD() {
    const [word, setWord] = useState('Loading...')
    const [meaning, setMeaning] = useState('...')
    const getWord = async () =>{
        const obj = await fetch('https://random-word-api.herokuapp.com/word');
        const text = await obj.json();
        setWord(text)
        try{
            const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${text}`);
            if(!res.ok){throw new Error(res.status);}
            const data = await res.json();
            setMeaning(data[0].meanings[0].definitions[0].definition)
        }
        catch(error){
            console.error(`failed ${error}`)
            setMeaning("No definition found")
        }
    }
    useEffect(()=>{
        getWord()
    },[])
    
    return(
        <section className=" bg-gray-800 w-112 h-52 overflow-y-scroll rounded-2xl p-4 my-8 mx-auto border-2">
            <h1 className="text-center text-3xl">New Word !</h1>
            <h2 className=" text-xl text-center my-4">{word}</h2>
            <p className=" text-center">{meaning}</p>
        </section>
    )
}