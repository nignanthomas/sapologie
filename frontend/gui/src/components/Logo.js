import styled from 'styled-components';

export const LogoContainer = styled.button`
    font-family: ${props => props.cartnav?"'Oswald', sans-serif":"'Geostar Fill', cursive"};
    letter-spacing: ${props => props.cartnav?"0.1rem":"0.3rem"};
    text-transform: capitalize;
    font-size: 1.4rem;
    background: var(--mainWhite);
    border: none;
    color:var(--mainDark);
    padding: 0.2rem 0.5rem;
    cursor: pointer;
    margin: 0.2rem 0.5rem 0.2rem 0;
    transition: all 0.3s ease-in-out;

&:hover{
    background:var(--mainDark);
    color: var(--mainWhite);
}

&:focus{
    outline: none;
}
`;