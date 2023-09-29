import React, { useState } from 'react';

const images = [
  'https://dagesico.pythonanywhere.com/static/img/loja/corte1.jpg',
  'https://dagesico.pythonanywhere.com/static/img/loja/corte2.jpg',  
  'https://dagesico.pythonanywhere.com/static/img/loja/corte3.jpg',
  'https://dagesico.pythonanywhere.com/static/img/loja/corte4.jpg',
  'https://dagesico.pythonanywhere.com/static/img/loja/corte5.jpg',
  // Adicione mais imagens conforme necessário
];

const Galeria: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openImage = (imagePath: string) => {
    setSelectedImage(imagePath);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="image-gallery-container">
      <div className="image-thumbnails">
        {images.map((image, index) => (
          <div key={index} className="thumbnail" onClick={() => openImage(image)}>
            <img src={image} alt={`Thumbnail ${index}`} />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="image-modal">
          <div className="modal-content">
            <span className="close" onClick={closeImage}>&times;</span>
            <img src={selectedImage} alt="Selected Image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Galeria;
