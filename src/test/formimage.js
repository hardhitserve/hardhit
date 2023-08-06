import React, { useState } from 'react';

const ImageUpload = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
  };

  return (
    <div>
      <label htmlFor="image-upload">
        {image ? (
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <img src={image} alt="Uploaded" style={{ width: '200px', height: '200px' }} />
            <button
              style={{
                position: 'absolute',
                top: '0',
                right: '0',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
              }}
              onClick={handleRemoveImage}
            >
              X
            </button>
          </div>
        ) : (
          <div>
 <div class="image-container" id="image-container">
            <div class="plus-button">+</div></div>        
                <input
              id="image-upload"
              type="file"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={handleImageChange}
            />

    
          </div>
        )}
      </label>
    </div>
  );
};

export default ImageUpload;
