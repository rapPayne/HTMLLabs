
document.addEventListener('DOMContentLoaded', () => {
  const dialog = document.getElementById('exampleDialog');
  const openDialogButton = document.getElementById('openDialog');
  const closeDialogButton = document.getElementById('closeDialog');

  openDialogButton.addEventListener('click', () => {
    dialog.showModal();
  });

  closeDialogButton.addEventListener('click', () => {
    dialog.close();
  });

  const popoverButton = document.getElementById('popoverButton');
  const popoverContent = document.getElementById('popoverContent');

  popoverButton.addEventListener('click', () => {
    if (popoverContent.style.display === 'none' || popoverContent.style.display === '') {
      popoverContent.style.display = 'block';
      const rect = popoverButton.getBoundingClientRect();
      popoverContent.style.top = `${rect.bottom + window.scrollY}px`;
      popoverContent.style.left = `${rect.left + window.scrollX}px`;
    } else {
      popoverContent.style.display = 'none';
    }
  });
});
