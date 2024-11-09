// TabsList.jsx
import './TabsList.style.scss';
import { TabsTrigger } from './TabsTrigger/TabsTrigger';

// eslint-disable-next-line react/prop-types
export const TabsList = ({ activeTabIndex, onTabSelect }) => {
  return (
    <div className="tabs__list">
      <TabsTrigger 
        text="Все таблицы" 
        isActive={activeTabIndex === 0} 
        onClick={() => onTabSelect(0)} 
      />
      <TabsTrigger 
        text="Избранные поиски" 
        isActive={activeTabIndex === 1} 
        onClick={() => onTabSelect(1)} 
      />
    </div>
  );
};