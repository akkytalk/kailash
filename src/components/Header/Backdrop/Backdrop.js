import React from 'react'

import "./Backdrop.scss"

function Backdrop({ show, clicked}) {
    return (
        show ? <div className="backdrop" onClick={clicked}></div> : null
    )
}

export default Backdrop
