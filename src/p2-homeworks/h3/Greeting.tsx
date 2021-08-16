import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import SuperInputText from '../h4/common/c1-SuperInputText/SuperInputText';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    onKeyPressHandler: (e: KeyboardEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, onKeyPressHandler, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : s.input

    return (
        <div className={s.form}>

            <SuperInputText value={name} onChange={setNameCallback} onBlur={setNameCallback} onKeyPress={onKeyPressHandler}/>
            {/*<input*/}
            {/*    value={name}*/}
            {/*    onChange={setNameCallback}*/}
            {/*    onBlur={setNameCallback}*/}
            {/*    onKeyPress={onKeyPressHandler}*/}
            {/*    className={inputClass}*/}
            {/*/>*/}
            <SuperButton onClick={addUser}>add</SuperButton>
            {/*<button onClick={addUser}>add</button>*/}
            <span>{totalUsers}</span>
            <div className={s.errorMessage}>{error}</div>
        </div>
    )
}

export default Greeting
