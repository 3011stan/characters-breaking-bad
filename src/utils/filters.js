const { getAllEpisodes } = require("./useBreakingBadApi");

const containCharacter = (allCharacters, char, nickname) => {
  let exist = false;
  allCharacters.forEach((participant) => {
    if(participant.includes(char) || participant.includes(nickname)) {
      exist = true;
    }
  });
  return exist;
}

const filterEpisodesByCharacters = async (character, nickname) => {
  const allEpisodes = await getAllEpisodes();
  const filteredEpisodes = [];
  allEpisodes.forEach((ep) => {
    const {title, episode, season} = ep;
    if (containCharacter(ep.characters, character, nickname)) {
      filteredEpisodes.push({title, season, episode});
    }
  });

  return filteredEpisodes;
}

module.exports = {
  filterEpisodesByCharacters,
};