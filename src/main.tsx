import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Remove Bolt watermark and floating elements
const removeFloatingElements = () => {
  // Remove elements with specific positioning that match Bolt's watermark
  const selectors = [
    '[style*="position: fixed"][style*="bottom: 1rem"][style*="right: 1rem"]',
    '[style*="position: fixed"][style*="z-index: 2147483647"]',
    '.bolt-watermark',
    '[data-bolt-watermark]',
    'div[style*="position: fixed"][style*="bottom"][style*="right"]'
  ];
  
  selectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => {
      if (el.textContent?.includes('Made in Bolt') || 
          el.textContent?.includes('Bolt') ||
          el.innerHTML?.includes('bolt')) {
        el.remove();
      }
    });
  });
};

// Execute immediately
removeFloatingElements();

// Observe DOM changes to remove watermark if it appears later
const observer = new MutationObserver(() => {
  removeFloatingElements();
});

// Start observing when DOM is ready
if (document.body) {
  observer.observe(document.body, { 
    childList: true, 
    subtree: true,
    attributes: true,
    attributeFilter: ['style', 'class']
  });
} else {
  document.addEventListener('DOMContentLoaded', () => {
    observer.observe(document.body, { 
      childList: true, 
      subtree: true,
      attributes: true,
      attributeFilter: ['style', 'class']
    });
  });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
