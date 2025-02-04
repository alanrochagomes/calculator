import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #202020;
    display: flex;
    flex-direction: column;
`

export const HeaderStyle = styled.div`
    width: 100%;
    padding: 8px 16px;
    background-color: #202020;
    
    h1 {
        color: #FFFFFF;
        font-size: 16px;
        font-weight: normal;
        margin-bottom: 8px;
    }
`

export const Header = styled.div`
    display: flex;
    align-items: center;
    padding: 0 16px;
    margin-bottom: 10px;

    &:before {
        content: "☰";
        color: #FFFFFF;
        font-size: 20px;
        margin-right: 8px;
    }

    &:after {
        content: "Calculator";
        color: #FFFFFF;
        font-size: 14px;
    }
`

export const Content = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 1px;
    background-color: #202020;
`

export const MemoryRow = styled.div`
    display: flex;
    gap: 4px;
    margin-bottom: 10px;
    
    button {
        background: transparent;
        border: none;
        color: #808080;
        padding: 4px 8px;
        font-size: 12px;
        cursor: pointer;
        
        &:hover {
            background-color: rgba(255, 255, 255, 0.1);
        }
    }
`

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1px;
    flex: 1;
`