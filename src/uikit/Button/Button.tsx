import { Button, ButtonProps } from '@material-ui/core';

interface Props extends ButtonProps {
    onClick: () => void;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
    children: React.ReactNode;
}

export const UiButton = ({
    onClick,
    disabled,
    type,
    className,
    children,
    ...rest
}: Props) => {
    return (
        <Button
            onClick={onClick}
            disabled={disabled}
            type={type}
            className={className}
            {...rest}
        >
            {children}
        </Button>
    );
};
