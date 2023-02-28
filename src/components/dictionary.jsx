import { useState, useEffect } from "react";

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

    useEffect(() => {
        getWord()
    },[input])

    return(
        <article className=" bg-slate-100 md:w-128 text-xl p-4 rounded-2xl grid grid-cols-2 grid-rows-5 items-center">
            <input onChange={event => setInput(event.target.value)} className=" col-span-2 px-3 rounded-2xl h-3/6" type="text" placeholder="Search" />
            <section className=" col-span-2 row-span-4 p-8 my-6 rounded-2xl bg-slate-400  h-full">
                <h1 className=" text-4xl uppercase">{word}</h1>
                <hr className="my-2" />
                <small>({speech})</small>
                <p className ="my-2"><small className=" font-bold text-slate-700">Definition: </small>{definition}</p>
                <p className ="my-2"> <small className=" font-bold text-slate-700">Example: </small>{example}</p>
                <hr className=" my-2" />
                <small>({secondSpeech})</small>
                <p className ="my-2"><small className=" font-bold text-slate-700">Definition: </small>{secondDefinition}</p>
                <p className ="my-2"> <small className=" font-bold text-slate-700">Example: </small>{secondExample}</p>
            </section>
        </article>
    )
}