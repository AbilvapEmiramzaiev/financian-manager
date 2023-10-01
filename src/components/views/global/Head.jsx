import React from "react";
import css from "../../../styles/styles.css";

const {HeaderContainer, HeaderCSS} = css

const buttonCSS = {
    display: 'block',
    fontSize: `15px`,
    marginRight: `4px`,
    padding: `8px 20px 10px`,
    borderRadius: `6px`,
    backgroundColor: `#65db84`,
    cursor: `pointer`
}
const Head = (props) =>{
    const {action} = props
    return(
        <React.Fragment>
            <HeaderContainer>
                <HeaderCSS.Logo>Financial Manager</HeaderCSS.Logo>
                <HeaderCSS.MenuContainer>
                    <button onClick={()=> action('main')} style={buttonCSS}>Home</button>
                    <button onClick={()=> action('stat')} style={buttonCSS}>Statistic</button>
                    <button style={buttonCSS}>Planning</button>
                </HeaderCSS.MenuContainer>
            </HeaderContainer>
        </React.Fragment>
    )
}

export default Head;