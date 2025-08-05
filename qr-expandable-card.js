function expandQR(imageSrc = null) {
  const qrExpanded = document.getElementById('qrExpanded');
  const qrModal = document.getElementById('qrModal');

  if (imageSrc) {
    qrExpanded.src = imageSrc;
  } else {
    const qrURL = 'https://k3i5y.github.io/English-Week/';
    qrExpanded.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(qrURL)}`;
  }

  qrModal.style.display = 'flex';
}

function closeQR() {
  document.getElementById('qrModal').style.display = 'none';
}

