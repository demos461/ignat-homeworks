import React from 'react'
import {AffairType} from './HW2';
import styles from './Affairs.module.css'

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
            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
