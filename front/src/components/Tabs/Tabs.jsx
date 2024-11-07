// Tabs.jsx
import './Tabs.style.scss';
import { TabsContent } from './TabsContent/TabsContent';
import { TabsList } from './TabsList/TabsList';
import { useState } from 'react';

export const Tabs = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div className="tabs">
      <TabsList activeTabIndex={activeTabIndex} onTabSelect={setActiveTabIndex} />
      <TabsContent 
        activeTabIndex={activeTabIndex}
      />
    </div>
  );
};