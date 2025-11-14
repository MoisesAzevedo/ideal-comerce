import type { Metadata } from 'next';
import AboutHero from './components/AboutHero';
import Section from './components/Section';
import TeamCard from './components/TeamCard';
import type { TeamMember } from './types';
import FooterMenus from '../../components/Footer/FooterMenusNew';
import Header from '../../components/Header/Header';

export const metadata: Metadata = {
  title: 'Quem Somos | Ideal E-commerce',
  description: 'Conheça a equipe e a missão da Ideal.'
};

const team: TeamMember[] = [
  { id: 1, name: 'Guilherme Silva', role: 'Fundador & CEO', avatar: '/img/team/placeholder-1.jpg' }
];

export default function QuemSomosPage() {
  return (
    <main data-name="quem-somos-page" className="font-sans">
         <div data-name="header-wrapper">
           <Header />
          </div>
      <div className="w-full bg-white">
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

          <Section title="Equipe" className="mt-8">
            <div className="grid grid-cols-1 phone:grid-cols-2 md:grid-cols-3 gap-4">
              {team.map((member) => (
                <TeamCard key={member.id} member={member} />
              ))}
            </div>
          </Section>
        </div>
      </div>
   <FooterMenus />
  
    </main>
  );
}
