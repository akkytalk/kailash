import React from 'react'

import "./DrawToggleButton.scss"

function DrawToggleButton({ clicked }) {
    return (
        <div className="draw-toggle-button" onClick={clicked}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default DrawToggleButton
