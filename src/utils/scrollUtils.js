/**
 * Scroll utility functions to prevent unwanted auto-scrolling
 */

/**
 * Prevents automatic scroll to top on route changes
 */
export const preventAutoScroll = () => {
  // Disable browser's default scroll restoration
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual';
  }
};

/**
 * Smooth scroll to top with mobile-friendly behavior
 */
export const scrollToTop = (smooth = true) => {
  if (smooth) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  } else {
    window.scrollTo(0, 0);
  }
};

/**
 * Scroll to element with mobile-friendly behavior
 */
export const scrollToElement = (elementId, offset = 0) => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

/**
 * Prevents scroll on mobile when menu is open
 */
export const disableBodyScroll = () => {
  document.body.style.overflow = 'hidden';
  document.body.style.position = 'fixed';
  document.body.style.width = '100%';
};

/**
 * Enables scroll on mobile when menu is closed
 */
export const enableBodyScroll = () => {
  document.body.style.overflow = '';
  document.body.style.position = '';
  document.body.style.width = '';
};
