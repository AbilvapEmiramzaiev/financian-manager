import styled from "styled-components";

const css = {
    FormContainer: styled.div`
        display: flex;
        flex-direction:column;
        align-items:center;
        justify-content:flex-start;
        position:relative;
        width:600px;
        height:auto;
        min-height:60px;
        border-radius:8px;
        box-shadow: 2px 0px 3px grey;
        margin: 40px auto 40px;
        padding:20px;
        :last-child {
            margin-bottom: 0px;
        }
    `,
    Input: styled.input`
        display:block;
        position:relative;
        width:100%;
        height:40px;
        outline:none;
        border:none;
        background-color: rgb(229,229,229);
        border-radius:5px;  
        padding-left:15px; 
        margin: 0 0 10px 0; 
    `,
    Button: styled.span`
        display:block;
        position:relative;
        width:220px;
        height:44px;
        line-height:42px;
        border-radius: 4px;
        text-align:center;
        cursor:pointer;
        background-color: ${props => props.backgroundcolor};
    `
}
export default css