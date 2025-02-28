import React from 'react'

export default function Times() {

    const times = [

        {
            nome: "Corinthian",
        },
        {
            nome: "Palmeiras"
        },
        {
            nome: "Flamengo"
        },
        {
            nome: "São Paulo"
        }

    ]

    return (
        <div className="timesContainer">
            {times.map((item, index) => {
                return (
                    <div className="timesCard" key={index}>
                        <h2>{item.nome}</h2>
                    </div>
                )
            })}
        </div>
    )
}