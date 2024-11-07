/* eslint-disable react/prop-types */
import './ScrollArea.style.scss';
import { Message } from './Message/Message';

export const ScrollArea = ({messages, messagesEndRef}) => {
  return (
    <div className="chat-bot__scroll-area" ref={messagesEndRef}>
      <div className="chat-bot__scroll-area__wrapper">
      {messages.map((message, index) => (
          <Message 
            key={index}
            text={message.text}    
            isUser={message.isUser}
            id={message.id}
          />
        ))}
      </div>
    </div>
  );
};