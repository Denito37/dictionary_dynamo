import { useState, useEffect } from "react"

export default function FlashCard(){
    const [count, setCount] = useState(0)
    const [word, setWord] = useState('probability')
    const [definition, setDefinition] = useState('')
    let statsVocab = ['probability', 'standard deviation']
    const leftCounter = () =>{
        setCount(0)
    }
    const rightCounter = () =>{
        setCount(1)
    }
    const getWord = async ()=>{
        let obj = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        let text = await obj.json();
        setWord(statsVocab[count])
        setDefinition(text[0].meanings[0].definitions[0].definition)
    }
    useEffect(() =>{
        getWord();
    },[count])
    return(
        <div className=" my-4 p-4 bg-gray-800 rounded-2xl border-2">
            <div className="text-center">
                <h2>FLASH CARDS</h2>
                <button className="p-2 bg-gray-500 rounded-xl mx-2 hover:bg-gray-400">Stats</button>
                <button className="p-2 bg-gray-500 rounded-xl mx-2 hover:bg-gray-400">Bio</button>
                <button className="p-2 bg-gray-500 rounded-xl mx-2 hover:bg-gray-400">English</button>
            </div>
            <article className=" max-w-lg p-4 rounded-2xl bg-gray-100 my-2">
                <h2 className="text-black text-2xl">{word}</h2>
                <p className="text-black">{definition}</p>
                <button onClick={leftCounter} className="bg-gray-600 p-2 rounded-xl mx-2">left</button>
                <button onClick={rightCounter} className="bg-gray-600 p-2 rounded-xl mx-2">NEXT</button>
            </article>
        </div>
    )
}