import './RecentChats.style.scss';
import { useChat } from '@/ChatContext';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { MoreHorizontal, Trash } from 'lucide-react'; // ПЕРЕДЕЛАТЬ
import { useRef, useEffect } from 'react';

export const RecentChats = () => {
  // Пиздец как баговано работает, надо всё фиксить
  const { chats, currentChatId, switchChat, deleteChat } = useChat();
  const [menuOpen, setMenuOpen] = useState(null);
  const recentChatsRef = useRef(null);

  useEffect(() => {
    const checkForScrollbar = () => {
      if (recentChatsRef.current) {
        if (recentChatsRef.current.scrollHeight > recentChatsRef.current.clientHeight) {
          recentChatsRef.current.classList.add('has-scroll');
        } else {
          recentChatsRef.current.classList.remove('has-scroll');
        }
      }
    };

    checkForScrollbar();
    window.addEventListener('resize', checkForScrollbar);
    return () => {
      window.removeEventListener('resize', checkForScrollbar);
    };
  }, []);

  if (chats.length === 0) {
    return <h3>Ваши чаты</h3>;
  }

  const toggleMenu = (chatId) => {
    setMenuOpen(menuOpen === chatId ? null : chatId);
  };

  return (
    <div className="recent-chats">
      <h3>Ваши чаты</h3>
      <ul className='recent-chats__list' ref={recentChatsRef}>
        {chats.map((chat) => (
          <div key={chat.id} className="recent-chats__list__item">
            <Link 
              to={`/chat/${chat.id}`}
              className={`recent-chats__list__chat ${chat.id === currentChatId ? 'active' : ''}`}
              onClick={() => switchChat(chat.id)}
            >
              <span className='recent-chats__list__chat__text'>{chat.title}</span>
            </Link>
            <button className="recent-chats__list__menu-button" onClick={() => toggleMenu(chat.id)}>
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
        ))}
      </ul>
    </div>
  );
};