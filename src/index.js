
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (matrix === undefined) return [];
    if (matrix.length === 0) return [];
    let sorted = [];
    for (let i = 0; i < matrix.length; i++) {
        if (i & 1) {
          for (let j = matrix[i].length - 1; j >= 0 ; j--) {
            sorted.push(matrix[i][j]);
          }
        }
        else {
          for (let j = 0; j < matrix[i].length; j++) {
            sorted.push(matrix[i][j]);
          }
        }
        
    }
    return sorted;
}
