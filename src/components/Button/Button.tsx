import styles from "./Button.module.scss";

export type ButtonProps = JSX.IntrinsicElements["a"] & {
  title: string;
  onTap: (event: React.MouseEvent<HTMLAnchorElement>) => void;
};

const Button: React.FC<ButtonProps> = ({ title, onTap, ...props }) => {
  return (
    <a {...props} className={styles.btnSquare} onClick={onTap}>
      {title}
    </a>
  );
};

export default Button;
