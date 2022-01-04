import React from "react";
import s from "./HW12.module.css";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeTheme} from "./bll/themeReducer";

const themes = ['default', 'dark'];

function HW12() {
    const theme = useSelector<AppStoreType, string>((state) => state.theme.theme);
    const dispatch = useDispatch()

    const onChangeCallback = (theme: string) => {
        dispatch(changeTheme(theme))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>
            <SuperRadio options={themes} value={theme} onChangeOption={onChangeCallback}/>
            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
