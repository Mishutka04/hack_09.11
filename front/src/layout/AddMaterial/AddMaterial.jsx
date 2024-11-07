import { AddMaterialForm } from '@components/AddMaterialForm/AddMaterialForm';
import './AddMaterial.style.scss';

export const AddMaterial = () => {
  return (
    <div className="add-material">
      <div className="add-material__about">
        <h1 className="add-material__about__title">Добавление материалов</h1>
        <p className="add-material__about__subtitle">
          Помогите нам поддерживать библиотеку материалов актуальной
        </p>
        <p className="add-material__about__text">
          Используйте эту форму, чтобы добавить новые материалы или обновить существующие.
        </p>
        <p className='add-material__about__text'>Укажите важные детали, такие как название, описание, дату добавления, и любые ключевые особенности, которые помогут вашим коллегам быстрее находить нужные материалы.</p>
        <p className='add-material__about__text'>Помните, что точность и полнота данных облегчат использование библиотеки для всех сотрудников.</p>
      </div>
      <AddMaterialForm />
    </div>
  )
}