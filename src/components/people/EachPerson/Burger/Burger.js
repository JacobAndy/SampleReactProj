import React from 'react';
import classnames from 'classnames'
import "./Burger.css"

function Burger({ toggle, status }) {
    const classes = classnames("burger", {
        "burger-active": status,
        "burger-static": !status
    })
    return (
        <div className={classes} onClick={toggle}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}
export default Burger;