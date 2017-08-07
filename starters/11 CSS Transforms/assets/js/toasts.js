document.addEventListener('DOMContentLoaded', () => {
  const toggle = () => t.classList.toggle('showToast');
  const t = document.getElementsByClassName('toast')[0];
  document.getElementById('go').addEventListener('click', toggle);
  const allCloseButtons = document.getElementsByClassName('close');
  for (const cb of allCloseButtons) {
    cb.addEventListener('click', toggle);
  }
});