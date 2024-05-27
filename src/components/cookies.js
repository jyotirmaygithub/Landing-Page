import React, { useState } from 'react';
import { Button } from '@mui/material';

const CookieConsent = () => {
  const [visible, setVisible] = useState(true);

  const handleAccept = () => {
    // Handle the logic for accepting cookies
    console.log('All cookies accepted');
    setVisible(false);
  };

  const handleReject = () => {
    // Handle the logic for rejecting cookies
    console.log('All cookies rejected');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-white text-black z-20 py-10 flex justify-between items-center">
      <span>We use cookies to improve your experience. By using our site, you accept our use of cookies.</span>
      <div className='space-x-5'>
        <Button 
          variant="contained" 
          style={{ backgroundColor: 'black', color: 'white' }} 
          className="mr-2" 
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
