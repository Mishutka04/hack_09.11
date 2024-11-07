import './Form.style.scss';
import { FormInput } from './FormInput/FormInput';
import { FormButton } from './FormButton/FormButton';

// eslint-disable-next-line react/prop-types
export const Form = ({action, value, changeInput}) => {
  return (
    <form onSubmit={action} className="chat-bot__form">
        <FormInput value={value} changeInput={changeInput}>
            <FormButton/>
        </FormInput>
    </form>
  )
}