import React from "react";
import css from "../../styles/form.css";

const {Input} = css

const InputComponent = ({params}) =>{
    return(
        <React.Fragment>
            <Input
                value = {params.inputValue}
                type={"text"}
                placeholder={params.placeholder}
                maxLength={params.maxLen} 
                onChange={event=>{
                    const newValue = event.target.value
                    params.action(newValue)
                }}
            />
        </React.Fragment>
    )
}
export default InputComponent