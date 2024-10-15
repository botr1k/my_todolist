type ButtonPropsType = {
    name: string
    onClick?: () => void
};

export const Button = ({name, onClick}: ButtonPropsType) => {
    return (
        <button onClick={onClick}>{name}</button>
    );
};