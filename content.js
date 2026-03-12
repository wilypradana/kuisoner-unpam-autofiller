function fillKuesioner() {
  const radioButtons = document.querySelectorAll('input[type="radio"][value="1"]');
  
  if (radioButtons.length > 0) {
    radioButtons.forEach(radio => {
      if (!radio.checked) {
        radio.click();
      }
    });
    console.log(`${radioButtons.length} jawaban otomatis diisi ke 'Ya'.`);
  }
}

window.addEventListener('load', fillKuesioner);

const observer = new MutationObserver(() => {
  fillKuesioner();
});

observer.observe(document.body, { childList: true, subtree: true });