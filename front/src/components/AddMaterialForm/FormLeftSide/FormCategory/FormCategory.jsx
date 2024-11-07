import './FormCategory.style.scss'

export const FormCategory = () => {
  return (
    <div className="add-material__form__category">
        <label htmlFor="category">Категория</label>
        <select name="category" className='add-material__form__select'>
            <option value="presentation" className="add-material__form__select__option">Презентация</option>
            <option value="video" className="add-material__form__select__option">Видео</option>
            <option value="text" className="add-material__form__select__option">Текст</option>
            <option value="images" className="add-material__form__select__option">Изображения</option>
        </select>
    </div>
  )
}