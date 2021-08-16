import React from 'react'
import {AffairType} from './HW2';
import styles from './Affairs.module.css'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }

    return (
        <div className={styles.affair}>
            <div className={styles.affairId}>{props.affair._id}</div>
            <div className={styles.affairName}>{props.affair.name}</div>
            <div className={styles.affairName}>{`[${props.affair.priority}]`}</div>
            <SuperButton onClick={deleteCallback}>X</SuperButton>
        </div>
    )
}

export default Affair
