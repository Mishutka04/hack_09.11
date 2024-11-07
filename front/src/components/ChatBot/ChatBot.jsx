import './ChatBot.style.scss';
import { useState, useEffect, useRef } from 'react';
import { ScrollArea } from './ScrollArea/ScrollArea';
import { randomChatIntroduce } from '@utils/randomChatIntroduce';
import { Form } from './Form/Form';
import { useChat } from '@/ChatContext';

export const ChatBot = () => {
  const [headerMessage, setHeaderMessage] = useState('');
  const [inputMessage, setInputMessage] = useState('');
  const { chats, currentChatId, createNewChat, addMessageToChat, autoSendMessage, setAutoSendMessage } = useChat();

  const messagesEndRef = useRef(null);
  
  useEffect(() => {
    setHeaderMessage(randomChatIntroduce());
  }, [currentChatId]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
    }
  }, [chats]);

  const handleSendMessage = (event, message = null) => {
    if (event) event.preventDefault();
    const messageToSend = message || inputMessage;
    if (messageToSend.trim() === '') return;
    
    const userMessage = { id: Date.now(), text: messageToSend, isUser: true, rating: 0 };
    
    let chatId = currentChatId;
    if (!chatId) {
      chatId = createNewChat(userMessage);
    } else {
      addMessageToChat(chatId, userMessage);
    }
    
    setInputMessage('');

    // Имитация ответа бота
    setTimeout(() => {
      const botMessage = { id: Date.now() + 1, text: `Вы сказали: "${messageToSend}"`, isUser: false, rating: 0 };
      addMessageToChat(chatId, botMessage);
    }, 1000);
  };

  const currentChat = chats.find(chat => chat.id === currentChatId);
  const messages = currentChat ? currentChat.messages : [];

  return (
    <div className="chat-bot">
      {messages.length === 0 && <h1 className="chat-bot__header-text">{headerMessage}</h1>}
      {messages.length !== 0 && 
      <ScrollArea 
        messages={messages}
        messagesEndRef={messagesEndRef}
      />}
      <Form 
        value={inputMessage} 
        changeInput={setInputMessage} 
        action={handleSendMessage} 
      />
    </div>
  );
};