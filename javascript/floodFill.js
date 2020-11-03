var floodFill = function (image, sr, sc, newColor) {
  if (image[sr][sc] === newColor) {
    return image;
  }

  let oldColor = image[sr][sc];

  const changeColor = (sr, sc) => {
    //change color of current if equals old color
    if (image[sr][sc] === oldColor) {
      image[sr][sc] = newColor;
    }
    //check left of coordinate
    if (sc >= 1 && image[sr][sc - 1] === oldColor) {
      image[sr][sc - 1] = newColor;
      changeColor(sr, sc - 1);
    }
    //check below of coordinate
    if (sr < image.length - 1 && image[sr + 1][sc] === oldColor) {
      image[sr + 1][sc] = newColor;
      changeColor(sr + 1, sc);
    }
    //check right of coordinate
    if (sc < image[sr].length - 1 && image[sr][sc + 1] === oldColor) {
      image[sr][sc + 1] = newColor;
      changeColor(sr, sc + 1);
    }
    //check above coordinate
    if (sr >= 1 && image[sr - 1][sc] === oldColor) {
      image[sr - 1][sc] = newColor;
      changeColor(sr - 1, sc);
    }
  };
  changeColor(sr, sc);

  return image;
};



var floodFillII = function (image, sr, sc, newColor) {
  if(image[sr][sc] === newColor){
    return image
  }
  let oldColor = image[sr][sc];

  const changeColor = (image, sr, sc, newColor) => {
    if(image[sr][sc] === oldColor){
      image[sr][sc] = newColor
    }
    //check left of coordinate
    if (image[sr][sc - 1] !== undefined && image[sr][sc - 1] === oldColor) {
      image[sr][sc - 1] = newColor;
      changeColor(image, sr, sc - 1, newColor);
    }
    //check above of coordinate
    if (image[sr - 1] !== undefined && image[sr - 1][sc] === oldColor) {
      image[sr - 1][sc] = newColor;
      changeColor(image, sr - 1, sc, newColor);
    }
    //check right of coordinate
    if (image[sr][sc + 1] !== undefined && image[sr][sc + 1] === oldColor) {
      image[sr][sc + 1] = newColor;
      changeColor(image, sr, sc + 1, newColor);
    }
    //check below coordinate
    if (image[sr + 1] !== undefined && image[sr + 1][sc] === oldColor) {
      image[sr + 1][sc] = newColor;
      changeColor(image, sr + 1, sc, newColor);
    }
  };
  changeColor(image, sr, sc, newColor);
  return image;
};

console.log(
  floodFill(
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ],
    1,
    1,
    2
  )
);
module.exports = { floodFill };
