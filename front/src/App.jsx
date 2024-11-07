import './App.style.scss';
import { ChatProvider, useChat } from './ChatContext';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LeftMenu } from '@layout/LeftMenu/LeftMenu';
import { Main } from '@layout/Main/Main';
import { Tables } from '@layout/Tables/Tables';
import { AddMaterial } from '@layout/AddMaterial/AddMaterial';
import { ChatBot } from '@/components/ChatBot/ChatBot';
import { Login } from '@/components/Login/Login';

function AppContent() {
  const { isAuthenticated } = useChat();

  if (!isAuthenticated) {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    );
  }

  return (
    <div className="app-wrapper">
      <LeftMenu />
      <Main>
        <Routes>
          <Route path="/" element={<ChatBot />} />
          <Route path="/chat/:chatId" element={<ChatBot />} />
          <Route path="/tables" element={<Tables />} />
          <Route path="/add-material" element={<AddMaterial />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <ChatProvider>
        <AppContent />
      </ChatProvider>
    </Router>
  );
}

export default App;