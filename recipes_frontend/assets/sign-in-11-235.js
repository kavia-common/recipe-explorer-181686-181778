(function () {
  const btn = document.getElementById('sign-in-btn');
  if (btn && window.UIUtils) {
    window.UIUtils.addButtonFeedback(btn);
    btn.addEventListener('click', function () {
      window.UIUtils.log('click', 'Sign In button pressed (screen 11:235)');
      // Placeholder: actual sign-in handling would go here.
      alert('Sign In clicked');
    });
  }
})();
