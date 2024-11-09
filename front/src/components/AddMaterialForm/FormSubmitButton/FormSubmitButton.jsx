import { useSubmit } from 'react-router-dom';
import './FormSubmitButton.style.scss';

export const FormSubmitButton = ({btnType, text}) => {

  return (
    <button type={btnType} className="add-material__form__submit-btn">
        {text}
    </button>
  )
}