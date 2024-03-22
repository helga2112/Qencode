import styles from './syles.module.scss';

interface BackdropWrapperProps {
  isVisible: boolean;
}

const BackdropWrapper = ({ isVisible }: BackdropWrapperProps) => {
  return (
    <div style={{ display: isVisible ? 'contents' : 'none' }}>
      <div className={styles.loader} />
      <div className={styles.backdrop} />
    </div>
  );
};

export default BackdropWrapper;
