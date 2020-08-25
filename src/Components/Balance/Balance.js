import React from "react"
import style from "./Balance.module.css"
import { useSelector } from "react-redux"

const Balance = () => {

    const user = useSelector((state) => state.session.user)

    console.log(user);


    return (
        <div className={style.navContainer}>
        <div className={style.balance}>
            <p>Баланс</p>
            <p>{`${user.userBalance}`} грн</p>
        </div>
    </div>

    )
}

export default Balance