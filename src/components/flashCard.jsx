import { useState, useEffect } from "react"

export default function FlashCard(){
    let statsVocab = ['probability','Conditional probability', 'standard deviation', 'Binomial theorem', 'Binomial distribution', 'Frequency distribution']
    let bioVocab = ['biology', 'DNA', 'organism', 'mitochondria', 'enzyme', 'atom']
    let englishVocab = ['climax', 'ball', 'ball','ball', 'sky', 'bye']
    const [count, setCount] = useState(0)
    const [word, setWord] = useState('probability')
    const [definition, setDefinition] = useState('')
    const [flashType, setFlashType] = useState(statsVocab)
    const leftCounter = () =>{
        setCount(count - 1)
        if(count === 0){
            setCount(5)
        }
    }
    const rightCounter = () =>{
        setCount(count + 1)
        if(count === 5){
            setCount(0)
        }
    }
    const getWord = async ()=>{
        let obj = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        let text = await obj.json();
        setWord(flashType[count])
        setDefinition(text[0].meanings[0].definitions[0].definition)
    }
    useEffect(() =>{
        getWord();
    },[count,word,flashType])

    return(
        <div className=" grid place-content-center col-start-2 my-8 mx-auto p-4 h-fit w-fit bg-gray-800 rounded-2xl border-2">
            <div className="text-center">
                <h2>FLASH CARDS</h2>
                <button onClick={() => setFlashType(statsVocab)} className="p-2 border-2 bg-gray-500 rounded-xl mx-2 hover:border-red-400">Stats</button>
                <button onClick={() => setFlashType(bioVocab)} className="p-2 border-2 bg-gray-500 rounded-xl mx-2 hover:border-red-400">Bio</button>
                <button onClick={() => setFlashType(englishVocab)} className="p-2 border-2 bg-gray-500 rounded-xl mx-2 hover:border-red-400">English</button>
            </div>
            <article className=" max-w-lg p-4 rounded-2xl bg-gray-100 my-2">
                <h2 className="text-black text-2xl">{word}</h2>
                <p className="text-black h-24 w-96 overflow-y-scroll">{definition}</p>
                <div className="flex justify-center items-center my-2">
                    <button onClick={leftCounter} className="bg-gray-600 p-2 rounded-xl mx-2">Left</button>
                    <p className="text-black">{count + 1}/{statsVocab.length}</p>
                    <button onClick={rightCounter} className="bg-gray-600 p-2 rounded-xl mx-2">Right</button>
                </div>
            </article>
        </div>
    )
}