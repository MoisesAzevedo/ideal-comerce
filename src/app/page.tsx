import SharedPageLayout from "./layouts/SharedPageLayout";
import Banner from "./components/Banner/Banner";
import Products from "./components/Product_pagination/Products";
import InformativeBanners from "./components/InformativeBanner/InformativeBanners";

export default function Home() {
  return (
    <SharedPageLayout showTopFrame={true}>
      <Banner />
      <InformativeBanners />
      <Products />
    </SharedPageLayout>
  );
}
