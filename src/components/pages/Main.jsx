import React, { useState } from "react";
import css from "../../styles/form.css";
import InputComponent from "../comps/Input";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const { FormContainer, Button } = css;

const Main = (props) => {
    const { action } = props
    const [value, setValue] = useState("")
    const [type, setType] = useState("Income")
    const [comment, setComment] = useState("")

    const handleChange = (event) => {
        setType(event.target.value)
    }
    const handleChangeComm = (event) => {
        setComment(event.target.value)
    }

    const validation = () => {
        if (value.length >= 2 && type.length >= 3) {
            console.log("Successful validation.")
            const dataLine = `${value}::${type}::${comment}`
            action(prev => [...prev, dataLine])
            setValue("")
            setType("Income")
            setComment("")
        } else console.log("Validation decliend.")
    }
    return (
        <React.Fragment>
            <FormContainer style={{alignItems: 'flex-start'}}>
                <InputComponent params={{
                    placeholder: "Input amount of trasaction",
                    maxLen: 50,
                    action: setValue,
                    inputValue: value
                }} />
                <FormControl style={{marginTop: '9px', marginBottom: '12px'}}>
                    <FormLabel id="demo-radio-buttons-group-label">Choos type of Expense</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="Income"
                        name="radio-buttons-group"
                        value={type}
                        onChange={handleChange}
                        style={{marginTop: '5px', marginLeft: '6px'}}
                    >
                        <FormControlLabel value="Income" control={<Radio />} label="Income" />
                        <FormControlLabel value="Expense" control={<Radio />} label="Expense" />
                    </RadioGroup>
                </FormControl>
                { type === 'Income' &&
                <InputComponent params={{
                    placeholder: "Input description",
                    maxLen: 100,
                    action: setComment,
                    inputValue: comment
                }} />}
                { type === 'Expense' &&
                  <FormControl style={{marginTop: '0px', marginBottom: '14px'}}>
                    <FormLabel id="demo-radio-buttons-group-label">Choos type of transaction</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="Income"
                        name="radio-buttons-group"
                        value={comment}
                        onChange={handleChangeComm}
                        style={{marginTop: '5px', marginLeft: '6px'}}

                    >
                        <FormControlLabel value="Rent" control={<Radio />} label="Rent" />
                        <FormControlLabel value="Grocery Shopping" control={<Radio />} label="Grocery Shopping" />
                        <FormControlLabel value="Car Maintenance" control={<Radio />} label="Car Maintenance" />
                        <FormControlLabel value="Clothes" control={<Radio />} label="Clothes" />
                    </RadioGroup>
                </FormControl>
                }
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
        </React.Fragment>
    )
}

export default Main;