import './InputWithValidation.scss'
import { UseControllerProps, useController } from 'react-hook-form';

type FormValues = {
  login: string
}

interface Props extends UseControllerProps<FormValues>{
  placeholder: string
}

const InputWithValidation = (props: Props) => {
  const {placeholder} = props

  const {
    field,
    fieldState: { error }
  } = useController(props);


  return (
    <div >
      <input
        {...field}
        className='LoginInput'
        placeholder={placeholder}
      />
      <div className='Error'>{error?.message}</div>
    </div>
  );
}

export default InputWithValidation;
