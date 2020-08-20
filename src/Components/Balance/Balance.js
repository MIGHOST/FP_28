import React from "react"
import style from "./Balance.module.css"

const Balance = () => {

    return (
        <div className={style.navContainer}>
        <div className={style.balance}>
            <p>Баланс</p>
            <p>income data грн</p>
        </div>
    </div>

    )
}

export default Balance