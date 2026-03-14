
function togglePaymentFields() {
      const method = document.getElementById('paymentMethod').value;
      const cardFields = document.getElementById('cardFields');
      const upiField = document.getElementById('upiField');
      const codField = document.getElementById('codField');

     
      cardFields.classList.add('hidden');
      upiField.classList.add('hidden');
      codField.classList.add('hidden');

    
      if (method === 'card') {
        cardFields.classList.remove('hidden');
      } else if (method === 'upi') {
        upiField.classList.remove('hidden');
      } else if (method === 'cod') {
        codField.classList.remove('hidden');
      }
    }
   function pay(amount) {
  window.open(`payment.html?amount=${amount}`, '_blank');
}

    const currentIndexes = {
    haldi: 0,
    'haldi-plus': 0,
  };

  function changeImage(packageId, direction) {
    const carousel = document.getElementById('carousel-' + packageId);
    const images = carousel.querySelectorAll('img');
    currentIndexes[packageId] += direction;

    if (currentIndexes[packageId] < 0) {
      currentIndexes[packageId] = images.length - 1;
    } else if (currentIndexes[packageId] >= images.length) {
      currentIndexes[packageId] = 0;
    }

    images.forEach((img, idx) => {
      img.classList.toggle('active', idx === currentIndexes[packageId]);
    });
  }