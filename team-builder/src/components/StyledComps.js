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

export const EditButton = styled.button`
    border-radius: 6px;
    border: 1px solid gray;
    height: 28px;
    width: 28px;
    margin-left: 170px;
`;

export const NameAndEditDiv = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
`;

export const StyledSubmit = styled.input`
    margin-left: 10px;
    border-radius: 8px;
    border: 2px solid gray;
    background-color: black;
    color: white;
`;