export const years = data => {
  const dateString = data;
  const dateObject = new Date(dateString);
  return dateObject.getFullYear();
};
