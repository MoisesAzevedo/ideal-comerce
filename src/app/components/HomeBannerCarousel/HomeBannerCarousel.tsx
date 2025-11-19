'use client';

import React, { useCallback, useEffect, useState } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import Fade from 'embla-carousel-fade'
import AutoPlay from 'embla-carousel-autoplay'
import Image from 'next/image'
import { getAssetPath } from '@/utils/paths'
import styles from './HomeBannerCarousel.module.scss'

type PropType = {
  images: string[]
  desktopImages?: string[]
  options?: EmblaOptionsType
  autoplayDelay?: number
}

// Hook para detectar se é tablet ou desktop
const useIsTabletOrLarger = () => {
  const [isTabletOrLarger, setIsTabletOrLarger] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsTabletOrLarger(window.innerWidth >= 768) // 768px = breakpoint para tablet
    }

    // Verificar no mount
    checkScreenSize()

    // Adicionar listener para resize
    window.addEventListener('resize', checkScreenSize)
    
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  return isTabletOrLarger
}

const HomeBannerCarousel: React.FC<PropType> = (props) => {
  const { images, desktopImages, options = { loop: true }, autoplayDelay = 4000 } = props
  const [selectedIndex, setSelectedIndex] = useState(0)
  const isTabletOrLarger = useIsTabletOrLarger()
  
  // Sempre usar `desktopImages` (images removido da decisão conforme solicitado)
  // Garantir fallback para array vazio para evitar `undefined` em `map`
  const currentImages = desktopImages ?? []
  
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Fade(),
    AutoPlay({ delay: autoplayDelay, stopOnInteraction: false })
  ])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi, setSelectedIndex])

  const onPrevClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
  }, [emblaApi])

  const onNextClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
  }, [emblaApi])

  const onDotClick = useCallback((index: number) => {
    if (!emblaApi) return
    emblaApi.scrollTo(index)
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect).on('reInit', onSelect)
  }, [emblaApi, onSelect])

  // Reinicializar carousel quando as imagens mudarem
  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit()
    }
  }, [currentImages, emblaApi])

  return (
    <div className={styles.embla} data-name="home-banner-carousel">
      <div className={styles.emblaViewport} ref={emblaRef}>
        <div className={styles.emblaContainer}>
          {currentImages.map((image, index) => (
            <div className={styles.emblaSlide} key={index}>
                  <div className={styles.emblaSlideInner}>
                    {/* Usar Image com `fill` e deixar o pai controlar a altura via `aspect-ratio` */}
                    <Image
                      src={getAssetPath(image)}
                      alt={`Banner ${index + 1}`}
                      fill
                      className={styles.emblaSlideImg}
                      priority={index === 0}
                      sizes="(max-width: 480px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
                      quality={90}
                    />
                  </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className={styles.emblaControls}>
        {/* Previous Button */}
        <button
          className={`${styles.emblaButton} ${styles.emblaPrev}`}
          onClick={onPrevClick}
          aria-label="Banner anterior"
          data-name="banner-prev-button"
        >
          <svg
            className={styles.emblaButtonSvg}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15,18 9,12 15,6"></polyline>
          </svg>
        </button>

        {/* Next Button */}
        <button
          className={`${styles.emblaButton} ${styles.emblaNext}`}
          onClick={onNextClick}
          aria-label="Próximo banner"
          data-name="banner-next-button"
        >
          <svg
            className={styles.emblaButtonSvg}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9,18 15,12 9,6"></polyline>
          </svg>
        </button>
      </div>

      {/* Dots Navigation */}
      <div className={styles.emblaDots}>
        {currentImages.map((_, index) => (
          <button
            key={index}
            className={`${styles.emblaDot} ${
              index === selectedIndex ? styles.emblaDotSelected : ''
            }`}
            onClick={() => onDotClick(index)}
            aria-label={`Ir para banner ${index + 1}`}
            data-name={`banner-dot-${index}`}
          />
        ))}
      </div>
    </div>
  )
}

export default HomeBannerCarousel