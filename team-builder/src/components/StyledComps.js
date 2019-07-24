import styled from 'styled-components'

export const CardDiv = styled.div`
    background-color: #404040;
    color: white;
    border: 2px solid #666666;
    border-radius: 6px;
    width: 200px;
`;

export const CardGrid = styled.div`
    margin: 50px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
`;