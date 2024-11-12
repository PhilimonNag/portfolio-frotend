import React, { useEffect, useState } from 'react';

const Snackbar = ({ message, onClose, type }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose(); 
    }, 3000); 

    return () => clearTimeout(timer);
  }, [onClose]);

  // Determine the background color based on the type
  const getBackgroundColor = () => {
    if (type === 'success') return 'bg-green-500';
    if (type === 'error') return 'bg-red-500';
    if (type === 'loading') return 'bg-yellow-500';
    return 'bg-gray-500';
  };

  return (
    visible && (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div
          className={`${getBackgroundColor()} text-white px-6 py-3 rounded-lg shadow-lg transition-opacity duration-300 ease-in-out`}
          style={{ opacity: visible ? 1 : 0 }}
        >
          {message}
        </div>
      </div>
    )
  );
};

export default Snackbar;
