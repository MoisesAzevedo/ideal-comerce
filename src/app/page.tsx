import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Products from "./components/Product_pagination/Products";
import InformativeBanners from "./components/InformativeBanners";

import FooterMenus from "./components/FooterMenus";

export default function Home() {
  return (
    <main>
      <Header />
      <Banner />
      <InformativeBanners />
      <Products />
      <FooterMenus />
    </main>
  );
}
