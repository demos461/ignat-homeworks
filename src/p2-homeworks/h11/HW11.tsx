import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from './HW11.module.css'

function HW11() {
    const [value1, setValue1] = useState<number | number[]>(0)
    const [value2, setValue2] = useState<number | number[]>([0, 100])

    const onChangeRange = (newValue: number | number[]) => {
        if (Array.isArray(newValue)) {
            setValue1(newValue[0])
            setValue2(newValue)
        } else {
            setValue1(newValue)
            const [start, end] = value2 as number[]
            setValue2([newValue, end])
        }
    }

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div className={s.rangesForm}>
                <div>
                    <span className={s.value}>{value1}</span>
                    <SuperRange
                        value={value1}
                        onChangeRange={onChangeRange}
                        sx={{
                            width: '300px',
                            color: '#494949',
                            '& .MuiSlider-thumb': {
                                borderRadius: '1px',
                            }
                        }}
                    />
                </div>

                <div>
                    <span className={s.value}>{value1}</span>
                    <SuperDoubleRange
                        value={value2}
                        onChangeRange={onChangeRange}
                        color={'secondary'}
                        sx={{
                            width: '300px',
                            color: '#f6b93b',
                            '& .MuiSlider-thumb': {
                                borderRadius: '1px',
                            }
                        }}

                    />
                    <span className={s.value}>{Array.isArray(value2) ? value2[1] : null}</span>
                </div>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
