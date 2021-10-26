import React, { FC, useState } from "react";
import { loginUser } from "../../store/reducers/user/ActionCreators";
import styles from "./header.module.scss"

import { useAppDispatch, useAppSelector } from "../../store/hooks";

const Header: FC = () => {
    const dispatch = useAppDispatch();
    const [userName, setUserName] = useState("")
    const userNameServer = useAppSelector(state => state.user.name);
    return (
        <div className={ styles.header }>
            <div className={styles.header__title}>
                Volley<span>Ball</span>
            </div>
            { userName }
            { userNameServer }
            <form onSubmit={() => dispatch(loginUser(userName))} >
                <input type="text" onChange={ (e:React.FormEvent<HTMLInputElement>) => 
                    setUserName(e.currentTarget.value) }/>
                <button>Send</button>
            </form>
            <div className={ styles.header__btn }> Reg </div>
        </div>
    )
}

export default Header;