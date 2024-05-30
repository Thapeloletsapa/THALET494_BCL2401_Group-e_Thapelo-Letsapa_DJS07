
export default function Meme(){
    return (
        
        <main>
            <form className="form">
                <div> 
                    <label>Top Text
                        <input 
                        type="text" 
                        className="form--input" 
                        placeholder="Shut up"/>
                    </label>
                </div>
                <div> 
                    <label>Bottom Text
                        <input 
                        type="text" 
                        className="form--input" 
                        placeholder="and take my money"/>
                    </label>   
                </div>
                <button className="form--button">
                    Get a new meme image 🖼
                </button>
            </form>
        </main>

    )
}