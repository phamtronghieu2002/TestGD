import { FC } from "react"

interface props{
    type:string
    handleChange:(e:React.ChangeEvent<HTMLInputElement>)=>void
}


const Input:FC<props> =({type,handleChange})=>{
    return (
        <input type={type} onChange={handleChange}  />
    )
}

export default Input;