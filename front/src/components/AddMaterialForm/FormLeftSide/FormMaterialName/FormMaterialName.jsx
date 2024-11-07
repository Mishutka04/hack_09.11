import './FormMaterialName.style.scss';

export const FormMaterialName = () => {
  return (
    <div className="add-material__form__material-name">
        <label htmlFor="material-name">Название материала</label>
        <input type="text" name='material-name' className='add-material__form__input-text' />
    </div>
  )
}
