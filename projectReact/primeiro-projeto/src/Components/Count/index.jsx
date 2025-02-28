import React, { useState } from 'react'

import "./style.css"

export default function Count() {
    const [count, setcount] = useState(0)
    
    // função para aumentar valor do estado

    const aumentar = () => {
        setcount(count + 1)
    }

    const diminuir = () => {
        setcount(count - 1)
    }


    return (
        <div className='container' style={{textAling: "center", marginTop: '50px'}}>
            <h1>{count}</h1>
            <button onClick={aumentar} style={{marginRight: '10px'}}>Aumentar</button>
            <button onClick={diminuir}>Diminuir</button>
        </div>
    )
}
