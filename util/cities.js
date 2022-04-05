function normalize(thing) {
  return thing.toLowerCase().replace(/ /g, "-").replace(/,/g, "");
}

function createPath(slug) {
  return `/${normalize(slug[0])}/${normalize(slug[1])}`;
}

export { createPath };
