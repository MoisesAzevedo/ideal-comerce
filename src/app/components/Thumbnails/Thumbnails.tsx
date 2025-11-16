'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import { Thumb } from './EmblaCarouselThumbsButton';
import styles from './Thumbnails.module.scss';

type PropType = {
  images: string[];
  options?: EmblaOptionsType;
  className?: string;
}

const Thumbnails: React.FC<PropType> = (props) => {
  const { images, options, className = '' } = props;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true
  });

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();

    emblaMainApi.on('select', onSelect).on('reInit', onSelect);
  }, [emblaMainApi, onSelect]);

  return (
    <div 
      className={`${styles.embla} ${className}`}
      data-name="thumbnails-carousel"
    >
      {/* Main Carousel */}
      <div className={styles.embla__viewport} ref={emblaMainRef} data-name="main-carousel-viewport">
        <div className={styles.embla__container} data-name="main-carousel-container">
          {images.map((image, index) => (
            <div className={styles.embla__slide} key={index} data-name={`main-slide-${index}`}>
              <img 
                src={image} 
                alt={`Produto ${index + 1}`}
                className={styles.embla__slide__img}
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className={styles['embla-thumbs']} data-name="thumbnails-section">
          <div className={styles['embla-thumbs__viewport']} ref={emblaThumbsRef} data-name="thumbs-carousel-viewport">
            <div className={styles['embla-thumbs__container']} data-name="thumbs-carousel-container">
              {images.map((image, index) => (
                <Thumb
                  key={index}
                  onClick={() => onThumbClick(index)}
                  selected={index === selectedIndex}
                  index={index}
                  image={image}
                  data-name={`thumb-${index}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Thumbnails;