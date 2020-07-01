import React from "react"

export default function Main({tileNumber}) {

    function tilesGenerator(number) {
        if (number < 0 || number > 10) return;
        const tiles = [];
        for(let i = 1; i <= number; i++) {
            tiles.push(<div className={`metro metro-${i}`}></div>) 
        }
        return tiles;
    }

    return (
    <div className="main-container">
        {tilesGenerator(tileNumber)}
    </div>
    )
}
