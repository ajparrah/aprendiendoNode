/**
 * @param {String} word String to capitalize
 * @param {Number} mode Could be (1 or 2) - mode 1 returns just first letter
 * || mode 2 return all word capitalized
 * @returns {String}
 */
const capitalizeWord = (word, mode = 2) => {
  switch (mode) {
    case 1:
      return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
    case 2:
      return word.split(' ')
        .map((wordTo) => wordTo.charAt(0).toUpperCase() + wordTo.substring(1).toLowerCase())
        .join(' ');
    default:
      return word;
  }
}

module.exports = {
  capitalizeWord,
}
