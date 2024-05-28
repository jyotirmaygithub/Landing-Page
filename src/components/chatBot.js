import React from 'react';
import { Fab, Tooltip } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import { useNavigate } from "react-router-dom";

export default function ChatbotButton(){
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('contact')
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
