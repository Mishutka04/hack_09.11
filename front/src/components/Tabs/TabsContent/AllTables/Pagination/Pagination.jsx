import './Pagination.style.scss';

// eslint-disable-next-line react/prop-types
export const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const nextPage = () => {
    onPageChange((currentPage + 1) % totalPages);
  };

  const prevPage = () => {
    onPageChange((currentPage - 1 + totalPages) % totalPages);
  };

  return (
    <div className="all-tables__pagination">
      <span>Страница {currentPage + 1} из {totalPages}</span>
      <div className="all-tables__pagination__buttons">
        <div className="all-tables__pagination__button" onClick={prevPage}>
          {'Предыдущая'}
        </div>
        <div className="all-tables__pagination__button" onClick={nextPage}>
          {'Следующая'}
        </div>
      </div>
    </div>
  );
};