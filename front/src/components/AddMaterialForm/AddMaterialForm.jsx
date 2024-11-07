import './AddMaterialForm.style.scss';
import { FormLeftSide } from './FormLeftSide/FormLeftSide';
import { FormDescription } from './FormDescription/FormDescription';
import { FormLinkOrFile } from './FormLinkOrFile/FormLinkOrFile';
import { FormSubmitButton } from './FormSubmitButton/FormSubmitButton';

export const AddMaterialForm = () => {
  const readForm = () => {
    
  }

  return (
    <form className='add-material__form' onSubmit={readForm}>
        <h1 className="add-material__form__title">Форма для добавления новых материалов</h1>
        
        <div className="add-material__form__wrapper">
          <FormLeftSide />
          <FormDescription />
        </div>

        <FormLinkOrFile />
        <FormSubmitButton />
    </form>
  )
}