import {useState} from 'react'

const useForm = (initialForm = {
        email:'',
        password:''
}) => {
    const [values, setValues] = useState(initialForm)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        const {name, value} = e.target
        // evaluate expression with ( ) 
        setValues((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const resetForm = () => {
        setValues(initialForm)
    }

    return {
        values: values,
        onChange: onChange,
        resetForm: resetForm,
    }
}

export default useForm