import SharedPageLayout from "./layouts/SharedPageLayout";
import Banner from "./components/Banner/Banner";
import Products from "./components/Product_pagination/Products";
import InformativeBanners from "./components/InformativeBanner/InformativeBanners";

export default function Home() {
  return (
    <SharedPageLayout showTopFrame={true} banner={<Banner />}>
      <InformativeBanners />
      <div className="flex flex-col items-center w-full mt-16">
        <h2 className="text-3xl font-bold mb-8 mt-8 uppercase pb-3 w-full text-center">
          PRODUTOS EM DESTAQUE
        </h2>
        <Products />
      </div>
    </SharedPageLayout>
  );
}
