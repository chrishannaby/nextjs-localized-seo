const fs = require("fs");

const raw = fs.readFileSync("cities.json");
const cities = JSON.parse(raw);

function normalize(thing) {
  return thing.toLowerCase().replace(/ /g, "-").replace(/,/g, "");
}

const newCities = cities.map((c) => {
  const path = `/${normalize(c.state)}/${normalize(c.city)}`;
  return {
    city: c.city,
    state: c.state,
    path,
    rank: c.rank,
    lat: c.latitude,
    long: c.longitude,
  };
});

fs.writeFileSync("new_cities.json", JSON.stringify(newCities));
