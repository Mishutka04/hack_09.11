import './FormPrioritySelect.style.scss';

export const FormPrioritySelect = () => {
  return (
    <div className="add-material__form__priority">
        <p className='add-material__form__priority__title'>Приоритет</p>
        <div className="add-material__form__priority__item">
            <input type="radio" name="priority" id='low-prior'/>
            <label htmlFor="low-prior">Низкий</label>
        </div>
        <div className="add-material__form__priority__item">
            <input type="radio" name="priority" id='medium-prior'/>
            <label htmlFor="medium-prior">Средний</label>
        </div>
        <div className="add-material__form__priority__item">
            <input type="radio" name="priority" id='high-prior'/>
            <label htmlFor="high-prior">Высокий</label>
        </div>
    </div>
  )
}
