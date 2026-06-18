import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

const ImagePreviewModal = ({ isOpen, onClose, imageSrc, title }) => {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen || !imageSrc) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="preview-modal-overlay" onClick={onClose}>
          <motion.div 
            className="preview-modal-content"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="preview-modal-header">
              <h3 className="preview-modal-title">{title || "Image Preview"}</h3>
              <button className="preview-modal-close" onClick={onClose} aria-label="Close preview">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            
            <div className="preview-modal-body">
              <img src={imageSrc} alt={title || "Preview"} className="preview-modal-image" />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ImagePreviewModal;
