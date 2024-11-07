import './FormInput.style.scss';

// eslint-disable-next-line react/prop-types
export const FormInput = ({children, value, changeInput}) => {
  return (
    <div className="form__input-wrapper">
        <input className='form__input' type="text" value={value} onChange={(e) => changeInput(e.target.value)}/>
        {children}
    </div>
  )
}