import cities from "../cities.json";
import { createPath } from "../util/cities";

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  if (!(slug && slug.length === 2)) {
    return {
      notFound: true,
    };
  }
  const path = createPath(slug);
  console.log(path);
  const city = cities.find((c) => c.path === path);
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
  return <h1 className="text-3xl font-bold underline">Hello {city.city}!</h1>;
}
