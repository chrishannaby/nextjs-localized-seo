import ProductDetails from "../../components/ProductDetails";
import { getCity, getTopCities } from "../../util/cities";

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
  return <ProductDetails city={city} />;
}
