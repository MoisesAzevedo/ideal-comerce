import { Frame } from "./components/topInformation/componente";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Products from "./components/Product_pagination/Products";
import InformativeBanners from "./components/InformativeBanner/InformativeBanners";
import FooterMenus from "./components/Footer/FooterMenusNew";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";

export default function Home() {
  return (
    <main data-name="page-root">
      <div data-name="frame-wrapper">
        <Frame />
      </div>
      <div data-name="header-wrapper">
        <Header />
      </div>
      <div data-name="banner-wrapper">
        <Banner />
      </div>
      <div data-name="informative-wrapper">
        <InformativeBanners />
      </div>
      <div data-name="products-wrapper">
        <Products />
      </div>
      <div data-name="footer-wrapper">
        <FooterMenus />
      </div>
      <div data-name="scroll-button-wrapper">
        <ScrollToTopButton />
      </div>
    </main>
  );
}
