import { createContext, useState, useContext, useEffect, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { uuid4 } from 'uuid4';

const ChatContext = createContext();

const user = {
  login: 'user',
  password: '1234',
  name: 'Demo User'
};

export const ChatProvider = ({ children }) => {
  const [chats, setChats] = useState([]);
  const [currentChatId, setCurrentChatId] = useState(null);
  const [autoSendMessage, setAutoSendMessage] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const chatIdFromPath = location.pathname.split('/').pop();
    if (chatIdFromPath !== 'chat' && chatIdFromPath !== currentChatId) {
      setCurrentChatId(chatIdFromPath);
    }
  }, [location]);

  useEffect(() => {
    const storedAuth = localStorage.getItem('isAuthenticated');
    if (storedAuth === 'true') {
      setIsAuthenticated(true);
      const storedChats = JSON.parse(localStorage.getItem('chats') || '[]');
      setChats(storedChats);
      const storedCurrentChatId = localStorage.getItem('currentChatId');
      if (storedCurrentChatId) {
        setCurrentChatId(storedCurrentChatId);
      }
      const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
      setFavorites(storedFavorites);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      localStorage.setItem('chats', JSON.stringify(chats));
      localStorage.setItem('favorites', JSON.stringify(favorites));
      if (currentChatId) {
        localStorage.setItem('currentChatId', currentChatId);
      }
    }
  }, [chats, currentChatId, favorites, isAuthenticated]);

  const hasEmptyChat = useMemo(() => {
    return chats.some(chat => chat.messages.length === 0);
  }, [chats]);

  const createNewChat = (initialMessage = null) => {
    if (hasEmptyChat && !initialMessage) {
      return;
    }
    const newChatId = uuid4();
    const newChat = { id: newChatId, messages: [], title: `New Chat` };
    if (initialMessage) {
      newChat.messages.push(initialMessage);
      newChat.title = initialMessage.text.slice(0, 30);
    }
    setChats(prevChats => [...prevChats, newChat]);
    setCurrentChatId(newChatId);
    navigate(`/chat/${newChatId}`);
    return newChatId;
  };

  const switchChat = (chatId) => {
    setCurrentChatId(chatId);
    navigate(`/chat/${chatId}`);
  };

  const addMessageToChat = (chatId, message) => {
    setChats(prevChats => 
      prevChats.map(chat => 
        chat.id === chatId 
          ? { 
              ...chat, 
              messages: [...chat.messages, message],
              title: chat.messages.length === 0 ? message.text.slice(0, 30) : chat.title
            }
          : chat
      )
    );
  };

  const deleteChat = (chatId) => {
    setChats(prevChats => prevChats.filter(chat => chat.id !== chatId));
    if (currentChatId === chatId) {
      const remainingChats = chats.filter(chat => chat.id !== chatId);
      if (remainingChats.length > 0) {
        switchChat(remainingChats[0].id);
      } else {
        setCurrentChatId(null);
        navigate('/');
      }
    }
  };

  const login = (username, password) => {
    if (username === user.login && password === user.password) {
      setIsAuthenticated(true);
      localStorage.setItem('isAuthenticated', 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setChats([]);
    setCurrentChatId(null);
    setFavorites([]);
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('chats');
    localStorage.removeItem('currentChatId');
    localStorage.removeItem('favorites');
    navigate('/');
  };

  const sendRecentQuery = (query) => {
    setAutoSendMessage(query);
  };

  const addToFavorites = (material) => {
    setFavorites(prevFavorites => [...prevFavorites, material]);
  };

  const removeFromFavorites = (materialId) => {
    setFavorites(prevFavorites => prevFavorites.filter(fav => fav.id !== materialId));
  };

  const copyMessage = (messageId) => {
    const message = chats.flatMap(chat => chat.messages).find(msg => msg.id === messageId);
    if (message) {
      navigator.clipboard.writeText(message.text);
    }
  };

  const regenerateMessage = (messageId) => {
    console.log(`Regenerating message with ID: ${messageId}`);
  };

  const updateMessageRating = (messageId, increment) => {
    setChats(prevChats => 
      prevChats.map(chat => ({
        ...chat,
        messages: chat.messages.map(msg => 
          msg.id === messageId 
            ? { ...msg, rating: msg.rating + (increment ? 1 : -1) }
            : msg
        )
      }))
    );
  };

  const isFavorite = (messageId) => {
    return favorites.some(fav => fav.id === messageId);
  };

  const getChatIdForMessage = (messageId) => {
    for (const chat of chats) {
      if (chat.messages.some(msg => msg.id === messageId)) {
        console.log(`chat id is ${chat.id}`)
        return chat.id;
      }
    }
    return null;
  };

  return (
    <ChatContext.Provider value={{ 
      chats, 
      currentChatId, 
      autoSendMessage,
      favorites,
      searchQuery,
      createNewChat, 
      addMessageToChat,
      deleteChat,
      sendRecentQuery,
      setAutoSendMessage,
      switchChat,
      addToFavorites,
      removeFromFavorites,
      copyMessage,
      regenerateMessage,
      updateMessageRating,
      hasEmptyChat,
      isAuthenticated,
      login,
      logout,
      isFavorite,
      getChatIdForMessage,
      setSearchQuery
    }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
};