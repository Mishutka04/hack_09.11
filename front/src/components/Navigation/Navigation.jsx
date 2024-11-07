import './Navigation.style.scss';
import tablesIcon from '@assets/tables.svg';
import folderPlus from '@assets/folder-plus.svg';
import { NewChat } from './NewChat/NewChat';
import { RedirectBlock } from './RedirectBlock/RedirectBlock';
import { RecentChats } from './RecentChats/RecentChats';

export const Navigation = () => {
  return (
    <nav className="nav-menu">
      <div className="nav-menu__top">
        <NewChat />
        <RedirectBlock 
          link={'/tables'}
          img={tablesIcon}
          text={'Таблицы'}
        />
        <RedirectBlock 
          link={'/add-material'}
          img={folderPlus}
          text={'Добавить материал'}
        />
      </div>
      <hr />
      <div className="nav-menu__bottom">
        <RecentChats />
      </div>
    </nav>
  )
}