/* eslint-disable react/prop-types */
import './TableRow.style.scss';
import { TableRowCell } from './TableRowCell/TableRowCell';
import { getValuesFromObject } from '@utils/getValuesFromObject';

export const TableRow = ({ rowData }) => {
  return (
    <div className="all-tables__table__row">
        {getValuesFromObject(rowData).map((value, index) => (
            <TableRowCell
                key={index}
                text={value}
            />
        ))}
    </div>
  )
}