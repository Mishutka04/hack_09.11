import { useSubmit } from 'react-router-dom';
import './FormSubmitButton.style.scss';

export const FormSubmitButton = () => {

  return (
    <button type='submit' className="add-material__form__submit-btn">
        Отправить
    </button>
  )
}