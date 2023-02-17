import { useState } from "react";

export default function Dictionary(){
    const [word, setWord] = useState('...');
    const [definition, setDefinition] = useState('');
    const [input, setInput]= useState('hello');
    const getWord = async ()=>{
        let obj = await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/'+input);
        let text = await obj.json();
        setWord(text[0].word);
        setDefinition(text[0].meanings[0].definitions[0].definition)
    }
    return(
        <div className="bg-slate-100 p-4 rounded-2xl border-2 grid grid-cols-2 max-w-xl">
            <input onChange={event => setInput(event.target.value)} className=" px-3 rounded-2xl" type="text" />
            <button onClick={getWord} className = 'bg-blue-400 px-6 py-4 m-3 hover:bg-blue-300 rounded-2xl'>Search</button>
            <div className="col-span-2 p-6 my-6 rounded-2xl bg-slate-400">
            <h1 className=" text-4xl uppercase">{word}</h1>
            <p>{definition}</p>
            </div>
        </div>
    )
}