import React from 'react';
import styles from "./FormControls.module.css"

const FormControl = ({input, child, meta, ...props}: any)=>{

    const hasError = meta.touched && meta.error

    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

const TextArea = (props:any) => {
    const {input, child, meta, ...restProps}: any = props
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
};

export default TextArea


export const Input = (props: any) => {
    const {input, child, meta, ...restProps}: any = props
    return <FormControl {...props}> <input {...input} {...restProps}/></FormControl>
};

