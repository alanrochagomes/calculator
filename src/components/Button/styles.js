import styled from 'styled-components';

const Button = ({label, onClick, operation, special, equals}) => {
    return (
        <ButtonContainer 
            onClick={onClick}
            operation={operation}
            special={special}
            equals={equals}
        >
            {label}
        </ButtonContainer>
    )
}

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #1E1E1E;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div`
    width: 100%;
    height: 100%;
    background-color: #1E1E1E;
    display: flex;
    flex-direction: column;
`

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    flex: 1;
    
    button {
        border: 1px solid rgba(255, 255, 255, 0.1);
    }
`

export const ButtonContainer = styled.button`
    padding: 20px;
    border: 1px solid #202020;
    background-color: ${props => {
        if (props.equals) return '#9D4EDD';
        if (props.operation) return '#323232';
        return '#3B3B3B';
    }};
    color: #FFFFFF;
    font-size: 24px;
    font-weight: 400;
    flex: 1;
    
    &:hover {
        background-color: ${props => {
            if (props.equals) return '#A357E3';
            if (props.operation) return '#404040';
            return '#4A4A4A';
        }};
    }
    
    &:active {
        background-color: ${props => {
            if (props.equals) return '#8A44D5';
            if (props.operation) return '#2A2A2A';
            return '#303030';
        }};
    }
`

export const InputContainer = styled.div`
    width: 100%;
    background-color: #AAAAFF;
    padding: 30px;
    
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    
    input {
        width: 100%;
        background-color: transparent;
        border: 0;
        text-align: right;
        padding: 0;
        font-size: 48px;
        font-family: 'Roboto', sans-serif;
        color: #FFFFFF;
        outline: none;
    }
`

export { Button };