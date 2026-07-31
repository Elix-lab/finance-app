
export const parseISOtoDate = (isoDate: string) => {
  const [year, month, day] = isoDate.split("-").map((i) => Number(i));
  const date = new Date(year, month - 1, day);
  return date;
}

export const formatDate = (date: Date) => {
  return date.toLocaleDateString('en-US', {day: 'numeric', month: 'short'})
}
