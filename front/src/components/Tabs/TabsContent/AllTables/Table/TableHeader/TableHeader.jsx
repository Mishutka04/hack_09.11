import './TableHeader.style.scss';
import { TableHeaderTitle } from './TableHeaderTitle/TableHeaderTitle';

export const TableHeader = () => {
  return (
    <div className="all-tables__table__header">
        <TableHeaderTitle 
            title={'Имя'}
        />
        <TableHeaderTitle 
            title={'Фамилия'}
        />
        <TableHeaderTitle 
            title={'Опыт'}
        />
        <TableHeaderTitle 
            title={'Профессия'}
        />
        <TableHeaderTitle 
            title={'Хобби'}
        />
    </div>
  )
}