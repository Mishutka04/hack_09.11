import { useState, useRef, useEffect } from 'react';
import { useChat } from '@/ChatContext';
import { useNavigate } from 'react-router-dom';
import './FavoriteMaterials.style.scss';

export const FavoriteMaterials = () => {
  const { favorites, removeFromFavorites, searchQuery, setSearchQuery, getChatIdForMessage, chats } = useChat();
  const [expandedMessages, setExpandedMessages] = useState({});
  const [messageHeights, setMessageHeights] = useState({});
  const messageRefs = useRef({});
  const navigate = useNavigate();

  useEffect(() => {
    Object.keys(messageRefs.current).forEach(id => {
      const height = messageRefs.current[id]?.scrollHeight || 0;
      setMessageHeights(prev => ({ ...prev, [id]: height }));
    });
  }, [favorites]);

  const toggleExpand = (id) => {
    setExpandedMessages(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredFavorites = favorites.filter(fav => 
    fav.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleGoToChat = (messageId) => {
    const chatId = getChatIdForMessage(messageId);
    if (chatId && chats.some(chat => chat.id === chatId)) {
      navigate(`/chat/${chatId}`);
    }
  };

  const isChatActive = (messageId) => {
    const chatId = getChatIdForMessage(messageId);
    return chatId && chats.some(chat => chat.id === chatId);
  };

  return (
    <div className="favorite-materials">
      <h2 className="favorite-materials__title">Избранные материалы</h2>
      <input
        type="text"
        placeholder="Поиск в избранном..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="favorite-materials__search"
      />
      <div className="favorite-materials__table-container">
        <table className="favorite-materials__table">
          <thead>
            <tr>
              <th className="favorite-materials__th favorite-materials__th--message">Сообщение</th>
              <th className="favorite-materials__th favorite-materials__th--actions">Действия</th>
            </tr>
          </thead>
          <tbody>
            {filteredFavorites.map(fav => (
              <tr key={fav.id} className="favorite-item">
                <td className="favorite-item__message-cell">
                  <div className={`favorite-item__message-wrapper ${expandedMessages[fav.id] ? 'expanded' : ''}`}>
                    <div 
                      ref={el => messageRefs.current[fav.id] = el}
                      className="favorite-item__message"
                    >
                      {fav.text}
                    </div>
                  </div>
                  {messageHeights[fav.id] > 100 && (
                    <button onClick={() => toggleExpand(fav.id)} className="favorite-item__expand">
                      {expandedMessages[fav.id] ? 'Свернуть' : 'Читать полностью'}
                    </button>
                  )}
                </td>
                <td className="favorite-item__actions-cell">
                  <div className="favorite-item__actions">
                    {isChatActive(fav.id) && (
                      <button onClick={() => handleGoToChat(fav.id)} className="favorite-item__goto">
                        Перейти в чат
                      </button>
                    )}
                    <button onClick={() => removeFromFavorites(fav.id)} className="favorite-item__remove">
                      Удалить из избранного
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};