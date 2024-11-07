import { useChat } from '@/ChatContext';
import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { MoreHorizontal, Trash } from 'lucide-react';
import './RecentChats.style.scss';

export const RecentChats = () => {
  const { chats, currentChatId, switchChat, deleteChat } = useChat();
  const [menuOpen, setMenuOpen] = useState(null);
  const recentChatsRef = useRef(null);

  useEffect(() => {
    const checkForScrollbar = () => {
      if (recentChatsRef.current) {
        const hasScroll = recentChatsRef.current.scrollHeight > recentChatsRef.current.clientHeight;
        recentChatsRef.current.classList.toggle('has-scroll', hasScroll);
      }
    };

    checkForScrollbar();
    window.addEventListener('resize', checkForScrollbar);
    return () => window.removeEventListener('resize', checkForScrollbar);
  }, [chats]);

  if (chats.length === 0) {
    return <h3>Ваши чаты</h3>;
  }

  const toggleMenu = (chatId, event) => {
    event.stopPropagation();
    setMenuOpen(menuOpen === chatId ? null : chatId);
  };

  return (
    <div className="recent-chats">
      <h3>Ваши чаты</h3>
      <div className="recent-chats__wrapper">
        <ul className='recent-chats__list' ref={recentChatsRef}>
          {chats.map((chat) => (
            <li key={chat.id} className="recent-chats__list__item">
              <Link 
                to={`/chat/${chat.id}`}
                className={`recent-chats__list__chat ${chat.id === currentChatId ? 'active' : ''}`}
                onClick={() => switchChat(chat.id)}
              >
                <span className='recent-chats__list__chat__text'>{chat.title}</span>
              </Link>
              <div className="recent-chats__list__menu-container">
                <button className="recent-chats__list__menu-button" onClick={(e) => toggleMenu(chat.id, e)}>
                  <MoreHorizontal size={16} />
                </button>
                {menuOpen === chat.id && (
                  <div className="recent-chats__list__menu">
                    <button onClick={() => deleteChat(chat.id)} className="recent-chats__list__menu__item">
                      <Trash size={16} />
                      <span>Удалить</span>
                    </button>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};