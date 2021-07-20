import React from 'react'
import styles from './Message.module.css'

type MessageProps = {
    avatar: string
    name: string
    message: string
    time: string
}

const Message: React.FC<MessageProps> = ({avatar,name,message,time}) => {
    return (
        <div className={styles.message}>
            <div className={styles.message_avatar}>
                <img src={avatar} alt={'avatar'}/>
            </div>
            <div className={styles.message_body}>
                <div className={styles.message_author}>{name}</div>
                <div className={styles.message_text}>{message}</div>
                <div className={styles.message_time}>{time}</div>
            </div>
        </div>
    )
}

export default Message
