import './InputWithValidation.scss'
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';


interface Props<TFieldValues extends FieldValues> {
  name: Path<TFieldValues>
  placeholder: string
  register: UseFormRegister<TFieldValues>
  error?: string
}

const InputWithValidation = <TFieldValues extends FieldValues>(props: Props<TFieldValues>) => {
  const { placeholder, error, name, register } = props

  return (
    <div >
      <input {...register(name)} className='LoginInput' placeholder={placeholder} />
      <div className='Error'>{error}</div>
    </div>
  );
}

export default InputWithValidation;
