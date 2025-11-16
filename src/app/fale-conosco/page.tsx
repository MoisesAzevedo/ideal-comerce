import type { Metadata } from 'next';
import SharedPageLayout from '../layouts/SharedPageLayout';
import FaleConosco from './FaleConosco';
import { Breadcrumb } from '../components';

export const metadata: Metadata = {
  title: 'Fale Conosco | Ideal E-commerce',
  description: 'Entre em contato com a Ideal. Estamos prontos para ajudar.',
};

export default function FaleConoscoPage() {
  const breadcrumbItems = [
    { label: 'Fale Conosco', href: '/fale-conosco' }
  ];

  const breadcrumbComponent = (
    <Breadcrumb items={breadcrumbItems} className="max-w-container mx-auto" />
  );

  return (
    <SharedPageLayout className="font-sans" breadcrumb={breadcrumbComponent}>
      <section className="w-full bg-white">
        <div className="mx-auto max-w-container px-4 phone:px-6 lg:px-8 py-12 phone:py-16">
          <FaleConosco />
        </div>
      </section>
    </SharedPageLayout>
  );
}
