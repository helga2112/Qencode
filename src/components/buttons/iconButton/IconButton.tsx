import styles from './styles.module.scss';

interface IconButtonProps {
  title: string;
  imgSource: string;
}

function IconButton({ title, imgSource }: IconButtonProps) {
  return (
    <button className={styles.loginButton}>
      <img src={imgSource} alt="" />
      {title}
    </button>
  );
}

export default IconButton;
