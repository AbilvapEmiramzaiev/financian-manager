import React from "react";
import css from "../../../styles/dataList.css";

const { DataContainer, ContentLine, ContentCell } = css
const DataList = (props) => {
    const { data = [] } = props
    return (
        <React.Fragment>
            <DataContainer>
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

            </DataContainer>
        </React.Fragment>
    )
}

export default DataList
