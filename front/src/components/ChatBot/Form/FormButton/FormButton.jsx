import './FormButton.style.scss';
import arrow from '@assets/arrow-up.svg';

export const FormButton = () => {
  return (
    <button className='form__button' type="submit">
        <img src={arrow} alt="arr" className='form__button__img'/>
    </button>
  )
}