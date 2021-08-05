import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

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
            <input
                value={name}
                onChange={setNameCallback}
                onBlur={setNameCallback}
                onKeyPress={onKeyPressHandler}
                className={inputClass}
            />
            <button onClick={addUser}>add</button>
            <span>{totalUsers}</span>
            <div className={s.errorMessage}>{error}</div>
        </div>
    )
}

export default Greeting
