export const random = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

/**
 * Get random Icon
 * @returns
 */
export const getRandomIcon = () => `assets/icon${random(1, 13)}.svg`;
