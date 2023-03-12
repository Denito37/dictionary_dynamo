import { useState, useEffect } from "react";

export default function Dictionary(){
    const [word, setWord] = useState('...');
    const [pronounce, setPronounce] = useState('');
    const [speech, setSpeech] = useState('');
    const [secondSpeech, setSecondSpeech] = useState('');
    const [definition, setDefinition] = useState('...');
    const [secondDefinition, setSecondDefinition] = useState('...');
    const [example, setExample] = useState('...');
    const [secondExample, setSecondExample] = useState('...');
    const [synonym, setSynonym] = useState('')
    const [secondSynonym, setSecondSynonym] = useState('')
    const [input, setInput]= useState('hello');

    const getWord = async ()=>{
        try{
            let obj = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`);
            if(!obj.ok){throw new Error}
            let text = await obj.json();
            setWord(text[0].word);
            setPronounce(text[0].phonetic);
            setSpeech(text[0].meanings[0].partOfSpeech)
            setDefinition(text[0].meanings[0].definitions[0].definition)
            setExample(text[0].meanings[0].definitions[0].example)
            setSynonym(text[0].meanings[0].synonyms[0])
            setSecondSpeech(text[0].meanings[1].partOfSpeech)
            setSecondDefinition(text[0].meanings[1].definitions[0].definition)
            setSecondExample(text[0].meanings[1].definitions[0].example)
            setSecondSynonym(text[0].meanings[1].synonyms[0])
        }
        catch(error){
            console.error(`error ${error}`)
            setSecondDefinition("not found")
            setSecondExample('not found')
            setSecondSynonym('not found')
            // ! set error on what causes error ; currently sets 2nd def as "not found" if any of them have an error
        }
        if(input === ''){setInput('hello')}
    }

    useEffect(() => {
        getWord()
    },[input])

    return(
        <article className=" text-xl p-4 md:w-128 w-full rounded-2xl grid items-center">
            <input onChange={event => setInput(event.target.value)} className=" bg-zinc-800 text-base px-8 py-6 rounded-2xl h-3/6 w-full  " type="text" placeholder="Search" />
            <section className="p-4 my-4 h-full">
                <h2 className=" text-5xl capitalize">{word}</h2>
                <p>{pronounce}</p>
                <hr className="my-2" />
                <small>({speech})</small>
                <p className ="my-2"><small className=" font-bold text-slate-300">Definition: </small>{definition}</p>
                <p className ="my-2"> <small className=" font-bold text-slate-300">Example: </small>{example}</p>
                <p className ="my-2"> <small className=" font-bold text-slate-300">Synonym: </small>{synonym}</p>
                <hr className=" my-2" />
                <small>({secondSpeech})</small>
                <p className ="my-2"><small className=" font-bold text-slate-300">Definition: </small>{secondDefinition}</p>
                <p className ="my-2"> <small className=" font-bold text-slate-300">Example: </small>{secondExample}</p>
                <p className ="my-2"> <small className=" font-bold text-slate-300">Synonym: </small>{secondSynonym}</p>
            </section>
        </article>
    )
}