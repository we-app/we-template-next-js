import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { css } from 'styled-components';

type ButtonProps = {
  isLoading?: boolean;
  children?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const StyledButton = styled.button<ButtonProps>`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  ${({ disabled, isLoading }) =>
    (disabled || isLoading) &&
    css`
      opacity: 0.5;
      pointer-events: none;
      cursor: default;
    `}
  height: 50px;
  border-radius: 10px;
  border: none;
  width: 100%;
`;

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.5);
  border-top: 4px solid lightgrey;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  animation: ${rotate} 1s linear infinite;
  display: block;
  margin: auto;
`;

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
  <StyledButton {...props}>
    {props.isLoading ? <Spinner /> : children}
  </StyledButton>
);
