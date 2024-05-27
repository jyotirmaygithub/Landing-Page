import React from 'react';
import { Fab, Tooltip } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';

const ChatbotButton = () => {
  const handleClick = () => {
    // Handle the click event to open chatbot
    console.log("Chatbot button clicked");
  };

  return (
    <Tooltip title="Click to chat with us" arrow>
      <Fab 
        color="primary" 
        aria-label="chat" 
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
        }}
        onClick={handleClick}
      >
        <ChatIcon />
      </Fab>
    </Tooltip>
  );
};

export default ChatbotButton;
