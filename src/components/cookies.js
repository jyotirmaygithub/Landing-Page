import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';

const CookieConsent = ({ message = "We use cookies to improve your experience. By using our site, you accept our use of cookies." }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    console.log('All cookies accepted');
    localStorage.setItem('cookie-consent', 'accepted');
    setVisible(false);
  };

  const handleReject = () => {
    console.log('All cookies rejected');
    localStorage.setItem('cookie-consent', 'rejected');
    setVisible(false);
  }
  
  if (!visible) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      padding: '40px',
      backgroundColor: 'white',
      color: 'black',
      zIndex: 20,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    }}>
      <span>{message}</span>
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <Button 
          variant="contained" 
          style={{ backgroundColor: 'black', color: 'white' }} 
          onClick={handleAccept}
        >
          Accept All
        </Button>
        <Button 
          variant="outlined" 
          style={{ borderColor: 'black', color: 'black' }} 
          onClick={handleReject}
        >
          Reject All
        </Button>
      </div>
    </div>
  );
};

export default CookieConsent;
