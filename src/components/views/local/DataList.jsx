import React, { useEffect, useState } from "react";
import css from "../../../styles/dataList.css";

const { DataContainer, ContentLine, ContentCell, ButtonsLine, ButtonItem } = css
const DataList = (props) => {
    const { data = [] } = props
    const [dataType, setDataType] = useState("Income")
    const filteredData = data.filter(item => item.split("::")[1] === dataType)
    const filteredDataSumm = filteredData.reduce((sum, item) => sum += +item.split("::")[0], 0)

    const filteredDataDelta = data.reduce((delta, item) => {
        if (item.split("::")[1] === "Income")
            return delta + +item.split("::")[0]
        else if (item.split("::")[1] === "Expense")
            return delta - +item.split("::")[0]

        return delta
    }, 0)
    useEffect(() => {
        console.log(data)
    }, [])

    return (
        <React.Fragment>
            <ButtonsLine>
                <ButtonItem onClick={() => { setDataType("Income") }}>Income</ButtonItem>
                <ButtonItem onClick={() => { setDataType("Expense") }}>Expense</ButtonItem>
                <ButtonItem onClick={() => { setDataType("General") }}>General</ButtonItem>
            </ButtonsLine>
            <DataContainer>

                {filteredData.length > 0 && <React.Fragment>
                    {filteredData
                        .sort((a, b) => {
                            const num1 = parseInt(a.split("::")[0])
                            const num2 = parseInt(b.split("::")[0])

                            return num1 - num2
                        })
                        .map((item, index) => {
                            return (
                                <ContentLine key={index}>
                                    <ContentCell width={"15%"}>{item.split('::')[0]}</ContentCell>
                                    <ContentCell width={"15%"}>{item.split('::')[1]}</ContentCell>
                                    <ContentCell width={"70%"}>{item.split('::')[2]}</ContentCell>
                                </ContentLine>
                            )
                        })
                    }
                </React.Fragment>}
                {filteredData.length === 0 && <React.Fragment>
                    {data
                        .sort((a, b) => {
                            const num1 = parseInt(a.split("::")[0])
                            const num2 = parseInt(b.split("::")[0])

                            return num1 - num2
                        })
                        .map((item, index) => {
                            return (
                                <ContentLine key={index}>
                                    <ContentCell width={"15%"}>{item.split('::')[0]}</ContentCell>
                                    <ContentCell width={"15%"}>{item.split('::')[1]}</ContentCell>
                                    <ContentCell width={"70%"}>{item.split('::')[2]}</ContentCell>
                                </ContentLine>
                            )
                        })
                    }
                </React.Fragment>}
                <ContentLine>
                    <ContentCell width={"15%"}>Summ {filteredDataSumm}</ContentCell>
                    <ContentCell width={"15%"}>Delta {filteredDataDelta}</ContentCell>
                    <ContentCell width={"70%"}>--</ContentCell>
                </ContentLine>
            </DataContainer>
        </React.Fragment>
    )
}

export default DataList
