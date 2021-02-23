export const dateConverter = (day: string): string => {
  const date = new Date(day);
  const dayToDisplay =   ('0' + date.getDate()).slice(-2) + '/' + ('0' + (date.getMonth()+1)).slice(-2) + '/' + date.getFullYear();
  return dayToDisplay;
};
