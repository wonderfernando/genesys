import styles from "./styles.module.css" 
 
 import {ChangeEvent} from "react"
interface InputTypes {
    placeholder : string,
    type: string,
    background: string,
    color: string,
    error: string,
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
    ,
    value : string,
}
export default function Input(props: InputTypes) {
 
    return (
        <>
        <input style={{background: props.background, color: props.color,}} 
        className={styles.formInput} {...props}/>
        <label className={styles.error}>{props.error}</label>
        </>
    )
}