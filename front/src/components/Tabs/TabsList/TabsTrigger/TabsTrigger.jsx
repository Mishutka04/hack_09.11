import './TabsTrigger.style.scss';

// eslint-disable-next-line react/prop-types
export const TabsTrigger = ({ text, isActive, onClick }) => {
  return (
    <div 
      className={`tabs__list__trigger ${isActive ? 'active-tab' : ''}`} 
      onClick={onClick}
    >
      <span>{text}</span>
    </div>
  );
};