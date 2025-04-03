export const toUpperCase = (str: string): string => str.toUpperCase();

export const getRandomInt = (count: number): number => Math.floor(Math.random() * count);

export const getRandomError = (qty: number = 2) => {
  const random = getRandomInt(qty);

  if (random === 1) {
    throw new Error('Error RANDOM');
  }
};
