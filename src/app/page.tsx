import { Frame } from "./components/topInformation/componente";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Products from "./components/Product_pagination/Products";
import InformativeBanners from "./components/InformativeBanner/InformativeBanners";
import FooterMenus from "./components/Footer/FooterMenus";

export default function Home() {
  return (
    <main>
      <Frame />
      <Header />
      <Banner />
      <InformativeBanners />
      <Products />
      <FooterMenus />
    </main>
  );
}
