const rp = require('request-promise');
const cheerio = require('cheerio');
const { first } = require('cheerio/lib/api/traversing');
// const axios = require('axios');

const url =
  'https://en.wikipedia.org/wiki/List_of_countries_by_population_(United_Nations)';

// module.exports =
const getScrap = () =>
  rp(url).then((html) => {
    const $ = cheerio.load('html.body');
    const table = $('.wikitable', html);
    // table.find('tbody tr').each((i, element) => {
    // turning element into collection
    // const $element = $(element);
    // console.log($element.text());
    // });
    const states = [];
    table.find('tbody tr').each((i, element) => {
      const $element = $(element);
      const state = {};
      state.name = $element.find('td span a').text().trim();

      state.PopulationChange18_19 = $element.find('td:last').text().trim();
      state.imagesrc = $element.find('td span img').attr('src');
      // const $image = $element.find('td span img');
      // state for information in object
      states.push(state);
      // console.log(states);
      // return states;
    });
    // console.log(JSON.stringify(states));
    return states;
  });
module.exports = getScrap;
