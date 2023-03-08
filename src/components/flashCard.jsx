import { useState, useEffect } from "react"

export default function FlashCard(){
    let statsVocab = ['probability','Conditional probability', 'standard deviation', 'Binomial theorem', 'Binomial distribution', 'Frequency distribution']
    let bioVocab = ['biology', 'DNA', 'organism', 'mitochondria', 'enzyme', 'atom']
    let englishVocab = ['climax','ball', 'sky', 'bye']
    
    const [count, setCount] = useState(1)
    const [word, setWord] = useState('probability')
    const [definition, setDefinition] = useState('')
    const [flashType, setFlashType] = useState(statsVocab)
    const leftCounter = () =>{
        setCount(count - 1)
        if(count === 1){
            setCount(flashType.length)
        }
    }
    const rightCounter = () =>{
        setCount(count + 1)
        if(count === flashType.length){
            setCount(1)
        }
    }
    const getWord = async ()=>{
        let obj = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        let text = await obj.json();
        setWord(flashType[count-1])
        setDefinition(text[0].meanings[0].definitions[0].definition)
    }
    useEffect(() =>{
        getWord();
    },[count,word,flashType])

    return(
        <section className=" my-4 md:mt-0 mx-auto p-4 grid place-content-center md:col-start-2 w-full rounded-2xl">
            <div className="text-center">
                <h2 className=" py-2 font-bold text-xl">FLASH CARDS</h2>
                <button onClick={() => {setFlashType(statsVocab); setCount(1)}} className="p-2 w-20 border-2 bg-gray-500 rounded-2xl mx-2 transition-all hover:border-red-400">Stats</button>
                <button onClick={() => {setFlashType(bioVocab); setCount(1)}} className="p-2 w-20 border-2 bg-gray-500 rounded-2xl mx-2 transition-all hover:border-red-400">Bio</button>
                <button onClick={() => {setFlashType(englishVocab); setCount(1)}} className="p-2 w-20 border-2 bg-gray-500 rounded-2xl mx-2 transition-all hover:border-red-400">English</button>
            </div>
            <article className=" bg-gray-100 p-4 my-2 min-w-[20rem] rounded-2xl">
                <h2 className="text-black text-2xl">{word}</h2>
                <p className="text-black h-24 md:w-96 overflow-y-scroll">{definition}</p>
                <div className="flex justify-center items-center my-2">
                    <button onClick={leftCounter} className="bg-gray-600 border-2 border-slate-400 p-2 w-16 rounded-xl mx-2 transition-all hover:border-red-400">Left</button>
                    <p className="text-black">{count}/{flashType.length}</p>
                    <button onClick={rightCounter} className="bg-gray-600 border-2 border-slate-400 p-2 w-16 rounded-xl mx-2 transition-all hover:border-red-400">Right</button>
                </div>
            </article>
        </section>
    )
}