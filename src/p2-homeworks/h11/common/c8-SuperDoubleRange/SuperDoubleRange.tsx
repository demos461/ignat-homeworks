import React from 'react'
import s from "../c7-SuperRange/SuperRange.module.css";
import {Slider} from "@mui/material";
import {SliderProps} from "@mui/material/Slider/Slider";

// тип пропсов обычного слайдера
type DefaultSliderProps = SliderProps

type SuperDoubleRangePropsType = DefaultSliderProps & {
    onChangeRange?: (value: number[]) => void
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChange, onChangeRange,
        className,
        value,
        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {
    const onChangeCallback = (e: Event, newValue: number | number[], activeThumb: number) => {
        onChange && onChange(e, newValue, activeThumb) // сохраняем старую функциональность
            onChangeRange && onChangeRange(newValue as number[])
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

export default SuperDoubleRange
