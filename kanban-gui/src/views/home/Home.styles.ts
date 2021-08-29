import styled from 'styled-components';

const AccountContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 0;
    padding-top: 50px;
    padding-left: 7.5%;
    padding-right: 15%;

    & ul {
        margin: 0;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        list-style-type: none;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        width: 70%;
    }
`

export { AccountContainer }