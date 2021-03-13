
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];

  if (!matrix || matrix == 0) {
      return result;
  }

  for (let i = 0; i < matrix.length; i++) {
      if ((i + 1) % 2 == 0) {
          matrix[i].reverse().forEach( item => result.push(item) );
      } else {
          matrix[i].forEach( item => result.push(item) );
      }
  }

  return result;
}
