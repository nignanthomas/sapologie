import styled from 'styled-components';

export const ButtonContainer = styled.button`
    text-transform: capitalize;
    font-size: 1.4rem;
    background: ${props => props.cart?"var(--mainDark)":"white"};
    border: none;
    border-color:${props => props.cart?"white":"var(--mainDark)"};
    color: ${props => props.cart?"var(--mainWhite)":"var(--mainDark)"};
    padding: 0.2rem 0.5rem;
    cursor: pointer;
    margin: 0.2rem 0.5rem 0.2rem 0;
    transition: all 0.5s ease-in-out;

&:hover{
    background: ${props => props.cart?"white":"var(--mainDark)"};
    color: ${props => props.cart?"var(--mainDark)":"white"};
}

&:focus{
    outline: none;
}
`;