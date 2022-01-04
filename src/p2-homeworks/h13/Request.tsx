import React, {useState} from 'react';
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {testRequest} from "./RequestAPI";

const Request = () => {

    const [checked, setChecked] = useState<boolean>(false);
    const [response, setResponse] = useState<string>('')

    const onButtonClick = () => {
        testRequest(checked).then((data) => setResponse(data))
    }

    const onChangeChecked = (check: boolean) => {
        setChecked(check)
    }

    return (
        <div>
            <SuperCheckbox checked={checked} onChangeChecked={onChangeChecked}/>
            <SuperButton onClick={onButtonClick}>Button</SuperButton>
            <span>{response}</span>
        </div>
    );
};

export default Request;