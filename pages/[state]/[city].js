import ProductDetails from "../../components/ProductDetails";
import { getCity, getTopCities } from "../../util/cities.js";
import { NextSeo } from "next-seo";

export async function getStaticPaths() {
  const topCites = getTopCities();
  const paths = topCites.map((c) => {
    return {
      params: {
        state: c.state,
        city: c.city,
      },
    };
  });
  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const city = getCity(params);
  if (!city) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      city,
    },
  };
}

export default function Home({ city }) {
  return (
    <>
      <NextSeo
        title={`Basic Tee 6-Pack - ${city.city}, ${city.state}`}
        description={`The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered. Available in ${city.city}, ${city.state}}`}
      />
      <ProductDetails city={city} />
    </>
  );
}
