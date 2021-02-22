export const numberFormatter = (num: number, fixTo: number = 2) => {
  return (Math.round(num * 100) / 100).toFixed(fixTo);
}