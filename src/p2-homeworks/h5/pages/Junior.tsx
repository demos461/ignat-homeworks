import React from 'react';
import s from './Junior.module.css'
import HW7 from '../../h7/HW7';
import HW8 from '../../h8/HW8';
import HW9 from '../../h9/HW9';
import HW10 from '../../h10/HW10';
import HW11 from "../../h11/HW11";
import HW12 from "../../h12/HW12";
import {useSelector} from "react-redux";
import {AppStoreType} from "../../h10/bll/store";

export const Junior = () => {
    const theme = useSelector<AppStoreType, string>((state) => state.theme.theme);
    return (
        <div className={s[theme]}>
            <HW7/>
            <HW8/>
            <HW9/>
            <HW10/>
            <HW11/>
            <HW12/>
        </div>
    );
};

