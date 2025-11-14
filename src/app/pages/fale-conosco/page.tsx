import type { Metadata } from 'next';
import Header from '../../components/Header/Header';
import FooterMenus from '../../components/Footer/FooterMenusNew';
import FaleConosco from './components/FaleConosco';

export const metadata: Metadata = {
  title: 'Fale Conosco | Ideal E-commerce',
  description: 'Entre em contato com a Ideal. Estamos prontos para ajudar.',
};

export default function FaleConoscoPage() {
  return (
    <main data-name="page-faleconosco" className="font-sans">
      <div data-name="header-wrapper">
        <Header />
      </div>

      <section className="w-full bg-white">
        <div className="mx-auto max-w-container px-4 phone:px-6 lg:px-8 py-12 phone:py-16">
          <FaleConosco />
        </div>
      </section>

      <div data-name="footer-wrapper">
        <FooterMenus />
      </div>
    </main>
  );
}
