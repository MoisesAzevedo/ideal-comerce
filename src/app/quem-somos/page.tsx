import type { Metadata } from 'next';
import AboutHero from './components/AboutHero';
import Section from './components/Section';
import TeamCard from './components/TeamCard';
import type { TeamMember } from './types';
import SharedPageLayout from '../layouts/SharedPageLayout';
import { Breadcrumb } from '../components';

export const metadata: Metadata = {
  title: 'Quem Somos | Ideal E-commerce',
  description: 'Conheça a equipe e a missão da Ideal.'
};

const team: TeamMember[] = [
  { id: 1, name: 'Guilherme Silva', role: 'Fundador & CEO', avatar: '/img/team/placeholder-1.jpg' }
];

export default function QuemSomosPage() {
  const breadcrumbItems = [
    { label: 'Quem Somos', href: '/quem-somos' }
  ];

  const breadcrumbComponent = (
    <Breadcrumb items={breadcrumbItems} className="max-w-container mx-auto" />
  );

  return (
    <SharedPageLayout className="font-sans" breadcrumb={breadcrumbComponent}>
      <section className="w-full bg-white">
        <div className="mx-auto max-w-container px-4 phone:px-6 lg:px-8 py-12 phone:py-16">
          <AboutHero
            title="Quem somos?"
            subtitle="Somos uma equipe apaixonada por criar equipamentos e uniformes de qualidade."
          />

          <Section title="Nossa missão" className="mt-8">
            <p className="text-base phone:text-lg text-black/80 leading-relaxed">
              Entregar produtos duráveis, com atendimento humano e preços justos. Trabalhamos todos os dias
              para melhorar a experiência de quem nos escolhe.
            </p>
          </Section>
        </div>
      </section>
    </SharedPageLayout>
  );
}
