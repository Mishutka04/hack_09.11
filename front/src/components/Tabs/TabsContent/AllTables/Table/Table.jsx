/* eslint-disable react/prop-types */
import './Table.style.scss';
import { TableHeader } from './TableHeader/TableHeader';
import { TableRow } from './TableRow/TableRow';

export const Table = ({ allTablesData, currentPage, itemsPerPage }) => {
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageData = allTablesData.slice(startIndex, endIndex);

  return (
    <div className="all-tables__table">
      <TableHeader />
      {currentPageData.map((tableRow, index) => (
        <TableRow 
          key={startIndex + index}
          rowData={tableRow}
        />
      ))}
    </div>
  )
}