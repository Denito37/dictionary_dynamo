import { useState, useEffect } from "react";

export default function WOTD() {
    const [word, setWord] = useState('...')
    const [meaning, setMeaning] = useState('No definition found')
    const getWord = async () =>{
        let obj = await fetch('https://random-word-api.herokuapp.com/word');
        let text = await obj.json();
        setWord(text)
        let job = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${text}`);
        let writing = await job.json();
        setMeaning(writing[0].meanings[0].definitions[0].definition)
    }
    useEffect(()=>{
        getWord()
    },[])
    
    return(
        <div className=" bg-cyan-700 w-96 h-52 overflow-y-scroll rounded-2xl p-4 my-4 mx-auto border-2">
            <h1 className="text-center text-3xl">Word Of The Day !</h1>
            <h2 className=" text-xl text-center my-4">{word}</h2>
            <p className=" text-center">{meaning}</p>
        </div>
    )
}