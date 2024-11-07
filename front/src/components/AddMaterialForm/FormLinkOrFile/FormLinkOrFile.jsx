import './FormLinkOrFile.style.scss';
import { useState } from 'react';

export const FormLinkOrFile = () => {
  const [inputType, setInputType] = useState(null);

  const handleTypeSelect = (type) => {
    setInputType(type);
  };

  return (
    <div className="add-material__form__link-or-file">
        <h1 className='add-material__form__link-or-file__title'>Вставьте ссылку или прикрепите файл</h1>
        <div className="add-material__form__link-or-file__options">
            <div 
                className={`add-material__form__link-or-file__option ${inputType === 'link' ? 'active' : ''}`} 
                onClick={() => handleTypeSelect('link')}
            >
                Ссылка
            </div>
            <div 
            className={`add-material__form__link-or-file__option ${inputType === 'file' ? 'active' : ''}`} 
            onClick={() => handleTypeSelect('file')}
            >
                Файл
            </div>
        </div>
        <div className="add-material__form__link-or-file__input">
            {inputType === 'link' && (
            <div className="add-material__form__link-or-file__link-input">
                <input type="text" id="linkInput" placeholder="https://example.com" />
            </div>
            )}
            {inputType === 'file' && (
            <div className="add-material__form__link-or-file__file-input">
                <input type="file" id="fileInput" />
            </div>
            )}
        </div>
    </div>
  )
}
