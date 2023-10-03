import React, { useEffect, useState } from "react";
import css from "../../../styles/dataList.css";
import { Chart } from "react-google-charts";


const { DataContainer } = css
const DataChart = (props) => {

    const { data = [] } = props
    const filteredData = data.filter(item => item.split("::")[1] === "Expense")
    const [expenses, setExpenses] = useState({
        'Type of expense': 'Amount',
        'Rent': 20,
        'GroceryShopping': 10,
        'CarMaintenance': 50,
        'Clothes': 20
    })
    const pieChartData = Object.keys(expenses).map((x) => [x, expenses[x]]);


    useEffect(() => {
        filteredData.forEach(expense => {
            switch (expense.split("::")[2]) {
                case 'Rent':
                    setExpenses({
                        ...expenses,
                        Rent: expenses.Rent + parseInt(expense.split('::')[0])
                    })
                    break;
                case 'Grocery Shopping':
                    setExpenses(prev => ({
                        ...prev,
                        GroceryShopping: prev.GroceryShopping + parseInt(expense.split('::')[0])
                    }))
                    break;
                case 'Car Maintenance':
                    setExpenses(prev => ({
                        ...prev,
                        CarMaintenance: prev.CarMaintenance + parseInt(expense.split('::')[0])
                    }))
                    break;
                case 'Clothes':
                    setExpenses({...expenses,
                        Clothes: expenses.Clothes + parseInt(expense.split('::')[0])
                    })
                    break;
            }

        });
        console.log(1,filteredData)
    }, [])

    return (
        <DataContainer style={{ height: '500px' }} data={[]}>
            <Chart
                chartType="PieChart"
                data={pieChartData}
                options={{
                    title: "My Expenses",
                }}
                width={"100%"}
                height={"400px"}
            />
        </DataContainer>
    )
}
export default DataChart