import { useState } from 'react';
import './AllTables.style.scss';
import { Table } from './Table/Table';
import { Pagination } from './Pagination/Pagination';
import { getAllTablesData } from '@utils/getAllTablesData';

export const AllTables = () => {
  const tablesData = getAllTablesData();
  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="tabs__content__all-tables">
      <Table 
        allTablesData={tablesData} 
        currentPage={currentPage} 
        itemsPerPage={itemsPerPage} 
      />
      <Pagination 
        totalItems={tablesData.length} 
        itemsPerPage={itemsPerPage} 
        currentPage={currentPage}
        onPageChange={handlePageChange} 
      />
    </div>
  );
};