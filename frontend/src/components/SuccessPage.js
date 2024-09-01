// src/SuccessPage.js
import React from 'react';

const SuccessPage = () => {
  console.log("SuccessPage component is rendering");

  const downloadPDF = () => {
    console.log("Route to download PDF");

    // Directly navigate to the static file URL
    window.location.href = '/static/frames/output.pdf'; 
    console.log("Download initiated");
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Success!</h1>
      <p>Your PDF has been successfully generated. Click the button below to download it.</p>
      <button onClick={downloadPDF} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Download PDF
      </button>
    </div>
  );
};

export default SuccessPage;
