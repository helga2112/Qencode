import styles from './styles.module.scss';

interface SimpleButtonProps {
  title: string;
  styleName?: string;
  onClick?: () => void;
}

function SimpleButton({ title, onClick, styleName }: SimpleButtonProps) {
  return (
    <div className={styleName}>
      <button className={styles.simpleButton} onClick={onClick}>
        {title}
      </button>
    </div>
  );
}

export default SimpleButton;
