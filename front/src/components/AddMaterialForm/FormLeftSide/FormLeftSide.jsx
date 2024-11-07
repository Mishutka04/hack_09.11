import './FormLeftSide.style.scss';
import { FormMaterialName } from './FormMaterialName/FormMaterialName';
import { FormCategory } from './FormCategory/FormCategory';
import { FormPrioritySelect } from './FormPrioritySelect/FormPrioritySelect';

export const FormLeftSide = () => {
  return (
    <div className="add-material__form__left-side">
        <FormMaterialName />
        <FormCategory />
        <FormPrioritySelect />
    </div>
  )
}