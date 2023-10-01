import React, { useState } from "react";
import css from "../../styles/form.css";
import InputComponent from "../comps/Input";
import DataList from "../views/local/DataList";
const { FormContainer, Button } = css;

const Main = () => {

    const [value, setValue] = useState("")
    const [type, setType] = useState("")
    const [comment, setComment] = useState("")

    const [data, setData] = useState([])

    const validation = () => {
        if (value.length >= 2 && type.length >=3) {
            console.log("Successful validation.")
            const dataLine = `${value}::${type}::${comment}`
            setData(prev => [...prev,dataLine])
            setValue("")
            setType("")
            setComment("")
        } else console.log("Validation decliend.")
    }
    return (
        <React.Fragment>
            <FormContainer>
                <InputComponent params={{
                    placeholder: "Input amount of trasaction",
                    maxLen: 50,
                    action: setValue,
                    inputValue:value
                }} />
                <InputComponent params={{
                    placeholder: "Input type of trasaction",
                    maxLen: 20,
                    action: setType,
                    inputValue:type
                }} />
                <InputComponent params={{
                    placeholder: "Input description",
                    maxLen: 100,
                    action: setComment,
                    inputValue:comment
                }} />
                <Button
                    backgroundcolor={
                        value.length < 2 ?
                            "rgb(229,229,229)" :
                            type.length < 3 ?
                                "rgb(229,229,229)" :
                                "rgb(101, 219, 132)"
                    }
                    onClick={validation}
                >Save trasaction</Button>
            </FormContainer>
            <DataList data={data}/>
        </React.Fragment>
    )
}

export default Main;