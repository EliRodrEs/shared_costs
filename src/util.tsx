
export function formatDate(date: Date): string {
  const isValidDate = (value: any): value is Date =>
    value instanceof Date && !isNaN(value.getTime());

  if (!isValidDate(date)) {
    return "-";
  }

  try {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString();
    return `${day}/${month}/${year}`;
  } catch (error) {
    console.error("Error occurred while formatting date:", error);
    return "-";
  }
}

export function generateUniqueId(): number {
  return Date.now() + Math.random();
}
