import './FormDescription.style.scss'

export const FormDescription = () => {
  return (
    <div className="add-material__form__description">
      <label htmlFor="material-description">Описание материала</label>
      <textarea name="material-description" className='add-material__form__textarea'></textarea>
    </div>
  )
}
