document.querySelectorAll('[data-copy-link]').forEach(button => {
  button.addEventListener('click', async () => {
    const status = document.querySelector('.share-status');
    const url = button.dataset.copyLink;
    try {
      if (!navigator.clipboard || !window.isSecureContext) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(url);
      status.textContent = 'Article link copied.';
    } catch (_) {
      status.textContent = 'Copy this link: ' + url;
    }
  });
});
