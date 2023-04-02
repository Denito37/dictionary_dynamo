import { useState, useEffect } from "react";

export default function WOTD() {
    const [word, setWord] = useState('Loading...')
    const [meaning, setMeaning] = useState('...')
    const [note, setNote] = useState('...')
    const API_KEY = import.meta.env.VITE_API_KEY
    const ofTheDay = async () =>{
        const res = await fetch(`https://api.wordnik.com/v4/words.json/wordOfTheDay?api_key=${API_KEY}`)
        const data = await res.json();
        setNote(data.note)
        setWord(data.word)
        setMeaning(data.definitions[0].text)
    }
    useEffect(()=>{
        ofTheDay()
    },[])
    
    return(
        <section className="p-4 my-6 text-center text-slate-100 mx-auto md:max-w-[24rem] max-w-[20rem]">
            <h2 className="text-3xl">Word Of The Day</h2>
            <h2 className="text-xl p-2">{word}</h2>
            <div className=" md:h-40 md:overflow-y-scroll">
                <p className=" p-2">{meaning}</p>
                <small className=" p-2 font-bold">Note: {note}</small>
            </div>
            
        </section>
    )
}