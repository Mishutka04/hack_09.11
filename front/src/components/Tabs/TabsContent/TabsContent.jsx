import './TabsContent.style.scss';
import { AllTables } from './AllTables/AllTables';
import { FavoriteMaterials } from './FavoriteMaterials/FavoriteMaterials';
import { SavedSearches } from './SavedSearches/SavedSearches';

// eslint-disable-next-line react/prop-types
export const TabsContent = ({ activeTabIndex }) => {
  const renderContent = () => {
    switch (activeTabIndex) {
      case 0:
        return <AllTables />;
      case 1:
        return <FavoriteMaterials />;
      case 2:
        return <SavedSearches />;
    }
  };

  return (
    <div className="tabs__content">
        {renderContent()}
    </div>
  )
}