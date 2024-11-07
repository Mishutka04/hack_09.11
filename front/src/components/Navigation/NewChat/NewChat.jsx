import './NewChat.style.scss';
import { useChat } from '@/ChatContext';

export const NewChat = () => {
  const { createNewChat, hasEmptyChat } = useChat();

  const handleNewChat = () => {
    if (!hasEmptyChat) {
      createNewChat();
    }
  };

  return (
    <nav className={`nav__item ${hasEmptyChat ? 'disabled' : ''}`} onClick={handleNewChat}>
      <span className='new-chat'>Новый чат</span>
    </nav>
  );
};