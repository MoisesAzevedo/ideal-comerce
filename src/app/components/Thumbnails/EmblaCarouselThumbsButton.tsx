import React from 'react';

type PropType = {
  selected: boolean;
  index: number;
  onClick: () => void;
  image: string;
  'data-name'?: string;
}

export const Thumb: React.FC<PropType> = (props) => {
  const { selected, index, onClick, image, 'data-name': dataName } = props;

  return (
    <div
      className={'embla-thumbs__slide'.concat(
        selected ? ' embla-thumbs__slide--selected' : ''
      )}
      data-name={dataName}
    >
      <button
        onClick={onClick}
        type="button"
        className="embla-thumbs__slide__button"
        aria-label={`Ver imagem ${index + 1}`}
      >
        <img 
          src={image} 
          alt={`Miniatura ${index + 1}`}
          className="embla-thumbs__slide__img"
          loading="lazy"
        />
      </button>
    </div>
  );
};