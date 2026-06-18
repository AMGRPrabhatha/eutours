import { motion, AnimatePresence } from 'framer-motion';

const FormModal = ({ isOpen, onClose, status, message }) => {
  if (!isOpen) return null;

  const isSuccess = status === 'success';

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="modal-overlay" style={overlayStyle} onClick={onClose}>
          <motion.div
            className="modal-content"
            style={contentStyle}
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: "spring", bounce: 0.3, duration: 0.4 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={iconContainerStyle(isSuccess)}>
              {isSuccess ? (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              ) : (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
              )}
            </div>
            
            <h3 style={titleStyle}>{isSuccess ? 'Success!' : 'Oops!'}</h3>
            <p style={messageStyle}>{message}</p>
            
            <button style={buttonStyle(isSuccess)} onClick={onClose}>
              {isSuccess ? 'Continue' : 'Try Again'}
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

// Inline styles for quick implementation without modifying global CSS
const overlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 9999,
  backdropFilter: 'blur(4px)',
};

const contentStyle = {
  backgroundColor: '#ffffff',
  padding: '40px',
  borderRadius: '16px',
  width: '90%',
  maxWidth: '400px',
  textAlign: 'center',
  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
};

const iconContainerStyle = (isSuccess) => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  backgroundColor: isSuccess ? '#e8f7f0' : '#ffebee',
  color: isSuccess ? '#2e7d32' : '#c62828',
  marginBottom: '20px',
});

const titleStyle = {
  margin: '0 0 10px 0',
  fontSize: '24px',
  color: '#1a1a1a',
  fontWeight: '700',
};

const messageStyle = {
  margin: '0 0 30px 0',
  color: '#666666',
  fontSize: '15px',
  lineHeight: '1.5',
};

const buttonStyle = (isSuccess) => ({
  backgroundColor: isSuccess ? '#f26522' : '#333333',
  color: '#ffffff',
  border: 'none',
  padding: '14px 30px',
  borderRadius: '8px',
  fontSize: '15px',
  fontWeight: '600',
  cursor: 'pointer',
  width: '100%',
  transition: 'background-color 0.2s',
});

export default FormModal;
