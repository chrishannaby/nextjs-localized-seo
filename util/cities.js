import cities from "./cities.json";

function normalize(thing) {
  return thing.toLowerCase().replace(/ /g, "-").replace(/,/g, "");
}

function createPath({ city, state }) {
  if (!(city && state)) return null;
  return `/${normalize(state)}/${normalize(city)}`;
}

function getCity({ state, city }) {
  const path = createPath({ state, city });
  return cities.find((c) => c.path === path);
}

function getTopCities(num = 5) {
  if (num > cities.length) {
    num = cities.length;
  }
  return cities.sort((a, b) => a.rank - b.rank).slice(0, num);
}

export { getCity, getTopCities };
