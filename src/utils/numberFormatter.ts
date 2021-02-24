export const numberFormatter = (num: number, fixTo: number = 1) => {
  return (Math.round(num * 100) / 100).toFixed(fixTo);
};
