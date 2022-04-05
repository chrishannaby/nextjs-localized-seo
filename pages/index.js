import ProductDetails from "../components/ProductDetails";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <>
      <NextSeo
        title={`Basic Tee 6-Pack`}
        description={`The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.`}
      />
      <ProductDetails />
    </>
  );
}
