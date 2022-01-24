const { getAllEpisodes } = require("./useBreakingBadApi");

const filterEpisodesByCharacters = async (character) => {
  const allEpisodes = await getAllEpisodes();
  const filteredEpisodes = [];

  allEpisodes.forEach((ep) => {
    const {title, episode, season} = ep;
    if (ep.characters.indexOf(character) > -1) {
      filteredEpisodes.push({title, season, episode});
    }
  });

  return filteredEpisodes;
}

module.exports = {
  filterEpisodesByCharacters,
};