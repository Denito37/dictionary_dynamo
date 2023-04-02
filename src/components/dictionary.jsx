import { useState, useEffect } from "react";

export default function Dictionary(){
    const [entry, setEntry] = useState({
        word:'...',
        pronounce: '',
        speech:'',
        definition:'...',
        example: '...',
        synonym: '',
    });
    const [secondEntry, setSecondEntry] = useState({
        speech: '',
        definition: '...',
        example: '',
        synonym: ''
    })
    const [input, setInput]= useState('hello');

    const getWord = async ()=>{
        if(input === ''){setInput('hello')}
        try{
            let obj = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`);
            if(!obj.ok){throw new Error}
            let text = await obj.json();
            setEntry({
                word:text[0].word,
                pronounce: text[0].phonetic,
                speech:text[0].meanings[0].partOfSpeech,
                definition:text[0].meanings[0].definitions[0].definition,
                example: text[0].meanings[0].definitions[0].example,
                synonym: text[0].meanings[0].synonyms[0],   
            });
            setSecondEntry({
                speech:text[0]?.meanings[1]?.partOfSpeech,
                definition:text[0]?.meanings[1]?.definitions[0].definition,
                example: text[0]?.meanings[1]?.definitions[0].example,
                synonym: text[0]?.meanings[1]?.synonyms[0],  
            })
        }
        catch(error){
            setEntry({
                word:'not found',
                pronounce: '',
                speech:'',
                definition:'',
                example: '',
                synonym: '',   
            });
            setSecondEntry({
                speech:'',
                definition:'',
                example: '',
                synonym: '', 
            })
        }
    }

    useEffect(() => {
        getWord()
    },[input])

    return(
        <article className=" text-xl p-4 md:w-128 rounded-2xl grid items-center h-full">
            <input onChange={event => setInput(event.target.value)} className=" bg-zinc-800 text-base px-8 py-4 rounded-2xl w-full " type="text" placeholder="Search" />
            <section className="p-4 my-6 w-full">
                <h2 className=" text-5xl capitalize">{entry.word}</h2>
                <p>{entry.pronounce}</p>
                <hr className="my-2" />
                <small>({entry.speech})</small>
                <p className ="my-2"><small className=" font-bold text-slate-300">Definition: </small>{entry.definition}</p>
                <p className ="my-2"> <small className=" font-bold text-slate-300">Example: </small>{entry.example}</p>
                <p className ="my-2"> <small className=" font-bold text-slate-300">Synonym: </small>{entry.synonym}</p>
                <hr className=" my-2" />
                <small>({secondEntry.speech})</small>
                <p className ="my-2"><small className=" font-bold text-slate-300">Definition: </small>{secondEntry.definition}</p>
                <p className ="my-2"> <small className=" font-bold text-slate-300">Example: </small>{secondEntry.example}</p>
                <p className ="my-2"> <small className=" font-bold text-slate-300">Synonym: </small>{secondEntry.synonym}</p>
            </section>
        </article>
    )
}