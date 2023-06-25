import {ChangeEvent, useState} from "react";
export default function useForm() {
    const [value, setValue] = useState<string>("")
    const [error, setError] = useState<string>("")

    function onChange(event: ChangeEvent<HTMLInputElement>) {
        setValue(event.target.value)
        setError("")
    }
    function validate(value: string) {
        if (value.length==0) {
            setError("Campo obrigatório");
            return false
        }
        return true
    }
    return {onChange,value, validate : () => { return validate(value)},error}
}