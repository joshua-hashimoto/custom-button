export type ButtonProps = JSX.IntrinsicElements["a"] & {
    title: string;
    onTap: (event: React.MouseEvent<HTMLAnchorElement>) => void;
};
declare const Button: React.FC<ButtonProps>;
export default Button;
