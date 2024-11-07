import './TableRowCell.style.scss';

// eslint-disable-next-line react/prop-types
export const TableRowCell = ({ text }) => {
  return (
    <span className="all-tables__table__row__cell">{text}</span>
  )
}