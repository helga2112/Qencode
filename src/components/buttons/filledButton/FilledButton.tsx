import styles from './styles.module.scss';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  styleName?: string;
}

const FilledButton = (props: ButtonProps) => {
  const { styleName, children, ...rest } = props;
  return (
    <div className={styleName}>
      <button className={styles.filledButton} {...rest}>
        {children}
      </button>
    </div>
  );
};

export default FilledButton;
