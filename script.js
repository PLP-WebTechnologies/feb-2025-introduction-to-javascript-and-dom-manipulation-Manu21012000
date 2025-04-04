function changeContent() {
  const text = document.getElementById('intro-text');
  text.textContent = "The content and style have been changed!";
  text.classList.toggle('highlight');
}

function toggleBox() {
  const container = document.getElementById('box-container');
  const existingBox = document.getElementById('magic-box');

  if (existingBox) {
    container.removeChild(existingBox);
  } else {
    const box = document.createElement('div');
    box.id = 'magic-box';
    box.style.width = '100px';
    box.style.height = '100px';
    box.style.backgroundColor = 'coral';
    box.style.marginTop = '10px';
    container.appendChild(box);
  }
}
