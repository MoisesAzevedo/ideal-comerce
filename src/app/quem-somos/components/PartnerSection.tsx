import Image from 'next/image';
import React from 'react';
import styles from './PartnerSection.module.scss';

type PartnerSectionProps = {
  title?: string;
  imageSrc: string;
  imageAlt?: string;
  children: React.ReactNode;
};

export default function PartnerSection({ title, imageSrc, imageAlt = '', children }: PartnerSectionProps) {
  return (
    <div data-name="partner-section" className="w-full">
      {title && (
        <h3 data-name="partner-section-title" className="text-xl phone:text-2xl font-semibold mb-4">
          {title}
        </h3>
      )}

      <div data-name="partner-section-inner" className="flex flex-col tablet:flex-row items-start gap-6">
        <div data-name="partner-section-text" className="flex-1">
          {children}
        </div>

        <div data-name="partner-section-image" className="w-full tablet:w-56 md:w-64 lg:w-72 flex-shrink-0">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={400}
            height={400}
            className={styles.image}
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>
      </div>
    </div>
  );
}
