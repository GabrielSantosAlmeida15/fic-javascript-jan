import React from 'react'

import "./style.css"

export default function Botao() {

    const mudarcor = () => {
        if (document.body.style.backgroundColor === "blue") {
            document.body.style.backgroundColor = "";
        } else {
            document.body.style.backgroundColor = "blue";
        }
    }

    return (

        <button className='button' onClick={mudarcor}>Aperte Aqui</button>

    )

}


