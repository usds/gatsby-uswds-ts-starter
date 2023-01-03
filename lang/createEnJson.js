const enUSExtractJSON = require(`./en-US-extract.json`);
const fs = require(`fs`);

const enJSON = {};

enJSON[`languages.es-MX`] = `ES`;
enJSON[`languages.en-US`] = `EN`;

for (const [key, value] of Object.entries(enUSExtractJSON)) {
  enJSON[key] = value.defaultMessage;
}

console.log(enJSON);

fs.writeFile(`lang/en-US.json`, JSON.stringify(enJSON), (error) => {
  if (error) throw error;
});
