import { FieldValues, Path, UseFormRegister } from 'react-hook-form';
import styles from './styles.module.scss';

interface Props<TFieldValues extends FieldValues> {
  name: Path<TFieldValues>;
  placeholder: string;
  register: UseFormRegister<TFieldValues>;
  error?: string;
}

const InputWithValidation = <TFieldValues extends FieldValues>({
  placeholder,
  error,
  name,
  register,
}: Props<TFieldValues>) => {
  return (
    <div>
      <input
        {...register(name)}
        className={styles.loginInput}
        placeholder={placeholder}
      />
      <div className={styles.error}>{error}</div>
    </div>
  );
};

export default InputWithValidation;
