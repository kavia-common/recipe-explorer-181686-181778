(function () {
  // Basic utility for logging interactions
  function log(action, details) {
    try {
      console.log('[UI]', action, details || '');
    } catch (e) {}
  }

  // Tap ripple (optional minor enhancement)
  function addButtonFeedback(el) {
    if (!el) return;
    el.addEventListener('mousedown', () => el.style.opacity = '0.9');
    el.addEventListener('mouseup', () => el.style.opacity = '');
    el.addEventListener('mouseleave', () => el.style.opacity = '');
    el.addEventListener('touchstart', () => el.style.opacity = '0.9');
    el.addEventListener('touchend', () => el.style.opacity = '');
  }

  // Expose to global
  window.UIUtils = { log, addButtonFeedback };
})();
