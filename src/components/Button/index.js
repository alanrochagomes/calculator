import { ButtonContainer } from './styles';

const Button = ({label, onClick, operation, equals}) => {
    return (
        <ButtonContainer 
            onClick={onClick}
            operation={operation}
            equals={equals}
        >
            {label}
        </ButtonContainer>
    )
}

export default Button;