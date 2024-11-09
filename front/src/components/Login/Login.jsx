import './Login.style.scss';
import { useState } from 'react';
import { useChat } from '@/ChatContext';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useChat();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(username, password)) {
      navigate('/');
    } else {
      setError('Неверное имя пользователя или пароль');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1>Media Wise x BitcoinBandits</h1>
        <h2>Добро пожаловать в Чат-бот</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <h2>Авторизация</h2>
          {error && <p className="error">{error}</p>}
          <div>
            <label htmlFor="username">Логин:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Пароль:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Войти</button>
        </form>
      </div>
    </div>
  );
};