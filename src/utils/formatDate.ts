export const formatDate = (dateString: string) => {
  const date: any = new Date(dateString);
  const now: any = new Date();
  const diffMs = now - date;
  const diffHours = diffMs / (1000 * 60 * 60);

  const pad = (number: number) => (number < 10 ? `0${number}` : number);

  if (diffHours < 24) {
    // Format as HH:mm
    const hours = pad(date.getHours());
    const minutes = pad(date.getMinutes());
    return `${hours}:${minutes}`;
  } else {
    // Format as DD/MM/YYYY HH:mm
    const day = pad(date.getDate());
    const month = pad(date.getMonth() + 1); // Months are zero-indexed
    const year = date.getFullYear();
    const hours = pad(date.getHours());
    const minutes = pad(date.getMinutes());
    return `${day}/${month}/${year} ${hours}:${minutes}`;
  }
};

// Example usage
const date1 = "2023-05-04T14:21:00";
const date2 = "2023-05-03T16:43:00";

console.log(formatDate(date1)); // Outputs: 14:21 (if within 24 hours)
console.log(formatDate(date2)); // Outputs: 05/05/2023 16:43 (if more than 24 hours)
