import { useState } from 'react';
import { useChat } from '@/ChatContext';
import './Message.style.scss';

export const Message = ({text, isUser, id}) => {
  const { addToFavorites, removeFromFavorites, favorites, copyMessage, regenerateMessage, updateMessageRating } = useChat();

  const [isFavorite, setIsFavorite] = useState(favorites.some(fav => fav.id === id));

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFromFavorites(id);
    } else {
      addToFavorites({ id, text });
    }
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={`message-block ${isUser ? 'user' : 'bot'}`}>
      <img 
        src={isUser ? "/path/to/user-icon.png" : "/path/to/bot-icon.png"} 
        className='message-icon' 
        alt={isUser ? 'User' : 'Bot'} 
      />
      <span className='message-text'>{text}</span>
      {!isUser && (
        <div className='bot__buttons'>
          <button className='bot__button copy-button' onClick={() => copyMessage(id)}>
            Copy
          </button>
          <button className='bot__button retry-button' onClick={() => regenerateMessage(id)}>
            Retry
          </button>
          <button className='bot__button like-button' onClick={() => updateMessageRating(id, true)}>
            Like
          </button>
          <button className='bot__button dislike-button' onClick={() => updateMessageRating(id, false)}>
            Dislike
          </button>
          <button onClick={toggleFavorite} className="bot__button favorite-button">
            {isFavorite ? '★' : '☆'}
          </button>
        </div>
      )}
    </div>
  );
};