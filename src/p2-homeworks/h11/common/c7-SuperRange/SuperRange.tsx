import {Slider} from '@mui/material';
import React from 'react'
import s from './SuperRange.module.css'
import {SliderProps} from "@mui/material/Slider/Slider";

// тип пропсов обычного слайдера
type DefaultSliderProps = SliderProps

// здесь мы говорим что у нашего слайдера будут такие же пропсы как у обычного слайдера
// (чтоб не писать value: string, onChange: ...; они уже все описаны в SliderProps
type SuperRangePropsType = DefaultSliderProps & { // и + ещё пропсы которых нет в стандартном слайдере
    onChangeRange?: (value: number | number[]) => void
    value: number | number[]
};

const SuperRange: React.FC<SuperRangePropsType> = (
    {

        onChange, onChangeRange,
        className,
        value,

        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {
    const onChangeCallback = (e:  Event, newValue: number | number[], activeThumb: number) => {
        onChange && onChange(e, newValue, activeThumb) // сохраняем старую функциональность

        onChangeRange && onChangeRange(newValue)
    }

    const finalRangeClassName = `${s.range} ${className ? className : ''}`

    return (
        <>
            <Slider
                value={value}
                onChange={onChangeCallback}
                className={finalRangeClassName}

                {...restProps} // отдаём слайдеру остальные пропсы если они есть (value например там внутри)
            />
        </>
    )
}

export default SuperRange
