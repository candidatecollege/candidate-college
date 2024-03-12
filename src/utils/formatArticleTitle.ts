// Used to trim article titles that exceed 9 words
export const formatArticleTitle = (data: any) => {
  const title = data.split(" ");
  const truncateTitle = title.length > 9 ? `${title.slice(0, 9).join(" ")} ...` : data;
  
  return truncateTitle;
};