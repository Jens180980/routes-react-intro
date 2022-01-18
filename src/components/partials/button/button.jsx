import styles from './button.module.scss'


export function Button(props) {
    return (
        <button className={props.type === 'danger' ? styles.dangerBtn : styles.normalBtn}>
            {props.text}
        </button>
    )
}

