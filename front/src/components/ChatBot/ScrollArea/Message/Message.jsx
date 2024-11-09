import { useChat } from '@/ChatContext';
import './Message.style.scss';

export const Message = ({text, isUser, id}) => {
  const { addToFavorites, removeFromFavorites, isFavorite, copyMessage, regenerateMessage, updateMessageRating } = useChat();

  const toggleFavorite = () => {
    if (isFavorite(id)) {
      removeFromFavorites(id);
    } else {
      addToFavorites({ id, text });
    }
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
            {isFavorite(id) ? '★' : '☆'}
          </button>
        </div>
      )}
    </div>
  );
};