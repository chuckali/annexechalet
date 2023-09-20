// Function to create modals for each image
function createModals() {
  const imageItems = document.querySelectorAll('.image-item');
  imageItems.forEach((item, index) => {
      const imageSrc = item.querySelector('img').src;
      const modalId = `modal${index + 1}`;

      const modal = document.createElement('div');
      modal.className = 'modal fade';
      modal.id = modalId;

      const modalDialog = document.createElement('div');
      modalDialog.className = 'modal-dialog';

      const modalContent = document.createElement('div');
      modalContent.className = 'modal-content';

      const modalBody = document.createElement('div');
      modalBody.className = 'modal-body';

      const modalImage = document.createElement('img');
      modalImage.src = imageSrc;
      modalImage.alt = `Image ${index + 1}`;

      modalBody.appendChild(modalImage);
      modalContent.appendChild(modalBody);
      modalDialog.appendChild(modalContent);
      modal.appendChild(modalDialog);

      document.body.appendChild(modal);
  });
}

// Call the function to create modals when the DOM is ready
document.addEventListener('DOMContentLoaded', createModals);
