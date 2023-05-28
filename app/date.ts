const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "short",
  day: "2-digit",
});

export function formatDateString(date: string) {
  return dateFormatter.format(new Date(date));
}
