import React from "react";
import Memesdata from "../data/memesdata";
export default function InputForm(){
    const [memeImage, setMemeImage] = React.useState("")

    function getMeme(){
        const memesArray = Memesdata.data.memes
        const rand = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[rand].url)

    }
    return(
        <div>
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Top text"></input>
                <input type="text" className="form-control" placeholder="Bottom text"></input>
            </div>
            <div className="submit">
                <button  onClick={getMeme}>Generate a new meme 🖼️</button>
            </div>
            <img className="meme-image" src={memeImage}/>
        </div>
    )
}