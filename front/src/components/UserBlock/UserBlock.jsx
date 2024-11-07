import './UserBlock.style.scss';
import { useChat } from '@/ChatContext';
import { LogOut } from 'lucide-react';

export const UserBlock = () => {
  const { logout } = useChat();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="user-block">
      <div className="user-info">
        <div className="user-avatar">
          {/* Здесь может быть аватар пользователя */}
          <div className="avatar-placeholder">U</div>
        </div>
        <span className="user-name">Demo User</span>
      </div>
      <button className="logout-button" onClick={handleLogout}>
        <LogOut size={18} />
        <span>Выйти</span>
      </button>
    </div>
  );
};