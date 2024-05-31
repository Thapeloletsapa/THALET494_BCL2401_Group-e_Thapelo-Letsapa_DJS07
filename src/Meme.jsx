import memesData from "./memesData"

export default function Meme(){


    React.useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    }, [])

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    return (
        
        <main>
            <div className="form">               
                     
                        <input 
                        type="text" 
                        className="form--input" 
                        placeholder="Shut up"
                        />           
                        <input 
                        type="text" 
                        className="form--input" 
                        placeholder="and take my money"
                        />       
                <button  className="form--button" onClick={getMemeImage}>
                    Get a new meme image 🖼
                </button>
            </div>
        </main>

    )
}