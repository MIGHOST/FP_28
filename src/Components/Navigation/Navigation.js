import React from 'react';
import style from "./Navigation.module.css"


const Navigation =() => {


    return (
        <div>
            <div className={style.pc}>
            <div className={style.navContainer}>
                <div className={style.navItem}>
                    <div className={style.navItem_house}></div>
                    <p className={style.navItem_text}>Главная</p>
                </div>
                <div className={style.navItem}>
                    <div className={style.navItem_chart}></div>
                    <p className={style.navItem_text}>Статистика</p>
                </div>
            </div>

            <div className={style.navContainer}>
                <div className={style.balance}>
                    <p>Баланс</p>
                    <p>income data грн</p>
                </div>
            </div>
            </div>

            <div className={style.tab}>
                <div className={style.tab_container}>
                <div className={style.tab_navItem}>
                    <div className={style.tab_navItem_house}></div>
                    <p className={style.tab_navItem_text}>Главная</p>
                </div>
                <div className={style.tab_dash}></div>
                <div className={style.tab_navItem}>
                    <div className={style.tab_navItem_chart}></div>
                    <p className={style.tab_navItem_text}>Статистика</p>
                </div>
                <div className={style.tab_dash}></div>
                <div className={style.tab_balance}>
                    <p>Баланс </p>
                    <p>:  income data грн</p>
                </div>
                </div>
            </div>


            <div className={style.mob}>
                <div className={style.mob_container}>
                <div className={style.mob_navItem}>
                    <div className={style.mob_navItem_house}></div>
                </div>
                <div className={style.mob_navItem}>
                    <div className={style.mob_navItem_chart}></div>
                </div>
                <div className={style.mob_navItem}>
                    <div className={style.mob_navItem_dolar}></div>
                </div>
                </div>
            </div>

        </div>

    )
}

export default Navigation