function expandQR(imageSrc) {
  document.getElementById('qrExpanded').src = imageSrc;
  document.getElementById('qrModal').style.display = 'flex';
}

function closeQR() {
  document.getElementById('qrModal').style.display = 'none';
}
