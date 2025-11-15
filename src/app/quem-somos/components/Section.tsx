import React from 'react';

export default function Section({
  title,
  children,
  className = '',
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`w-full ${className}`}
      data-name={`section-${title.replace(/\s+/g, '-').toLowerCase()}`}
    >
      <h2 className="text-xl phone:text-2xl font-semibold mb-4">{title}</h2>
      <div className="text-base text-black/80">{children}</div>
    </section>
  );
}
