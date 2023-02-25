import { useState } from "react";

export default function Dictionary(){
    const [word, setWord] = useState('...');
    const [speech, setSpeech] = useState('')
    const [secondSpeech, setSecondSpeech] = useState('')
    const [definition, setDefinition] = useState('...');
    const [secondDefinition, setSecondDefinition] = useState('...');
    const [example, setExample] = useState('...');
    const [secondExample, setSecondExample] = useState('...');
    const [input, setInput]= useState('hello');
    const getWord = async ()=>{
        try{
            let obj = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`);
            if(!obj.ok){throw new Error}
            let text = await obj.json();
            setWord(text[0].word);
            setSpeech(text[0].meanings[0].partOfSpeech)
            setDefinition(text[0].meanings[0].definitions[0].definition)
            setExample(text[0].meanings[0].definitions[0].example)
            setSecondSpeech(text[0].meanings[1].partOfSpeech)
            setSecondDefinition(text[0].meanings[1].definitions[0].definition)
            setSecondExample(text[0].meanings[1].definitions[0].example)
        }
        catch(error){
            console.error(`error ${error}`)
            setSecondDefinition("not found")
            setSecondExample('not found')
            // ! set error on what causes error ; currently sets 2nd def as "not found" if any of them have an error
        }
    }

    return(
        <div className="bg-slate-100 text-xl p-4 rounded-2xl border-2 grid grid-cols-2 grid-rows-6 max-w-xl">
            <input onChange={event => setInput(event.target.value)} className=" px-3 rounded-2xl" type="text" />
            <button onClick={getWord} className = 'bg-blue-400 px-6 py-4 m-3 hover:bg-blue-300 rounded-2xl'>Search</button>
            <div className="col-span-2 row-span-5 p-8 my-6 rounded-2xl bg-slate-400">
                <h1 className=" text-4xl uppercase">{word}</h1>
                <small>({speech})</small>
                <p className ="my-2"><small className=" font-bold text-slate-700">First Definition: </small>{definition}</p>
                <p className ="my-2"> <small className=" font-bold text-slate-700">Example: </small>{example}</p>
                <small>({secondSpeech})</small>
                <p className ="my-2"><small className=" font-bold text-slate-700">Second Definition: </small>{secondDefinition}</p>
                <p className ="my-2"> <small className=" font-bold text-slate-700">Example: </small>{secondExample}</p>
            </div>
        </div>
    )
}