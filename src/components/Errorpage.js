import React from 'react'
import { NavLink } from 'react-router-dom'

const Errorpage = () => {
    return(
        <>
        <div id = "notfound">
            <div className="notfounf">
                <div className="notfound-404">
                    <h1>404, Sorry page not found!</h1>
                </div>
            </div>
        </div>
        <NavLink to ="/">Go back to Homepage</NavLink>
        </>
    )
}

export default Errorpage