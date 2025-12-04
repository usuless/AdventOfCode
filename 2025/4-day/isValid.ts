export const isValid = (
  x: number,
  y: number,
  width: number,
  height: number
) => {
  const isXValid = x >= 0 && x < width;

  const isYValid = y >= 0 && y < height;

  return isXValid && isYValid;
};
