import { FC, useState } from 'react'
import styles from './InputParameters.module.css'

type InputParametersProps = {
    title: string,
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>>
}

const InputParameters: FC<InputParametersProps> = ({ value, setValue, title }) => {
    // const [value, setValue] = useState("")
    return (
        <div className={styles.container}>
            <p> {title} </p>
            <input type='number' value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                (setValue(e.target.value))} />
        </div>
    )
}

export default InputParameters
