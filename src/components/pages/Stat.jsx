import React from "react";
import DataList from "../views/local/DataList";
import DataChart from "../views/local/DataChart";
const Plan = ({statData}) =>{
    return(
        <React.Fragment>
            <DataList data ={statData}></DataList>
            <DataChart data ={statData}></DataChart>
        </React.Fragment>
    )
}

export default Plan;