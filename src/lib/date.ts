/* 
Functions to format dates
*/

// Turns dates with ISOString format to a Date type
export const parseISOtoDate = (isoDate: string) => {
  const [year, month, day] = isoDate.split("-").map((i) => Number(i));
  const date = new Date(year, month - 1, day);
  return date;
}

// Turns date into 'day month'. E.g. 20 Feb
export const formatDate = (date: Date) => {
  return date.toLocaleDateString('en-US', {day: 'numeric', month: 'short'})
}
