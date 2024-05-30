import memesData from "./memesData"

export default function Meme(){

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
                <button  className="form--button">
                    Get a new meme image 🖼
                </button>
            </div>
        </main>

    )
}