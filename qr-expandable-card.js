function expandQR(imageSrc = null) {
  const qrExpanded = document.getElementById('qrExpanded');
  const qrModal = document.getElementById('qrModal');
  if (imageSrc) {
    // Si se pasa una imagen (ej. qr_syrax_prom.jpg)
    qrExpanded.src = imageSrc;
  } else {
    // Si no se pasa imagen, genera el QR con la URL del sitio
    const qrURL = 'https://k3i5y.github.io/English-Week/';
    const qrImage = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(qrURL)}`;
    qrExpanded.src = qrImage;
  }
  qrModal.style.display = 'flex';
}
function closeQR() {
  document.getElementById('qrModal').style.display = 'none';
}
